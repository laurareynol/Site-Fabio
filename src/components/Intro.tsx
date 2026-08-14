import { HandHeart, Sparkles, Wind } from "lucide-react";

const PILLARS = [
  {
    icon: Wind,
    title: "Energia em fluxo",
    text: "Desbloqueamos o Qi (energia vital) para que ele circule livremente pelos meridianos do corpo.",
  },
  {
    icon: HandHeart,
    title: "Cuidado individual",
    text: "Cada protocolo é desenhado para a sua história, seu corpo e o momento de vida que você vive.",
  },
  {
    icon: Sparkles,
    title: "Corpo e mente",
    text: "Tratamos a raiz do desequilíbrio, não apenas o sintoma, unindo tradição milenar e escuta atenta.",
  },
];

export default function Intro() {
  return (
    <section className="bg-cream py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-sage-500">
          Por que escolher a medicina tradicional chinesa
        </p>
        <h2 className="mt-4 font-serif text-3xl font-medium leading-tight text-sage-900 sm:text-4xl">
          Equilíbrio, harmonia e{" "}
          <span className="italic text-sage-600">bem-estar de verdade</span>
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-sage-700">
          A cura holística olha para a pessoa como um todo: corpo, mente e espírito, não apenas
          para sintomas isolados. Ao trabalhar a origem dos desequilíbrios, a acupuntura
          e as terapias tradicionais chinesas oferecem um caminho suave e potente para aliviar
          dores, reduzir o estresse e devolver a você a sensação de estar inteiro novamente.
        </p>
      </div>

      <div className="mx-auto mt-16 grid max-w-6xl gap-6 px-5 sm:grid-cols-3 sm:px-8">
        {PILLARS.map(({ icon: Icon, title, text }) => (
          <div
            key={title}
            className="rounded-3xl border border-sage-100 bg-white p-8 text-center shadow-sm shadow-sage-900/[0.03]"
          >
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-sage-100">
              <Icon className="h-5 w-5 text-sage-700" strokeWidth={1.6} />
            </div>
            <h3 className="mt-5 font-serif text-lg font-medium text-sage-900">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-sage-600">{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
