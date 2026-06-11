import CatalogLayout from '@/components/CatalogLayout'
import { SUBCATEGORIES_2D, getProductsBySubcategory } from '@/data/catalog'
import { ProductCard } from './CatalogMain'
import { Layers } from 'lucide-react'

export default function Catalog2D() {
  const exoticProducts = getProductsBySubcategory('exotic-mini')

  return (
    <CatalogLayout
      breadcrumbs={[
        { label: 'Каталог', href: '/catalog' },
        { label: '2D Конструктор' },
      ]}
    >
      {/* Header */}
      <section className="bg-gradient-to-br from-sky-50 to-blue-100 px-6 sm:px-10 py-12 sm:py-16 border-b border-blue-100">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row gap-6 sm:gap-12 items-start sm:items-center">
          <div className="w-16 h-16 rounded-2xl bg-blue-500 flex items-center justify-center text-3xl shrink-0">
            🖼️
          </div>
          <div>
            <h1 className="text-3xl sm:text-4xl font-black text-gray-900 mb-2">2D Конструктор</h1>
            <p className="text-gray-600 text-base max-w-xl">
              Однослойные пиксельные картины 8 тематических серий. Форматы А5 и А3. Уровень сложности от 1 до 3. Идеально для начинающих и в подарок.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 sm:px-10 py-12">

        {/* Subcategories */}
        <section className="mb-16">
          <h2 className="text-xl font-black text-gray-900 mb-6 flex items-center gap-2">
            <Layers size={20} className="text-blue-500" />
            Все серии
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {SUBCATEGORIES_2D.map(sub => (
              <div
                key={sub.id}
                className={`group relative overflow-hidden rounded-2xl aspect-square cursor-pointer ${
                  sub.id === 'exotic-mini'
                    ? 'ring-2 ring-blue-400'
                    : 'opacity-90 hover:opacity-100'
                }`}
              >
                <img
                  src={sub.coverImage}
                  alt={sub.name}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={e => { (e.target as HTMLImageElement).style.display = 'none' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <p className="text-white font-bold text-sm leading-tight">{sub.name}</p>
                  <p className="text-white/60 text-xs">{sub.productCount} товаров</p>
                </div>
                {sub.id === 'exotic-mini' && (
                  <div className="absolute top-2 right-2 bg-blue-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                    В наличии
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Exotic Animals products — expanded */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-xl font-black text-gray-900">Экзотические животные</h2>
            <span className="bg-blue-100 text-blue-700 text-xs font-bold px-2.5 py-1 rounded-full">А5</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {exoticProducts.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>

        {/* Info block */}
        <section className="bg-blue-50 rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row gap-6 items-start">
          <div className="text-4xl shrink-0">📦</div>
          <div>
            <h3 className="font-black text-gray-900 text-lg mb-2">Характеристики набора А5</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-600">
              <li>✓ Размер картины: 218 × 134 мм</li>
              <li>✓ Упаковка: 178 × 134 × 53 мм</li>
              <li>✓ Количество деталей: ~418 шт.</li>
              <li>✓ Вес: ~75 г</li>
              <li>✓ Уровень сложности: 1–2 из 5</li>
              <li>✓ Возраст: 6+</li>
            </ul>
          </div>
        </section>

      </div>
    </CatalogLayout>
  )
}
