# Landing Sections Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Добавить 7 новых секций в лэндинг ГЕККО ТОЙС (How it Works, Before/After, Price Calculator, Ready Designs, Gift, Reviews, FAQ+Disclaimer) по образцу brick.me.

**Architecture:** Каждая секция — отдельный компонент-функция в своём файле в `src/components/sections/`. App.tsx импортирует их и вставляет в нужном порядке. Никакого нового роутинга, никаких новых зависимостей.

**Tech Stack:** React 18, TypeScript, Tailwind CSS 3, Vite 5. Все SVG-иллюстрации — inline JSX. Проверка — `npm run build` (tsc + vite build).

---

## File Map

| Файл | Действие | Ответственность |
|------|----------|-----------------|
| `src/components/sections/HowItWorksSection.tsx` | Create | 3 шага с SVG-иллюстрациями |
| `src/components/sections/BeforeAfterSection.tsx` | Create | До/после с двумя изображениями |
| `src/components/sections/PriceCalculatorSection.tsx` | Create | Выбор формата + цветности → цена |
| `src/components/sections/ReadyDesignsSection.tsx` | Create | Горизонтальная прокрутка карточек |
| `src/components/sections/GiftSection.tsx` | Create | Тёмный подарочный CTA-блок |
| `src/components/sections/ReviewsSection.tsx` | Create | Сетка из 6 отзывов |
| `src/components/sections/FAQSection.tsx` | Create | Аккордеон 8 вопросов + дисклеймер |
| `src/App.tsx` | Modify | Импорт и вставка всех секций |

---

## Task 1: HowItWorksSection

**Files:**
- Create: `src/components/sections/HowItWorksSection.tsx`

- [ ] **Step 1: Создай файл компонента**

