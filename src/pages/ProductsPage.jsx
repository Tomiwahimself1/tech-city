import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Search, SlidersHorizontal, PackageSearch, X } from "lucide-react";
import PageHero from "../components/ui/PageHero";
import ProductCard from "../components/ui/ProductCard";
import { products } from "../data/products";
import { productFilters } from "../data/categories";

const sortOptions = [
  { value: "featured", label: "Featured" },
  { value: "price-asc", label: "Price: low to high" },
  { value: "price-desc", label: "Price: high to low" },
  { value: "name", label: "Name: A–Z" },
];

export default function ProductsPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get("q") ?? "");
  const [sort, setSort] = useState("featured");

  const activeCategory = searchParams.get("category") ?? "all";

  // Keep the input in sync when the URL changes (e.g. navbar search).
  useEffect(() => {
    setQuery(searchParams.get("q") ?? "");
  }, [searchParams]);

  const setCategory = (slug) => {
    const next = new URLSearchParams(searchParams);
    if (slug === "all") next.delete("category");
    else next.set("category", slug);
    setSearchParams(next, { replace: true });
  };

  const submitSearch = (event) => {
    event.preventDefault();
    const next = new URLSearchParams(searchParams);
    const trimmed = query.trim();
    if (trimmed) next.set("q", trimmed);
    else next.delete("q");
    setSearchParams(next, { replace: true });
  };

  const clearFilters = () => {
    setQuery("");
    setSearchParams(new URLSearchParams(), { replace: true });
  };

  const visibleProducts = useMemo(() => {
    const term = (searchParams.get("q") ?? "").trim().toLowerCase();

    let list = products.filter((product) => {
      const matchesCategory =
        activeCategory === "all" || product.category === activeCategory;
      const matchesTerm =
        !term ||
        [product.name, product.summary, product.category, product.specs.Brand]
          .join(" ")
          .toLowerCase()
          .includes(term);
      return matchesCategory && matchesTerm;
    });

    list = [...list];
    if (sort === "price-asc") list.sort((a, b) => a.price - b.price);
    if (sort === "price-desc") list.sort((a, b) => b.price - a.price);
    if (sort === "name") list.sort((a, b) => a.name.localeCompare(b.name));

    return list;
  }, [activeCategory, searchParams, sort]);

  const hasFilters = activeCategory !== "all" || Boolean(searchParams.get("q"));

  return (
    <>
      <PageHero
        eyebrow="Products & Services"
        title="Our Products & Technology Solutions"
        description="Browse laptops, phones, POS terminals, surveillance systems, gaming consoles, solar kits and accessories — all available at our Ondo showroom, with installation and support included where it matters."
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Products/Services" }]}
      />

      {/* Filter bar */}
      <section className="sticky top-16 z-30 border-b border-navy-100 bg-white/95 py-4 backdrop-blur md:top-20 lg:top-[7.5rem]">
        <div className="container space-y-4">
          <div className="flex flex-col gap-3 md:flex-row md:items-center">
            <form onSubmit={submitSearch} role="search" className="relative flex-1">
              <label htmlFor="product-search" className="sr-only">
                Search products
              </label>
              <Search
                className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-navy-400"
                aria-hidden="true"
              />
              <input
                id="product-search"
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search by product, brand or spec..."
                className="w-full rounded-lg border border-navy-200 bg-canvas py-3 pl-11 pr-4 text-sm focus:border-orange focus:bg-white"
              />
            </form>

            <div className="flex items-center gap-2">
              <SlidersHorizontal className="h-4 w-4 text-navy-500" aria-hidden="true" />
              <label htmlFor="product-sort" className="sr-only">
                Sort products
              </label>
              <select
                id="product-sort"
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="rounded-lg border border-navy-200 bg-white px-3 py-2.5 text-sm text-navy focus:border-orange"
              >
                {sortOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="-mx-4 overflow-x-auto px-4">
            <ul className="flex min-w-max items-center gap-2">
              {productFilters.map((filter) => {
                const isActive = activeCategory === filter.slug;
                return (
                  <li key={filter.slug}>
                    <button
                      type="button"
                      onClick={() => setCategory(filter.slug)}
                      aria-pressed={isActive}
                      className={[
                        "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                        isActive
                          ? "bg-orange text-white"
                          : "bg-navy-50 text-navy-700 hover:bg-navy-100",
                      ].join(" ")}
                    >
                      {filter.label}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="section bg-canvas">
        <div className="container">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
            <p className="text-sm text-navy-600">
              Showing <span className="font-semibold text-navy">{visibleProducts.length}</span>{" "}
              {visibleProducts.length === 1 ? "product" : "products"}
            </p>
            {hasFilters && (
              <button
                type="button"
                onClick={clearFilters}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-orange hover:text-orange-600"
              >
                <X className="h-4 w-4" aria-hidden="true" />
                Clear filters
              </button>
            )}
          </div>

          {visibleProducts.length > 0 ? (
            <ul className="grid grid-cols-2 gap-4 md:gap-6 lg:grid-cols-3">
              {visibleProducts.map((product) => (
                <li key={product.id}>
                  <ProductCard product={product} />
                </li>
              ))}
            </ul>
          ) : (
            <div className="rounded-xl border border-dashed border-navy-200 bg-white p-12 text-center">
              <PackageSearch className="mx-auto h-10 w-10 text-navy-300" aria-hidden="true" />
              <h2 className="mt-4 text-lg font-semibold text-navy">
                Nothing matches that search
              </h2>
              <p className="mx-auto mt-2 max-w-md text-sm text-navy-600">
                Try a different brand or category. If you know exactly what you want, call us on{" "}
                <a href="tel:+2349033305309" className="font-semibold text-orange">
                  0903 330 5309
                </a>{" "}
                and we will source it for you.
              </p>
              <button type="button" onClick={clearFilters} className="btn-primary mt-6">
                Show all products
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
