import { useMemo, useState } from "react";
import { ArrowRight, CalendarDays, Clock, Search } from "lucide-react";
import PageHero from "../components/ui/PageHero";
import { featuredPost, posts, formatPostDate } from "../data/posts";

export default function BlogPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");

  const categories = useMemo(
    () => ["All", ...Array.from(new Set(posts.map((post) => post.category)))],
    []
  );

  const visible = useMemo(() => {
    const term = query.trim().toLowerCase();
    return posts.filter((post) => {
      const matchesCategory = category === "All" || post.category === category;
      const matchesTerm =
        !term || `${post.title} ${post.excerpt}`.toLowerCase().includes(term);
      return matchesCategory && matchesTerm;
    });
  }, [query, category]);

  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Practical technology advice from our floor"
        description="Buying guides, installation breakdowns and honest comparisons — written by the people who actually sell and fit this equipment."
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Blog" }]}
      />

      {/* Featured article */}
      <section className="section bg-white">
        <div className="container">
          <article className="grid overflow-hidden rounded-xl border border-navy-100 shadow-card lg:grid-cols-2">
            <div className="order-2 flex flex-col justify-center p-6 md:p-10 lg:order-1">
              <div className="flex flex-wrap items-center gap-3 text-xs">
                <span className="rounded-full bg-orange-50 px-3 py-1 font-semibold text-orange">
                  Featured
                </span>
                <span className="font-semibold text-navy-500">{featuredPost.category}</span>
              </div>

              <h2 className="mt-4 text-2xl font-bold leading-snug text-navy md:text-3xl">
                <a href={`#${featuredPost.slug}`} className="hover:text-orange">
                  {featuredPost.title}
                </a>
              </h2>

              <p className="mt-4 text-sm leading-relaxed text-navy-600">
                {featuredPost.excerpt}
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-5 text-xs text-navy-500">
                <span className="font-medium text-navy-700">{featuredPost.author}</span>
                <span className="flex items-center gap-1.5">
                  <CalendarDays className="h-3.5 w-3.5" aria-hidden="true" />
                  {formatPostDate(featuredPost.date)}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                  {featuredPost.readTime}
                </span>
              </div>

              <a href={`#${featuredPost.slug}`} className="btn-primary mt-7 self-start">
                Read article
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>

            <div className="order-1 lg:order-2">
              <img
                src={featuredPost.image}
                alt=""
                className="h-60 w-full object-cover lg:h-full"
              />
            </div>
          </article>
        </div>
      </section>

      {/* Filters + grid */}
      <section className="section bg-canvas pt-0">
        <div className="container">
          <div className="flex flex-col gap-4 border-b border-navy-100 pb-6 md:flex-row md:items-center md:justify-between">
            <ul className="flex flex-wrap items-center gap-2">
              {categories.map((item) => (
                <li key={item}>
                  <button
                    type="button"
                    onClick={() => setCategory(item)}
                    aria-pressed={category === item}
                    className={[
                      "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                      category === item
                        ? "bg-navy text-white"
                        : "bg-white text-navy-700 ring-1 ring-navy-100 hover:bg-navy-50",
                    ].join(" ")}
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>

            <div className="relative md:w-72">
              <label htmlFor="blog-search" className="sr-only">
                Search articles
              </label>
              <Search
                className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-navy-400"
                aria-hidden="true"
              />
              <input
                id="blog-search"
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search articles..."
                className="w-full rounded-lg border border-navy-200 bg-white py-2.5 pl-11 pr-4 text-sm focus:border-orange"
              />
            </div>
          </div>

          {visible.length > 0 ? (
            <ul className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {visible.map((post) => (
                <li key={post.slug} id={post.slug}>
                  <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-navy-100 bg-white shadow-card transition-shadow hover:shadow-lift">
                    <a href={`#${post.slug}`} className="block overflow-hidden">
                      <img
                        src={post.image}
                        alt=""
                        loading="lazy"
                        className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </a>

                    <div className="flex flex-1 flex-col p-5">
                      <div className="flex items-center gap-3 text-xs text-navy-500">
                        <span className="font-semibold text-orange">{post.category}</span>
                        <span className="flex items-center gap-1.5">
                          <CalendarDays className="h-3.5 w-3.5" aria-hidden="true" />
                          {formatPostDate(post.date)}
                        </span>
                      </div>

                      <h3 className="mt-3 text-lg font-semibold leading-snug text-navy">
                        <a href={`#${post.slug}`} className="hover:text-orange">
                          {post.title}
                        </a>
                      </h3>

                      <p className="mt-2.5 flex-1 text-sm leading-relaxed text-navy-600">
                        {post.excerpt}
                      </p>

                      <div className="mt-5 flex items-center justify-between border-t border-navy-100 pt-4">
                        <span className="text-xs text-navy-500">
                          {post.author} · {post.readTime}
                        </span>
                        <a
                          href={`#${post.slug}`}
                          className="inline-flex items-center gap-1.5 text-sm font-semibold text-orange hover:text-orange-600"
                        >
                          Read More
                          <ArrowRight className="h-4 w-4" aria-hidden="true" />
                        </a>
                      </div>
                    </div>
                  </article>
                </li>
              ))}
            </ul>
          ) : (
            <p className="mt-12 text-center text-sm text-navy-600">
              No articles match that search yet. Try another word or pick a different category.
            </p>
          )}
        </div>
      </section>
    </>
  );
}
