import { Mail, Phone } from "lucide-react";
import { WhatsAppIcon } from "./BrandIcons";
import { CONTACT, DEFAULT_WHATSAPP_MESSAGE, whatsappLink } from "../data/site";

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-sage-700 py-20 sm:py-24">
      <svg className="absolute inset-0 h-full w-full opacity-25" preserveAspectRatio="xMidYMid slice">
        <circle cx="90%" cy="10%" r="30%" fill="#8fa968" />
        <circle cx="5%" cy="95%" r="25%" fill="#2f4126" />
      </svg>
      <div className="relative mx-auto max-w-3xl px-5 text-center sm:px-8">
        <h2 className="font-serif text-3xl font-medium leading-tight text-white sm:text-4xl">
          Pronto para começar sua jornada de{" "}
          <span className="italic text-sage-100">cura e equilíbrio?</span>
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-sage-100">
          Fale agora mesmo com o Fabio pelo WhatsApp e agende sua primeira sessão. É rápido,
          pessoal e o primeiro passo para reencontrar o seu equilíbrio.
        </p>

        <div className="mt-9 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href={whatsappLink(DEFAULT_WHATSAPP_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-medium text-sage-800 shadow-lg transition-transform hover:-translate-y-0.5"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Agendar pelo WhatsApp
          </a>
        </div>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 border-t border-white/20 pt-8 text-sm text-sage-100 sm:flex-row sm:gap-8">
          <a href={whatsappLink(DEFAULT_WHATSAPP_MESSAGE)} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white">
            <Phone className="h-4 w-4" strokeWidth={1.6} />
            {CONTACT.phoneDisplay}
          </a>
          <a href={`mailto:${CONTACT.email}`} className="flex items-center gap-2 hover:text-white">
            <Mail className="h-4 w-4" strokeWidth={1.6} />
            {CONTACT.email}
          </a>
        </div>
      </div>
    </section>
  );
}
