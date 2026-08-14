import { Quote, Star } from "lucide-react";
import { AvatarPlaceholder } from "./PlaceholderArt";
import { TESTIMONIALS } from "../data/testimonials";

const AUDIENCE_CHIPS = [
  "Crianças",
  "Adolescentes",
  "Gestantes",
  "Adultos",
  "Terceira idade",
];

export default function Testimonials() {
  return (
    <section id="depoimentos" className="bg-sage-50 py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-sage-500">
          Prova social
        </p>
        <h2 className="mt-4 font-serif text-3xl font-medium leading-tight text-sage-900 sm:text-4xl">
          Histórias reais de{" "}
          <span className="italic text-sage-600">transformação e cuidado</span>
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-sage-700">
          Do consultório saem relatos de pessoas de todas as idades: crianças, grávidas,
          adolescentes, adultos e idosos, que encontraram alívio e equilíbrio através do
          tratamento.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          {AUDIENCE_CHIPS.map((c) => (
            <span
              key={c}
              className="rounded-full bg-white px-4 py-1.5 text-xs font-medium text-sage-700 shadow-sm"
            >
              {c}
            </span>
          ))}
        </div>
        <p className="mt-3 text-xs text-sage-500">
          (depoimentos ilustrativos: em breve com relatos e fotos reais dos pacientes)
        </p>
      </div>

      <div className="mx-auto mt-14 grid max-w-6xl gap-6 px-5 sm:grid-cols-2 sm:px-8 lg:grid-cols-3">
        {TESTIMONIALS.map((t) => (
          <div
            key={t.name}
            className="flex flex-col rounded-3xl border border-sage-100 bg-white p-7 shadow-sm shadow-sage-900/[0.03]"
          >
            <div className="flex items-center justify-between">
              <Quote className="h-6 w-6 text-sage-300" strokeWidth={1.5} />
              <span className="rounded-full bg-sage-100 px-3 py-1 text-[11px] font-medium text-sage-700">
                {t.category}
              </span>
            </div>
            <p className="mt-4 flex-1 text-sm leading-relaxed text-sage-700">"{t.quote}"</p>
            <div className="mt-5 flex items-center gap-1">
              {Array.from({ length: t.rating }).map((_, i) => (
                <Star key={i} className="h-3.5 w-3.5 fill-clay-500 text-clay-500" />
              ))}
            </div>
            <div className="mt-4 flex items-center gap-3 border-t border-sage-100 pt-4">
              <AvatarPlaceholder name={t.name} size={44} />
              <div>
                <p className="text-sm font-semibold text-sage-900">{t.name}</p>
                <p className="text-xs text-sage-500">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
