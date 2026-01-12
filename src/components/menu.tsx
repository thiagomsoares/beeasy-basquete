import { Button } from "@/components/ui/button";
import ElectricBorder from "@/components/ElectricBorder";

export function Menu() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/40 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3">
        <a href="#hero" className="font-semibold tracking-tight text-lg">
          Be Easy
        </a>
        <ElectricBorder
          className="inline-block"
          color="#ff5900"
          speed={0.9}
          chaos={0.06}
          borderRadius={50}
        >
          <Button asChild className="rounded-full px-4 md:px-6">
            <a href="#contato">
              <span className="hidden sm:inline">DESCUBRA AS OPORTUNIDADES</span>
              <span className="sm:hidden">CONTATO</span>
            </a>
          </Button>
        </ElectricBorder>
      </div>
    </header>
  );
}

