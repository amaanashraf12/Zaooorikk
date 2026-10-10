import { useState } from "react";
import { Check, Loader2 } from "lucide-react";

const SERVICES = [
  "Web Design & Development",
  "AI Voice Agents",
  "Branding & Identity",
  "SEO & Content",
  "Custom Builds",
  "Something else",
];

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", service_needed: "", message: "" });
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");

  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      name: form.name,
      email: form.email,
      service: form.service_needed,
      message: form.message,
    };
    try {
      const res = await fetch(
        `https://formspree.io/f/${import.meta.env.VITE_FORMSPREE_ID}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      if (res.ok) {
        setStatus("Thanks — I'll get back to you shortly.");
        setDone(true);
      } else {
        setStatus("Something went wrong. Please try again.");
        setError("Something went wrong. Please try again.");
      }
    } catch {
      setStatus("Network error. Please try again.");
      setError("Network error. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  if (done) {
    return (
      <div className="border border-sage/60 p-10 text-center">
        <div className="w-14 h-14 rounded-full bg-highlight/20 flex items-center justify-center mx-auto mb-6">
          <Check className="text-highlight" size={26} />
        </div>
        <h3 className="font-heading text-3xl text-evergreen">Message received.</h3>
        <p className="mt-4 font-heading italic text-lg text-evergreen/65">
          I'll get back to you personally — usually within a day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-7">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
        <Field label="Name">
          <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="input-field" placeholder="Your name" />
        </Field>
        <Field label="Email">
          <input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="input-field" placeholder="you@email.com" />
        </Field>
      </div>

      <Field label="Service needed">
        <div className="flex flex-wrap gap-3">
          {SERVICES.map((s) => (
            <button
              type="button"
              key={s}
              onClick={() => setForm({ ...form, service_needed: s })}
              className={`px-4 py-2.5 text-sm border transition-colors duration-300 ${
                form.service_needed === s
                  ? "bg-evergreen text-ivory border-evergreen"
                  : "border-evergreen/25 text-evergreen/70 hover:border-evergreen/50"
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </Field>

      <Field label="Message">
        <textarea required rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="input-field resize-none" placeholder="Tell me what you're building…" />
      </Field>

      {error && <p className="text-sm text-terracotta">{error}</p>}

      <button
        type="submit"
        disabled={submitting}
        className="inline-flex items-center gap-2.5 px-8 py-4 bg-terracotta text-ivory text-sm font-medium hover:bg-evergreen transition-colors duration-300 disabled:opacity-60"
      >
        {submitting && <Loader2 size={16} className="animate-spin" />}
        {submitting ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}

function Field({ label, children }) {
  return (
    <label className="block">
      <span className="text-xs uppercase tracking-[0.2em] text-evergreen/50 mb-3 block">{label}</span>
      {children}
    </label>
  );
}