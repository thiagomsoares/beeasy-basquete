"use client";

import CardSwap, { Card } from "@/components/CardSwap";

export function ProgramsCardSwap() {
  return (
    <div style={{ height: "600px", position: "relative" }}>
      <CardSwap
        cardDistance={100}
        verticalDistance={65}
        delay={3000}
        skewAmount={8}
        pauseOnHover
      >
        <Card customClass="border-white/10 bg-black/60 backdrop-blur text-white">
          <div className="h-full w-full overflow-auto p-6">
            <div className="space-y-2">
              <h3 className="text-2xl font-semibold text-[#ff5402]">
                SUMMER CAMP
              </h3>
              <p className="text-sm text-muted-foreground">2-8 semanas</p>
              <p className="text-sm text-muted-foreground">
                Temporada de desenvolvimento esportivo nas mesmas academias dos
                atletas profissionais.
              </p>
            </div>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>✓ Desenvolvimento técnico acelerado</li>
              <li>✓ Jogos e competições com padrão internacional</li>
              <li>✓ Adaptação cultural supervisionada</li>
            </ul>
            <p className="mt-4 text-sm text-muted-foreground">
              Ideal para: Famílias que querem testar a adaptação do filho ao
              ambiente internacional
            </p>
          </div>
        </Card>

        <Card customClass="border-white/10 bg-black/60 backdrop-blur text-white">
          <div className="h-full w-full overflow-auto p-6">
            <div className="space-y-2">
              <h3 className="text-2xl font-semibold text-[#ff5402]">
                HIGH SCHOOL
              </h3>
              <p className="text-sm text-muted-foreground">Até 4 anos</p>
              <p className="text-sm text-muted-foreground">
                Ensino médio completo no exterior competindo oficialmente pelas
                equipes da escola.
              </p>
            </div>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>✓ Diploma reconhecido por universidades mundiais</li>
              <li>✓ Treinamento de alto nível durante todo o ano letivo</li>
              <li>✓ Exposição para scouts universitário</li>
            </ul>
            <p className="mt-4 text-sm text-muted-foreground">
              Ideal para: Famílias que buscam educação internacional completa e
              de qualidade
            </p>
          </div>
        </Card>

        <Card customClass="border-white/10 bg-black/60 backdrop-blur text-white">
          <div className="h-full w-full overflow-auto p-6">
            <div className="space-y-2">
              <h3 className="text-2xl font-semibold text-[#ff5402]">
                BOARDING SCHOOL
              </h3>
              <p className="text-sm text-muted-foreground">Até 4 anos</p>
              <p className="text-sm text-muted-foreground">
                Internatos de elite com ambiente estruturado 24h, reconhecidos
                mundialmente por formar líderes.
              </p>
            </div>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>✓ Preparação direcionada para universidades de elite</li>
              <li>✓ Rotina que desenvolve responsabilidade</li>
              <li>✓ Suporte integral acadêmico, esportivo e emocional</li>
            </ul>
            <p className="mt-4 text-sm text-muted-foreground">
              Ideal para: Famílias que valorizam excelência e desenvolvimento
              integral com valores sólidos
            </p>
          </div>
        </Card>

        <Card customClass="border-white/10 bg-black/60 backdrop-blur text-white">
          <div className="h-full w-full overflow-auto p-6">
            <div className="space-y-2">
              <h3 className="text-2xl font-semibold text-[#ff5402]">
                BOLSAS ESPORTIVAS
              </h3>
              <p className="text-sm text-muted-foreground">
                Disponível para Boarding School e Universidades
              </p>
              <p className="text-sm text-muted-foreground">
                Bolsas parciais baseadas na performance excepcional do atleta.
              </p>
            </div>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>✓ Redução significativa de custos em instituições de elite</li>
              <li>✓ Reconhecimento do talento</li>
              <li>✓ Avaliação do desempenho esportivo e acadêmico</li>
              <li>✓ Oportunidade de evoluir para bolsas integrais</li>
              <li>
                ✓ Visibilidade maior para quem desejar seguir carreira no
                esporte
              </li>
            </ul>
            <p className="mt-4 text-sm text-muted-foreground">
              Ideal para: Famílias que querem tornar o sonho financeiramente
              viável através do talento do filho
            </p>
          </div>
        </Card>
      </CardSwap>
    </div>
  );
}

