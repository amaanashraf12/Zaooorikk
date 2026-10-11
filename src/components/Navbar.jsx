import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const LINKS = [
  { label: "Home", path: "/" },
  { label: "Services", path: "/services" },
  { label: "Work", path: "/work" },
  { label: "Process", path: "/process" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const loc = useLocation();

  useEffect(() => setOpen(false), [loc.pathname]);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-ivory/85 backdrop-blur-md border-b border-sage/50" : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
        <Link to="/" className="font-heading text-2xl font-semibold tracking-tighter text-evergreen">
          Zarik
        </Link>

        <div className="hidden md:flex items-center gap-9">
          {LINKS.map((l) => (
            <Link
              key={l.path}
              to={l.path}
              className={`text-sm font-medium transition-colors ${
                loc.pathname === l.path ? "text-terracotta" : "text-evergreen/70 hover:text-evergreen"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="text-sm font-medium px-5 py-2.5 bg-evergreen text-ivory hover:bg-terracotta transition-colors duration-300"
          >
            Let's Talk
          </Link>
        </div>

        <button
          className="md:hidden text-evergreen p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-ivory border-t border-sage/50 px-6 py-6 flex flex-col gap-4 animate-fade-up">
          {LINKS.map((l) => (
            <Link
              key={l.path}
              to={l.path}
              className={`text-xl font-heading ${
                loc.pathname === l.path ? "text-terracotta" : "text-evergreen"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="mt-2 text-center text-sm font-medium px-5 py-3 bg-evergreen text-ivory"
          >
            Let's Talk
          </Link>
        </div>
      )}
    </header>
  );
}