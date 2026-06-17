const BASE = 'https://gekkotoys.ru'

export type CategoryId = 'kartiny-2d' | '3d' | 'art-konstruktor'

export interface Category {
  id: CategoryId
  slug: string
  name: string
  subtitle: string
  description: string
  coverImage: string
  emoji: string
  color: string
  href: string
}

export interface Subcategory {
  id: string
  slug: string
  name: string
  coverImage: string
  parentCategory: CategoryId
  productCount: number
}

export interface Product {
  id: string
  slug: string
  name: string
  shortName: string
  categoryId: CategoryId
  subcategoryId?: string
  images: string[]
  coverImage: string
  sku: string
  pieces: number
  weight?: number
  assembledDimensions?: string
  packagingDimensions?: string
  difficulty: 1 | 2 | 3 | 4 | 5
  description: string
  isNew?: boolean
  isPopular?: boolean
}

// ─── Categories ───────────────────────────────────────────────────────────────

export const CATEGORIES: Category[] = [
  {
    id: 'kartiny-2d',
    slug: 'kartiny-2d',
    name: '2D Конструктор',
    subtitle: 'Картины',
    description: 'Однослойные картинки 8 тематических серий и разных размеров — от А5 до А3.',
    coverImage: BASE + '/cache/images/2Д/экзот_2д_А5/800_cover_92_1729516999_Попугайpng.webp',
    emoji: '🖼️',
    color: 'from-sky-400 to-blue-500',
    href: '/catalog/kartiny-2d',
  },
  {
    id: '3d',
    slug: '3d',
    name: '3D Конструктор',
    subtitle: 'Объёмные фигуры',
    description: 'Объёмные фигуры из цветных фишек — машины, животные, праздничные наборы.',
    coverImage: BASE + '/cache/images/3д/800_cover_92_1734097484_P1png.webp',
    emoji: '🏎️',
    color: 'from-orange-400 to-red-500',
    href: '/catalog/3d',
  },
  {
    id: 'art-konstruktor',
    slug: 'art-konstruktor',
    name: 'Арт Конструктор',
    subtitle: 'Создай свой шедевр',
    description: 'Загрузи любое фото в пикселизатор — мы соберём уникальный набор именно для тебя.',
    coverImage: BASE + '/cache/images/0Арт_конструктор/800_cover_92_1733147527_38952-вб01png.webp',
    emoji: '🎨',
    color: 'from-green-400 to-emerald-600',
    href: '/catalog/art-konstruktor',
  },
]

// ─── Subcategories (2D) ───────────────────────────────────────────────────────

export const SUBCATEGORIES_2D: Subcategory[] = [
  { id: 'exotic-mini', slug: 'exotic-mini', name: 'Экзотические животные', coverImage: BASE + '/cache/images/2Д/экзот_2д_А5/800_cover_92_1729516999_Попугайpng.webp', parentCategory: 'kartiny-2d', productCount: 6 },
  { id: 'dogs', slug: 'dogs', name: 'Собаки', coverImage: BASE + '/cache/images/2Д/А3/800_cover_92_1732199776_Джекpng.webp', parentCategory: 'kartiny-2d', productCount: 4 },
  { id: 'pets-mini', slug: 'pets-mini', name: 'Домашние животные', coverImage: BASE + '/cache/images/2Д/домашнее_2д_А5/800_cover_92_1729517120_Короваpng.webp', parentCategory: 'kartiny-2d', productCount: 5 },
  { id: 'wild', slug: 'wild', name: 'Дикая природа', coverImage: BASE + '/cache/images/2Д/А3/800_cover_92_1732199772_Зебраpng.webp', parentCategory: 'kartiny-2d', productCount: 5 },
  { id: 'dino-mini', slug: 'dino-mini', name: 'Динозавры', coverImage: BASE + '/cache/images/2Д/дино_2д_А5/800_cover_92_1729517204_аллозаврpng.webp', parentCategory: 'kartiny-2d', productCount: 4 },
  { id: 'techno-mini', slug: 'techno-mini', name: 'Техника', coverImage: BASE + '/cache/images/2Д/Техника2д_А5/800_cover_92_1729517055_Пожарнаямашинаpng.webp', parentCategory: 'kartiny-2d', productCount: 4 },
  { id: 'fantasy', slug: 'fantasy', name: 'Фэнтези', coverImage: BASE + '/cache/images/2Д/А3/800_cover_92_1732199765_Енотpng.webp', parentCategory: 'kartiny-2d', productCount: 3 },
  { id: 'seriia-novyi-god', slug: 'seriia-novyi-god', name: 'Новый год', coverImage: BASE + '/cache/images/2Д/Новый_год_2д_А5/800_cover_92_1734090055_Елка(3)png.webp', parentCategory: 'kartiny-2d', productCount: 4 },
]