```tsx
// src/components/sections/HowItWorksSection.tsx

function UploadIllustration() {
  return (
    <svg viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <circle cx="64" cy="64" r="56" fill="#e0f2fe"/>
      <rect x="42" y="28" width="44" height="72" rx="8" fill="white" stroke="#0284c7" strokeWidth="2.5"/>
      <rect x="50" y="38" width="28" height="36" rx="3" fill="#bae6fd"/>
      <path d="M64 62 L64 46" stroke="#0284c7" strokeWidth="3" strokeLinecap="round"/>
      <path d="M57 53 L64 46 L71 53" stroke="#0284c7" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
      <rect x="16" y="44" width="22" height="18" rx="4" fill="#fef3c7" stroke="#f59e0b" strokeWidth="2" transform="rotate(-12 27 53)"/>
      <rect x="90" y="56" width="22" height="18" rx="4" fill="#fce7f3" stroke="#ec4899" strokeWidth="2" transform="rotate(10 101 65)"/>
      <circle cx="64" cy="90" r="5" fill="#e0f9ee" stroke="#0284c7" strokeWidth="1.5"/>
    </svg>
  )
}

const PIXEL_GRID = [
  ['#c4b5fd','#a78bfa','#c4b5fd','#a78bfa','#c4b5fd'],
  ['#a78bfa','#7c3aed','#a78bfa','#7c3aed','#a78bfa'],
  ['#c4b5fd','#a78bfa','#c4b5fd','#a78bfa','#c4b5fd'],
  ['#a78bfa','#7c3aed','#a78bfa','#7c3aed','#a78bfa'],
  ['#c4b5fd','#a78bfa','#c4b5fd','#a78bfa','#c4b5fd'],
]

function PixelIllustration() {
  return (
    <svg viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <circle cx="64" cy="64" r="56" fill="#faf5ff"/>
      {PIXEL_GRID.map((row, r) =>
        row.map((color, c) => (
          <rect key={`${r}-${c}`} x={24 + c * 14} y={18 + r * 14} width="12" height="12" rx="2" fill={color}/>
        ))
      )}
      <rect x="20" y="98" width="88" height="5" rx="2.5" fill="#e5e7eb"/>
      <circle cx="72" cy="100" r="9" fill="white" stroke="#7c3aed" strokeWidth="2.5"/>
      <rect x="96" y="22" width="16" height="16" rx="4" fill="#ddd6fe" stroke="#7c3aed" strokeWidth="1.5"/>
      <rect x="96" y="44" width="16" height="16" rx="4" fill="#ede9fe" stroke="#c4b5fd" strokeWidth="1.5"/>
      <rect x="96" y="66" width="16" height="16" rx="4" fill="#ddd6fe" stroke="#7c3aed" strokeWidth="1.5"/>
    </svg>
  )
}

const BOX_BRICKS: [number, number][] = [[36,74],[54,74],[72,74],[36,90],[54,90],[72,90]]

function BoxIllustration() {
  return (
    <svg viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <circle cx="64" cy="64" r="56" fill="#ecfdf5"/>
      <rect x="22" y="64" width="84" height="50" rx="6" fill="#d1fae5" stroke="#10b981" strokeWidth="2.5"/>
      <rect x="16" y="50" width="96" height="20" rx="6" fill="#6ee7b7" stroke="#10b981" strokeWidth="2.5"/>
      <rect x="60" y="50" width="8" height="64" rx="4" fill="#f9a8d4"/>
      <rect x="22" y="56" width="84" height="8" rx="4" fill="#f9a8d4"/>
      <ellipse cx="64" cy="50" rx="14" ry="8" fill="#fbcfe8" stroke="#ec4899" strokeWidth="2"/>
      {BOX_BRICKS.map(([x, y], i) => (
        <rect key={i} x={x} y={y} width="12" height="10" rx="2" fill={i % 2 === 0 ? '#6ee7b7' : '#34d399'}/>
      ))}
    </svg>
  )
}

const STEPS = [
  {
    illustration: <UploadIllustration />,
    title: 'Загрузи фото',
    description: 'Нажми «Начать проект» и загрузи любое фото — портрет, пейзаж, питомец, любимая сцена.',
  },
  {
    illustration: <PixelIllustration />,
    title: 'Настрой в пикселизаторе',
    description: 'Выбери формат, стиль (ч/б, сепия, цвет), посмотри превью — редактируй пока не понравится.',
  },
  {
    illustration: <BoxIllustration />,
    title: 'Получи набор и собери',
    description: 'Набор с кирпичиками, схемой и базовыми платами придёт почтой. Собери сам или подари.',
  },
]

export function HowItWorksSection() {
  return (
    <section className="bg-white px-6 sm:px-10 py-20 sm:py-28">
      <div className="max-w-6xl mx-auto">
        <p className="text-xs font-semibold uppercase tracking-widest text-[#c96442] mb-4">
          / как это работает
        </p>
        <h2 className="text-3xl sm:text-4xl font-black text-[#3d3929] mb-16">
          Три шага до вашей картины
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {STEPS.map((step, i) => (
            <div key={i} className="flex flex-col items-center text-center gap-6">
              <div className="w-32 h-32 shrink-0">{step.illustration}</div>
              <div>
                <div className="flex items-center gap-3 mb-3 justify-center">
                  <span className="w-7 h-7 rounded-full bg-[#c96442] text-white text-sm font-black flex items-center justify-center shrink-0">
                    {i + 1}
                  </span>
                  <h3 className="text-lg font-black text-[#3d3929]">{step.title}</h3>
                </div>
                <p className="text-[#3d3929]/60 text-sm leading-relaxed max-w-xs mx-auto">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-14 text-center">
          <a
            href="../pixelator.html?mode=standard"
            className="inline-flex items-center gap-2 bg-[#3d3929] text-white font-bold text-sm px-8 py-4 rounded-2xl hover:bg-[#2d2a1f] transition-colors"
          >
            Попробовать пикселизатор →
          </a>
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Проверь TypeScript**

```bash
cd "c:/Users/Mikhail/OneDrive/Desktop/CLAUDE LIVES HERE/гекко тойс/landing"
npx tsc --noEmit
```
Ожидание: 0 ошибок.

- [ ] **Step 3: Commit**

```bash
git add src/components/sections/HowItWorksSection.tsx
git commit -m "feat: add HowItWorksSection with SVG illustrations"
```

---

## Task 2: BeforeAfterSection

**Files:**
- Create: `src/components/sections/BeforeAfterSection.tsx`

- [ ] **Step 1: Создай файл компонента**

```tsx
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
    <section className="bg-[#faf9f5] px-6 sm:px-10 py-20 sm:py-28">
      <div className="max-w-6xl mx-auto">
        <p className="text-xs font-semibold uppercase tracking-widest text-[#c96442] mb-4">
          / результат
        </p>
        <h2 className="text-3xl sm:text-4xl font-black text-[#3d3929] mb-4">
          Из любого фото — пиксельный шедевр
        </h2>
        <p className="text-[#3d3929]/60 text-base mb-12 max-w-xl">
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
            href="../pixelator.html?mode=standard"
            className="inline-flex items-center gap-2 bg-[#3d3929] text-white font-bold text-sm px-8 py-4 rounded-2xl hover:bg-[#2d2a1f] transition-colors"
          >
            Попробовать со своим фото →
          </a>
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Проверь TypeScript**

