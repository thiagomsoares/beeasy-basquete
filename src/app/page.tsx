import Ballpit from "@/components/Ballpit";
import { AcademiesSection } from "@/components/academies-section";
import { FeaturesSectionDemo } from "@/components/features-section-demo";
import { HeroSection } from "@/components/hero-section";
import CurvedLoop from "@/components/CurvedLoop";
import { Menu } from "@/components/menu";
import { ProfilesWobble } from "@/components/profiles-wobble";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MaskContainer } from "@/components/ui/svg-mask-effect";
import { PointerHighlight } from "@/components/ui/pointer-highlight";
import ElectricBorder from "@/components/ElectricBorder";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <LandingPage />
    </div>
  );
}

import { FocusCards } from "@/components/ui/focus-cards";

const programs = [
  {
    title: "SUMMER CAMP",
    src: "https://images.unsplash.com/photo-1574623452334-1e0ac2b3ccb4?auto=format&fit=crop&q=80&w=1200",
    description: "2-8 semanas. Temporada de desenvolvimento esportivo nas mesmas academias dos atletas profissionais.",
  },
  {
    title: "HIGH SCHOOL",
    src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=1200",
    description: "Até 4 anos. Ensino médio completo no exterior competindo oficialmente pelas equipes da escola.",
  },
  {
    title: "BOARDING SCHOOL",
    src: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=1200",
    description: "Até 4 anos. Internatos de elite com ambiente estruturado 24h, reconhecidos por formar líderes.",
  },
  {
    title: "BOLSAS ESPORTIVAS",
    src: "https://images.unsplash.com/photo-1505666287802-93144f177342?auto=format&fit=crop&q=80&w=1200",
    description: "Bolsas parciais baseadas na performance excepcional do atleta em Boarding Schools e Universidades.",
  },
];

