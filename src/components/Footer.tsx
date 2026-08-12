import { Mail, MapPin, Phone } from "lucide-react";
import { InstagramIcon, WhatsAppIcon } from "./BrandIcons";
import { CONTACT, DEFAULT_WHATSAPP_MESSAGE, NAV_LINKS, whatsappLink } from "../data/site";

export default function Footer() {
  return (
    <footer id="contato" className="bg-sage-900 text-sage-100">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr_1fr]">
          <div>
            <span className="font-serif text-2xl font-medium text-white">Fabio Camolesi</span>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-sage-300">
              Terapeuta holístico e acupunturista dedicado a restaurar o equilíbrio entre corpo,
              mente e energia através da sabedoria da Medicina Tradicional Chinesa.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href={whatsappLink(DEFAULT_WHATSAPP_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-sage-800 text-sage-100 transition-colors hover:bg-sage-700"
              >
                <WhatsAppIcon className="h-5 w-5" />
              </a>
              <a
                href={CONTACT.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-sage-800 text-sage-100 transition-colors hover:bg-sage-700"
              >
                <InstagramIcon className="h-5 w-5" />
              </a>
              <a
                href={`mailto:${CONTACT.email}`}
                aria-label="E-mail"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-sage-800 text-sage-100 transition-colors hover:bg-sage-700"
              >
                <Mail className="h-5 w-5" strokeWidth={1.6} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-serif text-sm uppercase tracking-[0.18em] text-sage-400">
              Navegação
            </h3>
            <ul className="mt-5 space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-sage-200 hover:text-white">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-sm uppercase tracking-[0.18em] text-sage-400">
              Contato
            </h3>
            <ul className="mt-5 space-y-4">
              <li className="flex items-start gap-3 text-sm text-sage-200">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-sage-400" strokeWidth={1.6} />
                <a href={whatsappLink(DEFAULT_WHATSAPP_MESSAGE)} target="_blank" rel="noopener noreferrer">
                  {CONTACT.phoneDisplay}
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-sage-200">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-sage-400" strokeWidth={1.6} />
                <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
              </li>
              <li className="flex items-start gap-3 text-sm text-sage-200">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-sage-400" strokeWidth={1.6} />
                <span>Atendimento em {CONTACT.city}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-sage-800 pt-8 text-xs text-sage-400 sm:flex-row">
          <p>© {new Date().getFullYear()} Fabio Camolesi — Terapias Holísticas. Todos os direitos reservados.</p>
          <p>Conteúdo ilustrativo em desenvolvimento.</p>
        </div>
      </div>
    </footer>
  );
}