```bash
npx tsc --noEmit
```
Ожидание: 0 ошибок.

- [ ] **Step 3: Commit**

```bash
git add src/components/sections/BeforeAfterSection.tsx
git commit -m "feat: add BeforeAfterSection with placeholder images"
```

---

## Task 3: PriceCalculatorSection

**Files:**
- Create: `src/components/sections/PriceCalculatorSection.tsx`

- [ ] **Step 1: Создай файл компонента**

```tsx
// src/components/sections/PriceCalculatorSection.tsx
import { useState } from 'react'

type Format = 'S' | 'M' | 'L'
type ColorStyle = 'bw' | 'sepia' | 'color'

const FORMATS: { id: Format; label: string; details: string; count: string }[] = [
  { id: 'S', label: 'S · А5', details: 'Формат А5', count: '3 500 деталей' },
  { id: 'M', label: 'M · А4', details: 'Формат А4', count: '7 000 деталей' },
  { id: 'L', label: 'L · А3', details: 'Формат А3', count: '14 000 деталей' },
]

const COLORS: { id: ColorStyle; label: string; emoji: string }[] = [
  { id: 'bw',    label: 'Ч/б',     emoji: '⬛' },
  { id: 'sepia', label: 'Сепия',   emoji: '🟫' },
  { id: 'color', label: 'Цветной', emoji: '🟦' },
]

const PRICES: Record<Format, Record<ColorStyle, string>> = {
  S: { bw: '2 490 ₽', sepia: '2 690 ₽', color: '2 990 ₽' },
  M: { bw: '3 990 ₽', sepia: '4 290 ₽', color: '4 990 ₽' },
  L: { bw: '6 990 ₽', sepia: '7 490 ₽', color: '8 990 ₽' },
}

export function PriceCalculatorSection() {
  const [format, setFormat] = useState<Format>('M')
  const [colorStyle, setColorStyle] = useState<ColorStyle>('color')

  const price = PRICES[format][colorStyle]
  const selectedFormat = FORMATS.find(f => f.id === format)!

  return (
    <section className="bg-white px-6 sm:px-10 py-20 sm:py-28">
      <div className="max-w-6xl mx-auto">
        <p className="text-xs font-semibold uppercase tracking-widest text-[#c96442] mb-4">
          / стоимость
        </p>
        <h2 className="text-3xl sm:text-4xl font-black text-[#3d3929] mb-4">
          Рассчитай стоимость набора
        </h2>
        <p className="text-[#3d3929]/60 text-base mb-12 max-w-xl">
          Цена зависит от формата и цветности. Все наборы включают базовые платы, кирпичики, схему сборки и доставку.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">

          {/* Controls */}
          <div className="flex flex-col gap-8">
            <div>
              <p className="text-sm font-bold text-[#3d3929] mb-3">Формат</p>
              <div className="flex gap-3 flex-wrap">
                {FORMATS.map(f => (
                  <button
                    key={f.id}
                    onClick={() => setFormat(f.id)}
                    className={`px-5 py-3 rounded-xl border-2 font-bold text-sm transition-all ${
                      format === f.id
                        ? 'border-[#c96442] bg-[#c96442]/8 text-[#c96442]'
                        : 'border-gray-200 text-[#3d3929]/60 hover:border-gray-400'
                    }`}
                  >
                    {f.label}
                    <span className="block text-xs font-normal opacity-70 mt-0.5">{f.count}</span>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <p className="text-sm font-bold text-[#3d3929] mb-3">Цветность</p>
              <div className="flex gap-3 flex-wrap">
                {COLORS.map(c => (
                  <button
                    key={c.id}
                    onClick={() => setColorStyle(c.id)}
                    className={`px-5 py-3 rounded-xl border-2 font-bold text-sm transition-all flex items-center gap-2 ${
                      colorStyle === c.id
                        ? 'border-[#c96442] bg-[#c96442]/8 text-[#c96442]'
                        : 'border-gray-200 text-[#3d3929]/60 hover:border-gray-400'
                    }`}
                  >
                    <span>{c.emoji}</span>
                    {c.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Price card */}
          <div className="bg-[#faf9f5] rounded-3xl p-8 flex flex-col gap-6">
            <div>
              <p className="text-sm text-[#3d3929]/50 mb-1">{selectedFormat.details} · {selectedFormat.count}</p>
              <div className="flex items-baseline gap-2">
                <span className="text-5xl font-black text-[#3d3929]">{price}</span>
              </div>
              <p className="text-xs text-[#3d3929]/40 mt-2">
                * Цена является ориентировочной. Окончательная стоимость рассчитывается при оформлении заказа.
              </p>
            </div>
            <ul className="flex flex-col gap-2 text-sm text-[#3d3929]/70">
              {['Базовые платы в комплекте', 'Кирпичики + 5% запас', 'Пронумерованная схема', 'Доставка по России'].map(item => (
                <li key={item} className="flex items-center gap-2">
                  <span className="text-[#c96442] font-bold">✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <a
              href={`../pixelator.html?mode=standard&format=${format.toLowerCase()}`}
              className="w-full bg-[#3d3929] text-white font-bold text-sm py-4 rounded-2xl hover:bg-[#2d2a1f] transition-colors text-center"
            >
              Заказать {selectedFormat.label} →
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Проверь TypeScript**

```bash
npx tsc --noEmit
```
Ожидание: 0 ошибок.

- [ ] **Step 3: Commit**

```bash
git add src/components/sections/PriceCalculatorSection.tsx
git commit -m "feat: add PriceCalculatorSection with format/color selector"
```

---

## Task 4: ReadyDesignsSection

**Files:**
- Create: `src/components/sections/ReadyDesignsSection.tsx`

- [ ] **Step 1: Создай файл компонента**

```tsx
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
```

- [ ] **Step 2: Проверь TypeScript**

```bash
npx tsc --noEmit
```
Ожидание: 0 ошибок.

- [ ] **Step 3: Commit**

```bash
git add src/components/sections/ReadyDesignsSection.tsx
git commit -m "feat: add ReadyDesignsSection with horizontal scroll"
```

---

## Task 5: GiftSection

**Files:**
- Create: `src/components/sections/GiftSection.tsx`

- [ ] **Step 1: Создай файл компонента**

```tsx
// src/components/sections/GiftSection.tsx

