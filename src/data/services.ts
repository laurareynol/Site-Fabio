export type Service = {
  id: string;
  title: string;
  short: string;
  description: string;
  benefits: string[];
};

export const SERVICES: Service[] = [
  {
    id: "acupuntura",
    title: "Acupuntura Tradicional",
    short: "Agulhas finas em pontos estratégicos dos meridianos.",
    description:
      "Inserção de agulhas estéreis e ultrafinas em pontos específicos do corpo para desbloquear o fluxo de energia (Qi), estimular a autorregulação e aliviar dores agudas e crônicas.",
    benefits: ["Dores musculares e articulares", "Enxaquecas e tensão", "Ansiedade e insônia"],
  },
  {
    id: "auriculoterapia",
    title: "Auriculoterapia",
    short: "Estímulo de pontos reflexos na orelha.",
    description:
      "Técnica que utiliza pontos específicos da orelha, um verdadeiro mapa do corpo, para tratar desequilíbrios físicos e emocionais de forma suave e não invasiva.",
    benefits: ["Compulsão alimentar", "Estresse e ansiedade", "Apoio a dependências"],
  },
  {
    id: "moxabustao",
    title: "Moxabustão",
    short: "Calor terapêutico da erva moxa (artemísia).",
    description:
      "Aplicação de calor por meio da combustão da erva moxa sobre pontos de acupuntura, aquecendo e tonificando a energia vital. Ideal para quadros de frio, fadiga e baixa imunidade.",
    benefits: ["Fadiga e baixa energia", "Cólicas e desconfortos", "Fortalecimento imunológico"],
  },
  {
    id: "ventosaterapia",
    title: "Ventosaterapia",
    short: "Ventosas a vácuo para soltar a musculatura.",
    description:
      "Uso de ventosas de sucção sobre a pele para liberar tensões musculares profundas, melhorar a circulação sanguínea e drenar toxinas dos tecidos.",
    benefits: ["Tensão muscular profunda", "Má circulação", "Recuperação pós-esforço"],
  },
  {
    id: "fitoterapia",
    title: "Fitoterapia Chinesa",
    short: "Fórmulas naturais à base de plantas.",
    description:
      "Prescrição de combinações de ervas medicinais chinesas, individualizadas para apoiar o tratamento e potencializar os resultados entre as sessões.",
    benefits: ["Suporte hormonal", "Digestão e imunidade", "Equilíbrio energético contínuo"],
  },
  {
    id: "tuina",
    title: "Tuiná (Massagem Terapêutica)",
    short: "Massagem chinesa sobre os meridianos.",
    description:
      "Manipulação manual de músculos e pontos energéticos que combina técnicas de massagem, alongamento e pressão para restaurar a mobilidade e o bem-estar.",
    benefits: ["Rigidez e dores nas costas", "Relaxamento profundo", "Melhora da mobilidade"],
  },
];
