import React from "react";
import { cn } from "@/lib/utils";
import {
  IconAdjustmentsBolt,
  IconCloud,
  IconCurrencyDollar,
  IconEaseInOut,
  IconHeart,
  IconHelp,
  IconRouteAltLeft,
  IconTerminal2,
} from "@tabler/icons-react";

export function FeaturesSectionDemo() {
  const features = [
    {
      title: "METODOLOGIA GLOBAL",
      description:
        "Sistemas táticos modernos com foco total na inteligência de jogo.",
      icon: <IconAdjustmentsBolt />,
    },
    {
      title: "ENSINO ACADÊMICO",
      description: "Suporte pedagógico para alcançar aprovação universitária.",
      icon: <IconHelp />,
    },
    {
      title: "INGLÊS TÉCNICO",
      description: "Idioma aplicado ao futebol: táticas, comunicação e entrevistas.",
      icon: <IconCloud />,
    },
    {
      title: "CONDICIONAMENTO FÍSICO",
      description:
        "Preparação atlética de elite para força, potência e prevenção de lesões.",
      icon: <IconEaseInOut />,
    },
    {
      title: "TECNOLOGIA E ANÁLISE",
      description:
        "Análise de vídeo profissional para aprimorar a leitura tática do jogo.",
      icon: <IconTerminal2 />,
    },
    {
      title: "MENTALIDADE VENCEDORA",
      description:
        "Psicologia esportiva para desenvolver liderança e resiliência em campo.",
      icon: <IconHeart />,
    },
    {
      title: "INFRAESTRUTURA DE PONTA",
      description:
        "Campos oficiais, ginásios modernos e centros de recuperação física.",
      icon: <IconRouteAltLeft />,
    },
    {
      title: "EXPOSIÇÃO INTERNACIONAL",
      description:
        "Treino com atletas do mundo todo para elevar o nível competitivo.",
      icon: <IconCurrencyDollar />,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 py-4 md:py-10 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r py-6 md:py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-orange-50 dark:from-[#ff5402]/20 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-orange-50 dark:from-[#ff5402]/20 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-6 md:px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-6 md:px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-[#ff5402] transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-6 md:px-10">
        {description}
      </p>
    </div>
  );
};

