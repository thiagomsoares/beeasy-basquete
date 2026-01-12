import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import {
  IconBallBasketball,
  IconTrophy,
  IconCurrencyDollar,
  IconStar,
} from "@tabler/icons-react";

export function ProfilesBento() {
  const items = [
    {
      title: "Joga basquete no colégio ou clube local",
      description:
        "E você quer usar a paixão dele pelo esporte como ferramenta para conquistar a fluência no inglês e uma vivência cultural inesquecível, sem a pressão do profissionalismo imediato.",
      header: (
        <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 overflow-hidden relative">
          <img
            src="https://images.unsplash.com/photo-1519861155730-0b5fbf0dd889?auto=format&fit=crop&w=800&q=80"
            alt="Basquete local"
            className="object-cover w-full h-full opacity-60 group-hover/bento:scale-110 transition duration-500"
          />
        </div>
      ),
      icon: <IconBallBasketball className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Sonha em jogar profissionalmente",
      description:
        "Mas sente que a estrutura local limita seu desenvolvimento. Você quer oferecer acesso a ginásios de ponta, preparação física especializada e competição de alto nível.",
      header: (
        <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 overflow-hidden relative">
          <img
            src="https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=800&q=80"
            alt="Basquete profissional"
            className="object-cover w-full h-full opacity-60 group-hover/bento:scale-110 transition duration-500"
          />
        </div>
      ),
      icon: <IconTrophy className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Busca bolsas de estudos esportivas",
      description:
        "E você busca uma alternativa viável, utilizando o desempenho dele nas quadras para conquistar bolsas que tornem a educação internacional acessível financeiramente.",
      header: (
        <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 overflow-hidden relative">
          <img
            src="https://images.unsplash.com/photo-1504450758481-7338eba7524a?auto=format&fit=crop&w=800&q=80"
            alt="Bolsas de estudo"
            className="object-cover w-full h-full opacity-60 group-hover/bento:scale-110 transition duration-500"
          />
        </div>
      ),
      icon: <IconCurrencyDollar className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Demonstra talento e precisa de visibilidade",
      description:
        'E você busca colocá-lo na vitrine certa, onde treinadores universitários e "scouts" estão presentes, transformando o talento dele em uma oportunidade real de futuro.',
      header: (
        <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 overflow-hidden relative">
          <img
            src="https://images.unsplash.com/photo-1511406361295-0a1ff814c0ce?auto=format&fit=crop&w=800&q=80"
            alt="Visibilidade"
            className="object-cover w-full h-full opacity-60 group-hover/bento:scale-110 transition duration-500"
          />
        </div>
      ),
      icon: <IconStar className="h-4 w-4 text-neutral-500" />,
    },
  ];

  return (
    <BentoGrid className="max-w-6xl mx-auto md:auto-rows-[20rem] md:grid-cols-2">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          icon={item.icon}
          className={i === 0 || i === 3 ? "md:col-span-1" : ""}
        />
      ))}
    </BentoGrid>
  );
}