function LandingPage() {
  return (
    <>
      <Menu />

      <main>
        <HeroSection />

        <section id="educativa" className="border-t">
          <div className="mx-auto max-w-7xl px-4 py-12 md:py-20">
            <div className="max-w-3xl space-y-6">
              <h2 className="text-2xl font-semibold tracking-tight md:text-4xl">
                Como funciona o{" "}
                <PointerHighlight
                  rectangleClassName="bg-[#ff5402]/20 border-[#ff5402]"
                  pointerClassName="text-[#ff5402]"
                  containerClassName="inline-block"
                >
                  <span className="relative z-10">intercâmbio esportivo</span>
                </PointerHighlight>{" "}
                de basquete?
              </h2>
              <p className="text-base text-muted-foreground md:text-lg">
                O intercâmbio esportivo é a oportunidade de seu filho estudar e
                competir no exterior, podendo conquistar bolsas através do
                talento em quadra. Além de treinar em altíssimo nível com
                infraestrutura de ponta, ele cursa uma educação reconhecida
                internacionalmente em instituições de prestígio mundial,
                preparando-se para um futuro de sucesso dentro e fora do
                garrafão.
              </p>
              <ElectricBorder
                className="inline-block"
                color="#ff5900"
                speed={0.9}
                chaos={0.06}
                borderRadius={50}
              >
                <Button asChild variant="outline" className="rounded-full w-full sm:w-auto px-6">
                  <a href="#programas">
                    QUERO SABER MAIS
                  </a>
                </Button>
              </ElectricBorder>
            </div>
          </div>
        </section>

        <section id="programas" className="border-t">
          <div className="mx-auto max-w-7xl px-4 py-12 md:py-20">
            <div className="space-y-6">
              <div className="space-y-2 text-center md:text-left">
                <h2 className="text-2xl font-semibold tracking-tight md:text-4xl">
                  Escolha o{" "}
                  <PointerHighlight
                    rectangleClassName="bg-[#fb6704]/20 border-[#fb6704]"
                    pointerClassName="text-[#fb6704]"
                    containerClassName="inline-block"
                  >
                    <span className="relative z-10">programa ideal</span>
                  </PointerHighlight>{" "}
                  para o perfil do seu filho
                </h2>
                <p className="text-muted-foreground">Para atletas de 13 a 18 anos</p>
              </div>

              <div className="w-full">
                <FocusCards cards={programs} />
              </div>

              <div className="flex justify-center md:justify-start">
                <ElectricBorder
                  className="inline-block w-full sm:w-auto"
                  color="#ff5900"
                  speed={0.9}
                  chaos={0.06}
                  borderRadius={50}
                >
                  <Button asChild size="lg" className="rounded-full w-full sm:w-auto px-6">
                    <a href="#contato">
                      FALE COM UM ESPECIALISTA
                    </a>
                  </Button>
                </ElectricBorder>
              </div>
            </div>
          </div>
        </section>

        <section id="indicacao" className="border-t">
          <div className="mx-auto max-w-7xl px-4 py-12 md:py-20">
            <div className="space-y-10">
              <h2 className="text-2xl font-semibold tracking-tight md:text-4xl text-center md:text-left">
                Este programa é ideal se{" "}
                <PointerHighlight
                  rectangleClassName="bg-[#ff2929]/20 border-[#ff2929]"
                  pointerClassName="text-[#ff2929]"
                  containerClassName="inline-block"
                >
                  <span className="relative z-10">seu filho</span>
                </PointerHighlight>
                ...
              </h2>

              <ProfilesWobble />

              <div className="flex justify-center md:justify-start">
                <ElectricBorder
                  className="inline-block w-full sm:w-auto"
                  color="#ff5900"
                  speed={0.9}
                  chaos={0.06}
                  borderRadius={50}
                >
                  <Button asChild size="lg" className="rounded-full w-full sm:w-auto px-6">
                    <a href="#contato">FALAR COM ESPECIALISTA</a>
                  </Button>
                </ElectricBorder>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full border-y bg-black/5 overflow-hidden">
          <div className="relative w-full h-[8rem] md:h-[12rem] flex items-center justify-center">
            <CurvedLoop
              marqueeText="Be Easy ✦ Basquete ✦ Intercâmbio ✦ Basquete ✦ Intercâmbio ✦"
              speed={1.8}
              curveAmount={0}
              className="fill-[#ff5402]"
            />
          </div>
        </section>

        <section id="credibilidade" className="border-t">
          <div className="mx-auto max-w-7xl px-4 py-12 md:py-20">
            <div className="space-y-10">
              <div className="max-w-3xl space-y-6 text-center md:text-left">
                <h2 className="text-2xl font-semibold tracking-tight md:text-4xl">
                  Conectamos seu filho às{" "}
                  <PointerHighlight
                    rectangleClassName="bg-[#ff6b6b]/20 border-[#ff6b6b]"
                    pointerClassName="text-[#ff6b6b]"
                    containerClassName="inline-block"
                  >
                    <span className="relative z-10">melhores academias</span>
                  </PointerHighlight>{" "}
                  do mundo
                </h2>
                <div className="space-y-4">
                  <p className="text-base text-muted-foreground md:text-lg">
                    Parcerias diretas com as academias mais prestigiadas dos EUA,
                    Canadá e Reino Unido, responsáveis por formar atletas olímpicos
                    e estrelas da NBA através de uma metodologia comprovada.
                  </p>
                  <p className="text-base text-muted-foreground md:text-lg">
                    Nossa equipe trabalha para garantir a excelência que seu filho
                    merece. Trabalhamos apenas com instituições regulamentadas e
                    seguras.
                  </p>
                </div>
              </div>

              <AcademiesSection />
            </div>
          </div>
        </section>

        <section id="estrutura" className="border-t">
          <div className="mx-auto max-w-7xl px-4 py-12 md:py-20">
            <div className="space-y-10">
              <div className="max-w-3xl space-y-4 text-center md:text-left">
                <h2 className="text-2xl font-semibold tracking-tight md:text-4xl">
                  O{" "}
                  <PointerHighlight
                    rectangleClassName="bg-[#ff8f0f]/20 border-[#ff8f0f]"
                    pointerClassName="text-[#ff8f0f]"
                    containerClassName="inline-block"
                  >
                    <span className="relative z-10">ecossistema perfeito</span>
                  </PointerHighlight>{" "}
                  para a evolução do seu filho
                </h2>
                <p className="text-base text-muted-foreground md:text-lg">
                  Conheça os diferenciais de infraestrutura e metodologia que elevam o
                  jogo ao padrão de alto rendimento internacional.
                </p>
              </div>

              <FeaturesSectionDemo />

              <div className="flex justify-center md:justify-start">
                <ElectricBorder
                  className="inline-block w-full sm:w-auto"
                  color="#ff5900"
                  speed={0.9}
                  chaos={0.06}
                  borderRadius={50}
                >
                  <Button asChild size="lg" className="rounded-full w-full sm:w-auto px-6">
                    <a href="#contato">QUERO ESSA ESTRUTURA</a>
                  </Button>
                </ElectricBorder>
              </div>
            </div>
          </div>
        </section>

        <section id="suporte" className="border-t">
          <div className="mx-auto max-w-7xl px-4 py-12 md:py-20">
            <div className="max-w-3xl space-y-6">
              <h2 className="text-2xl font-semibold tracking-tight md:text-4xl">
                <PointerHighlight
                  rectangleClassName="bg-[#ff5402]/20 border-[#ff5402]"
                  pointerClassName="text-[#ff5402]"
                  containerClassName="inline-block mr-2"
                >
                  <span className="relative z-10">Suporte integral</span>
                </PointerHighlight>{" "}
                para toda a família
              </h2>
              <ul className="grid gap-3 sm:grid-cols-2 text-muted-foreground text-sm md:text-base">
                <li>✓ Análise completa do perfil esportivo</li>
                <li>✓ Portfólio e vídeos de highlights</li>
                <li>✓ Documentação e envio para instituições</li>
                <li>✓ Contato direto para bolsas esportivas</li>
                <li>✓ Acompanhamento pessoal na admissão</li>
                <li>✓ Assistência com visto e pré-embarque</li>
                <li>✓ Suporte completo antes e após o embarque</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="contato" className="border-t">
          <div className="mx-auto max-w-7xl px-4 py-12 md:py-20">
            <div className="max-w-3xl mx-auto space-y-8">
              <div className="space-y-3 text-center">
                <h2 className="text-2xl font-semibold tracking-tight md:text-4xl">
                  Fale Conosco e Mude o Futuro do seu Filho
                </h2>
                <p className="text-base text-muted-foreground md:text-lg">
                  Preencha seus dados e receba uma consulta personalizada gratuita:
                </p>
              </div>

              <form className="grid gap-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="nome-pais">Nome dos Pais *</Label>
                    <Input id="nome-pais" name="nome-pais" required />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="email">E-mail *</Label>
                    <Input id="email" name="email" type="email" required />
                  </div>
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="whatsapp">WhatsApp *</Label>
                  <Input id="whatsapp" name="whatsapp" required />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="nome-filho">Nome do filho</Label>
                    <Input id="nome-filho" name="nome-filho" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="idade-filho">Idade do filho</Label>
                    <Input id="idade-filho" name="idade-filho" />
                  </div>
                </div>

                <div className="grid gap-3">
                  <div className="text-sm font-medium">Nível de Basquete</div>
                  <div className="flex flex-wrap gap-4">
                    <div className="flex items-center gap-2">
                      <Checkbox id="nivel-iniciante" name="nivel-iniciante" />
                      <Label htmlFor="nivel-iniciante">Iniciante</Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <Checkbox id="nivel-intermediario" name="nivel-intermediario" />
                      <Label htmlFor="nivel-intermediario">Intermediário</Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <Checkbox id="nivel-avancado" name="nivel-avancado" />
                      <Label htmlFor="nivel-avancado">Avançado</Label>
                    </div>
                  </div>
                </div>

                <div className="grid gap-3">
                  <div className="text-sm font-medium">Interesse em qual programa?</div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="flex items-center gap-2">
                      <Checkbox id="interesse-summer-camp" name="interesse-summer-camp" />
                      <Label htmlFor="interesse-summer-camp">Summer Camp</Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <Checkbox id="interesse-high-school" name="interesse-high-school" />
                      <Label htmlFor="interesse-high-school">High School</Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <Checkbox id="interesse-boarding-school" name="interesse-boarding-school" />
                      <Label htmlFor="interesse-boarding-school">Boarding School</Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <Checkbox id="interesse-bolsas-esportivas" name="interesse-bolsas-esportivas" />
                      <Label htmlFor="interesse-bolsas-esportivas">Bolsas Esportivas</Label>
                    </div>
                  </div>
                </div>

                <ElectricBorder
                  className="w-full"
                  color="#ff5900"
                  speed={0.9}
                  chaos={0.06}
                  borderRadius={50}
                >
                  <Button type="submit" size="lg" className="w-full rounded-full">
                    QUERO MINHA CONSULTORIA AGORA
                  </Button>
                </ElectricBorder>
              </form>
            </div>
          </div>
        </section>

        <section id="fechamento" className="border-t">
          <div className="mx-auto max-w-7xl px-4 py-12 md:py-20">
            <div className="space-y-10">
              <MaskContainer
                className="h-[20rem] md:h-[28rem] rounded-3xl border bg-white dark:bg-black"
                viewportClassName="bg-[#ff5402]"
                revealText={
                  <p className="mx-auto max-w-4xl text-center text-2xl md:text-4xl font-bold text-slate-800 dark:text-white">
                    Pronto para abrir as portas do mundo para seu filho através do esporte?
                  </p>
                }
              >
                Entre em contato e vamos construir juntos o futuro internacional que ele merece.
              </MaskContainer>

              <div className="max-w-3xl space-y-6">
                <div className="space-y-4">
                  <p className="text-base text-muted-foreground md:text-lg">
                    Sabemos que confiar o futuro do seu filho é uma decisão
                    importante. Por isso, a Be Easy trabalha como sua parceira em
                    cada passo desta jornada.
                  </p>
                  <p className="text-base text-muted-foreground md:text-lg">
                    Nossa equipe especializada cuida de todos os detalhes para que
                    vocês tenham segurança total. Com mais de 200 parcerias
                    internacionais, estamos prontos para abrir as portas do mundo
                    para seu filho.
                  </p>
                </div>
                <div className="flex justify-center md:justify-start">
                  <ElectricBorder
                    className="inline-block w-full sm:w-auto"
                    color="#ff5900"
                    speed={0.9}
                    chaos={0.06}
                    borderRadius={50}
                  >
                    <Button asChild size="lg" className="rounded-full w-full sm:w-auto px-6">
                      <a href="#contato">QUERO SUPORTE</a>
                    </Button>
                  </ElectricBorder>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t w-full overflow-hidden">
          <div className="relative w-full h-[500px] md:h-[600px]">
            <Ballpit
              count={50}
              gravity={0.8}
              friction={0.998}
              wallBounce={0.95}
              followCursor={false}
              colors={["#EB7D2B", "#eeeeee", "#BE580C"]}
              textureUrl="/texture-ball.jpg"
              minSize={0.6}
              maxSize={1}
              maxVelocity={0.25}
            />
          </div>
        </section>
      </main>
    </>
  );
}
