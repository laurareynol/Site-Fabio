import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, whatsappLink, DEFAULT_WHATSAPP_MESSAGE } from "../data/site";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-colors duration-300 ${
        scrolled || open ? "bg-cream/95 shadow-sm backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        <a href="#inicio" className="flex flex-col leading-tight">
          <span
            className={`font-serif text-xl font-medium tracking-tight ${
              scrolled || open ? "text-sage-900" : "text-white"
            }`}
          >
            Fabio Camolesi
          </span>
          <span
            className={`text-[11px] uppercase tracking-[0.18em] ${
              scrolled || open ? "text-sage-500" : "text-white/70"
            }`}
          >
            Medicina Tradicional Chinesa
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:opacity-70 ${
                scrolled ? "text-sage-800" : "text-white"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a
            href={whatsappLink(DEFAULT_WHATSAPP_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-sage-700 px-5 py-2.5 text-sm font-medium text-white shadow-sm transition-colors hover:bg-sage-800"
          >
            Agendar Consulta
          </a>
        </div>

        <button
          className={`lg:hidden ${scrolled || open ? "text-sage-900" : "text-white"}`}
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-sage-100 bg-cream px-5 pb-6 pt-2 lg:hidden">
          <nav className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-sage-800 hover:bg-sage-50"
              >
                {link.label}
              </a>
            ))}
            <a
              href={whatsappLink(DEFAULT_WHATSAPP_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 rounded-full bg-sage-700 px-5 py-2.5 text-center text-sm font-medium text-white"
            >
              Agendar Consulta
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
