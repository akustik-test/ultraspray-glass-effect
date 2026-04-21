import macro from "@/assets/macro-texture.jpg";

const iconClass = "w-7 h-7 stroke-[1.5] text-[var(--brand-navy)]";

const points = [
  {
    title: "Целлюлоза + минеральные добавки",
    text: "Экологичная основа из переработанной целлюлозы с антипиренами и связующим — без волокон, раздражающих кожу.",
    icon: (
      <svg className={iconClass} viewBox="0 0 24 24" fill="none">
        <path d="M3 12c4-6 14-6 18 0M3 12c4 6 14 6 18 0" stroke="currentColor" strokeLinecap="round" />
        <circle cx="12" cy="12" r="2.5" stroke="currentColor" />
      </svg>
    ),
  },
  {
    title: "Бесшовное напыление",
    text: "Наносится на бетон, профлист, металл, ГКЛ. Повторяет геометрию сложных конструкций без стыков.",
    icon: (
      <svg className={iconClass} viewBox="0 0 24 24" fill="none">
        <path d="M4 20l16-16M8 20l12-12M12 20l8-8" stroke="currentColor" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Двойная функция",
    text: "Один слой — акустическое поглощение и огнезащитный барьер по ФЗ-123 для несущих конструкций.",
    icon: (
      <svg className={iconClass} viewBox="0 0 24 24" fill="none">
        <path d="M12 3l8 4v5c0 5-3.5 8-8 9-4.5-1-8-4-8-9V7l8-4z" stroke="currentColor" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Опыт Acoustic Group",
    text: "30+ лет инженерных решений в акустике. Сертифицированное производство и собственные испытательные лаборатории.",
    icon: (
      <svg className={iconClass} viewBox="0 0 24 24" fill="none">
        <path d="M4 20V8l8-5 8 5v12M4 20h16M9 20v-6h6v6" stroke="currentColor" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export function BrandTech() {
  return (
    <section id="tech" className="relative py-24 sm:py-32 px-6 bg-background">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6">
          <p className="text-xs uppercase tracking-[0.3em] text-[var(--brand-grey)] mb-5">
            02 — Технология
          </p>
          <h2 className="font-bold text-[clamp(2rem,4vw,3.25rem)] leading-[1.05] tracking-tight text-[var(--brand-navy)] text-balance">
            Инженерия покрытия,<br />а не декоративный материал.
          </h2>
          <p className="mt-6 text-[var(--brand-navy)]/70 max-w-lg">
            Ультраспрей создан Acoustic Group для архитекторов и инженеров,
            которым важны акустика, безопасность и сохранение характера
            пространства одновременно.
          </p>

          <div className="mt-10 grid sm:grid-cols-2 gap-x-8 gap-y-8">
            {points.map((p) => (
              <div key={p.title} className="flex gap-4">
                <div className="shrink-0 w-12 h-12 rounded-xl border border-[var(--brand-navy)]/15 flex items-center justify-center">
                  {p.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-[var(--brand-navy)]">{p.title}</h3>
                  <p className="text-sm text-[var(--brand-navy)]/65 mt-1 leading-relaxed">{p.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-6 relative">
          <div className="aspect-[4/5] rounded-[28px] overflow-hidden relative">
            <img
              src={macro}
              alt="Макроструктура напыления Ультраспрей в разрезе"
              loading="lazy"
              width={1024}
              height={1280}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute bottom-5 left-5 right-5 glass rounded-2xl p-4 flex items-center justify-between">
              <div>
                <p className="text-[10px] uppercase tracking-[0.25em] text-[var(--brand-navy)]/60">Состав</p>
                <p className="font-semibold text-[var(--brand-navy)]">Целлюлоза + антипирены</p>
              </div>
              <p className="text-3xl font-bold text-[var(--brand-navy)]">Ø 4 µm</p>
            </div>
          </div>
          <div className="absolute -top-6 -left-6 glass rounded-xl px-3 py-2 hidden sm:block">
            <p className="text-[10px] uppercase tracking-[0.25em] text-[var(--brand-navy)]/70">Слой</p>
            <p className="font-bold text-[var(--brand-navy)]">15 / 20 / 30 мм</p>
          </div>
        </div>
      </div>
    </section>
  );
}