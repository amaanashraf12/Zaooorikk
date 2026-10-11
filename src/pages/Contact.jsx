import PageMeta from "@/components/PageMeta";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import SocialButtons from "@/components/SocialButtons";

export default function Contact() {
  return (
    <>
      <PageMeta
        title="Contact — Zarik"
        description="Talk to me directly. I'm reachable — always. Send a message, or reach out on WhatsApp, Instagram, or email."
      />

      <section className="pt-40 md:pt-52 pb-16 paper-grain">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.25em] text-terracotta mb-8">Contact</p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="font-heading text-5xl md:text-7xl tracking-tighter text-evergreen max-w-3xl text-balance leading-[1.02]">
              Talk to me directly.
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-8 text-lg text-evergreen/65 leading-relaxed max-w-xl">
              I'm reachable — always. No gatekeepers, no waiting rooms. Send a message below or reach me any of these ways.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-12 gap-16">
          <Reveal className="lg:col-span-7">
            <ContactForm />
          </Reveal>

          <Reveal delay={120} className="lg:col-span-5">
            <div className="border border-sage/50 p-8 md:p-10 h-full">
              <p className="text-xs uppercase tracking-[0.2em] text-evergreen/50 mb-5">Reach me directly</p>
              <p className="font-heading text-2xl text-evergreen leading-snug mb-8">
                Prefer to reach out yourself? Pick whichever's easiest.
              </p>
              <SocialButtons variant="light" />

              <div className="mt-10 pt-8 border-t border-sage/50">
                <p className="text-xs uppercase tracking-[0.2em] text-evergreen/50 mb-3">Payment</p>
                <p className="text-sm text-evergreen/70 leading-relaxed">
                  India — PayPal &amp; UPI<br />
                  International — PayPal
                </p>
              </div>

              <div className="mt-8 pt-8 border-t border-sage/50">
                <p className="font-heading italic text-evergreen/60 leading-relaxed">
                  I read every message personally and reply — usually within a day.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}