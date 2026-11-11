import { useState } from "react";
import { Check } from "lucide-react";
import { sendForm } from "@/lib/forms";
import { site } from "@/lib/content";

export const fieldClass =
  "w-full border border-ink-line bg-ink px-4 py-3.5 text-ivory placeholder:text-ivory-dim focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold";

export function Field({ label, required, className = "", children }: { label: string; required?: boolean; className?: string; children: React.ReactNode }) {
  return (
    <label className={`block ${className}`}>
      <span className="mb-2 block text-sm text-ivory/80">
        {label}
        {required && <span className="text-gold"> *</span>}
      </span>
      {children}
    </label>
  );
}

type Props = { subject: string | ((data: FormData) => string); submitLabel: string; successMessage: string; children: React.ReactNode };

/** Wraps any form: spam trap, sending state, success and error messages. Everything goes to the CAWAP inbox. */
export function FormShell({ subject, submitLabel, successMessage, children }: Props) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");
    const result = await sendForm(form, typeof subject === "function" ? subject(new FormData(form)) : subject);
    if (result.ok) {
      form.reset();
      setStatus("sent");
    } else {
      setError(result.message);
      setStatus("error");
    }
  }

  if (status === "sent")
    return (
      <div className="flex items-start gap-4 border border-gold/50 bg-ink p-6" role="status">
        <Check className="mt-1 h-6 w-6 shrink-0 text-gold" />
        <div>
          <p className="font-display text-2xl text-ivory">Thank you.</p>
          <p className="mt-2 text-ivory/75">{successMessage}</p>
          <button type="button" onClick={() => setStatus("idle")} className="mt-4 text-sm uppercase tracking-[0.18em] text-gold-light hover:text-gold">
            Send another
          </button>
        </div>
      </div>
    );

  return (
    <form onSubmit={onSubmit} className="grid gap-5 md:grid-cols-2">
      <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      {children}
      <div className="md:col-span-2">
        <button type="submit" disabled={status === "sending"} className="bg-gold px-8 py-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-ink transition-colors hover:bg-gold-light disabled:opacity-60">
          {status === "sending" ? "Sending…" : submitLabel}
        </button>
        {status === "error" && (
          <p className="mt-4 text-sm text-carpet-glow" role="alert">
            {error} You can also email <a className="underline" href={`mailto:${site.contact.email}`}>{site.contact.email}</a>.
          </p>
        )}
      </div>
    </form>
  );
}
