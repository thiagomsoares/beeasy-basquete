"use client";

import React from "react";
import { WobbleCard } from "@/components/ui/wobble-card";

export function ProfilesWobble() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full bg-[#ff5402] min-h-[250px] lg:min-h-[300px]"
        className=""
      >
        <div className="max-w-xs">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Joga basquete no colégio ou clube local
          </h2>
          <p className="mt-4 text-left text-base/6 text-neutral-200">
            E você quer usar a paixão dele pelo esporte como ferramenta para
            conquistar a fluência no inglês e uma vivência cultural inesquecível,
            sem a pressão do profissionalismo imediato.
          </p>
        </div>
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 min-h-[250px] lg:min-h-[300px] bg-zinc-900">
        <h2 className="max-w-80 text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
          Sonha em jogar profissionalmente
        </h2>
        <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
          Mas sente que a estrutura local limita seu desenvolvimento. Você quer
          oferecer acesso a ginásios de ponta, preparação física especializada e
          competição de alto nível.
        </p>
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-zinc-800 min-h-[250px] lg:min-h-[300px]">
        <div className="max-w-sm">
          <h2 className="max-w-sm md:max-w-lg text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Tem potencial acadêmico e esportivo
          </h2>
          <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
            E você busca uma alternativa viável, utilizando o desempenho dele nas
            quadras para conquistar bolsas de estudos que tornem a educação
            internacional acessível financeiramente.
          </p>
        </div>
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-[#ff5402]/80 min-h-[250px] lg:min-h-[300px]">
        <div className="max-w-sm">
          <h2 className="max-w-sm md:max-w-lg text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Demonstra talento e precisa de visibilidade
          </h2>
          <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
            E você busca colocá-lo na vitrine certa, onde treinadores
            universitários e "scouts" estão presentes, transformando o talento
            dele em uma oportunidade real de futuro.
          </p>
        </div>
      </WobbleCard>
    </div>
  );
}
