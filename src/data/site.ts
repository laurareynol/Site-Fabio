export const CONTACT = {
  name: "Fabio Camolesi",
  phoneDisplay: "(31) 9 9918-7859",
  whatsappNumber: "5531999187859",
  email: "fabiocamolesi@gmail.com",
  instagramHandle: "@camolesifabio",
  instagramUrl: "https://instagram.com/camolesifabio",
  city: "Belo Horizonte, MG",
};

export const whatsappLink = (message: string) =>
  `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(message)}`;

export const DEFAULT_WHATSAPP_MESSAGE =
  "Olá, Fabio! Encontrei seu site e gostaria de agendar uma sessão de acupuntura.";

export const NAV_LINKS = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Método", href: "#metodo" },
  { label: "Acupuntura", href: "#acupuntura" },
  { label: "Trabalhos", href: "#trabalhos" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Contato", href: "#contato" },
];
