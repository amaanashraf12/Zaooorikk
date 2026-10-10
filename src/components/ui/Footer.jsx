import { Link } from "react-router-dom";
import SocialButtons from "@/components/SocialButtons";

const QUICK = [
  { label: "Home", path: "/" },
  { label: "Services", path: "/services" },
  { label: "Work", path: "/work" },
  { label: "Process", path: "/process" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-evergreen text-ivory">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-24 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-ivory/15">
          <div className="md:col-span-5">
            <p className="text-sm uppercase tracking-[0.2em] text-sage mb-4">Zarik Studio</p>
            <p className="font-heading text-2xl leading-snug max-w-sm text-balance">
              Not an agency. The backbone of your business — built personally.
            </p>
          </div>

          <div className="md:col-span-3">
            <p className="text-xs uppercase tracking-[0.2em] text-sage mb-5">Pages</p>
            <ul className="space-y-3">
              {QUICK.map((l) => (
                <li key={l.path}>
                  <Link to={l.path} className="text-sm text-ivory/75 hover:text-ivory transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <p className="text-xs uppercase tracking-[0.2em] text-sage mb-5">Reach me</p>
            <SocialButtons variant="dark" />
            <p className="text-xs uppercase tracking-[0.2em] text-sage mt-8 mb-3">Payment</p>
            <p className="text-sm text-ivory/75 leading-relaxed">
              India — PayPal &amp; UPI<br />
              International — PayPal
            </p>
          </div>
        </div>

        <div
          aria-hidden
          className="font-heading font-bold tracking-tighter text-ivory/[0.07] leading-none select-none text-center text-[22vw] md:text-[18vw] -mb-2"
        >
          ZARIK
        </div>

        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-ivory/55">© {new Date().getFullYear()} Zarik. All work, personally handled.</p>
          <p className="text-xs text-ivory/55">Real work. Real backbone. No fluff.</p>
        </div>
      </div>
    </footer>
  );
}