const BULLETS = [
  { emoji: '🎁', title: 'Готовая упаковка', desc: 'Набор приходит в подарочной коробке — ничего дополнительно покупать не нужно' },
  { emoji: '📸', title: 'Персональное фото', desc: 'Картина из фото именинника, пары, питомца — подарок, которого точно нет у других' },
  { emoji: '♾️', title: 'Пересобирай сколько угодно', desc: 'Скачивай новые схемы бесплатно и собирай разные картины из одного набора' },
]

export function GiftSection() {
  return (
    <section className="bg-[#3d3929] px-6 sm:px-10 py-20 sm:py-28">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left: text */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#c96442] mb-4">
              / подарок
            </p>
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-5">
              Ищешь особенный подарок?
            </h2>
            <p className="text-white/60 text-base leading-relaxed mb-10">
              Стандартный набор ГЕККО — это уже готовый подарок. Красивая упаковка, схема сборки, все кирпичики. Просто выбери фото.
            </p>
            <a
              href="../pixelator.html?mode=standard"
              className="inline-flex items-center gap-2 bg-white text-[#3d3929] font-bold text-sm px-8 py-4 rounded-2xl hover:bg-white/90 transition-colors"
            >
              Создать подарок →
            </a>
          </div>

          {/* Right: bullets */}
          <div className="flex flex-col gap-6">
            {BULLETS.map((b, i) => (
              <div key={i} className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-2xl shrink-0">
                  {b.emoji}
                </div>
                <div>
                  <div className="text-white font-bold text-base mb-1">{b.title}</div>
                  <div className="text-white/50 text-sm leading-relaxed">{b.desc}</div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Проверь TypeScript**

```bash
npx tsc --noEmit
```
Ожидание: 0 ошибок.

- [ ] **Step 3: Commit**

```bash
git add src/components/sections/GiftSection.tsx
git commit -m "feat: add GiftSection with dark background and bullet points"
```

---

## Task 6: ReviewsSection

**Files:**
- Create: `src/components/sections/ReviewsSection.tsx`

- [ ] **Step 1: Создай файл компонента**

```tsx
// src/components/sections/ReviewsSection.tsx

const REVIEWS = [
  {
    name: 'Анна К.',
    city: 'Москва',
    text: 'Заказала набор мужу на день рождения. Картина получилась чёткой и детальной. Муж был в восторге — теперь хочет ещё один побольше!',
    imageUrl: 'https://gekkotoys.ru/cache/images/0Арт_конструктор/800_cover_92_1734352004_S-Ojpg.webp',
  },
  {
    name: 'Дмитрий В.',
    city: 'Санкт-Петербург',
    text: 'Собирали вместе с сыном — провели отличный вечер. Инструкция простая, кирпичики качественные. Теперь хотим заказать А4 формат.',
    imageUrl: 'https://gekkotoys.ru/cache/images/2Д/экзот_2д_А5/800_cover_92_1729516999_Попугайpng.webp',
  },
  {
    name: 'Мария Л.',
    city: 'Екатеринбург',
    text: 'Сделала портрет нашей собаки в А5 формате. Пикселизатор очень удобный — сразу видно как будет выглядеть. Привезли быстро, всё целое.',
    imageUrl: 'https://gekkotoys.ru/cache/images/0Арт_конструктор/800_cover_92_1733147527_38952-вб01png.webp',
  },
  {
    name: 'Игорь С.',
    city: 'Новосибирск',
    text: 'Подарил жене на 8 марта. Упаковка подарочная — ничего дополнительно не нужно. Жена до сих пор пересобирает разные фотографии.',
    imageUrl: 'https://gekkotoys.ru/cache/images/2Д/Новый_год_2д_А5/800_cover_92_1734084112_карточка38025jpg.webp',
  },
  {
    name: 'Елена П.',
    city: 'Казань',
    text: 'Купила набор А3 — большой формат очень впечатляет. Детали мелкие, но инструкция по номерам делает процесс увлекательным как медитация.',
    imageUrl: 'https://gekkotoys.ru/cache/images/3д/800_cover_92_1734097487_С1png.webp',
  },
  {
    name: 'Алексей М.',
    city: 'Краснодар',
    text: 'Заказывал корпоративный подарок — 10 наборов с фото команды. Менеджер быстро всё согласовал. Коллеги были приятно удивлены.',
    imageUrl: 'https://gekkotoys.ru/cache/images/800_cover_92_1726841581_Приглашение_Экспо(2)jpg.webp',
  },
]

const FALLBACK = 'https://gekkotoys.ru/cache/images/2Д/экзот_2д_А5/800_cover_92_1729516999_Попугайpng.webp'

function StarRating() {
  return (
    <div className="flex gap-0.5">
      {[1,2,3,4,5].map(i => (
        <svg key={i} viewBox="0 0 16 16" fill="#f59e0b" className="w-4 h-4">
          <path d="M8 1l1.8 3.6L14 5.3l-3 2.9.7 4.1L8 10.3l-3.7 1.9.7-4.1-3-2.9 4.2-.7z"/>
        </svg>
      ))}
    </div>
  )
}

export function ReviewsSection() {
  return (
    <section className="bg-white px-6 sm:px-10 py-20 sm:py-28">
      <div className="max-w-6xl mx-auto">
        <p className="text-xs font-semibold uppercase tracking-widest text-[#c96442] mb-4">
          / отзывы
        </p>
        <div className="flex items-end justify-between mb-12 gap-4 flex-wrap">
          <div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#3d3929]">
              Что говорят покупатели
            </h2>
            <p className="text-[#3d3929]/50 text-sm mt-2">Более 500 собранных наборов</p>
          </div>
          <div className="flex items-center gap-2">
            <StarRating />
            <span className="text-sm font-bold text-[#3d3929]">5.0</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {REVIEWS.map((r, i) => (
            <div key={i} className="rounded-2xl border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
              <div className="h-36 overflow-hidden">
                <img
                  src={r.imageUrl}
                  alt={r.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  onError={e => { (e.target as HTMLImageElement).src = FALLBACK }}
                />
              </div>
              <div className="p-5">
                <StarRating />
                <p className="text-sm text-[#3d3929]/70 leading-relaxed mt-3 mb-4">«{r.text}»</p>
                <div>
                  <span className="text-sm font-bold text-[#3d3929]">{r.name}</span>
                  <span className="text-xs text-[#3d3929]/40 ml-2">{r.city}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Проверь TypeScript**

```bash
npx tsc --noEmit
```
Ожидание: 0 ошибок.

- [ ] **Step 3: Commit**

```bash
git add src/components/sections/ReviewsSection.tsx
git commit -m "feat: add ReviewsSection with 6 placeholder reviews"
```

---

## Task 7: FAQSection

**Files:**
- Create: `src/components/sections/FAQSection.tsx`

- [ ] **Step 1: Создай файл компонента**

```tsx
// src/components/sections/FAQSection.tsx
import { useState } from 'react'

const FAQ_ITEMS = [
  {
    q: 'Что такое конструктор ГЕККО?',
    a: 'ГЕККО — это конструктор для создания пиксельных картин из специальных фишек. Фишка крепится с шести сторон без дополнительных деталей — как лапки геккона. Вы загружаете фото, пикселизатор превращает его в схему, а вы собираете картину кирпичик за кирпичиком.',
  },
  {
    q: 'Как работает пикселизатор?',
    a: 'Загрузите любое фото в наш онлайн-пикселизатор, выберите формат (А5, А4 или А3), стиль (чёрно-белый, сепия или цветной) и посмотрите превью. Когда результат нравится — оформляйте заказ. Мы соберём набор именно под вашу схему.',
  },
  {
    q: 'Сколько деталей в наборе?',
    a: 'Зависит от формата: S·А5 — около 3 500 деталей, M·А4 — около 7 000 деталей, L·А3 — около 14 000 деталей. В каждый набор кладём небольшой запас деталей на случай потери.',
  },
  {
    q: 'Могу ли я пересобрать картину с другим фото?',
    a: 'Да! Фишки универсальны — после сборки картину можно разобрать и собрать заново по другой схеме. Новые схемы можно скачать в пикселизаторе бесплатно.',
  },
  {
    q: 'Сколько времени занимает сборка?',
    a: 'Примерно 45–90 минут на А5, 2–4 часа на А4 и 5–8 часов на А3. Многие разбивают на несколько вечеров — это расслабляет и затягивает.',
  },
  {
    q: 'Как и куда доставляете?',
    a: 'Доставляем по всей России. Отправляем в течение 1–3 рабочих дней после подтверждения заказа. Стоимость и сроки доставки рассчитываются при оформлении заказа.',
  },
  {
    q: 'Можно ли вернуть или обменять набор?',
    a: 'Да, в течение 14 дней с момента получения, если набор не был вскрыт. Если в наборе обнаружены недостающие детали — заменим бесплатно, просто напишите нам.',
  },
  {
    q: 'Чем ГЕККО отличается от обычного LEGO?',
    a: 'ГЕККО создан специально для создания пиксельных картин и фигурок. Фишка крепится с шести сторон без дополнительных деталей, что даёт большую свободу. Наборы не совместимы с LEGO и не являются его аналогом — это самостоятельный продукт со своей уникальной системой крепления.',
  },
]

export function FAQSection() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section className="bg-[#faf9f5] px-6 sm:px-10 py-20 sm:py-28">
      <div className="max-w-6xl mx-auto">
        <p className="text-xs font-semibold uppercase tracking-widest text-[#c96442] mb-4">
          / вопросы и ответы
        </p>
        <h2 className="text-3xl sm:text-4xl font-black text-[#3d3929] mb-12">
          Частые вопросы
        </h2>

        <div className="max-w-3xl flex flex-col divide-y divide-gray-100">
          {FAQ_ITEMS.map((item, i) => (
            <div key={i}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 py-5 text-left group"
              >
                <span className="text-base font-bold text-[#3d3929] group-hover:text-[#c96442] transition-colors">
                  {item.q}
                </span>
                <span
                  className="shrink-0 w-6 h-6 rounded-full border border-gray-200 flex items-center justify-center text-[#3d3929]/50 transition-transform duration-200"
                  style={{ transform: open === i ? 'rotate(45deg)' : 'rotate(0deg)' }}
                >
                  +
                </span>
              </button>
              {open === i && (
                <p className="text-sm text-[#3d3929]/60 leading-relaxed pb-5">
                  {item.a}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <div className="max-w-3xl mt-12 p-5 rounded-2xl bg-gray-50 border border-gray-100">
          <p className="text-xs text-[#3d3929]/40 leading-relaxed">
            <strong className="text-[#3d3929]/60">Важно знать:</strong> Готовая мозаика является художественной интерпретацией исходного фото.
            Из-за пикселизации финальный результат может отличаться от оригинала — это особенность формата, а не дефект.
            Рекомендуем посмотреть превью в пикселизаторе перед оформлением заказа.
          </p>
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Проверь TypeScript**

```bash
npx tsc --noEmit
```
Ожидание: 0 ошибок.

- [ ] **Step 3: Commit**

```bash
git add src/components/sections/FAQSection.tsx
git commit -m "feat: add FAQSection with accordion and disclaimer"
```

---

## Task 8: Wire all sections into App.tsx

**Files:**
- Modify: `src/App.tsx`

- [ ] **Step 1: Добавь импорты в начало App.tsx** (после существующих импортов)

```tsx
import { HowItWorksSection }      from '@/components/sections/HowItWorksSection'
import { BeforeAfterSection }     from '@/components/sections/BeforeAfterSection'
import { PriceCalculatorSection } from '@/components/sections/PriceCalculatorSection'
import { ReadyDesignsSection }    from '@/components/sections/ReadyDesignsSection'
import { GiftSection }            from '@/components/sections/GiftSection'
import { ReviewsSection }         from '@/components/sections/ReviewsSection'
import { FAQSection }             from '@/components/sections/FAQSection'
```

- [ ] **Step 2: Вставь секции в правильном порядке в App.tsx**

Найди в `src/App.tsx` строку:

```tsx
      {/* ════════════════════════════════════════════════
          SCREEN 2 — CATALOG GALLERY
      ════════════════════════════════════════════════ */}
      <div className="relative z-10 bg-[#faf9f5]">
        <CatalogSection />
```

Замени на:

```tsx
      {/* ════════════════════════════════════════════════
          SCREEN 2+
      ════════════════════════════════════════════════ */}
      <div className="relative z-10 bg-[#faf9f5]">
        <HowItWorksSection />
        <BeforeAfterSection />
        <PriceCalculatorSection />
        <ReadyDesignsSection />
        <CatalogSection />
        <GiftSection />
        <ReviewsSection />
        <FAQSection />
```

- [ ] **Step 3: Полная сборка**

```bash
npm run build
```
Ожидание: `✓ built in X.XXs`, 0 ошибок TypeScript.

- [ ] **Step 4: Проверь в браузере**

```bash
npm run dev
```
Открой `http://localhost:5173` и убедись что:
- Все 7 новых секций отображаются в правильном порядке
- Калькулятор переключает форматы и цветность
- FAQ открывает/закрывает ответы
- Горизонтальная прокрутка работает в ReadyDesigns
- Изображения загружаются (или показывают fallback без ошибок в консоли)

- [ ] **Step 5: Commit**

```bash
git add src/App.tsx
git commit -m "feat: wire all 7 new landing sections into App"
```

---

## Self-Review

**Spec coverage:**
- ✅ HowItWorks — 3 шага с SVG иллюстрациями
- ✅ BeforeAfter — 2 изображения рядом, заглушки gekkotoys.ru
- ✅ PriceCalculator — формат + цветность, плейсхолдерные цены, CTA
- ✅ ReadyDesigns — горизонтальная прокрутка, 8 карточек
- ✅ GiftSection — тёмный фон, 3 буллета, CTA
- ✅ Reviews — 6 карточек с заглушками, имя+город+звёзды+текст+фото
- ✅ FAQ — 8 вопросов с ответами, аккордеон, дисклеймер

**Placeholder scan:** Нет TBD или TODO. Все цены помечены как ориентировочные прямо в UI.

**Type consistency:** `Format`, `ColorStyle` определены в Task 3 и нигде больше не используются — нет конфликтов. Все компоненты экспортируются как именованные (`export function X`), импорты в Task 8 соответствуют.
