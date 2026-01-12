"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useOutsideClick } from "@/hooks/use-outside-click";

export default function ExpandableCardDemo() {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
    null
  );
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0 grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{
                opacity: 0,
                transition: { duration: 0.05 },
              }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[500px] h-full md:h-fit md:max-h-[90%] flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <img
                  width={200}
                  height={200}
                  src={active.src}
                  alt={active.title}
                  className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                />
              </motion.div>

              <div>
                <div className="flex justify-between items-start p-4">
                  <div>
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-bold text-neutral-700 dark:text-neutral-200"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-neutral-600 dark:text-neutral-400"
                    >
                      {active.description}
                    </motion.p>
                  </div>

                  <motion.a
                    layoutId={`button-${active.title}-${id}`}
                    href={active.ctaLink}
                    onClick={() => setActive(null)}
                    className="px-4 py-3 text-sm rounded-full font-bold bg-gradient-to-r from-[#ff5402] to-[#ff9e33] text-white hover:from-[#ff6d2b] hover:to-[#ffc33f]"
                  >
                    {active.ctaText}
                  </motion.a>
                </div>
                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className="max-w-2xl mx-auto w-full gap-4 px-4">
        {cards.map((card) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={`card-${card.title}-${id}`}
            onClick={() => setActive(card)}
            className="p-4 mb-4 flex flex-col md:flex-row justify-between items-center bg-white/5 hover:bg-white/10 dark:hover:bg-neutral-800 rounded-2xl cursor-pointer border border-white/5"
          >
            <div className="flex gap-4 flex-col md:flex-row">
              <motion.div layoutId={`image-${card.title}-${id}`}>
                <img
                  width={100}
                  height={100}
                  src={card.src}
                  alt={card.title}
                  className="h-40 w-40 md:h-14 md:w-14 rounded-lg object-cover object-top"
                />
              </motion.div>
              <div>
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className="font-medium text-neutral-800 dark:text-neutral-200 text-center md:text-left"
                >
                  {card.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${card.description}-${id}`}
                  className="text-neutral-600 dark:text-neutral-400 text-center md:text-left"
                >
                  {card.description}
                </motion.p>
              </div>
            </div>
            <motion.button
              layoutId={`button-${card.title}-${id}`}
              className="px-4 py-2 text-sm rounded-full font-bold bg-white/10 hover:bg-[#ff5402] hover:text-white text-white mt-4 md:mt-0"
            >
              {card.ctaText}
            </motion.button>
          </motion.div>
        ))}
      </ul>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{
        opacity: 0,
        transition: { duration: 0.05 },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

const cards = [
  {
    description: "2-8 semanas",
    title: "SUMMER CAMP",
    src: "https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=1200&q=80",
    ctaText: "SAIBA MAIS",
    ctaLink: "#contato",
    content: () => {
      return (
        <div className="space-y-4">
          <p>
            Temporada de desenvolvimento esportivo nas mesmas academias dos
            atletas profissionais.
          </p>
          <ul className="space-y-2">
            <li>✓ Desenvolvimento técnico acelerado</li>
            <li>✓ Jogos e competições com padrão internacional</li>
            <li>✓ Adaptação cultural supervisionada</li>
          </ul>
          <p>
            Ideal para: Famílias que querem testar a adaptação do filho ao
            ambiente internacional
          </p>
        </div>
      );
    },
  },
  {
    description: "Até 4 anos",
    title: "HIGH SCHOOL",
    src: "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=1200&q=80",
    ctaText: "SAIBA MAIS",
    ctaLink: "#contato",
    content: () => {
      return (
        <div className="space-y-4">
          <p>
            Ensino médio completo no exterior competindo oficialmente pelas
            equipes da escola.
          </p>
          <ul className="space-y-2">
            <li>✓ Diploma reconhecido por universidades mundiais</li>
            <li>✓ Treinamento de alto nível durante todo o ano letivo</li>
            <li>✓ Exposição para scouts universitário</li>
          </ul>
          <p>
            Ideal para: Famílias que buscam educação internacional completa e de
            qualidade
          </p>
        </div>
      );
    },
  },
  {
    description: "Até 4 anos",
    title: "BOARDING SCHOOL",
    src: "https://images.unsplash.com/photo-1521412644187-c49fa049e84d?auto=format&fit=crop&w=1200&q=80",
    ctaText: "SAIBA MAIS",
    ctaLink: "#contato",
    content: () => {
      return (
        <div className="space-y-4">
          <p>
            Internatos de elite com ambiente estruturado 24h, reconhecidos
            mundialmente por formar líderes.
          </p>
          <ul className="space-y-2">
            <li>✓ Preparação direcionada para universidades de elite</li>
            <li>✓ Rotina que desenvolve responsabilidade</li>
            <li>✓ Suporte integral acadêmico, esportivo e emocional</li>
          </ul>
          <p>
            Ideal para: Famílias que valorizam excelência e desenvolvimento
            integral com valores sólidos
          </p>
        </div>
      );
    },
  },
  {
    description: "Disponível para Boarding e Universidades",
    title: "BOLSAS ESPORTIVAS",
    src: "https://images.unsplash.com/photo-1519861155730-0b5fbf0dd889?auto=format&fit=crop&w=1200&q=80",
    ctaText: "SAIBA MAIS",
    ctaLink: "#contato",
    content: () => {
      return (
        <div className="space-y-4">
          <p>Bolsas parciais baseadas na performance excepcional do atleta.</p>
          <ul className="space-y-2">
            <li>✓ Redução significativa de custos em instituições de elite</li>
            <li>✓ Reconhecimento do talento</li>
            <li>✓ Avaliação do desempenho esportivo e acadêmico</li>
            <li>✓ Oportunidade de evoluir para bolsas integrais</li>
            <li>
              ✓ Visibilidade maior para quem desejar seguir carreira no esporte
            </li>
          </ul>
          <p>
            Ideal para: Famílias que querem tornar o sonho financeiramente
            viável através do talento do filho
          </p>
        </div>
      );
    },
  },
];

