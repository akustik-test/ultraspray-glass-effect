export function Footer() {
  return (
    <footer
      className="relative px-6 py-16 text-[var(--brand-navy)]"
      style={{ background: "var(--brand-dust)" }}
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-10">
        <div className="md:col-span-4">
          <div className="flex items-center gap-2">
            <span className="block w-8 h-8 rounded-full bg-white relative overflow-hidden">
              <span className="absolute inset-2 rounded-full bg-[var(--brand-navy)]/30" />
            </span>
            <span className="font-bold text-xl tracking-tight text-[var(--brand-navy)]">
              ULTRASPRAY
            </span>
          </div>
          <p className="mt-4 text-sm text-[var(--brand-navy)]/70 max-w-sm">
            Напыляемая акустика и огнезащита для общественных и промышленных
            пространств. Продукт Acoustic Group.
          </p>
        </div>

        <div className="md:col-span-3">
          <p className="text-xs uppercase tracking-[0.25em] text-[var(--brand-navy)]/60 mb-4">
            Контакты
          </p>
          <ul className="space-y-2 text-sm">
            <li>+7 (495) 234-55-66</li>
            <li>info@ultraspray.ru</li>
            <li>Москва, Дмитровское шоссе, 100</li>
          </ul>
        </div>

        <div className="md:col-span-3">
          <p className="text-xs uppercase tracking-[0.25em] text-[var(--brand-navy)]/60 mb-4">
            Соцсети
          </p>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-[var(--brand-navy)]/100">Telegram</a></li>
            <li><a href="#" className="hover:text-[var(--brand-navy)]/100">YouTube</a></li>
            <li><a href="#" className="hover:text-[var(--brand-navy)]/100">VK</a></li>
          </ul>
        </div>

        <div className="md:col-span-2">
          <p className="text-xs uppercase tracking-[0.25em] text-[var(--brand-navy)]/60 mb-4">
            Производство
          </p>
          <p className="text-sm font-semibold tracking-wider">ACOUSTIC GROUP</p>
          <p className="text-xs text-[var(--brand-navy)]/60 mt-1">с 1995</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-14 pt-6 border-t border-[var(--brand-navy)]/15 flex flex-col sm:flex-row gap-3 justify-between text-xs text-[var(--brand-navy)]/60">
        <p>© 2025 Ультраспрей · Acoustic Group</p>
        <p>Политика конфиденциальности · Согласие на обработку данных</p>
      </div>
    </footer>
  );
}