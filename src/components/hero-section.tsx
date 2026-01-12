"use client";

import LightRays from "@/components/LightRays";
import { Button } from "@/components/ui/button";
import ElectricBorder from "@/components/ElectricBorder";
import { PointerHighlight } from "@/components/ui/pointer-highlight";

export function HeroSection() {
  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/basquete_.jpg"
          alt=""
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 pointer-events-none">
          <LightRays
            raysOrigin="top-center"
            raysColor="#ffffff"
            raysSpeed={1.8}
            lightSpread={0.8}
            rayLength={1.5}
            followMouse={true}
            mouseInfluence={0.5}
            noiseAmount={0.1}
            distortion={0.05}
            className="opacity-90"
          />
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-16 md:py-32">
        <div className="mx-auto max-w-4xl space-y-6 text-center lg:mr-auto lg:ml-0 lg:max-w-3xl lg:text-left lg:flex lg:flex-col lg:items-start">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-6xl lg:text-7xl drop-shadow-lg text-white">
            Transforme o talento do seu filho no <span className="text-[#ff5402]">basquete</span> em um{" "}
            <PointerHighlight
              rectangleClassName="bg-[#ff5402]/20 border-[#ff5402]"
              pointerClassName="text-[#ff5402]"
              containerClassName="inline-block"
            >
              <span className="relative z-10">futuro internacional</span>
            </PointerHighlight>
          </h1>
          <p className="text-base text-white md:text-lg lg:text-xl font-medium drop-shadow-md">
            Com a Be Easy, seu filho pode aprimorar o jogo nas melhores
            academias de basquete dos EUA, Canadá e Europa e conquistar
            oportunidades acadêmicas que vão muito além do esporte.
          </p>
          <div className="flex flex-col items-center gap-4 pt-4 sm:flex-row sm:justify-center lg:justify-start">
            <ElectricBorder
              className="w-full sm:w-auto"
              color="#ff5900"
              speed={0.9}
              chaos={0.06}
              borderRadius={50}
            >
              <Button
                asChild
                size="lg"
                className="h-14 w-full rounded-full px-10 text-base md:text-lg"
              >
                <a href="#contato">QUERO SABER MAIS</a>
              </Button>
            </ElectricBorder>
          </div>
          <p className="text-xs text-white/90 md:text-sm drop-shadow-md">
            Mais de X atletas já entraram em quadra internacionalmente com a Be Easy
          </p>
        </div>
      </div>
    </section>
  );
}
