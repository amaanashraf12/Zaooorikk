import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import PageMeta from "@/components/PageMeta";
import Reveal from "@/components/Reveal";
import ServiceIcon from "@/components/ServiceIcon";
import { SERVICES } from "@/data/content";

export default function Services() {
  return (
    <>
      <PageMeta
        title="Services — Zarik"
        description="Web design & development, AI voice agents, branding & identity, SEO & content, and custom builds — each handled personally."
      />

      <section className="pt-40 md:pt-52 pb-16 paper-grain">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.25em] text-terracotta mb-8">Services</p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="font-heading text-5xl md:text-7xl tracking-tighter text-evergreen max-w-3xl text-balance leading-[1.02]">
              Five ways I become your backbone.
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-8 text-lg text-evergreen/65 leading-relaxed max-w-xl">
              Each one scoped, designed, and shipped personally. No account managers, no handoffs — just the work, done.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="border-t border-sage/50">
            {SERVICES.map((s, i) => (
              <Reveal key={s.slug} delay={i * 70}>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 py-14 border-b border-sage/50 items-start">
                  <div className="md:col-span-1">
                    <ServiceIcon slug={s.slug} className="w-9 h-9" />
                  </div>
                  <div className="md:col-span-6">
                    <h2 className="font-heading text-3xl md:text-4xl text-evergreen tracking-tight">{s.name}</h2>
                    <p className="mt-4 text-base text-evergreen/65 leading-relaxed max-w-lg">{s.long}</p>
                  </div>
                  <div className="md:col-span-3">
                    <ul className="space-y-2.5">
                      {s.points.map((p) => (
                        <li key={p} className="flex items-center gap-3 text-sm text-evergreen/75">
                          <span className="w-1.5 h-1.5 rounded-full bg-terracotta shrink-0" />
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="md:col-span-2 md:text-right">
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-evergreen text-ivory text-sm font-medium hover:bg-terracotta transition-colors duration-300"
                    >
                      Talk to me <ArrowUpRight size={15} />
                    </Link>
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