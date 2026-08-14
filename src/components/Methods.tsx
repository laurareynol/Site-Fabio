import type { ComponentType } from "react";
import { Check, Ear, Flame, Leaf, Hand } from "lucide-react";
import { CuppingIcon, NeedleIcon } from "./TcmIcons";
import { SERVICES } from "../data/services";

const ICONS: Record<string, ComponentType<{ className?: string }>> = {
  acupuntura: NeedleIcon,
  auriculoterapia: Ear,
  moxabustao: Flame,
  ventosaterapia: CuppingIcon,
  fitoterapia: Leaf,
  tuina: Hand,
};

export default function Methods() {
  return (
    <section id="metodo" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-sage-500">
          Os métodos
        </p>
        <h2 className="mt-4 font-serif text-3xl font-medium leading-tight text-sage-900 sm:text-4xl">
          Terapias que <span className="italic text-sage-600">tratam a raiz</span>, não só o
          sintoma
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-sage-700">
          Cada sessão combina uma ou mais técnicas da Medicina Tradicional Chinesa, escolhidas
          de acordo com a sua avaliação individual, sempre com um plano de cuidado pensado
          para você.
        </p>
      </div>

      <div className="mx-auto mt-16 grid max-w-6xl gap-6 px-5 sm:grid-cols-2 sm:px-8 lg:grid-cols-3">
        {SERVICES.map((service) => {
          const Icon = ICONS[service.id];
          return (
            <div
              key={service.id}
              className="group flex flex-col rounded-3xl border border-sage-100 bg-sage-50/60 p-8 transition-colors hover:bg-sage-50"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-sage-700 text-white transition-colors group-hover:bg-sage-800">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-6 font-serif text-xl font-medium text-sage-900">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-sage-600">{service.description}</p>
              <ul className="mt-5 space-y-2 border-t border-sage-200/70 pt-5">
                {service.benefits.map((b) => (
                  <li key={b} className="flex items-center gap-2 text-sm text-sage-700">
                    <Check className="h-3.5 w-3.5 shrink-0 text-sage-500" strokeWidth={2} />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
}
