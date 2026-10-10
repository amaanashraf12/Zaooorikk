import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import PageMeta from "@/components/PageMeta";
import Reveal from "@/components/Reveal";
import { WORK_CASES } from "@/data/content";

export default function Work() {
  return (
    <>
      <PageMeta
        title="Work — Zarik"
        description="Selected case studies — real clients, real problems, measurable results. Believable work, built personally."
      />

      <section className="pt-40 md:pt-52 pb-16 paper-grain">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.25em] text-terracotta mb-8">Selected work</p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="font-heading text-5xl md:text-7xl tracking-tighter text-evergreen max-w-3xl text-balance leading-[1.02]">
              Built, not promised.
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-8 text-lg text-evergreen/65 leading-relaxed max-w-xl">
              A few projects, told honestly. The problem, what I built, and what actually changed. Real work for real businesses.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="border-t border-sage/50">
            {WORK_CASES.map((w, i) => (
              <Reveal key={w.num} delay={i * 60}>
                <article className="py-16 md:py-20 border-b border-sage/50 grid grid-cols-1 md:grid-cols-12 gap-8">
                  <div className="md:col-span-2">
                    <span className="font-heading text-6xl md:text-7xl text-terracotta leading-none">{w.num}</span>
                  </div>
                  <div className="md:col-span-10">
                    <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 mb-8">
                      <h2 className="font-heading text-3xl md:text-4xl text-evergreen">{w.client}</h2>
                      <span className="text-sm uppercase tracking-[0.15em] text-evergreen/45">{w.industry}</span>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                      <Block label="The problem" body={w.problem} />
                      <Block label="What I built" body={w.built} />
                      <Block label="The result" body={w.result} accent />
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-20 text-center">
            <p className="font-heading italic text-xl text-evergreen/60 max-w-md mx-auto">
              More work, with full case studies, shared on request.
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 px-7 py-3.5 bg-terracotta text-ivory text-sm font-medium hover:bg-evergreen transition-colors duration-300"
            >
              Start a project <ArrowUpRight size={16} />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function Block({ label, body, accent }) {
  return (
    <div>
      <p className="text-xs uppercase tracking-[0.2em] text-evergreen/45 mb-3">{label}</p>
      <p className={`text-base leading-relaxed ${accent ? "text-evergreen font-medium" : "text-evergreen/70"}`}>
        {body}
      </p>
    </div>
  );
}