// ─── Products ─────────────────────────────────────────────────────────────────

export const PRODUCTS: Product[] = [
  // ── 2D / Exotic Animals ──────────────────────────────────────────────────────
  {
    id: 'popugai',
    slug: 'popugai',
    name: 'Конструктор Гекко «Попугай» — Экзотические животные (А5)',
    shortName: 'Попугай',
    categoryId: 'kartiny-2d',
    subcategoryId: 'exotic-mini',
    coverImage: BASE + '/cache/images/2Д/экзот_2д_А5/800_cover_92_1729516999_Попугайpng.webp',
    images: [
      BASE + '/cache/images/2Д/экзот_2д_А5/800_cover_92_1729590692_ГЕККО_Конструктор_ЭКЗОТ_ПОПУГАЙ-облjpg.webp',
      BASE + '/cache/images/2Д/экзот_2д_А5/800_cover_92_1729516999_Попугайpng.webp',
      BASE + '/cache/images/2Д/экзот_2д_А5/800_cover_92_1729590691_ГЕККО_Конструктор_ЭКЗОТ_ПОПУГАЙ-заднjpg.webp',
    ],
    sku: '38016',
    pieces: 418,
    weight: 75,
    assembledDimensions: '218 × 134 мм',
    packagingDimensions: '178 × 134 × 53 мм',
    difficulty: 1,
    description: 'Попугай — удивительная птица из семейства, насчитывающего сотни подвидов, родиной которых считается Австралия. Яркое оперение и замечательный интеллект делают попугаев одними из самых популярных питомцев. Собери этого красавца из 418 цветных фишек ГЕККО!',
    isPopular: true,
  },
  {
    id: 'delfin',
    slug: 'delfin',
    name: 'Конструктор Гекко «Дельфин» — Экзотические животные (А5)',
    shortName: 'Дельфин',
    categoryId: 'kartiny-2d',
    subcategoryId: 'exotic-mini',
    coverImage: BASE + '/cache/images/2Д/экзот_2д_А5/800_cover_92_1729516998_Дельфинpng.webp',
    images: [BASE + '/cache/images/2Д/экзот_2д_А5/800_cover_92_1729516998_Дельфинpng.webp'],
    sku: '38017',
    pieces: 418,
    weight: 75,
    assembledDimensions: '218 × 134 мм',
    packagingDimensions: '178 × 134 × 53 мм',
    difficulty: 1,
    description: 'Дельфин — символ свободы и радости. Один из самых умных морских обитателей, известный своей дружелюбностью к людям. Собери пиксельный портрет дельфина из фишек ГЕККО!',
  },
  {
    id: 'tukan',
    slug: 'tukan',
    name: 'Конструктор Гекко «Тукан» — Экзотические животные (А5)',
    shortName: 'Тукан',
    categoryId: 'kartiny-2d',
    subcategoryId: 'exotic-mini',
    coverImage: BASE + '/cache/images/2Д/экзот_2д_А5/800_cover_92_1729516997_Туканpng.webp',
    images: [BASE + '/cache/images/2Д/экзот_2д_А5/800_cover_92_1729516997_Туканpng.webp'],
    sku: '38018',
    pieces: 418,
    weight: 75,
    assembledDimensions: '218 × 134 мм',
    packagingDimensions: '178 × 134 × 53 мм',
    difficulty: 1,
    description: 'Тукан — яркая тропическая птица с огромным красочным клювом. Обитает в дождевых лесах Центральной и Южной Америки. Соберите это яркое создание из фишек!',
  },
  {
    id: 'xameleon',
    slug: 'xameleon',
    name: 'Конструктор Гекко «Хамелеон» — Экзотические животные (А5)',
    shortName: 'Хамелеон',
    categoryId: 'kartiny-2d',
    subcategoryId: 'exotic-mini',
    coverImage: BASE + '/cache/images/2Д/экзот_2д_А5/800_cover_92_1729516996_Хамелеонpng.webp',
    images: [BASE + '/cache/images/2Д/экзот_2д_А5/800_cover_92_1729516996_Хамелеонpng.webp'],
    sku: '38019',
    pieces: 418,
    weight: 75,
    assembledDimensions: '218 × 134 мм',
    packagingDimensions: '178 × 134 × 53 мм',
    difficulty: 2,
    description: 'Хамелеон — мастер маскировки из мира рептилий. Способность менять цвет кожи делает его одним из самых удивительных существ планеты. Теперь его можно собрать из фишек!',
  },
  {
    id: 'cerepaxa',
    slug: 'cerepaxa',
    name: 'Конструктор Гекко «Черепаха» — Экзотические животные (А5)',
    shortName: 'Черепаха',
    categoryId: 'kartiny-2d',
    subcategoryId: 'exotic-mini',
    coverImage: BASE + '/cache/images/2Д/экзот_2д_А5/800_cover_92_1729516997_Черепахаpng.webp',
    images: [BASE + '/cache/images/2Д/экзот_2д_А5/800_cover_92_1729516997_Черепахаpng.webp'],
    sku: '38020',
    pieces: 418,
    weight: 75,
    assembledDimensions: '218 × 134 мм',
    packagingDimensions: '178 × 134 × 53 мм',
    difficulty: 1,
    description: 'Черепаха — одно из самых древних существ на Земле, живущее уже более 200 миллионов лет. Символ мудрости и долголетия. Соберите её пиксельный портрет!',
  },
  {
    id: 'sova',
    slug: 'sova',
    name: 'Конструктор Гекко «Сова» — Экзотические животные (А5)',
    shortName: 'Сова',
    categoryId: 'kartiny-2d',
    subcategoryId: 'exotic-mini',
    coverImage: BASE + '/cache/images/2Д/экзот_2д_А5/800_cover_92_1729516996_Соваpng.webp',
    images: [BASE + '/cache/images/2Д/экзот_2д_А5/800_cover_92_1729516996_Соваpng.webp'],
    sku: '38021',
    pieces: 418,
    weight: 75,
    assembledDimensions: '218 × 134 мм',
    packagingDimensions: '178 × 134 × 53 мм',
    difficulty: 1,
    description: 'Сова — ночной хищник, символ мудрости и тайны. Её огромные глаза и бесшумный полёт делают её настоящим охотником ночи. Соберите этого красавца из фишек ГЕККО!',
  },

  // ── 3D ───────────────────────────────────────────────────────────────────────
  {
    id: 'sportscar',
    slug: 'sportscar',
    name: 'Конструктор 3D Гекко «Спорткар»',
    shortName: 'Спорткар',
    categoryId: '3d',
    coverImage: BASE + '/cache/images/3д/800_cover_92_1734097487_С1png.webp',
    images: [
      BASE + '/cache/images/3д/800_cover_92_1734097487_С1png.webp',
      BASE + '/cache/images/3д/800_cover_92_1734077893_3добечспрт01jpg.webp',
      BASE + '/cache/images/3д/800_cover_92_1734097487_С2png.webp',
      BASE + '/cache/images/3д/800_cover_92_1734097487_С3png.webp',
      BASE + '/cache/images/3д/800_cover_92_1734077893_3добечспрт02jpg.webp',
    ],
    sku: '39001',
    pieces: 1661,
    weight: 297,
    difficulty: 3,
    description: 'Спортивные автомобили — прирождённые короли автогонок! Первые гоночные машины появились ещё в 1900 году и развивали мощность 35 лошадиных сил. Сегодня спорткары достигают 1200 л.с. и разгоняются свыше 400 км/ч. Соберите свой из 1661 фишки ГЕККО!',
    isPopular: true,
  },
  {
    id: 'automini',
    slug: 'automini',
    name: 'Конструктор 3D Гекко «Автомобиль Мини»',
    shortName: 'Автомобиль Мини',
    categoryId: '3d',
    coverImage: BASE + '/cache/images/3д/800_cover_92_1734097482_M1png.webp',
    images: [
      BASE + '/cache/images/3д/800_cover_92_1734097482_M1png.webp',
      BASE + '/cache/images/3д/800_cover_92_1734077895_3добечмини01jpg.webp',
      BASE + '/cache/images/3д/800_cover_92_1734097482_M2png.webp',
      BASE + '/cache/images/3д/800_cover_92_1734097483_M3png.webp',
      BASE + '/cache/images/3д/800_cover_92_1734077895_3добечмини02jpg.webp',
    ],
    sku: '39002',
    pieces: 1798,
    weight: 321,
    difficulty: 3,
    description: 'Малолитражки — идеальные городские автомобили с двигателем до 1.2 литра. Манёвренные, экономичные, легко паркуются в самых тесных местах. Соберите этот компактный автомобиль из 1798 фишек!',
    isNew: true,
  },
  {
    id: 'minipogruz',
    slug: 'minipogruz',
    name: 'Конструктор 3D Гекко «Мини-погрузчик»',
    shortName: 'Мини-погрузчик',
    categoryId: '3d',
    coverImage: BASE + '/cache/images/3д/800_cover_92_1734097481_B1png.webp',
    images: [BASE + '/cache/images/3д/800_cover_92_1734097481_B1png.webp'],
    sku: '39003',
    pieces: 1520,
    weight: 272,
    difficulty: 3,
    description: 'Мини-погрузчик — незаменимая техника на стройке и в складских помещениях. Компактный, мощный, с ковшом для погрузки материалов. Соберите точную пиксельную модель!',
  },

  // ── Art Constructor ───────────────────────────────────────────────────────────
  {
    id: 'art-7700',
    slug: 'art-7700',
    name: 'Арт Конструктор ГЕККО — 7700 деталей',
    shortName: 'Арт ГЕККО S',
    categoryId: 'art-konstruktor',
    coverImage: BASE + '/cache/images/0Арт_конструктор/800_cover_92_1734352004_S-Ojpg.webp',
    images: [
      BASE + '/cache/images/0Арт_конструктор/800_cover_92_1734352004_S-Ojpg.webp',
      BASE + '/cache/images/0Арт_конструктор/800_cover_92_1734352007_info-1Ojpg.webp',
      BASE + '/cache/images/0Арт_конструктор/800_cover_92_1734352007_info-2Ojpg.webp',
      BASE + '/cache/images/0Арт_конструктор/800_cover_92_1734351999_info-3Ojpg.webp',
      BASE + '/cache/images/0Арт_конструктор/800_cover_92_1734351985_Инструкция-АРТ(1)jpg.webp',
    ],
    sku: '38952',
    pieces: 7700,
    weight: 1378,
    packagingDimensions: '39 × 29 × 10 см',
    difficulty: 3,
    description: 'Арт Конструктор ГЕККО — отличный способ украсить дом предметом искусства, сделанным своими руками. Загрузите любое фото в наш пикселизатор, выберите размер, получите инструкцию по сборке и создайте уникальную пиксельную картину из 7700 цветных фишек. Наборы совместимы между собой — можно объединять для создания больших работ.',
    isPopular: true,
  },
  {
    id: 'art-11550',
    slug: 'art-11550',
    name: 'Арт Конструктор ГЕККО — 11 550 деталей',
    shortName: 'Арт ГЕККО M',
    categoryId: 'art-konstruktor',
    coverImage: BASE + '/cache/images/0Арт_конструктор/800_cover_92_1734352004_M-Ojpg.webp',
    images: [
      BASE + '/cache/images/0Арт_конструктор/800_cover_92_1734352004_M-Ojpg.webp',
      BASE + '/cache/images/0Арт_конструктор/800_cover_92_1734352007_info-1Ojpg.webp',
      BASE + '/cache/images/0Арт_конструктор/800_cover_92_1734352007_info-2Ojpg.webp',
      BASE + '/cache/images/0Арт_конструктор/800_cover_92_1734351999_info-3Ojpg.webp',
    ],
    sku: '38953',
    pieces: 11550,
    weight: 2067,
    difficulty: 4,
    description: 'Увеличенный формат для более детальных и крупных пиксельных работ. 11 550 цветных фишек позволяют создать картину с высоким разрешением. Идеальный подарок для ценителей пиксельного искусства.',
    isNew: true,
  },
  {
    id: 'art-15400',
    slug: 'art-15400',
    name: 'Арт Конструктор ГЕККО — 15 400 деталей',
    shortName: 'Арт ГЕККО L',
    categoryId: 'art-konstruktor',
    coverImage: BASE + '/cache/images/0Арт_конструктор/800_cover_92_1733147527_38954-вб01png.webp',
    images: [
      BASE + '/cache/images/0Арт_конструктор/800_cover_92_1733147527_38954-вб01png.webp',
      BASE + '/cache/images/0Арт_конструктор/800_cover_92_1734352007_info-1Ojpg.webp',
      BASE + '/cache/images/0Арт_конструктор/800_cover_92_1734352007_info-2Ojpg.webp',
    ],
    sku: '38954',
    pieces: 15400,
    weight: 2752,
    difficulty: 5,
    description: 'Профессиональный формат для создания масштабных пиксельных шедевров. 15 400 фишек дают максимальное разрешение и детализацию. Для тех, кто хочет создать настоящее произведение пиксельного искусства.',
  },
]

// ─── Helpers ──────────────────────────────────────────────────────────────────

export function getProductsByCategory(categoryId: CategoryId) {
  return PRODUCTS.filter(p => p.categoryId === categoryId)
}

export function getProductsBySubcategory(subcategoryId: string) {
  return PRODUCTS.filter(p => p.subcategoryId === subcategoryId)
}

export function getProductBySlug(slug: string) {
  return PRODUCTS.find(p => p.slug === slug)
}

export function getCategoryById(id: CategoryId) {
  return CATEGORIES.find(c => c.id === id)
}
