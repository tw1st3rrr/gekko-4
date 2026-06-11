# ГЕККО ТОЙС — Спецификация лендинга

> Актуальная дата: июнь 2026. Обновляй при значимых изменениях архитектуры.

---

## Продукт

**ГЕККО АРТ** — конструктор нового поколения. Фишки крепятся со всех 6 сторон (как лапки геккона) без дополнительных деталей. Из любого набора можно собирать пиксельные картины и объёмные фигуры по своим фотографиям.

| Ресурс | URL |
|---|---|
| Основной сайт | https://gekkotoys.ru/ |
| Пикселизатор | http://91.229.10.93:5000/ |
| Лендинг (prod) | Vercel, автодеплой из GitHub `main` |
| GitHub repo | https://github.com/tw1st3rrr/gekkotoys-landing |

---

## Технический стек

| Технология | Версия |
|---|---|
| React | 18.3.x |
| TypeScript | 5.5.x |
| Vite | 5.4.x |
| Tailwind CSS | 3.4.x |
| motion (framer) | 12.x — **импорт из `motion/react`** |
| lucide-react | 0.441.x |
| @number-flow/react | 0.6.x |
| canvas-confetti | 1.9.x |
| react-router-dom | 7.x |

**Path alias:** `@/` → `src/`  
**Dark mode:** `darkMode: 'class'` в tailwind.config.js

---

## Бренд-палитра

| Роль | Light | Dark |
|---|---|---|
| Фон страницы | `#faf9f5` | `#1c1a15` |
| Поверхности / карточки | — | `#242018` |
| Основной текст | `#3d3929` | `#f0ede6` |
| Акцент / CTA | `#c96442` | `#c96442` |
| GiftSection фон | `#3d3929` | `#252118` |

**Логотип:** `https://gekkotoys.ru/img/logoBlack.svg`  
Без `dark:invert` — цвета оригинальные в обеих темах.

---

## Константы (src/App.tsx)

```ts
const PIXELATOR     = 'http://91.229.10.93:5000/'
const LOGO_BLACK_URL = 'https://gekkotoys.ru/img/logoBlack.svg'
const VIDEO_URL     = 'https://d8j0ntlcm91z4.cloudfront.net/...(CloudFront landscape).mp4'
// /hero.mp4 — продуктовое видео в public/
```

---

## Структура файлов

```
src/
  App.tsx                           — весь лендинг, CatalogSection, контактная форма

  components/
    blocks/
      scroll-expansion-hero.tsx     — Hero: видео раскрывается при скролле
      animated-slideshow.tsx        — HoverSlider, TextStaggerHover

    sections/
      HowItWorksSection.tsx         — «Три шага» (3× LinkCard)
      PriceCalculatorSection.tsx    — «Выбери формат» (3 тарифа + toggle + NumberFlow)
      GiftSection.tsx               — «Ищешь подарок?»
      ReviewsSection.tsx            — Отзывы
      FAQSection.tsx                — FAQ аккордеон

    ui/
      starfield.tsx                 — 200 звёзд, magnetic spring (mouse-aware)
      link-card.tsx                 — Hover-карточки шагов
      liquid-glass-button.tsx       — LiquidButton + Button (CVA)
      footer-section.tsx            — Footerdemo

public/
  hero.mp4                          — продуктовое видео (расширяется в hero)

docs/
  SPEC.md                           — этот файл
```

---

## Архитектура страницы

