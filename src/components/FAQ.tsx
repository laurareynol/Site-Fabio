import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FAQ_ITEMS } from "../data/faq";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <div className="text-center">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-sage-500">
            Perguntas frequentes
          </p>
          <h2 className="mt-4 font-serif text-3xl font-medium leading-tight text-sage-900 sm:text-4xl">
            Tire suas <span className="italic text-sage-600">dúvidas</span>
          </h2>
        </div>

        <div className="mt-12 divide-y divide-sage-100 border-y border-sage-100">
          {FAQ_ITEMS.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={item.question}>
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-base font-medium text-sage-900 sm:text-lg">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-sage-500 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`grid overflow-hidden transition-all duration-300 ${
                    isOpen ? "grid-rows-[1fr] pb-6 opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-xl text-sm leading-relaxed text-sage-600">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
