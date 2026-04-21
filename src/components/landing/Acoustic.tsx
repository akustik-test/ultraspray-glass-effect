import { Button } from "@/components/ui/button";

const points = [
  { f: 125, a: 0.35 },
  { f: 250, a: 0.65 },
  { f: 500, a: 0.88 },
  { f: 1000, a: 0.95 },
  { f: 2000, a: 0.92 },
  { f: 4000, a: 0.9 },
];

export function Acoustic() {
  const W = 800;
  const H = 360;
  const padL = 56;
  const padB = 44;
  const padT = 24;
  const padR = 24;
  const xs = points.map((_, i) => padL + (i / (points.length - 1)) * (W - padL - padR));
  const ys = points.map((p) => padT + (1 - p.a) * (H - padT - padB));
  const linePath = xs.map((x, i) => `${i === 0 ? "M" : "L"} ${x} ${ys[i]}`).join(" ");
  const areaPath = `${linePath} L ${xs[xs.length - 1]} ${H - padB} L ${xs[0]} ${H - padB} Z`;

  return (
    <section id="acoustic" className="relative py-24 sm:py-32 px-6 bg-background">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5">
          <p className="text-xs uppercase tracking-[0.3em] text-[var(--brand-grey)] mb-4">
            04 — Акустическая эффективность
          </p>
          <h2 className="font-bold text-[clamp(2rem,4vw,3.25rem)] leading-[1.05] tracking-tight text-[var(--brand-navy)] text-balance">
            Индекс α_w от 0,50 до 0,90.
          </h2>
          <p className="mt-6 text-[var(--brand-navy)]/70">
            Пористая структура напыления гасит звуковые волны в широком частотном
            диапазоне. Падающая энергия преобразуется в тепло за счёт вязкого
            трения воздуха в каналах материала — реверберация снижается на
            40–70%.
          </p>
          <div className="mt-8 grid grid-cols-3 gap-3">
            {[
              { v: "0.95", l: "при 1000 Гц" },
              { v: "−65%", l: "реверберация" },
              { v: "ISO", l: "354 / 11654" },
            ].map((s) => (
              <div key={s.l} className="glass rounded-xl px-3 py-3 text-center">
                <p className="text-xl font-bold text-[var(--brand-navy)]">{s.v}</p>
                <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--brand-navy)]/60 mt-1">
                  {s.l}
                </p>
              </div>
            ))}
          </div>
          <Button variant="hero" size="lg" className="mt-8" asChild>
            <a href="#docs">Скачать протокол</a>
          </Button>
        </div>

        <div className="lg:col-span-7">
          <div className="glass-strong rounded-[28px] p-6 sm:p-8 grid-blueprint">
            <div className="flex items-center justify-between mb-2">
              <p className="text-xs uppercase tracking-[0.25em] text-[var(--brand-navy)]/70">
                Коэффициент звукопоглощения α
              </p>
              <p className="text-xs uppercase tracking-[0.25em] text-[var(--brand-navy)]/70">
                Слой 30 мм
              </p>
            </div>
            <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto" role="img" aria-label="График звукопоглощения">
              <defs>
                <linearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#006e9d" stopOpacity="0.45" />
                  <stop offset="100%" stopColor="#91b5cf" stopOpacity="0" />
                </linearGradient>
              </defs>
              {/* gridlines */}
              {[0, 0.25, 0.5, 0.75, 1].map((g) => {
                const y = padT + (1 - g) * (H - padT - padB);
                return (
                  <g key={g}>
                    <line x1={padL} x2={W - padR} y1={y} y2={y} stroke="#22405010" />
                    <text x={padL - 10} y={y + 4} textAnchor="end" fontSize="11" fill="#223c50" opacity="0.6">
                      {g.toFixed(2)}
                    </text>
                  </g>
                );
              })}
              {points.map((p, i) => (
                <text
                  key={p.f}
                  x={xs[i]}
                  y={H - padB + 18}
                  textAnchor="middle"
                  fontSize="11"
                  fill="#223c50"
                  opacity="0.7"
                >
                  {p.f}
                </text>
              ))}
              <text x={padL} y={H - 6} fontSize="10" fill="#223c50" opacity="0.5">
                Частота, Гц
              </text>
              <path d={areaPath} fill="url(#grad)" />
              <path d={linePath} fill="none" stroke="#006e9d" strokeWidth="2.5" strokeLinejoin="round" />
              {points.map((p, i) => (
                <g key={p.f}>
                  <circle cx={xs[i]} cy={ys[i]} r="5" fill="white" stroke="#006e9d" strokeWidth="2" />
                  <text
                    x={xs[i]}
                    y={ys[i] - 12}
                    textAnchor="middle"
                    fontSize="11"
                    fontWeight="700"
                    fill="#223c50"
                  >
                    {p.a.toFixed(2)}
                  </text>
                </g>
              ))}
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}