import { useState } from "react";
import metal from "@/assets/surface-metal.jpg";
import concrete from "@/assets/surface-concrete.jpg";
import gkl from "@/assets/surface-gkl.jpg";

const slides = [
  { src: metal, label: "Металл / профлист", caption: "Сохранение коэффициента развёртки" },
  { src: concrete, label: "Бетон", caption: "Без подготовки чернового потолка" },
  { src: gkl, label: "ГКЛ", caption: "Бесшовная отделка плоских поверхностей" },
];

export function Adaptivity() {
  const [i, setI] = useState(0);
  const s = slides[i];

  return (
    <section className="relative py-24 sm:py-32 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--brand-grey)] mb-4">
              06 — Архитектурная адаптивность
            </p>
            <h2 className="font-bold text-[clamp(2rem,4vw,3.25rem)] leading-[1.05] tracking-tight text-[var(--brand-navy)] text-balance max-w-3xl">
              Любое основание. Без подвесных потолков.
            </h2>
          </div>
          <div className="flex gap-2">
            {slides.map((sl, idx) => (
              <button
                key={sl.label}
                onClick={() => setI(idx)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition border ${
                  i === idx
                    ? "bg-[var(--brand-navy)] text-white border-[var(--brand-navy)]"
                    : "bg-white text-[var(--brand-navy)]/70 border-[var(--brand-navy)]/15 hover:border-[var(--brand-navy)]/40"
                }`}
              >
                {sl.label}
              </button>
            ))}
          </div>
        </div>

        <div className="relative w-full overflow-hidden rounded-[32px]">
          <img
            key={s.src}
            src={s.src}
            alt={s.label}
            loading="lazy"
            width={1920}
            height={1080}
            className="w-full h-[60vh] object-cover transition-all duration-700"
          />
          <div className="absolute bottom-6 left-6 right-6 sm:left-10 sm:right-auto sm:max-w-md">
            <div className="glass rounded-2xl p-5">
              <p className="text-xs uppercase tracking-[0.25em] text-[var(--brand-navy)]/60">
                Поверхность
              </p>
              <p className="text-2xl font-bold text-[var(--brand-navy)] mt-1">{s.label}</p>
              <p className="text-sm text-[var(--brand-navy)]/70 mt-2">{s.caption}</p>
            </div>
          </div>
          <div className="absolute top-6 right-6 glass rounded-full px-4 py-1.5 text-xs uppercase tracking-[0.25em] text-[var(--brand-navy)]">
            {String(i + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
          </div>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {[
            "Сохранение открытого потолка и высоты помещения",
            "Учёт коэффициента развёртки профлиста",
            "Окраска по любому каталогу RAL",
          ].map((t, idx) => (
            <div key={t} className="flex gap-4">
              <span className="font-bold text-[var(--brand-orange)] text-lg shrink-0">
                {String(idx + 1).padStart(2, "0")}
              </span>
              <p className="text-[var(--brand-navy)]/80">{t}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}