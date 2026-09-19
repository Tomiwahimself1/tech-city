import {
  Laptop,
  Monitor,
  Smartphone,
  ScanLine,
  Cctv,
  Gamepad2,
  Headphones,
  Sun,
  House,
  LayoutGrid,
} from "lucide-react";

/** Cards shown in the "Our Product Categories" grid on the home page. */
export const categoryCards = [
  { slug: "laptops", label: "Laptops", icon: Laptop },
  { slug: "desktops", label: "Desktops", icon: Monitor },
  { slug: "phones", label: "Phones", icon: Smartphone },
  { slug: "pos", label: "POS Systems", icon: ScanLine },
  { slug: "cctv", label: "CCTV & Surveillance", icon: Cctv },
  { slug: "gaming", label: "Gaming / PlayStation", icon: Gamepad2 },
  { slug: "accessories", label: "Accessories", icon: Headphones },
  { slug: "solar", label: "Solar Gadgets", icon: Sun },
  { slug: "smart-home", label: "Smart Home", icon: House },
  { slug: "all", label: "More", icon: LayoutGrid },
];

/** Filter tabs on the products page. */
export const productFilters = [
  { slug: "all", label: "All" },
  { slug: "laptops", label: "Laptops" },
  { slug: "phones", label: "Phones" },
  { slug: "pos", label: "POS Systems" },
  { slug: "cctv", label: "CCTV" },
  { slug: "gaming", label: "Gaming" },
  { slug: "accessories", label: "Accessories" },
  { slug: "solar", label: "Solar" },
];

export const categoryLabel = (slug) =>
  categoryCards.find((c) => c.slug === slug)?.label ||
  productFilters.find((c) => c.slug === slug)?.label ||
  slug;
