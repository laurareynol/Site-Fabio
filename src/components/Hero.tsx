import { ArrowRight, CalendarCheck, Leaf } from "lucide-react";
import LogoMark from "./LogoMark";
import { DEFAULT_WHATSAPP_MESSAGE, whatsappLink } from "../data/site";

const STATS = [
  { value: "15+", label: "anos de prática clínica" },
  { value: "3.000+", label: "sessões realizadas" },
  { value: "98%", label: "de pacientes satisfeitos" },
];

export default function Hero() {
  return (
    <section id="inicio" className="relative flex min-h-[92vh] items-end overflow-hidden bg-sage-900">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 90% at 20% 10%, #56723c 0%, #2f4126 45%, #1a2b21 100%)",
        }}
      />
      <svg className="absolute inset-0 h-full w-full opacity-70" preserveAspectRatio="xMidYMid slice">
        <circle cx="85%" cy="20%" r="30%" fill="#71904e" opacity="0.25" />
        <circle cx="10%" cy="85%" r="25%" fill="#1a2b21" opacity="0.45" />
      </svg>
      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-16 pt-40 sm:px-8 sm:pb-20 sm:pt-48">
        <LogoMark className="pointer-events-none absolute right-0 top-8 -z-10 h-[18rem] w-auto opacity-65 sm:top-4 sm:h-[24rem] lg:h-[28rem]" />

        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.16em] text-sage-100 backdrop-blur-sm">
          <Leaf className="h-3.5 w-3.5" strokeWidth={1.8} />
          Acupuntura &amp; Medicina Tradicional Chinesa
        </div>

        <h1 className="max-w-3xl font-serif text-4xl font-medium leading-[1.08] text-white sm:text-5xl md:text-6xl">
          Reencontre o <span className="italic text-sage-200">equilíbrio</span> entre corpo,
          mente e energia
        </h1>

        <p className="mt-6 max-w-xl text-base leading-relaxed text-sage-100/90 sm:text-lg">
          Sou Fabio Camolesi, terapeuta holístico e acupunturista. Uso os princípios milenares
          da Medicina Tradicional Chinesa para tratar dores, ansiedade, estresse e desequilíbrios
          — cuidando de você de forma individual e integrada.
        </p>

        <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
          <a
            href={whatsappLink(DEFAULT_WHATSAPP_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-medium text-sage-900 shadow-lg transition-transform hover:-translate-y-0.5"
          >
            <CalendarCheck className="h-4 w-4" strokeWidth={1.8} />
            Agendar minha sessão
          </a>
          <a
            href="#metodo"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-7 py-3.5 text-sm font-medium text-white transition-colors hover:bg-white/10"
          >
            Conhecer o método
            <ArrowRight className="h-4 w-4" strokeWidth={1.8} />
          </a>
        </div>

        <div className="mt-16 grid max-w-2xl grid-cols-3 gap-6 border-t border-white/15 pt-8">
          {STATS.map((s) => (
            <div key={s.label}>
              <p className="font-serif text-2xl font-medium text-white sm:text-3xl">{s.value}</p>
              <p className="mt-1 text-xs text-sage-200/90 sm:text-sm">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
