# Tech City Technology Mall

Marketing and catalogue site for Tech City Technology Mall, Ondo State, Nigeria.

Built with React 18, Vite, React Router v6, Tailwind CSS 3 and Lucide icons.

## Getting started

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production bundle in /dist
npm run preview  # serve the built bundle locally
```

Node 18 or newer is required.

## Routes

| Path                   | Page                   |
| ---------------------- | ---------------------- |
| `/`                    | `HomePage`             |
| `/about`               | `AboutPage`            |
| `/products`            | `ProductsPage`         |
| `/products/:productId` | `ProductDetailPage`    |
| `/projects`            | `ProjectsPage`         |
| `/blog`                | `BlogPage`             |
| `/contact`             | `ContactPage`          |
| `*`                    | `NotFoundPage`         |

`ProductsPage` reads two query parameters, so filtered views are shareable:
`/products?category=cctv` and `/products?q=laptop`.

## Project layout

```
src/
├── App.jsx                 route table
├── main.jsx                entry point, BrowserRouter
├── index.css               Tailwind layers + .btn / .card / .section classes
├── lib/site.js             contact details, nav links, WhatsApp + Naira helpers
├── data/
│   ├── categories.js       category cards and product filter tabs
│   ├── products.js         product catalogue
│   └── posts.js            blog posts
├── components/
│   ├── layout/             TopBar, Header, Footer, Layout, ScrollToTop
│   └── ui/                 Logo, SectionHeading, PageHero, ProductCard
└── pages/                  one file per route
```

## Changing the content

**Contact details.** Everything lives in `src/lib/site.js` — phone, WhatsApp number,
address, email, opening hours, social links. Edit once; the top bar, footer, mobile
drawer, contact page and every WhatsApp deep link pick it up.

**Products.** Add or edit entries in `src/data/products.js`. Each product needs an
`id` (used as the URL slug), `category` matching a slug in `src/data/categories.js`,
`price` as a plain number, `stock` of `in-stock` / `low-stock` / `pre-order`, a
`specs` object and an `images` array. `formatNaira()` handles the ₦ formatting.

**Images.** Placeholders point at Unsplash. Replace them with your own store
photography or CDN URLs in `products.js` and `posts.js`.

## Design tokens

Brand colours are registered as full Tailwind scales in `tailwind.config.js`, so
tints for hover, ring and background states already exist:

| Token     | Value     | Usage                                |
| --------- | --------- | ------------------------------------ |
| `navy`    | `#0B2545` | Header, headings, footer, dark bands |
| `orange`  | `#FF6B00` | Primary CTAs, prices, badges         |
| `canvas`  | `#F8FAFC` | Page background                      |
| `surface` | `#FFFFFF` | Cards                                |

Use `bg-navy`, `text-orange`, `bg-navy-50`, `ring-orange-200` and so on.

## Still to wire up

Two forms hold state and validate but do not make a network call yet. Each has a
marked comment where the request belongs:

- Newsletter signup — `src/components/layout/Footer.jsx`
- Contact form — `src/pages/ContactPage.jsx`

Point them at Formspree, Brevo, a Netlify function, or your own API.

## Deployment note

The app uses `BrowserRouter`, so the host must rewrite all paths to `index.html`.
On Netlify add a `_redirects` file containing `/* /index.html 200`; on Vercel this
works by default.
# tech-city
