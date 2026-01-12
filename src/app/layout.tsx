import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClickSpark from "@/components/ClickSpark";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Intercâmbio de Basquete: Bolsas, High School e Summer Camp | Be Easy",
  description:
    "Unimos performance no basquete, preparo acadêmico e orientação familiar para posicionar seu filho no programa certo. Bolsas, High School e Summer Camp com planejamento e suporte 360°.",
  keywords: [
    "intercâmbio de basquete",
    "bolsas de basquete eua",
    "high school basquete",
    "summer camp basquete",
    "be easy intercâmbio",
  ],
  robots: "index, follow",
  openGraph: {
    title: "Intercâmbio de Basquete: Bolsas, High School e Summer Camp | Be Easy",
    description:
      "Unimos performance no basquete, preparo acadêmico e orientação familiar para posicionar seu filho no programa certo. Bolsas, High School e Summer Camp com planejamento e suporte 360°.",
    url: "https://basquete.beeasyintercambio.com",
    siteName: "Be Easy Intercâmbio",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Intercâmbio de Basquete: Bolsas, High School e Summer Camp | Be Easy",
    description:
      "Unimos performance no basquete, preparo acadêmico e orientação familiar para posicionar seu filho no programa certo. Bolsas, High School e Summer Camp com planejamento e suporte 360°.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://beeasyintercambio.com/#organization",
                  "name": "Be Easy Intercâmbio",
                  "url": "https://beeasyintercambio.com",
                  "logo": {
                    "@type": "ImageObject",
                    "url": "https://cdn.prod.website-files.com/64dcd99423e0c39909a28b75/64dd08eb5f76e7cb927092de_be-easey_logotipo.png",
                  },
                  "sameAs": [
                    "https://www.facebook.com/beeasyintercambio",
                    "https://www.instagram.com/beeasyintercambio",
                  ],
                },
                {
                  "@type": "WebPage",
                  "@id": "https://basquete.beeasyintercambio.com/#webpage",
                  "url": "https://basquete.beeasyintercambio.com",
                  "name":
                    "Intercâmbio de Basquete: Bolsas, High School e Summer Camp | Be Easy",
                  "description":
                    "Unimos performance no basquete, preparo acadêmico e orientação familiar para posicionar seu filho no programa certo. Bolsas, High School e Summer Camp com planejamento e suporte 360°.",
                  "isPartOf": {
                    "@id": "https://beeasyintercambio.com/#organization",
                  },
                },
              ],
            }),
          }}
        />
        <ClickSpark
          sparkColor="#fa7000"
          sparkSize={10}
          sparkRadius={15}
          sparkCount={8}
          duration={400}
          easing="ease-out"
          extraScale={1}
        >
          {children}
        </ClickSpark>
      </body>
    </html>
  );
}
