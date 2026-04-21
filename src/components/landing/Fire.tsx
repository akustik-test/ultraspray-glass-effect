const layers = [
  { mm: 15, label: "R 30", group: "Г1 · В1", desc: "Защита металлоконструкций" },
  { mm: 20, label: "R 60", group: "Г1 · В1 · Д2", desc: "Стандарт КМ1" },
  { mm: 30, label: "R 90", group: "Г1 · В1 · Д2 · Т2", desc: "Максимальная защита" },
];

export function Fire() {
  return (
    <section
      id="fire"
      className="relative py-24 sm:py-32 px-6 text-white overflow-hidden"
      style={{ backgroundColor: "var(--brand-navy)" }}
    >
      {/* subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />
      <div className="relative max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-10 items-end mb-14">
          <div className="lg:col-span-7">
            <p className="text-xs uppercase tracking-[0.3em] text-white/60 mb-4">
              05 — Огнезащитные свойства
            </p>
            <h2 className="font-light text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.05] tracking-tight text-balance">
              Класс <span className="font-bold">КМ1</span>: Г1 · В1 · Д2 · Т2.
              <br />Безопасность, считанная по слоям.
            </h2>
          </div>
          <p className="lg:col-span-5 font-light text-white/70 text-lg">
            Толщина напыления определяет предел огнестойкости несущей
            конструкции. От базовой защиты металла до максимальной — R 90 минут.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {layers.map((l, i) => (
            <div
              key={l.mm}
              className="relative rounded-[24px] p-7 overflow-hidden border border-white/10"
              style={{
                background: `linear-gradient(155deg, color-mix(in oklab, var(--brand-deep) ${
                  20 + i * 25
                }%, transparent), color-mix(in oklab, var(--brand-navy) 60%, transparent))`,
              }}
            >
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-6xl font-bold tracking-tight">{l.mm}</span>
                <span className="text-xl font-light text-white/60">мм</span>
              </div>
              {/* layer visual */}
              <div className="relative h-20 rounded-lg overflow-hidden mb-6 border border-white/10">
                <div className="absolute inset-x-0 bottom-0 h-3 bg-[var(--brand-grey)]/50" />
                <div
                  className="absolute inset-x-0 bottom-3"
                  style={{
                    height: `${30 + i * 18}%`,
                    background:
                      "linear-gradient(to top, var(--brand-deep), var(--brand-dust))",
                  }}
                />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-white/50">Предел</p>
                  <p className="text-2xl font-semibold">{l.label}</p>
                </div>
                <div className="text-right">
                  <p className="text-xs uppercase tracking-[0.2em] text-white/50">Группа</p>
                  <p className="font-semibold text-[var(--brand-dust)]">{l.group}</p>
                </div>
              </div>
              <p className="mt-5 font-light text-white/70 text-sm">{l.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}