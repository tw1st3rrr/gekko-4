**Button** — the brand's primary call-to-action; use for any "Начать проект", "Заказать", "Отправить" action. Solid green is the default; `light` is for dark feature sections; `outline` is the quiet secondary.

```jsx
<Button href="#" icon={<Arrow />}>Начать проект</Button>
<Button variant="outline">Все новости →</Button>
<Button variant="light" size="lg">Создать подарок</Button>
```

Variants: `primary` (green fill), `light` (white, for dark backgrounds), `outline` (2px border). Sizes: `sm` / `md` / `lg`. Pass `full` to stretch, `href` to render an anchor.
