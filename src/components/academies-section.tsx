import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import {
  IconTrophy,
  IconSchool,
  IconBuildingSkyscraper,
  IconMapPin,
  IconCertificate,
  IconWorld,
} from "@tabler/icons-react";
import Image from "next/image";

export function AcademiesSection() {
  return (
    <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          icon={item.icon}
          className={i === 3 || i === 6 ? "md:col-span-2" : ""}
        />
      ))}
    </BentoGrid>
  );
}

const Skeleton = ({ src }: { src: string }) => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl overflow-hidden relative">
    <Image
      src={src}
      alt="Academy feature"
      fill
      className="object-cover transition duration-200 group-hover/bento:scale-105"
    />
    <div className="absolute inset-0 bg-black/20 group-hover/bento:bg-black/10 transition duration-200" />
  </div>
);

const items = [
  {
    title: "EUA: O Berço do Basquete",
    description: "Academias de elite na Flórida, Califórnia e Virgínia.",
    header: <Skeleton src="https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=800&q=80" />,
    icon: <IconMapPin className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Canadá: Excelência Acadêmica",
    description: "Instituições em Toronto e Vancouver com foco educacional.",
    header: <Skeleton src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80" />,
    icon: <IconMapPin className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Europa: Formação Tática",
    description: "Centros de treinamento na Espanha e Reino Unido.",
    header: <Skeleton src="https://images.unsplash.com/photo-1577471488278-16eec37ffcc2?auto=format&fit=crop&w=800&q=80" />,
    icon: <IconWorld className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Infraestrutura Olímpica",
    description:
      "Quadras oficiais, centros de performance e recuperação de nível profissional.",
    header: <Skeleton src="https://images.unsplash.com/photo-1504450758481-7338eba7524a?auto=format&fit=crop&w=800&q=80" />,
    icon: <IconBuildingSkyscraper className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Metodologia Vencedora",
    description: "Treinadores com experiência na NBA e ligas europeias.",
    header: <Skeleton src="https://images.unsplash.com/photo-1574623452334-1e0ac2b3ccb4?auto=format&fit=crop&w=800&q=80" />,
    icon: <IconTrophy className="h-4 w-4 text-neutral-500" />,
  },
];
