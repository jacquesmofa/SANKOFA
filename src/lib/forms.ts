import { site } from "./content";

export type SendResult = { ok: boolean; message: string };

/**
 * Sends a website form to the CAWAP inbox (cawap2005@gmail.com) through Web3Forms.
 * The access key is public by design (it only allows sending TO that inbox).
 * Every form has its own subject line so the inbox is easy to sort.
 */
export async function sendForm(form: HTMLFormElement, subject: string): Promise<SendResult> {
  const data = Object.fromEntries(new FormData(form)) as Record<string, string>;
  if (data.botcheck) return { ok: true, message: "" }; // spam trap filled in: pretend success, send nothing
  delete data.botcheck;
  const key = site.forms.web3formsAccessKey;
  if (!key) return { ok: false, message: `The form is not connected yet. Please email ${site.contact.email}.` };
  try {
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        access_key: key,
        subject: `Sankofa Royale Awards — ${subject}`,
        from_name: "Sankofa Royale Awards website",
        replyto: data.email,
        ...data,
      }),
    });
    const json = await res.json().catch(() => null);
    return json?.success ? { ok: true, message: "" } : { ok: false, message: json?.message || "The message could not be sent." };
  } catch {
    return { ok: false, message: "No connection. Please try again or email us directly." };
  }
}
