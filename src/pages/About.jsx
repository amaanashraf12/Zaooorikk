import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import PageMeta from "@/components/PageMeta";
import Reveal from "@/components/Reveal";

export default function About() {
  return (
    <>
      <PageMeta
        title="About — Zarik"
        description="Zarik, in first person. Genuine, direct, human. Clients talk, I build — the backbone of your business."
      />

      <section className="pt-40 md:pt-52 pb-16 paper-grain">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.25em] text-terracotta mb-8">About</p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="font-heading text-5xl md:text-7xl tracking-tighter text-evergreen max-w-3xl text-balance leading-[1.02]">
              Clients talk, I build.
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="pb-28">
        <div className="max-w-3xl mx-auto px-6 lg:px-10">
          <Reveal>
            <div className="space-y-7 text-xl md:text-2xl text-evergreen/80 leading-relaxed font-heading">
              <p>
                I'm Zarik. I run a studio of one — and that's the point. When you work with me, you work with <em className="text-terracotta not-italic">me</em>. Not an account manager, not a rotating team, not a name on a deck. Just the person doing the work, from the first message to the last.
              </p>
              <p>
                I started this because too much of this industry is fluff — decks, jargon, handoffs, things that sound impressive and deliver nothing. I'd rather do the opposite. Listen carefully, build honestly, and become the part of your business you don't have to worry about.
              </p>
              <p>
                Whatever you need built — a site, a brand, a voice agent, something that doesn't have a name yet — I'll scope it personally, tell you honestly whether I can do it, and then do it. No synergy. No leverage. Just the work.
              </p>
              <p className="text-terracotta">
                If that sounds like what you're after, let's talk.
              </p>
            </div>
          </Reveal>

          <Reveal delay={120} className="mt-14">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-evergreen text-ivory text-sm font-medium hover:bg-terracotta transition-colors duration-300"
            >
              Let's talk <ArrowUpRight size={16} />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}