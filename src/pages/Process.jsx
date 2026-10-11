import PageMeta from "@/components/PageMeta";
import Reveal from "@/components/Reveal";
import { PROCESS_STEPS } from "@/data/content";

export default function Process() {
  return (
    <>
      <PageMeta
        title="Process — Zarik"
        description="From yes to thank you — a clear, fast, human process. Contract within hours, portal access within a day."
      />

      <section className="pt-40 md:pt-52 pb-16 paper-grain">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.25em] text-terracotta mb-8">How it works</p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="font-heading text-5xl md:text-7xl tracking-tighter text-evergreen max-w-3xl text-balance leading-[1.02]">
              From yes to thank you.
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-8 text-lg text-evergreen/65 leading-relaxed max-w-xl">
              No long onboarding. No mystery. Once you say yes, things move quickly — and you always know what's next.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-28">
        <div className="max-w-5xl mx-auto px-6 lg:px-10">
          <div className="relative border-t border-sage/50">
            {PROCESS_STEPS.map((s, i) => (
              <Reveal key={s.num} delay={i * 80}>
                <div className="relative grid grid-cols-12 gap-6 py-12 border-b border-sage/50">
                  <div className="col-span-2 md:col-span-2">
                    <span className="font-heading text-4xl md:text-5xl text-evergreen/25">{s.num}</span>
                  </div>
                  <div className="col-span-10 md:col-span-7">
                    <h2 className="font-heading text-2xl md:text-3xl text-evergreen tracking-tight">{s.title}</h2>
                    <p className="mt-3 text-base text-evergreen/65 leading-relaxed max-w-md">{s.detail}</p>
                  </div>
                  <div className="col-span-12 md:col-span-3 md:text-right">
                    <span className="inline-block text-xs uppercase tracking-[0.2em] text-terracotta border border-terracotta/40 px-3 py-1.5">
                      {s.timing}
                    </span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}