interface Env {
  RESEND_API_KEY: string;
  CONTACT_TO_EMAIL: string;
  CONTACT_FROM_EMAIL: string;
}

interface ContactBody {
  name?: string;
  email?: string;
  message?: string;
  _company?: string;
  locale?: string;
}

const json = (data: unknown, status = 200) =>
  new Response(JSON.stringify(data), {
    status,
    headers: { "content-type": "application/json; charset=utf-8" },
  });

const escapeHtml = (s: string) =>
  s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

export const onRequestPost: PagesFunction<Env> = async ({ request, env }) => {
  let body: ContactBody;
  try {
    body = (await request.json()) as ContactBody;
  } catch {
    return json({ error: "invalid_json" }, 400);
  }

  if (body._company && body._company.trim().length > 0) {
    return json({ ok: true });
  }

  const name = (body.name ?? "").trim();
  const email = (body.email ?? "").trim();
  const message = (body.message ?? "").trim();
  const locale = body.locale === "ru" ? "ru" : "en";

  if (name.length < 1 || name.length > 120) {
    return json({ error: "invalid_name" }, 400);
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 200) {
    return json({ error: "invalid_email" }, 400);
  }
  if (message.length < 10 || message.length > 4000) {
    return json({ error: "invalid_message" }, 400);
  }

  if (!env.RESEND_API_KEY || !env.CONTACT_TO_EMAIL || !env.CONTACT_FROM_EMAIL) {
    return json({ error: "server_misconfigured" }, 500);
  }

  const subject = `selim.services contact - ${name}`;
  const html = `
    <div style="font-family:Inter,system-ui,sans-serif;font-size:14px;line-height:1.6;color:#111;">
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> <a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></p>
      <p><strong>Locale:</strong> ${locale}</p>
      <hr style="border:none;border-top:1px solid #e5e7eb;margin:16px 0;" />
      <pre style="white-space:pre-wrap;font-family:inherit;margin:0;">${escapeHtml(message)}</pre>
    </div>
  `;

  const resp = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${env.RESEND_API_KEY}`,
    },
    body: JSON.stringify({
      from: env.CONTACT_FROM_EMAIL,
      to: [env.CONTACT_TO_EMAIL],
      reply_to: email,
      subject,
      html,
    }),
  });

  if (!resp.ok) {
    const errText = await resp.text().catch(() => "");
    console.error("resend_failure", resp.status, errText);
    return json({ error: "send_failed" }, 502);
  }

  return json({ ok: true });
};

export const onRequest: PagesFunction = async () =>
  new Response("Method Not Allowed", { status: 405 });
