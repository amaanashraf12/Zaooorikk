import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import PageMeta from "@/components/PageMeta";
import Reveal from "@/components/Reveal";
import VapiWidget from "@/components/VapiWidget";
import PricingSection from "@/components/PricingSection";
import LetsDiscussForm from "@/components/LetsDiscussForm";
import ServiceIcon from "@/components/ServiceIcon";
import { SERVICES, WORK_CASES } from "@/data/content";

export default function Home() {
  return (
    <>
      <PageMeta
        title="Zarik — Real work. Real backbone. No fluff."
        description="A full-service digital studio. Web design, AI voice agents, branding, SEO, and custom builds — handled personally."
      />

      {/* Hero */}
      <section className="relative pt-40 md:pt-52 pb-24 md:pb-36 paper-grain overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.25em] text-terracotta mb-8">
              A full-service digital studio
            </p>
          </Reveal>
          <h1 className="font-heading font-semibold tracking-tighter text-evergreen text-[16vw] md:text-[10.5vw] leading-[0.92]">
            <Reveal as="span" className="block">Real work.</Reveal>
            <Reveal as="span" delay={120} className="block md:pl-[10vw]">Real backbone.</Reveal>
            <Reveal as="span" delay={240} className="block md:pl-[20vw] text-terracotta">No fluff.</Reveal>
          </h1>
          <div className="mt-12 md:mt-16 grid md:grid-cols-12 gap-8 items-end">
            <Reveal delay={360} className="md:col-span-6">
              <p className="text-lg md:text-xl text-evergreen/70 leading-relaxed max-w-md">
                Not an agency. Zarik becomes the backbone of your business. Whatever you need built — I handle it personally. Genuine, human, direct.
              </p>
            </Reveal>
            <Reveal delay={440} className="md:col-span-6 flex flex-wrap gap-4 md:justify-end">
              <Link
                to="/work"
                className="inline-flex items-center gap-2 px-7 py-3.5 border border-evergreen text-evergreen text-sm font-medium hover:bg-evergreen hover:text-ivory transition-colors duration-300"
              >
                View Work <ArrowUpRight size={16} />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-terracotta text-ivory text-sm font-medium hover:bg-evergreen transition-colors duration-300"
              >
                Let's Talk
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Services preview */}
      <section className="py-24 md:py-32 border-t border-sage/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <Reveal className="flex items-end justify-between mb-16">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-terracotta mb-5">What I do</p>
              <h2 className="font-heading text-4xl md:text-5xl tracking-tighter text-evergreen">Five things, done properly.</h2>
            </div>
            <Link to="/services" className="hidden md:inline-flex items-center gap-2 text-sm font-medium text-evergreen/70 hover:text-evergreen">
              All services <ArrowUpRight size={16} />
            </Link>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-sage/50 border border-sage/50">
            {SERVICES.map((s, i) => (
              <Reveal
                key={s.slug}
                delay={i * 70}
                className="bg-ivory p-8 md:p-10 flex flex-col group hover:bg-[#F3EBE9] transition-colors duration-500"
              >
                <ServiceIcon slug={s.slug} />
                <h3 className="mt-6 font-heading text-2xl text-evergreen">{s.name}</h3>
                <p className="mt-3 text-sm text-evergreen/65 leading-relaxed flex-1">{s.short}</p>
                <Link to="/services" className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-evergreen">
                  Talk to me
                  <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </Reveal>
            ))}
            <Reveal delay={SERVICES.length * 70} className="bg-evergreen text-ivory p-8 md:p-10 flex flex-col justify-center">
              <p className="font-heading text-2xl leading-snug">Need something that doesn't fit a box?</p>
              <Link to="/contact" className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-ivory/90 hover:text-terracotta">
                Tell me about it <ArrowUpRight size={15} />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Work preview */}
      <section className="py-24 md:py-32 border-t border-sage/50 paper-grain">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <Reveal className="flex items-end justify-between mb-16">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-terracotta mb-5">Selected work</p>
              <h2 className="font-heading text-4xl md:text-5xl tracking-tighter text-evergreen">Built, not promised.</h2>
            </div>
            <Link to="/work" className="hidden md:inline-flex items-center gap-2 text-sm font-medium text-evergreen/70 hover:text-evergreen">
              All work <ArrowUpRight size={16} />
            </Link>
          </Reveal>

          <div className="space-y-px">
            {WORK_CASES.slice(0, 3).map((w, i) => (
              <Reveal key={w.num} delay={i * 80}>
                <Link
                  to="/work"
                  className="grid grid-cols-12 gap-6 items-baseline py-10 border-t border-sage/50 group hover:bg-[#F3EBE9]/60 transition-colors duration-500 px-2"
                >
                  <span className="col-span-2 md:col-span-1 font-heading text-2xl md:text-3xl text-terracotta">{w.num}</span>
                  <div className="col-span-10 md:col-span-5">
                    <h3 className="font-heading text-2xl md:text-3xl text-evergreen">{w.client}</h3>
                    <p className="text-sm text-evergreen/55 mt-1">{w.industry}</p>
                  </div>
                  <p className="col-span-12 md:col-span-5 text-sm text-evergreen/70 leading-relaxed">{w.result}</p>
                  <ArrowUpRight size={18} className="col-span-12 md:col-span-1 text-evergreen/40 group-hover:text-evergreen transition-colors md:justify-self-end" />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Voice agent */}
      <section className="py-28 md:py-40 border-t border-sage/50 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <Reveal className="max-w-2xl mx-auto text-center mb-16">
            <p className="text-xs uppercase tracking-[0.25em] text-terracotta mb-5">Talk to Zarik</p>
            <h2 className="font-heading text-4xl md:text-6xl tracking-tighter text-evergreen text-balance">
              Talk to Zarik
            </h2>
            <p className="mt-6 text-lg text-evergreen/65 leading-relaxed">
              No forms. No waiting. Just speak — and I'll listen. Try a live demo right now.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <VapiWidget />
          </Reveal>
        </div>
      </section>

      {/* Pricing */}
      <PricingSection />

      {/* Let's discuss */}
      <section className="py-28 md:py-40 border-t border-sage/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <Reveal className="max-w-2xl mb-14">
            <p className="text-xs uppercase tracking-[0.25em] text-terracotta mb-5">Let's discuss</p>
            <h2 className="font-heading text-4xl md:text-6xl tracking-tighter text-evergreen text-balance">
              Tell me what you're building.
            </h2>
            <p className="mt-6 text-lg text-evergreen/65 leading-relaxed">
              Pick what you need, set a budget, leave a message. I read every one personally.
            </p>
          </Reveal>
          <LetsDiscussForm />
        </div>
      </section>
    </>
  );
}