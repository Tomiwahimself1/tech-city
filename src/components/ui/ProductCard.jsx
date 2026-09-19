import { Link } from "react-router-dom";
import { MessageCircle } from "lucide-react";
import { formatNaira, whatsappLink } from "../../lib/site";
import { categoryLabel } from "../../data/categories";
import { stockMeta } from "../../data/products";

export default function ProductCard({ product }) {
  const stock = stockMeta[product.stock] ?? stockMeta["in-stock"];

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-navy-100 bg-white shadow-card transition-shadow hover:shadow-lift">
      <Link
        to={`/products/${product.id}`}
        className="relative block aspect-[4/3] overflow-hidden bg-canvas"
      >
        <img
          src={product.images[0]}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span
          className={`absolute right-3 top-3 rounded-full px-2.5 py-1 text-[11px] font-semibold ring-1 ${stock.className}`}
        >
          {stock.label}
        </span>
      </Link>

      <div className="flex flex-1 flex-col p-4 md:p-5">
        <p className="text-[11px] font-semibold uppercase tracking-wide text-orange">
          {categoryLabel(product.category)}
        </p>

        <h3 className="mt-1.5 text-base font-semibold leading-snug text-navy">
          <Link to={`/products/${product.id}`} className="hover:text-orange">
            {product.name}
          </Link>
        </h3>

        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-navy-600">
          {product.summary}
        </p>

        <div className="mt-4 flex items-baseline gap-2">
          <span className="text-lg font-bold text-orange">{formatNaira(product.price)}</span>
          {product.oldPrice && (
            <span className="text-sm text-navy-400 line-through">
              {formatNaira(product.oldPrice)}
            </span>
          )}
        </div>

        <div className="mt-4 grid grid-cols-2 gap-2 pt-1">
          <Link
            to={`/products/${product.id}`}
            className="btn border border-navy-200 px-3 py-2.5 text-navy hover:border-navy hover:bg-navy hover:text-white"
          >
            View Details
          </Link>
          <a
            href={whatsappLink(
              `Hello Tech City, I would like to buy the ${product.name} (${formatNaira(
                product.price
              )}). Is it available?`
            )}
            target="_blank"
            rel="noreferrer"
            className="btn bg-orange px-3 py-2.5 text-white hover:bg-orange-600"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            Buy Now
          </a>
        </div>
      </div>
    </article>
  );
}
