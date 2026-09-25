const U = (id, w = 900) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

export const featuredPost = {
  slug: "buying-a-laptop-in-ondo-2026",
  title: "How to buy a laptop in Ondo without getting burned",
  excerpt:
    "Refurbished, UK-used, sealed, 'clean' the labels mean different things to different sellers. Here is what each one actually tells you, and the five checks we run on every machine before it reaches our shelf.",
  category: "Buying Guides",
  date: "2026-09-02",
  readTime: "7 min read",
  author: "Seun Adewale",
  image: U("1517336714731-489689fd1ca8", 1400),
};

export const posts = [
  {
    slug: "cctv-for-small-shops",
    title: "CCTV for a small shop: what 8 cameras really cost",
    excerpt:
      "A full breakdown of a typical shop installation cameras, recorder, cabling, labour and where people usually overspend.",
    category: "Security",
    date: "2026-08-26",
    readTime: "5 min read",
    author: "Bisi Oyelaran",
    image: U("1557597774-9d273605dfa9"),
  },
  {
    slug: "solar-sizing-for-nigerian-homes",
    title: "Sizing a solar system for a Nigerian home",
    excerpt:
      "Count your load before you count your panels. A practical walkthrough of the audit we run for every solar customer.",
    category: "Solar",
    date: "2026-08-18",
    readTime: "8 min read",
    author: "Tunde Bakare",
    image: U("1509391366360-2e959784a276"),
  },
  {
    slug: "choosing-a-pos-terminal",
    title: "Choosing a POS terminal for your business",
    excerpt:
      "Android or traditional, 4G or Wi-Fi, bank-issued or independent how to pick the terminal that matches how you actually trade.",
    category: "Business Tech",
    date: "2026-08-09",
    readTime: "6 min read",
    author: "Seun Adewale",
    image: U("1556740738-b6a63e27c4df"),
  },
  {
    slug: "ps5-vs-gaming-pc",
    title: "PS5 or a gaming PC? An honest comparison",
    excerpt:
      "We sell both, so here is the version without the sales pitch including what each one costs to run over three years.",
    category: "Gaming",
    date: "2026-07-30",
    readTime: "6 min read",
    author: "Kelechi Nwosu",
    image: U("1606813907291-d86efa9b94db"),
  },
  {
    slug: "protect-your-devices-from-power-surges",
    title: "Protecting your devices from power surges",
    excerpt:
      "Unstable supply kills more laptops than drops do. Three inexpensive habits that extend the life of everything you own.",
    category: "Maintenance",
    date: "2026-07-21",
    readTime: "4 min read",
    author: "Bisi Oyelaran",
    image: U("1518770660439-4636190af475"),
  },
  {
    slug: "smart-home-on-a-budget",
    title: "Starting a smart home on a modest budget",
    excerpt:
      "You do not need a full rewire. Start with lighting and one camera, and grow the system one room at a time.",
    category: "Smart Home",
    date: "2026-07-12",
    readTime: "5 min read",
    author: "Tunde Bakare",
    image: U("1558002038-1055907df827"),
  },
];

export const formatPostDate = (iso) =>
  new Date(iso).toLocaleDateString("en-NG", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
