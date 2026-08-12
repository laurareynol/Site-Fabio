import { WhatsAppIcon } from "./BrandIcons";
import { DEFAULT_WHATSAPP_MESSAGE, whatsappLink } from "../data/site";

export default function WhatsAppFloat() {
  return (
    <a
      href={whatsappLink(DEFAULT_WHATSAPP_MESSAGE)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Conversar no WhatsApp"
      className="group fixed bottom-5 right-5 z-50 flex items-center gap-3 rounded-full bg-[#25D366] py-3.5 pl-3.5 pr-3.5 text-white shadow-lg shadow-black/20 transition-all hover:pr-5 sm:bottom-8 sm:right-8"
    >
      <WhatsAppIcon className="h-7 w-7 shrink-0" />
      <span className="max-w-0 overflow-hidden whitespace-nowrap text-sm font-medium transition-all duration-300 group-hover:max-w-xs">
        Falar no WhatsApp
      </span>
    </a>
  );
}
