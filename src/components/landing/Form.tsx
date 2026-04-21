import { useState } from "react";
import { Button } from "@/components/ui/button";

export function ContactForm() {
  const [sent, setSent] = useState(false);
  return (
    <section id="form" className="relative py-24 sm:py-32 px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-[0.3em] text-[var(--brand-grey)] mb-4">
            12 — Заявка
          </p>
          <h2 className="font-bold text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.05] tracking-tight text-[var(--brand-navy)] text-balance">
            Получите расчёт под ваш объект.
          </h2>
          <p className="mt-5 text-[var(--brand-navy)]/70 max-w-xl mx-auto">
            Инженер Acoustic Group подберёт исполнение, толщину слоя и подготовит
            смету в течение 24 часов.
          </p>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
          className="glass-strong rounded-[28px] p-6 sm:p-10 grid sm:grid-cols-2 gap-5"
        >
          {[
            { id: "name", label: "Имя", type: "text", required: true },
            { id: "company", label: "Компания", type: "text" },
            { id: "type", label: "Тип объекта", type: "text", placeholder: "Аэропорт, школа, ТЦ…" },
            { id: "area", label: "Площадь, м²", type: "number" },
            { id: "phone", label: "Телефон или e-mail", type: "text", required: true, full: true },
          ].map((f) => (
            <div key={f.id} className={f.full ? "sm:col-span-2" : ""}>
              <label
                htmlFor={f.id}
                className="block text-xs uppercase tracking-[0.2em] text-[var(--brand-navy)]/60 mb-2"
              >
                {f.label}
                {f.required && <span className="text-[var(--brand-orange)]"> *</span>}
              </label>
              <input
                id={f.id}
                type={f.type}
                placeholder={f.placeholder}
                required={f.required}
                className="w-full bg-white/70 border border-white/80 rounded-xl px-4 py-3 text-[var(--brand-navy)] placeholder:text-[var(--brand-navy)]/30 focus:outline-none focus:ring-2 focus:ring-[var(--brand-orange)]/40 focus:border-[var(--brand-orange)]/40 transition"
              />
            </div>
          ))}
          <div className="sm:col-span-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
            <p className="text-xs text-[var(--brand-navy)]/55 max-w-xs">
              Отправляя форму, вы соглашаетесь с обработкой персональных данных.
            </p>
            <Button type="submit" variant="hero" size="xl" className="sm:min-w-[260px]">
              {sent ? "Заявка отправлена ✓" : "Отправить заявку"}
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}