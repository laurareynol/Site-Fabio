export type Testimonial = {
  name: string;
  role: string;
  category: string;
  quote: string;
  rating: number;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Renata Souza",
    role: "Mãe da Laura, 7 anos",
    category: "Atendimento infantil",
    quote:
      "Minha filha tinha crises de ansiedade antes das provas. Depois de algumas sessões de auriculoterapia com o Fabio, ela ficou muito mais tranquila e dorme melhor. Ele tem um jeito incrível com crianças.",
    rating: 5,
  },
  {
    name: "Camila Torres",
    role: "Gestante, 32 semanas",
    category: "Gestação",
    quote:
      "Fiz acupuntura durante toda a gravidez para aliviar as dores nas costas e a ansiedade. O Fabio é extremamente cuidadoso e atento às particularidades de cada fase da gestação. Recomendo de olhos fechados.",
    rating: 5,
  },
  {
    name: "Pedro Almeida",
    role: "17 anos, estudante",
    category: "Adolescentes",
    quote:
      "Eu tinha muita dor de cabeça por causa do estresse do vestibular. As sessões me ajudaram a relaxar e a dormir melhor. Nunca imaginei que acupuntura pudesse fazer tanta diferença.",
    rating: 5,
  },
  {
    name: "Ondina Ferreira",
    role: "68 anos, aposentada",
    category: "Terceira idade",
    quote:
      "Sofria com dores nas articulações há anos. Com o tratamento do Fabio, recuperei parte da minha mobilidade e consigo caminhar sem tanta dor. Ele é atencioso e explica tudo com muita paciência.",
    rating: 5,
  },
  {
    name: "Marcos Villela",
    role: "45 anos, executivo",
    category: "Estresse e ansiedade",
    quote:
      "Rotina corrida, muito estresse e insônia. Depois de um mês de acompanhamento já sentia diferença no sono e na disposição. O ambiente do consultório também é muito acolhedor.",
    rating: 5,
  },
  {
    name: "Juliana Prado",
    role: "29 anos, professora",
    category: "Fertilidade",
    quote:
      "Estávamos tentando engravidar há um tempo e decidi tentar a acupuntura como apoio complementar ao tratamento médico. O cuidado e a escuta do Fabio fizeram toda a diferença nesse processo.",
    rating: 5,
  },
  {
    name: "Roberto Nunes",
    role: "54 anos, atleta amador",
    category: "Dor crônica",
    quote:
      "Uma lesão antiga no joelho me incomodava há anos. Com ventosaterapia e acupuntura consegui reduzir muito a dor e voltar a correr. Profissional extremamente competente.",
    rating: 5,
  },
  {
    name: "Beatriz Lima",
    role: "38 anos, mãe de dois filhos",
    category: "Bem-estar geral",
    quote:
      "Comecei o tratamento para dores no pescoço e acabei descobrindo um cuidado completo com meu bem-estar. O Fabio é atencioso, pontual e realmente se importa com cada paciente.",
    rating: 5,
  },
];
