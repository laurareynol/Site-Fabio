import { Activity, Brain, CircleCheck, Waves } from "lucide-react";
import { INDICATIONS, SESSION_STEPS } from "../data/mechanism";

export default function Mechanism() {
  return (
    <section id="acupuntura" className="bg-sage-900 py-20 text-sage-100 sm:py-28">
      <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-sage-400">
          Como a acupuntura age
        </p>
        <h2 className="mt-4 font-serif text-3xl font-medium leading-tight text-white sm:text-4xl">
          Da <span className="italic text-sage-300">tradição milenar</span> à ciência do corpo
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-sage-200">
          A acupuntura pode ser compreendida por duas lentes complementares: a visão energética
          tradicional chinesa e a explicação fisiológica reconhecida pela ciência moderna.
        </p>
      </div>

      <div className="mx-auto mt-16 grid max-w-6xl gap-6 px-5 sm:grid-cols-2 sm:px-8">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-sage-300/20">
            <Waves className="h-5 w-5 text-sage-200" strokeWidth={1.6} />
          </div>
          <h3 className="mt-5 font-serif text-xl font-medium text-white">Visão tradicional</h3>
          <p className="mt-3 text-sm leading-relaxed text-sage-200">
            Segundo a Medicina Tradicional Chinesa, a energia vital (Qi) circula pelo corpo
            através de canais chamados meridianos. Quando esse fluxo é bloqueado ou desequilibrado,
            surgem dor, doença e desarmonia. A inserção de agulhas em pontos específicos ajuda a
            desobstruir e reequilibrar esse fluxo, restaurando a harmonia entre corpo, mente e
            espírito.
          </p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-sage-300/20">
            <Brain className="h-5 w-5 text-sage-200" strokeWidth={1.6} />
          </div>
          <h3 className="mt-5 font-serif text-xl font-medium text-white">Visão científica</h3>
          <p className="mt-3 text-sm leading-relaxed text-sage-200">
            Estudos mostram que a estimulação dos pontos de acupuntura ativa o sistema nervoso
            central, liberando endorfinas e neurotransmissores analgésicos, melhorando a
            microcirculação sanguínea local e modulando respostas inflamatórias, o que explica
            o alívio de dores, a redução do estresse e a melhora do sono.
          </p>
        </div>
      </div>

      <div className="mx-auto mt-20 max-w-6xl px-5 sm:px-8">
        <h3 className="text-center font-serif text-2xl font-medium text-white">
          O que esperar da sua sessão
        </h3>
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {SESSION_STEPS.map((s) => (
            <div key={s.step} className="relative pl-2">
              <span className="font-serif text-4xl font-medium text-sage-300/30">{s.step}</span>
              <h4 className="mt-3 flex items-center gap-2 text-sm font-semibold text-white">
                <Activity className="h-4 w-4 text-sage-300" strokeWidth={1.8} />
                {s.title}
              </h4>
              <p className="mt-2 text-sm leading-relaxed text-sage-300">{s.text}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-20 max-w-6xl px-5 sm:px-8">
        <h3 className="text-center font-serif text-2xl font-medium text-white">
          Principais indicações
        </h3>
        <div className="mx-auto mt-8 flex max-w-4xl flex-wrap justify-center gap-3">
          {INDICATIONS.map((item) => (
            <span
              key={item}
              className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-medium text-sage-100 sm:text-sm"
            >
              <CircleCheck className="h-3.5 w-3.5 text-sage-300" strokeWidth={1.8} />
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
