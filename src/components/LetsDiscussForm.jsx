import { useState } from "react";
import { Check, Loader2 } from "lucide-react";

const SERVICES = [
  "Web Design & Development",
  "AI Voice Agents",
  "Branding & Identity",
  "SEO & Content",
  "Custom Builds",
];
const BUDGETS = ["< $1,000", "$1,000 – $3,000", "$3,000 – $10,000", "$10,000+"];

export default function LetsDiscussForm() {
  const [selected, setSelected] = useState([]);
  const [form, setForm] = useState({ name: "", email: "", budget: "", message: "" });
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");

  const toggle = (s) =>
    setSelected((prev) =>
      prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]
    );

  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      name: form.name,
      email: form.email,
      service: selected.join(", "),
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
      <div className="max-w-xl mx-auto text-center py-10">
        <div className="w-14 h-14 rounded-full bg-highlight/20 flex items-center justify-center mx-auto mb-6">
          <Check className="text-highlight" size={26} />
        </div>
        <h3 className="font-heading text-3xl text-evergreen">Thank you.</h3>
        <p className="mt-4 font-heading italic text-lg text-evergreen/65 leading-relaxed">
          I've got your details. I read every one personally and I'll be in touch shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Field label="Name">
          <input
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="input-field"
            placeholder="Your name"
          />
        </Field>
        <Field label="Email">
          <input
            required
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="input-field"
            placeholder="you@email.com"
          />
        </Field>
      </div>

      <div className="mt-8">
        <p className="text-xs uppercase tracking-[0.2em] text-evergreen/50 mb-4">
          What do you need? (select any)
        </p>
        <div className="flex flex-wrap gap-3">
          {SERVICES.map((s) => {
            const on = selected.includes(s);
            return (
              <button
                type="button"
                key={s}
                onClick={() => toggle(s)}
                className={`px-4 py-2.5 text-sm border transition-colors duration-300 ${
                  on
                    ? "bg-highlight text-evergreen border-highlight"
                    : "border-evergreen/25 text-evergreen/70 hover:border-evergreen/50"
                }`}
              >
                {s}
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-8">
        <p className="text-xs uppercase tracking-[0.2em] text-evergreen/50 mb-4">Budget range</p>
        <div className="flex flex-wrap gap-3">
          {BUDGETS.map((b) => (
            <button
              type="button"
              key={b}
              onClick={() => setForm({ ...form, budget: form.budget === b ? "" : b })}
              className={`px-4 py-2.5 text-sm border transition-colors duration-300 ${
                form.budget === b
                  ? "bg-evergreen text-ivory border-evergreen"
                  : "border-evergreen/25 text-evergreen/70 hover:border-evergreen/50"
              }`}
            >
              {b}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-8">
        <Field label="Message">
          <textarea
            required
            rows={4}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="input-field resize-none"
            placeholder="Tell me about the project…"
          />
        </Field>
      </div>

      {error && <p className="mt-5 text-sm text-terracotta">{error}</p>}

      <button
        type="submit"
        disabled={submitting}
        className="mt-8 inline-flex items-center gap-2.5 px-7 py-3.5 bg-evergreen text-ivory text-sm font-medium hover:bg-terracotta transition-colors duration-300 disabled:opacity-60"
      >
        {submitting && <Loader2 size={16} className="animate-spin" />}
        {submitting ? "Sending…" : "Send it over"}
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