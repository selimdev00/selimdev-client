#!/usr/bin/env node
import { spawn } from "node:child_process";
import { mkdir, stat, writeFile } from "node:fs/promises";
import net from "node:net";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, "..");
const outDir = path.join(repoRoot, "public", "cv");
const PORT = 4322;
const BASE = `http://127.0.0.1:${PORT}`;
const SIZE_LIMIT = 500 * 1024;

const TARGETS = [
  { locale: "en", theme: "light", file: "light.pdf" },
  { locale: "en", theme: "dark", file: "dark.pdf" },
  { locale: "ru", theme: "light", file: "light.ru.pdf" },
  { locale: "ru", theme: "dark", file: "dark.ru.pdf" },
];

function run(cmd, args, opts = {}) {
  return new Promise((resolve, reject) => {
    const child = spawn(cmd, args, { stdio: "inherit", cwd: repoRoot, ...opts });
    child.on("exit", (code) => {
      if (code === 0) resolve();
      else reject(new Error(`${cmd} ${args.join(" ")} exited with ${code}`));
    });
    child.on("error", reject);
  });
}

function spawnPreview() {
  return spawn(
    "npx",
    ["astro", "preview", "--port", String(PORT), "--host", "127.0.0.1"],
    { cwd: repoRoot, stdio: ["ignore", "pipe", "pipe"] },
  );
}

function waitForPort(port, timeoutMs = 30_000) {
  const deadline = Date.now() + timeoutMs;
  return new Promise((resolve, reject) => {
    const tryOnce = () => {
      const socket = net.connect(port, "127.0.0.1");
      socket.once("connect", () => {
        socket.end();
        resolve();
      });
      socket.once("error", () => {
        socket.destroy();
        if (Date.now() > deadline) {
          reject(new Error(`port ${port} did not open within ${timeoutMs}ms`));
        } else {
          setTimeout(tryOnce, 250);
        }
      });
    };
    tryOnce();
  });
}

async function ensureOutDir() {
  await mkdir(outDir, { recursive: true });
}

async function main() {
  console.log("[cv] building astro site");
  await run("npx", ["astro", "build"]);

  await ensureOutDir();

  console.log(`[cv] starting preview on :${PORT}`);
  const preview = spawnPreview();
  let previewClosed = false;
  preview.on("exit", () => {
    previewClosed = true;
  });
  preview.stdout?.on("data", (b) => process.stdout.write(`[preview] ${b}`));
  preview.stderr?.on("data", (b) => process.stderr.write(`[preview] ${b}`));

  const cleanup = async () => {
    if (!previewClosed && !preview.killed) {
      preview.kill("SIGINT");
    }
  };

  try {
    await waitForPort(PORT);

    const { default: puppeteer } = await import("puppeteer");
    const browser = await puppeteer.launch({
      headless: true,
      args: ["--no-sandbox"],
    });

    try {
      for (const target of TARGETS) {
        const url = `${BASE}/cv-print/${target.locale}/${target.theme}`;
        console.log(`[cv] rendering ${url}`);
        const page = await browser.newPage();
        await page.emulateMediaType("screen");
        await page.goto(url, { waitUntil: "networkidle0" });
        const pdf = await page.pdf({
          format: "A4",
          printBackground: true,
          preferCSSPageSize: true,
          margin: { top: 0, right: 0, bottom: 0, left: 0 },
        });
        await page.close();
        const outPath = path.join(outDir, target.file);
        await writeFile(outPath, pdf);
        const { size } = await stat(outPath);
        const kb = (size / 1024).toFixed(1);
        const overLimit = size > SIZE_LIMIT;
        console.log(
          `[cv] wrote ${path.relative(repoRoot, outPath)} (${kb} KB)${
            overLimit ? " -- OVER 500KB LIMIT" : ""
          }`,
        );
      }
    } finally {
      await browser.close();
    }

    let anyOver = false;
    for (const target of TARGETS) {
      const { size } = await stat(path.join(outDir, target.file));
      if (size > SIZE_LIMIT) anyOver = true;
    }
    if (anyOver) {
      throw new Error("one or more CV PDFs exceed the 500KB ceiling");
    }
  } finally {
    await cleanup();
  }

  console.log("[cv] done");
}

main().catch((err) => {
  console.error("[cv] failed:", err);
  process.exit(1);
});
