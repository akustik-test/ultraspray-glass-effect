const stats = [
  { v: "250", u: "м² / смена", l: "Производительность одной установки" },
  { v: "8", u: "бригад", l: "Специализированных монтажных команд" },
  { v: "400 000", u: "м² / год", l: "Совокупный потенциал производства" },
];

export function Scale() {
  return (
    <section
      className="relative py-24 sm:py-32 px-6"
      style={{ background: "color-mix(in oklab, var(--brand-dust) 12%, white)" }}
    >
      <div className="max-w-7xl mx-auto">
        <p className="text-xs uppercase tracking-[0.3em] text-[var(--brand-grey)] mb-4">
          07 — Производительность и масштаб
        </p>
        <h2 className="font-bold text-[clamp(2rem,4vw,3.25rem)] leading-[1.05] tracking-tight text-[var(--brand-navy)] text-balance max-w-3xl mb-14">
          Промышленный темп без потери качества.
        </h2>
        <div className="grid md:grid-cols-3 gap-5">
          {stats.map((s, i) => (
            <div
              key={s.l}
              className="glass-strong rounded-[28px] p-8 relative overflow-hidden"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-[var(--brand-navy)]/50">
                0{i + 1}
              </p>
              <div className="mt-4 flex items-baseline gap-2">
                <span
                  className="font-bold text-[clamp(3rem,7vw,5.5rem)] leading-none tracking-tight"
                  style={{ color: "#006e9d" }}
                >
                  {s.v}
                </span>
                <span className="text-[var(--brand-navy)]/60 font-medium">{s.u}</span>
              </div>
              <p className="mt-6 text-[var(--brand-navy)]/75">{s.l}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}