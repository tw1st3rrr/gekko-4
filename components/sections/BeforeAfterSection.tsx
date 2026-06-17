// src/components/sections/BeforeAfterSection.tsx

const BEFORE_URL = 'https://gekkotoys.ru/cache/images/0Арт_конструктор/800_cover_92_1734352004_S-Ojpg.webp'
const AFTER_URL  = 'https://gekkotoys.ru/cache/images/0Арт_конструктор/800_cover_92_1733147527_38952-вб01png.webp'
const FALLBACK   = 'https://gekkotoys.ru/cache/images/2Д/экзот_2д_А5/800_cover_92_1729516999_Попугайpng.webp'

function ImgWithFallback({ src, alt, label }: { src: string; alt: string; label: string }) {
  return (
    <div className="relative flex-1 rounded-2xl overflow-hidden aspect-square sm:aspect-[4/3]">
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
        onError={e => { (e.target as HTMLImageElement).src = FALLBACK }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
      <span className="absolute bottom-4 left-4 text-white text-sm font-bold bg-black/30 backdrop-blur-sm px-3 py-1.5 rounded-full">
        {label}
      </span>
    </div>
  )
}

export function BeforeAfterSection() {
  return (
    <section className="bg-[#faf9f5] dark:bg-[#1c1a15] px-6 sm:px-10 py-20 sm:py-28">
      <div className="max-w-6xl mx-auto">
        <p className="text-xs font-semibold uppercase tracking-widest text-[#c96442] mb-4">
          / результат
        </p>
        <h2 className="text-3xl sm:text-4xl font-black text-[#3d3929] dark:text-[#f0ede6] mb-4">
          Из любого фото — пиксельный шедевр
        </h2>
        <p className="text-[#3d3929]/60 dark:text-[#f0ede6]/60 text-base mb-12 max-w-xl">
          Пикселизатор автоматически подбирает цвета из палитры ГЕККО. Вы видите точный превью до оформления заказа.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
          <ImgWithFallback src={BEFORE_URL} alt="Исходное фото" label="Ваше фото" />
          <div className="hidden sm:flex items-center justify-center shrink-0">
            <div className="w-10 h-10 rounded-full bg-[#c96442] text-white flex items-center justify-center font-black text-lg">
              →
            </div>
          </div>
          <ImgWithFallback src={AFTER_URL} alt="Пиксельная версия" label="Пиксельный набор" />
        </div>
        <div className="mt-10 text-center">
          <a
            href="http://91.229.10.93:5000/"
            className="inline-flex items-center gap-2 bg-[#3d3929] text-white font-bold text-sm px-8 py-4 rounded-2xl hover:bg-[#2d2a1f] transition-colors"
          >
            Попробовать со своим фото →
          </a>
        </div>
      </div>
    </section>
  )
}
