import {
  Card as AppleCard,
  Carousel,
} from "@/components/ui/apple-cards-carousel";

export function CredibilityCarousel() {
  const cards = [
    {
      category: "CREDIBILIDADE BE EASY",
      title: "Conectamos seu filho às melhores academias do Basquete do mundo",
      src: "https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=1400&q=80",
      content: (
        <div className="space-y-4">
          <p>
            Parcerias diretas com as academias mais prestigiadas dos EUA, Canadá
            e Reino Unido, responsáveis por formar atletas olímpicos e estrelas
            da NBA através de uma metodologia comprovada.
          </p>
          <p>
            Nossa equipe trabalha para garantir a excelência que seu filho
            merece. Trabalhamos apenas com instituições regulamentadas e
            seguras, porque sabemos que você está confiando o que tem de mais
            precioso.
          </p>
        </div>
      ),
    },
    {
      category: "CREDIBILIDADE BE EASY",
      title: "EUA, Canadá e Reino Unido",
      src: "https://images.unsplash.com/photo-1521412644187-c49fa049e84d?auto=format&fit=crop&w=1400&q=80",
      content: (
        <p>
          [Logos sugeridos para compor a imagem: Nike Swoosh, Oak Hill Warriors,
          FEIA Falcons, ícones das bandeiras EUA/CAN/UK]
        </p>
      ),
    },
  ];

  const items = cards.map((card, index) => (
    <AppleCard key={card.title} card={card} index={index} layout />
  ));

  return <Carousel items={items} />;
}

