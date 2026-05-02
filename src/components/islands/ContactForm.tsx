import { useState } from "preact/hooks";

type Status = "idle" | "submitting" | "success" | "error";

interface Strings {
  name: string;
  email: string;
  message: string;
  submit: string;
  submitting: string;
  successTitle: string;
  successBody: string;
  errorGeneric: string;
  errorInvalidName: string;
  errorInvalidEmail: string;
  errorInvalidMessage: string;
  errorServer: string;
}

interface Props {
  locale: "en" | "ru";
  strings: Strings;
}

const inputBase =
  "w-full rounded-md border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-950 px-3 py-2.5 text-[14px] text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-600 focus:border-sky-700 dark:focus:border-sky-300 focus:outline-none transition-colors duration-200";

const labelBase =
  "text-[11px] font-semibold uppercase tracking-[0.14em] text-gray-500 dark:text-gray-500";

function mapErrorCode(code: string, s: Strings) {
  switch (code) {
    case "invalid_name":
      return s.errorInvalidName;
    case "invalid_email":
      return s.errorInvalidEmail;
    case "invalid_message":
      return s.errorInvalidMessage;
    case "server_misconfigured":
      return s.errorServer;
    default:
      return s.errorGeneric;
  }
}

export default function ContactForm({ locale, strings }: Props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [company, setCompany] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const onSubmit = async (e: Event) => {
    e.preventDefault();
    if (status === "submitting") return;

    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedMessage = message.trim();

    if (trimmedName.length < 1) {
      setStatus("error");
      setErrorMsg(strings.errorInvalidName);
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
      setStatus("error");
      setErrorMsg(strings.errorInvalidEmail);
      return;
    }
    if (trimmedMessage.length < 10) {
      setStatus("error");
      setErrorMsg(strings.errorInvalidMessage);
      return;
    }

    setStatus("submitting");
    setErrorMsg(null);

    try {
      const resp = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          message,
          _company: company,
          locale,
        }),
      });
      const data = (await resp.json().catch(() => ({}))) as {
        ok?: boolean;
        error?: string;
      };

      if (resp.ok && data.ok) {
        setStatus("success");
        setName("");
        setEmail("");
        setMessage("");
        return;
      }

      setStatus("error");
      setErrorMsg(mapErrorCode(data.error ?? "", strings));
    } catch {
      setStatus("error");
      setErrorMsg(strings.errorGeneric);
    }
  };

  if (status === "success") {
    return (
      <div class="rounded-md border border-sky-700/30 dark:border-sky-300/30 bg-sky-50/40 dark:bg-sky-300/5 px-5 py-6">
        <p class="text-[15px] font-semibold text-gray-900 dark:text-white">
          {strings.successTitle}
        </p>
        <p class="mt-1.5 text-[14px] text-gray-600 dark:text-gray-400 max-w-[58ch]">
          {strings.successBody}
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      class="flex flex-col gap-4 max-w-[520px]"
      noValidate
    >
      <div class="flex flex-col gap-1.5">
        <label class={labelBase} htmlFor="contact-name">
          {strings.name}
        </label>
        <input
          id="contact-name"
          type="text"
          name="name"
          autoComplete="name"
          required
          maxLength={120}
          value={name}
          onInput={(e) => setName((e.target as HTMLInputElement).value)}
          class={inputBase}
        />
      </div>

      <div class="flex flex-col gap-1.5">
        <label class={labelBase} htmlFor="contact-email">
          {strings.email}
        </label>
        <input
          id="contact-email"
          type="email"
          name="email"
          autoComplete="email"
          inputMode="email"
          required
          maxLength={200}
          value={email}
          onInput={(e) => setEmail((e.target as HTMLInputElement).value)}
          class={inputBase}
        />
      </div>

      <div class="flex flex-col gap-1.5">
        <label class={labelBase} htmlFor="contact-message">
          {strings.message}
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          minLength={10}
          maxLength={4000}
          rows={5}
          value={message}
          onInput={(e) => setMessage((e.target as HTMLTextAreaElement).value)}
          class={inputBase + " resize-y min-h-[120px]"}
        />
      </div>

      <input
        type="text"
        name="_company"
        tabIndex={-1}
        autoComplete="off"
        value={company}
        onInput={(e) => setCompany((e.target as HTMLInputElement).value)}
        aria-hidden="true"
        style="position:absolute;left:-9999px;width:1px;height:1px;opacity:0;"
      />

      <div class="mt-2 flex items-center gap-4">
        <button
          type="submit"
          disabled={status === "submitting"}
          class="inline-flex items-center gap-2 rounded-md border border-sky-700 dark:border-sky-300 px-4 py-2 text-[13px] font-semibold text-sky-700 dark:text-sky-300 hover:bg-sky-700 hover:text-white dark:hover:bg-sky-300 dark:hover:text-slate-950 transition-colors duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {status === "submitting" ? strings.submitting : strings.submit}
        </button>
        {status === "error" && errorMsg ? (
          <p
            class="text-[13px] text-gray-600 dark:text-gray-400"
            role="alert"
          >
            {errorMsg}
          </p>
        ) : null}
      </div>
    </form>
  );
}
