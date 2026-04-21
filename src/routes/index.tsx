import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/landing/Nav";
import { Hero } from "@/components/landing/Hero";
import { BrandTech } from "@/components/landing/BrandTech";
import { Comparison } from "@/components/landing/Comparison";
import { Acoustic } from "@/components/landing/Acoustic";
import { Fire } from "@/components/landing/Fire";
import { Adaptivity } from "@/components/landing/Adaptivity";
import { Scale } from "@/components/landing/Scale";
import { Gallery } from "@/components/landing/Gallery";
import { Docs } from "@/components/landing/Docs";
import { Cases } from "@/components/landing/Cases";
import { ContactForm } from "@/components/landing/Form";
import { Footer } from "@/components/landing/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ультраспрей — напыляемая акустика и огнезащита | Acoustic Group" },
      {
        name: "description",
        content:
          "Ультраспрей — целлюлозное напыление для акустики (α_w 0,50–0,90) и огнезащиты КМ1 несущих конструкций общественных пространств. Решение Acoustic Group.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-background text-[var(--brand-navy)]">
      <Nav />
      <Hero />
      <BrandTech />
      <Comparison />
      <Acoustic />
      <Fire />
      <Adaptivity />
      <Scale />
      <Gallery />
      <Docs />
      <Cases />
      <ContactForm />
      <Footer />
    </main>
  );
}