```
[NAVBAR] — fixed, z-50, backdrop-blur, rounded-2xl
  Лого | О конструкторе · Каталог · Пикселизатор · Отзывы · Контакты | Тема | «Начать проект»

[HERO — ScrollExpandMedia] — 100dvh
  Фон: ландшафтное видео (CloudFront), opacity 1→0 при скролле
  Центр: продуктовое видео /hero.mp4, расширяется 300px→full
  Снизу-слева: «Конструктор с почти безграничными возможностями»
  Снизу-справа: «Стандартный набор» + «Индивидуальный проект» (→ пикселизатор)
  Поведение: body.overflowY='hidden' пока видео не раскрыто → нет лишнего скроллбара

[POST-HERO WRAPPER] — ref=postHeroRef, bg-[#faf9f5]/dark, overflow-hidden, onMouseMove
  [STARFIELD ×200] — absolute, распределён по всей высоте wrapper
  [HowItWorksSection]   — id="how-it-works", bg-transparent
  [PriceCalculatorSection] — bg-transparent
  [CatalogSection]      — id="catalog", 4 слайда HoverSlider
  [GiftSection]         — bg-[#3d3929] (своя подложка, звёзды не видны)
  [ReviewsSection]      — id="reviews", bg-white (своя подложка)
  [FAQSection]          — bg-transparent
  [ContactSection]      — id="contacts", bg-white (форма + карта контактов)
  [Footerdemo]
```

---

## Ключевые компоненты

### ScrollExpandMedia

- `bgVideoSrc` → фоновое видео на весь экран, `w-full h-full object-cover`
- `mediaSrc` → центральное видео, размер `300 + progress * 1250` px, `maxHeight: 85vh`
- Перехватывает `wheel` и `touchmove` пока `!mediaFullyExpanded`
- `document.body.style.overflowY = mediaFullyExpanded ? '' : 'hidden'`
- `heroContent` — абсолютно снизу, `opacity = max(0, 1 - progress * 2.5)`

### Starfield (ui/starfield.tsx)

- `count=200` в глобальном wrapper, `count=150` по умолчанию
- Каждая звезда: `useSpring` магнит к курсору, радиус 600px
- Мерцание: `opacity [0,1,0]`, repeat Infinity, random duration 2–5s
- Если `mousePos.x === null` → только мерцание без магнита
- **Важно:** секции внутри wrapper должны быть `bg-transparent` чтобы звёзды были видны

### PriceCalculatorSection

| Тариф | Готовый набор | Индивидуальный |
|---|---|---|
| S · А5 (~3500 деталей) | 2 490 ₽ | 3 290 ₽ |
| M · А4 (~7000 деталей) | 4 990 ₽ | 6 490 ₽ |
| L · А3 (~14000 деталей) | 8 990 ₽ | 11 990 ₽ |

Toggle → confetti при переключении на «Индивидуальный». NumberFlow animated prices.

### HowItWorksSection

3 шага: «Загрузи фото» → «Настрой пикселизатор» → «Получи и собери»  
Компонент `LinkCard`: hover spring scale 1.025 + y -5, картинка bottom-right.

---

## Navbar

| Ссылка | Anchor |
|---|---|
| О конструкторе | `#how-it-works` |
| Каталог | `#catalog` |
| Пикселизатор | http://91.229.10.93:5000/ (external) |
| Отзывы | `#reviews` |
| Контакты | `#contacts` |

Smooth scroll: `scrollIntoView({ behavior: 'smooth' })`  
CTA «Начать проект» → `bg-[#3d3929]` (видна в light mode).

---

## Деплой

1. `git push origin main` → Vercel подхватывает автоматически
2. Build: `tsc && vite build`
3. Никаких переменных окружения не требуется (все константы в коде)

---

## Известные заглушки (TODO)

- Форма обратной связи: mock `setTimeout 1s`, нет реального endpoint
- Кнопки «Заказать набор X»: `alert()`, нет страницы оформления
- HowItWorks: временные изображения с gekkotoys.ru (ждём AI-иллюстрации)

---

## Правила работы с кодом

```
motion       → import из 'motion/react', НЕ из 'framer-motion'
<Link>       → НЕТ (нет Next.js), использовать <a href=...>
Секция прозрачная → убрать bg-[#faf9f5] dark:bg-[#1c1a15], добавить relative
Новая секция в wrapper → должна быть bg-transparent или иметь свою явную подложку
Starfield    → работает через постHeroRef из App.tsx, не нужно добавлять в каждую секцию
```
