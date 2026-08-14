import { Award, GraduationCap, Sprout, User } from "lucide-react";
import { ScenePlaceholder } from "./PlaceholderArt";
import { CONTACT, DEFAULT_WHATSAPP_MESSAGE, whatsappLink } from "../data/site";

const CREDENTIALS = [
  {
    icon: GraduationCap,
    title: "Formação em Acupuntura",
    text: "Graduação e especialização em Acupuntura e Medicina Tradicional Chinesa.",
  },
  {
    icon: Award,
    title: "+15 anos de experiência",
    text: "Mais de uma década dedicada à prática clínica e ao aprimoramento contínuo.",
  },
  {
    icon: Sprout,
    title: "Terapias complementares",
    text: "Auriculoterapia, moxabustão, ventosaterapia e fitoterapia chinesa.",
  },
];

export default function About() {
  return (
    <section id="sobre" className="bg-sage-50 py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-20">
        <div className="relative mx-auto w-full max-w-md">
          <ScenePlaceholder
            seed="fabio-camolesi-retrato"
            icon={User}
            label="Foto de Fabio Camolesi"
            className="aspect-[4/5] w-full"
            rounded="rounded-[2.5rem]"
          />
          <div className="absolute -bottom-6 -right-6 hidden max-w-[13rem] rounded-2xl bg-white p-5 shadow-lg shadow-sage-900/10 sm:block">
            <p className="font-serif text-2xl font-medium text-sage-800">15+</p>
            <p className="mt-1 text-xs leading-snug text-sage-600">
              anos ajudando pessoas a recuperar o equilíbrio
            </p>
          </div>
        </div>

        <div>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-sage-500">
            Sobre o terapeuta
          </p>
          <h2 className="mt-4 font-serif text-3xl font-medium leading-tight text-sage-900 sm:text-4xl">
            {CONTACT.name}, seu guia para a{" "}
            <span className="italic text-sage-600">cura natural</span>
          </h2>

          <div className="mt-6 space-y-4 text-base leading-relaxed text-sage-700">
            <p>
              Olá, eu sou o Fabio. Sou terapeuta holístico e acupunturista, especialista em
              Medicina Tradicional Chinesa, com mais de 15 anos dedicados a ajudar pessoas a
              aliviar dores, reduzir o estresse e reencontrar o equilíbrio entre corpo e mente.
            </p>
            <p>
              Minha jornada começou com a busca por respostas que a medicina convencional nem
              sempre oferece para o sofrimento crônico. Encontrei na acupuntura e na sabedoria
              chinesa milenar uma abordagem que trata a origem, não apenas o sintoma, e que
              devolve às pessoas a sensação de estarem inteiras.
            </p>
            <p className="font-serif italic text-sage-800">
              "Cada pessoa é única. Meu papel é escutar, entender e caminhar ao seu lado até
              você reencontrar o seu próprio equilíbrio."
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {CREDENTIALS.map(({ icon: Icon, title, text }) => (
              <div key={title}>
                <Icon className="h-5 w-5 text-sage-600" strokeWidth={1.6} />
                <h3 className="mt-3 text-sm font-semibold text-sage-900">{title}</h3>
                <p className="mt-1 text-xs leading-relaxed text-sage-600">{text}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href="#metodo"
              className="inline-flex items-center justify-center rounded-full bg-sage-700 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-sage-800"
            >
              Conhecer os métodos
            </a>
            <a
              href={whatsappLink(DEFAULT_WHATSAPP_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-sage-300 px-6 py-3 text-sm font-medium text-sage-800 transition-colors hover:bg-sage-100"
            >
              Falar com o Fabio
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
