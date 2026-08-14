import { Camera } from "lucide-react";
import { ScenePlaceholder } from "./PlaceholderArt";
import { PORTFOLIO_ITEMS } from "../data/portfolio";
import { DEFAULT_WHATSAPP_MESSAGE, whatsappLink } from "../data/site";

export default function Portfolio() {
  return (
    <section id="trabalhos" className="bg-cream py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-sage-500">
          Trabalhos realizados
        </p>
        <h2 className="mt-4 font-serif text-3xl font-medium leading-tight text-sage-900 sm:text-4xl">
          Um pouco do <span className="italic text-sage-600">dia a dia no consultório</span>
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-sage-700">
          Registros dos atendimentos e técnicas aplicadas no consultório.
          <span className="block text-sm text-sage-500">
            (galeria ilustrativa: em breve com fotos reais dos atendimentos)
          </span>
        </p>
      </div>

      <div className="mx-auto mt-14 grid max-w-6xl grid-cols-2 gap-5 px-5 sm:px-8 md:grid-cols-4">
        {PORTFOLIO_ITEMS.map((item) => (
          <div key={item.id}>
            <ScenePlaceholder
              seed={item.seed}
              icon={Camera}
              rounded="rounded-2xl"
              className="aspect-square w-full"
            />
            <p className="mt-2 text-xs font-medium text-sage-800">{item.title}</p>
            <p className="text-[11px] uppercase tracking-wide text-sage-500">{item.category}</p>
          </div>
        ))}
      </div>

      <div className="mt-14 flex justify-center">
        <a
          href={whatsappLink(DEFAULT_WHATSAPP_MESSAGE)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-full bg-sage-700 px-7 py-3.5 text-sm font-medium text-white transition-colors hover:bg-sage-800"
        >
          Quero viver essa experiência
        </a>
      </div>
    </section>
  );
}
