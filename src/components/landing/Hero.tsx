import heroImg from "@/assets/hero-ceiling.jpg";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen w-full overflow-hidden">
      <img
        src={heroImg}
        alt="Потолок общественного пространства с напылением Ультраспрей"
        width={1920}
        height={1080}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--brand-navy)]/50 via-[var(--brand-navy)]/20 to-[var(--brand-navy)]/60" />

      {/* Floating chips */}
      <div className="hidden lg:block absolute top-32 left-10 glass rounded-2xl px-4 py-3 animate-float">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--brand-navy)]/70">α_w</p>
        <p className="text-2xl font-bold text-[var(--brand-navy)]">0.50–0.90</p>
      </div>
      <div
        className="hidden lg:block absolute bottom-32 right-10 glass rounded-2xl px-4 py-3 animate-float"
        style={{ animationDelay: "1.5s" }}
      >
        <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--brand-navy)]/70">КМ1 · ФЗ-123</p>
        <p className="text-2xl font-bold text-[var(--brand-navy)]">Г1 В1 Д2 Т2</p>
      </div>

      <div className="relative z-10 flex min-h-screen items-center justify-center px-6 pt-28 pb-16">
        <div className="glass-strong rounded-[28px] max-w-4xl w-full px-8 sm:px-12 py-10 sm:py-14 text-center">
          <p className="text-xs sm:text-sm uppercase tracking-[0.35em] text-[var(--brand-navy)]/70 mb-5">
            Acoustic Group · Россия
          </p>
          <h1 className="font-bold text-balance text-[clamp(2rem,5vw,4rem)] leading-[1.05] tracking-tight text-[var(--brand-navy)]">
            Ультраспрей —{" "}
            <span className="relative">
              напыляемая акустика
              <span className="absolute -bottom-1 left-0 right-0 h-1 bg-[var(--brand-orange)] rounded-full" />
            </span>{" "}
            и огнезащита для общественных пространств
          </h1>
          <p className="mt-6 text-base sm:text-lg text-[var(--brand-navy)]/75 max-w-2xl mx-auto">
            Целлюлозный материал, наносимый напылением. Снижает реверберацию,
            защищает несущие конструкции от огня — без подвесных потолков.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button variant="hero" size="xl" asChild>
              <a href="#comparison">Подобрать исполнение</a>
            </Button>
            <Button variant="glassDark" size="xl" asChild>
              <a href="#form">Получить расчёт</a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/80 text-xs uppercase tracking-[0.3em] flex flex-col items-center gap-2">
        <span>scroll</span>
        <span className="w-px h-10 bg-white/60" />
      </div>
    </section>
  );
}