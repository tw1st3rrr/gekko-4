import { Link } from 'react-router-dom'
import CatalogLayout from '@/components/CatalogLayout'
import { CATEGORIES, PRODUCTS } from '@/data/catalog'
import { Star, Package2 } from 'lucide-react'

function DifficultyDots({ level }: { level: number }) {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map(i => (
        <div
          key={i}
          className={`w-2 h-2 rounded-full ${i <= level ? 'bg-green-500' : 'bg-gray-200'}`}
        />
      ))}
    </div>
  )
}

export function ProductCard({ product }: { product: typeof PRODUCTS[0] }) {
  return (
    <Link
      to={`/catalog/el/${product.slug}`}
      className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-200 flex flex-col"
    >
      {/* Image */}
      <div className="relative aspect-[4/3] bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
        <img
          src={product.coverImage}
          alt={product.shortName}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          onError={e => { (e.target as HTMLImageElement).style.display = 'none' }}
        />
        {product.isNew && (
          <span className="absolute top-3 left-3 bg-blue-500 text-white text-xs font-bold px-2.5 py-1 rounded-full">
            НОВИНКА
          </span>
        )}
        {product.isPopular && (
          <span className="absolute top-3 left-3 bg-amber-400 text-white text-xs font-bold px-2.5 py-1 rounded-full flex items-center gap-1">
            <Star size={10} /> ХИТ
          </span>
        )}
      </div>

      {/* Info */}
      <div className="p-4 flex flex-col gap-2 flex-1">
        <h3 className="font-bold text-gray-900 text-sm leading-snug group-hover:text-green-700 transition-colors line-clamp-2">
          {product.shortName}
        </h3>
        <div className="flex items-center gap-3 text-xs text-gray-400 mt-auto">
          <span className="flex items-center gap-1">
            <Package2 size={12} />
            {product.pieces.toLocaleString('ru')} дет.
          </span>
          <DifficultyDots level={product.difficulty} />
        </div>
        <div className="text-xs text-gray-400">Арт. {product.sku}</div>
      </div>

      <div className="px-4 pb-4">
        <span className="w-full inline-flex items-center justify-center gap-1 bg-gray-900 group-hover:bg-green-600 text-white text-xs font-semibold py-2.5 rounded-xl transition-colors">
          Подробнее →
        </span>
      </div>
    </Link>
  )
}

export default function CatalogMain() {
  const popularProducts = PRODUCTS.filter(p => p.isPopular)

  return (
    <CatalogLayout breadcrumbs={[{ label: 'Каталог' }]}>
      {/* Hero banner */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 px-6 sm:px-10 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto">
          <p className="text-green-400 text-sm font-semibold uppercase tracking-widest mb-4">
            Каталог ГЕККО ТОЙС
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
            Пиксельные<br />
            <span className="text-green-400">конструкторы</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-xl">
            Три вида наборов — от простых 2D картин до объёмных 3D фигур и индивидуальных Арт проектов по вашему фото.
          </p>
        </div>
      </section>

      {/* Category cards */}
      <section className="px-6 sm:px-10 py-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-black text-gray-900 mb-8">Категории</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {CATEGORIES.map(cat => (
              <Link
                key={cat.id}
                to={cat.href}
                className="group relative overflow-hidden rounded-3xl aspect-[4/3] flex flex-col justify-end p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
              >
                {/* BG image */}
                <img
                  src={cat.coverImage}
                  alt={cat.name}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={e => { (e.target as HTMLImageElement).style.display = 'none' }}
                />
                <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent`} />

                {/* Content */}
                <div className="relative z-10">
                  <span className="text-3xl mb-2 block">{cat.emoji}</span>
                  <h3 className="text-white font-black text-xl leading-tight mb-1">{cat.name}</h3>
                  <p className="text-white/70 text-sm mb-4 line-clamp-2">{cat.description}</p>
                  <span className="inline-flex items-center gap-1 bg-white/20 backdrop-blur-sm border border-white/30 text-white text-sm font-semibold px-4 py-2 rounded-xl group-hover:bg-green-500 group-hover:border-green-500 transition-colors">
                    Смотреть →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Popular products */}
      <section className="px-6 sm:px-10 py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-black text-gray-900">Хиты продаж</h2>
            <Link to="/catalog/kartiny-2d" className="text-sm text-green-600 font-semibold hover:underline">
              Все товары →
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {popularProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Pixelizer CTA */}
      <section className="px-6 sm:px-10 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-3xl p-8 sm:p-12 text-white flex flex-col sm:flex-row items-center gap-8 justify-between">
            <div>
              <h2 className="text-2xl sm:text-3xl font-black mb-3">Создай свой набор</h2>
              <p className="text-white/80 max-w-sm">
                Загрузи любое фото в пикселизатор — мы пересчитаем его в фишки и подготовим набор именно для тебя.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <a
                href="http://91.229.10.93:5000/"
                className="bg-white text-green-700 font-bold text-sm px-6 py-3 rounded-xl hover:bg-green-50 transition-colors text-center"
              >
                Стандартный набор
              </a>
              <a
                href="http://91.229.10.93:5000/"
                className="bg-white/20 border border-white/40 text-white font-bold text-sm px-6 py-3 rounded-xl hover:bg-white/30 transition-colors text-center"
              >
                Индивидуальный
              </a>
            </div>
          </div>
        </div>
      </section>
    </CatalogLayout>
  )
}
