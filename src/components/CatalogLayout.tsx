import { Link, useLocation } from 'react-router-dom'
import { ChevronRight, Home, Package } from 'lucide-react'
import { Footerdemo } from '@/components/ui/footer-section'

interface BreadcrumbItem {
  label: string
  href?: string
}

interface CatalogLayoutProps {
  children: React.ReactNode
  breadcrumbs?: BreadcrumbItem[]
}

function GeckoLogo({ size = 28 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 256 256" fill="none">
      <path d="M 256 256 L 128 256 L 0 128 L 128 128 Z" fill="black" />
      <path d="M 256 128 L 128 128 L 0 0 L 128 0 Z" fill="black" />
    </svg>
  )
}

export default function CatalogLayout({ children, breadcrumbs = [] }: CatalogLayoutProps) {
  const location = useLocation()

  const navLinks = [
    { label: 'Главная', href: '/' },
    { label: 'Каталог', href: '/catalog' },
    { label: '2D Картины', href: '/catalog/kartiny-2d' },
    { label: '3D Фигуры', href: '/catalog/3d' },
    { label: 'Арт Конструктор', href: '/catalog/art-konstruktor' },
  ]

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Navbar */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center gap-4">
          <Link to="/" className="flex items-center gap-2.5 shrink-0">
            <GeckoLogo size={28} />
            <span className="font-black text-gray-900 text-sm sm:text-base tracking-wide uppercase hidden sm:block">
              ГЕККО ТОЙС
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-1 ml-4">
            {navLinks.map(link => {
              const isActive = link.href === location.pathname
              return (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`text-sm px-3 py-1.5 rounded-lg font-medium transition-colors ${
                    isActive
                      ? 'bg-green-50 text-green-700'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  {link.label}
                </Link>
              )
            })}
          </div>

          <div className="ml-auto flex items-center gap-2">
            <Link
              to="/catalog"
              className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-900 transition-colors lg:hidden"
            >
              <Package size={18} />
              <span className="hidden sm:inline">Каталог</span>
            </Link>
            <a
              href="http://91.229.10.93:5000/"
              className="bg-green-500 hover:bg-green-600 text-white text-sm font-semibold px-4 py-2 rounded-xl transition-colors whitespace-nowrap"
            >
              Пикселизатор
            </a>
          </div>
        </div>
      </header>

      {/* Breadcrumbs */}
      {breadcrumbs.length > 0 && (
        <nav className="bg-gray-50 border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 h-10 flex items-center gap-1.5 text-sm">
            <Link to="/" className="text-gray-400 hover:text-gray-600 transition-colors">
              <Home size={14} />
            </Link>
            {breadcrumbs.map((crumb, i) => (
              <span key={i} className="flex items-center gap-1.5">
                <ChevronRight size={14} className="text-gray-300" />
                {crumb.href ? (
                  <Link to={crumb.href} className="text-gray-500 hover:text-gray-800 transition-colors">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-gray-800 font-medium">{crumb.label}</span>
                )}
              </span>
            ))}
          </div>
        </nav>
      )}

      {/* Content */}
      <main className="flex-1">
        {children}
      </main>

      <Footerdemo />
    </div>
  )
}
