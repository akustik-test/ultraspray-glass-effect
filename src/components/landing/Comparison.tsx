import { useState } from "react";

type Mode = "base" | "km1";

const data: Record<Mode, { label: string; rows: { k: string; v: string }[] }> = {
  base: {
    label: "Базовое исполнение",
    rows: [
      { k: "Группа горючести", v: "Г1 — слабогорючий" },
      { k: "Группа воспламеняемости", v: "В2" },
      { k: "Дымообразование", v: "Д3" },
      { k: "Токсичность продуктов горения", v: "Т2" },
      { k: "Класс пожарной опасности", v: "КМ2" },
      { k: "Звукопоглощение α_w", v: "0,50 – 0,75" },
      { k: "Применение", v: "Офисы, ритейл, общепит" },
    ],
  },
  km1: {
    label: "Исполнение КМ1",
    rows: [
      { k: "Группа горючести", v: "Г1 — слабогорючий" },
      { k: "Группа воспламеняемости", v: "В1" },
      { k: "Дымообразование", v: "Д2" },
      { k: "Токсичность продуктов горения", v: "Т2" },
      { k: "Класс пожарной опасности", v: "КМ1" },
      { k: "Звукопоглощение α_w", v: "0,70 – 0,90" },
      { k: "Применение", v: "Аэропорты, школы, арены, метро" },
    ],
  },
};

export function Comparison() {
  const [mode, setMode] = useState<Mode>("km1");
  const active = data[mode];
  return (
    <section
      id="comparison"
      className="relative py-24 sm:py-32 px-6"
      style={{ background: "color-mix(in oklab, var(--brand-dust) 18%, white)" }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--brand-grey)] mb-4">
              03 — Сравнение и сертификация
            </p>
            <h2 className="font-bold text-[clamp(2rem,4vw,3.25rem)] leading-[1.05] tracking-tight text-[var(--brand-navy)] text-balance">
              Базовое исполнение или КМ1.<br />Подберите по объекту.
            </h2>
          </div>
          <div className="glass rounded-full p-1.5 inline-flex self-start md:self-auto">
            {(["base", "km1"] as Mode[]).map((m) => (
              <button
                key={m}
                onClick={() => setMode(m)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition ${
                  mode === m
                    ? "bg-[var(--brand-navy)] text-white shadow"
                    : "text-[var(--brand-navy)]/70 hover:text-[var(--brand-navy)]"
                }`}
              >
                {data[m].label}
              </button>
            ))}
          </div>
        </div>

        <div className="glass-strong rounded-[28px] overflow-hidden">
          <div className="px-8 py-6 border-b border-white/40 flex items-center justify-between">
            <h3 className="font-bold text-xl text-[var(--brand-navy)]">{active.label}</h3>
            <span className="text-xs uppercase tracking-[0.2em] text-[var(--brand-navy)]/60">
              ФЗ-123
            </span>
          </div>
          <div className="divide-y divide-white/40">
            {active.rows.map((row) => (
              <div
                key={row.k}
                className="grid grid-cols-1 sm:grid-cols-2 px-8 py-5 hover:bg-white/30 transition"
              >
                <span className="text-[var(--brand-navy)]/65 text-sm">{row.k}</span>
                <span className="text-[var(--brand-navy)] font-semibold">{row.v}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}