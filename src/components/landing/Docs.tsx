import bg from "@/assets/bg-interior-blur.jpg";

const docs = [
  { t: "Каталог Ультраспрей 2025", s: "PDF · 8.4 MB", desc: "Полная техническая спецификация" },
  { t: "Сертификат соответствия КМ1", s: "PDF · 1.2 MB", desc: "ФЗ-123 · ГОСТ 30244" },
  { t: "Протокол испытаний α_w", s: "PDF · 2.1 MB", desc: "ИЛ Acoustic Group · ISO 354" },
  { t: "Альбом технических решений", s: "PDF · 12 MB", desc: "Узлы, разрезы, RAL-палитра" },
];

function FileIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M14 3H6a2 2 0 00-2 2v14a2 2 0 002 2h12a2 2 0 002-2V9l-6-6z" />
      <path d="M14 3v6h6" />
    </svg>
  );
}

export function Docs() {
  return (
    <section
      id="docs"
      className="relative py-24 sm:py-32 px-6 text-white overflow-hidden"
    >
      <img
        src={bg}
        alt=""
        aria-hidden
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0" style={{ background: "color-mix(in oklab, var(--brand-navy) 88%, transparent)", backdropFilter: "blur(6px)" }} />
      <div className="relative max-w-7xl mx-auto">
        <p className="text-xs uppercase tracking-[0.3em] text-white/60 mb-4">
          10 — Каталог и документация
        </p>
        <h2 className="font-bold text-[clamp(2rem,4vw,3.25rem)] leading-[1.05] tracking-tight text-balance max-w-3xl mb-12">
          Все документы для проектировщика — в одном месте.
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {docs.map((d) => (
            <a
              key={d.t}
              href="#"
              className="glass-dark rounded-2xl p-6 group transition-all hover:-translate-y-1"
            >
              <div className="flex items-start justify-between text-white">
                <FileIcon />
                <span className="text-[10px] uppercase tracking-[0.2em] text-white/50">
                  {d.s}
                </span>
              </div>
              <h3 className="mt-10 font-semibold text-white leading-snug">{d.t}</h3>
              <p className="text-sm text-white/60 mt-2">{d.desc}</p>
              <span className="mt-6 inline-flex items-center gap-2 text-[var(--brand-dust)] text-sm font-semibold">
                Скачать
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}