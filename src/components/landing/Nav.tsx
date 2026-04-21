import { Button } from "@/components/ui/button";

export function Nav() {
  const links = [
    { href: "#tech", label: "Технология" },
    { href: "#fire", label: "Огнезащита" },
    { href: "#acoustic", label: "Акустика" },
    { href: "#gallery", label: "Объекты" },
    { href: "#cases", label: "Кейсы" },
    { href: "#docs", label: "Документы" },
  ];
  return (
    <header className="fixed top-4 left-1/2 z-50 -translate-x-1/2 w-[min(1200px,calc(100%-2rem))]">
      <div className="glass rounded-full px-5 py-3 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2">
          <span className="block w-7 h-7 rounded-full bg-[var(--brand-dust)] relative overflow-hidden">
            <span className="absolute inset-1.5 rounded-full bg-white/70" />
          </span>
          <span className="font-bold tracking-tight text-[var(--brand-navy)]">
            ULTRA<span className="text-[var(--brand-dust)]">SPRAY</span>
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-[var(--brand-navy)]/80">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-[var(--brand-navy)] transition">
              {l.label}
            </a>
          ))}
        </nav>
        <Button variant="hero" size="sm" asChild>
          <a href="#form">Расчёт</a>
        </Button>
      </div>
    </header>
  );
}