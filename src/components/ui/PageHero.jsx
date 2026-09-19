import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

/**
 * Navy banner used at the top of inner pages.
 * @param {{label:string,to?:string}[]} breadcrumbs
 */
export default function PageHero({ eyebrow, title, description, breadcrumbs = [], children }) {
  return (
    <section className="relative overflow-hidden bg-navy text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-orange/20 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 left-1/3 h-72 w-72 rounded-full bg-navy-500/40 blur-3xl"
      />

      <div className="container relative py-12 md:py-16">
        {breadcrumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="mb-5">
            <ol className="flex flex-wrap items-center gap-1 text-sm text-navy-200">
              {breadcrumbs.map((crumb, index) => (
                <li key={crumb.label} className="flex items-center gap-1">
                  {index > 0 && (
                    <ChevronRight className="h-4 w-4 text-navy-400" aria-hidden="true" />
                  )}
                  {crumb.to ? (
                    <Link to={crumb.to} className="transition-colors hover:text-orange">
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-white" aria-current="page">
                      {crumb.label}
                    </span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}

        {eyebrow && <p className="text-sm font-semibold text-orange">{eyebrow}</p>}
        <h1 className="mt-2 max-w-3xl text-3xl font-bold leading-tight md:text-4xl lg:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-navy-200 md:text-base">
            {description}
          </p>
        )}
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  );
}
