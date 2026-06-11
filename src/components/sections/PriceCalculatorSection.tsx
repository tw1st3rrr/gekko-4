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
    <section className="bg-white dark:bg-[#242018] px-6 sm:px-10 py-20 sm:py-28">
      <div className="max-w-6xl mx-auto">
        <p className="text-xs font-semibold uppercase tracking-widest text-[#c96442] mb-4">
          / стоимость
        </p>
        <h2 className="text-3xl sm:text-4xl font-black text-[#3d3929] dark:text-[#f0ede6] mb-4">
          Рассчитай стоимость набора
        </h2>
        <p className="text-[#3d3929]/60 dark:text-[#f0ede6]/60 text-base mb-12 max-w-xl">
          Цена зависит от формата и цветности. Все наборы включают базовые платы, кирпичики, схему сборки и доставку.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">

          {/* Controls */}
          <div className="flex flex-col gap-8">
            <div>
              <p className="text-sm font-bold text-[#3d3929] dark:text-[#f0ede6] mb-3">Формат</p>
              <div className="flex gap-3 flex-wrap">
                {FORMATS.map(f => (
                  <button
                    key={f.id}
                    onClick={() => setFormat(f.id)}
                    className={`px-5 py-3 rounded-xl border-2 font-bold text-sm transition-all ${
                      format === f.id
                        ? 'border-[#c96442] bg-[#c96442]/8 text-[#c96442]'
                        : 'border-gray-200 dark:border-white/10 text-[#3d3929]/60 dark:text-[#f0ede6]/60 hover:border-gray-400 dark:hover:border-white/20'
                    }`}
                  >
                    {f.label}
                    <span className="block text-xs font-normal opacity-70 mt-0.5">{f.count}</span>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <p className="text-sm font-bold text-[#3d3929] dark:text-[#f0ede6] mb-3">Цветность</p>
              <div className="flex gap-3 flex-wrap">
                {COLORS.map(c => (
                  <button
                    key={c.id}
                    onClick={() => setColorStyle(c.id)}
                    className={`px-5 py-3 rounded-xl border-2 font-bold text-sm transition-all flex items-center gap-2 ${
                      colorStyle === c.id
                        ? 'border-[#c96442] bg-[#c96442]/8 text-[#c96442]'
                        : 'border-gray-200 dark:border-white/10 text-[#3d3929]/60 dark:text-[#f0ede6]/60 hover:border-gray-400 dark:hover:border-white/20'
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
          <div className="bg-[#faf9f5] dark:bg-[#2a2720] rounded-3xl p-8 flex flex-col gap-6">
            <div>
              <p className="text-sm text-[#3d3929]/50 dark:text-[#f0ede6]/50 mb-1">{selectedFormat.details} · {selectedFormat.count}</p>
              <div className="flex items-baseline gap-2">
                <span className="text-5xl font-black text-[#3d3929] dark:text-[#f0ede6]">{price}</span>
              </div>
              <p className="text-xs text-[#3d3929]/40 dark:text-[#f0ede6]/40 mt-2">
                * Цена является ориентировочной. Окончательная стоимость рассчитывается при оформлении заказа.
              </p>
            </div>
            <ul className="flex flex-col gap-2 text-sm text-[#3d3929]/70 dark:text-[#f0ede6]/70">
              {['Базовые платы в комплекте', 'Кирпичики + 5% запас', 'Пронумерованная схема', 'Доставка по России'].map(item => (
                <li key={item} className="flex items-center gap-2">
                  <span className="text-[#c96442] font-bold">✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <a
              href="http://91.229.10.93:5000/"
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
