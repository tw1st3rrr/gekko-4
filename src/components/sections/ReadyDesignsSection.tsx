// src/components/sections/ReadyDesignsSection.tsx

const DESIGNS = [
  { title: 'Попугай', price: 'от 2 490 ₽', imageUrl: 'https://gekkotoys.ru/cache/images/2Д/экзот_2д_А5/800_cover_92_1729516999_Попугайpng.webp' },
  { title: 'Новогодний набор', price: 'от 2 490 ₽', imageUrl: 'https://gekkotoys.ru/cache/images/2Д/Новый_год_2д_А5/800_cover_92_1734084112_карточка38025jpg.webp' },
  { title: '3D набор', price: 'от 3 990 ₽', imageUrl: 'https://gekkotoys.ru/cache/images/3д/800_cover_92_1734097487_С1png.webp' },
  { title: 'Гекко АРТ', price: 'от 4 990 ₽', imageUrl: 'https://gekkotoys.ru/cache/images/0Арт_конструктор/800_cover_92_1734352004_S-Ojpg.webp' },
  { title: 'Арт портрет', price: 'от 4 990 ₽', imageUrl: 'https://gekkotoys.ru/cache/images/0Арт_конструктор/800_cover_92_1733147527_38952-вб01png.webp' },
  { title: 'Выставочный набор', price: 'от 3 990 ₽', imageUrl: 'https://gekkotoys.ru/cache/images/800_cover_92_1726841581_Приглашение_Экспо(2)jpg.webp' },
  { title: 'Маркетплейс набор', price: 'от 2 490 ₽', imageUrl: 'https://gekkotoys.ru/cache/images/news/800_cover_92_1737361085_Снимокэкрана2025-01-20111335png.webp' },
  { title: '3D фигура', price: 'от 3 990 ₽', imageUrl: 'https://gekkotoys.ru/cache/images/3д/800_cover_92_1734097487_С1png.webp' },
]

const FALLBACK = 'https://gekkotoys.ru/cache/images/2Д/экзот_2д_А5/800_cover_92_1729516999_Попугайpng.webp'

export function ReadyDesignsSection() {
  return (
    <section className="bg-[#faf9f5] px-6 sm:px-10 py-20 sm:py-28">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-end justify-between mb-10 gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#c96442] mb-4">
              / примеры работ
            </p>
            <h2 className="text-3xl sm:text-4xl font-black text-[#3d3929]">
              Что получается у других
            </h2>
          </div>
          <a
            href="../pixelator.html?mode=standard"
            className="hidden sm:inline-flex shrink-0 items-center gap-2 text-sm font-bold text-[#3d3929] hover:text-[#c96442] transition-colors whitespace-nowrap"
          >
            Создать своё →
          </a>
        </div>

        {/* Horizontal scroll */}
        <div
          className="flex gap-5 overflow-x-auto pb-4"
          style={{ scrollSnapType: 'x mandatory', scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {DESIGNS.map((item, i) => (
            <div
              key={i}
              className="snap-start shrink-0 w-56 sm:w-64 rounded-2xl overflow-hidden border border-gray-100 bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-200"
            >
              <div className="h-44 relative overflow-hidden">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  onError={e => { (e.target as HTMLImageElement).src = FALLBACK }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>
              <div className="p-4">
                <div className="font-bold text-[#3d3929] text-sm mb-1">{item.title}</div>
                <div className="text-[#c96442] text-xs font-semibold mb-3">{item.price}</div>
                <a
                  href="../pixelator.html?mode=standard"
                  className="text-xs font-bold text-[#3d3929] hover:text-[#c96442] transition-colors"
                >
                  Создать похожее →
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center sm:hidden">
          <a
            href="../pixelator.html?mode=standard"
            className="inline-flex items-center gap-2 bg-[#3d3929] text-white font-bold text-sm px-8 py-4 rounded-2xl hover:bg-[#2d2a1f] transition-colors"
          >
            Создать своё →
          </a>
        </div>
      </div>
    </section>
  )
}
