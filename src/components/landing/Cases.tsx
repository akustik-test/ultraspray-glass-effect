import school from "@/assets/gallery-school.jpg";
import arena from "@/assets/gallery-arena.jpg";

const cases = [
  {
    img: school,
    label: "Школа",
    title: "Образовательный комплекс на 1100 мест",
    task: "Снизить гулкость в актовом зале и рекреациях со сложной геометрией потолка.",
    solution: "Напыление 20 мм по бетону, исполнение КМ1, окраска по RAL 9003.",
    metric: "−68%",
    metricLabel: "снижение времени реверберации",
  },
  {
    img: arena,
    label: "Спортивная арена",
    title: "Многофункциональная арена · 8 500 мест",
    task: "Обеспечить разборчивость речи и снизить эхо при сохранении открытой кровли из профлиста.",
    solution: "Напыление 30 мм по металлоконструкциям, КМ1, R 90.",
    metric: "−72%",
    metricLabel: "снижение реверберации на 1 кГц",
  },
];

export function Cases() {
  return (
    <section id="cases" className="relative py-24 sm:py-32 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <p className="text-xs uppercase tracking-[0.3em] text-[var(--brand-grey)] mb-4">
          11 — Реализованные кейсы
        </p>
        <h2 className="font-bold text-[clamp(2rem,4vw,3.25rem)] leading-[1.05] tracking-tight text-[var(--brand-navy)] text-balance max-w-3xl mb-14">
          Задача → решение → измеримый результат.
        </h2>

        <div className="space-y-10">
          {cases.map((c, i) => (
            <article
              key={c.title}
              className={`grid lg:grid-cols-12 gap-8 items-center ${
                i % 2 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div className="lg:col-span-6 relative rounded-[28px] overflow-hidden aspect-[4/3]">
                <img
                  src={c.img}
                  alt={c.title}
                  loading="lazy"
                  width={1280}
                  height={960}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute top-5 left-5 glass rounded-full px-4 py-1.5 text-xs uppercase tracking-[0.25em] text-[var(--brand-navy)]">
                  {c.label}
                </div>
              </div>
              <div className="lg:col-span-6">
                <h3 className="font-bold text-2xl sm:text-3xl text-[var(--brand-navy)] leading-tight">
                  {c.title}
                </h3>
                <dl className="mt-6 space-y-4 text-[var(--brand-navy)]/80">
                  <div>
                    <dt className="text-xs uppercase tracking-[0.25em] text-[var(--brand-grey)]">Задача</dt>
                    <dd className="mt-1">{c.task}</dd>
                  </div>
                  <div>
                    <dt className="text-xs uppercase tracking-[0.25em] text-[var(--brand-grey)]">Решение</dt>
                    <dd className="mt-1">{c.solution}</dd>
                  </div>
                </dl>
                <div className="mt-8 glass rounded-2xl p-5 flex items-center gap-5">
                  <span
                    className="font-bold text-[clamp(2.5rem,5vw,4rem)] leading-none tracking-tight"
                    style={{ color: "var(--brand-orange)" }}
                  >
                    {c.metric}
                  </span>
                  <p className="text-[var(--brand-navy)]/75 text-sm">{c.metricLabel}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}