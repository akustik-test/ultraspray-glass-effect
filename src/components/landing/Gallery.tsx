import airport from "@/assets/gallery-airport.jpg";
import school from "@/assets/gallery-school.jpg";
import office from "@/assets/gallery-office.jpg";
import arena from "@/assets/gallery-arena.jpg";
import warehouse from "@/assets/gallery-warehouse.jpg";

const items = [
  { src: airport, t: "Терминал аэропорта", y: "2024", layer: "30 мм · КМ1", className: "row-span-2" },
  { src: arena, t: "Спортивная арена", y: "2023", layer: "20 мм · КМ1", className: "" },
  { src: office, t: "Бизнес-центр класса A", y: "2024", layer: "15 мм · базовое", className: "" },
  { src: school, t: "Школа на 1100 мест", y: "2023", layer: "20 мм · КМ1", className: "row-span-2" },
  { src: warehouse, t: "Логистический хаб", y: "2022", layer: "30 мм · КМ1", className: "" },
];

export function Gallery() {
  return (
    <section id="gallery" className="relative py-24 sm:py-32 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <p className="text-xs uppercase tracking-[0.3em] text-[var(--brand-grey)] mb-4">
          08 — Галерея применения
        </p>
        <h2 className="font-bold text-[clamp(2rem,4vw,3.25rem)] leading-[1.05] tracking-tight text-[var(--brand-navy)] text-balance max-w-3xl mb-12">
          Архитектура, в которой Ультраспрей работает в объёме.
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[220px] gap-4">
          {items.map((it) => (
            <figure
              key={it.t}
              className={`relative overflow-hidden rounded-2xl group ${it.className}`}
            >
              <img
                src={it.src}
                alt={it.t}
                loading="lazy"
                width={1280}
                height={1280}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--brand-navy)]/85 via-transparent to-transparent" />
              <figcaption className="absolute bottom-0 inset-x-0 p-4 text-white">
                <p className="font-semibold leading-tight">{it.t}</p>
                <p className="text-xs text-white/70 mt-1">
                  {it.y} · {it.layer}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}