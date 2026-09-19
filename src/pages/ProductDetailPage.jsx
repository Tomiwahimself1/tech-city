import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  ChevronRight,
  Minus,
  Plus,
  MessageCircle,
  Phone,
  Truck,
  ShieldCheck,
  RotateCcw,
  Check,
} from "lucide-react";
import ProductCard from "../components/ui/ProductCard";
import { getProductById, getRelatedProducts, stockMeta } from "../data/products";
import { categoryLabel } from "../data/categories";
import { formatNaira, site, whatsappLink } from "../lib/site";

export default function ProductDetailPage() {
  const { productId } = useParams();
  const product = getProductById(productId);

  const [activeImage, setActiveImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    setActiveImage(0);
    setQuantity(1);
  }, [productId]);

  if (!product) {
    return (
      <section className="section bg-canvas">
        <div className="container max-w-xl text-center">
          <h1 className="text-2xl font-bold text-navy">We could not find that product</h1>
          <p className="mt-3 text-sm text-navy-600">
            It may have sold out or been renamed. Browse the full catalogue instead.
          </p>
          <Link to="/products" className="btn-primary mt-6">
            Back to products
          </Link>
        </div>
      </section>
    );
  }

  const stock = stockMeta[product.stock] ?? stockMeta["in-stock"];
  const related = getRelatedProducts(product);
  const total = product.price * quantity;

  const orderMessage = `Hello Tech City, I would like to order:\n\n• ${product.name}\n• Quantity: ${quantity}\n• Total: ${formatNaira(
    total
  )}\n\nIs it available?`;

  return (
    <>
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="border-b border-navy-100 bg-white">
        <div className="container py-4">
          <ol className="flex flex-wrap items-center gap-1 text-sm text-navy-500">
            <li>
              <Link to="/" className="hover:text-orange">
                Home
              </Link>
            </li>
            <ChevronRight className="h-4 w-4 text-navy-300" aria-hidden="true" />
            <li>
              <Link to="/products" className="hover:text-orange">
                Products
              </Link>
            </li>
            <ChevronRight className="h-4 w-4 text-navy-300" aria-hidden="true" />
            <li>
              <Link
                to={`/products?category=${product.category}`}
                className="hover:text-orange"
              >
                {categoryLabel(product.category)}
              </Link>
            </li>
            <ChevronRight className="h-4 w-4 text-navy-300" aria-hidden="true" />
            <li className="font-medium text-navy" aria-current="page">
              {product.name}
            </li>
          </ol>
        </div>
      </nav>

      <section className="section bg-canvas">
        <div className="container grid gap-10 lg:grid-cols-2 lg:gap-14">
          {/* Gallery */}
          <div>
            <div className="overflow-hidden rounded-xl border border-navy-100 bg-white shadow-card">
              <img
                src={product.images[activeImage]}
                alt={`${product.name} — view ${activeImage + 1}`}
                className="aspect-[4/3] w-full object-cover"
              />
            </div>

            <ul className="mt-4 grid grid-cols-4 gap-3">
              {product.images.map((image, index) => (
                <li key={image}>
                  <button
                    type="button"
                    onClick={() => setActiveImage(index)}
                    aria-label={`Show image ${index + 1}`}
                    aria-current={index === activeImage}
                    className={[
                      "block w-full overflow-hidden rounded-lg border-2 bg-white transition-colors",
                      index === activeImage
                        ? "border-orange"
                        : "border-navy-100 hover:border-navy-300",
                    ].join(" ")}
                  >
                    <img
                      src={image}
                      alt=""
                      loading="lazy"
                      className="aspect-square w-full object-cover"
                    />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Details */}
          <div>
            <p className="text-sm font-semibold text-orange">
              {categoryLabel(product.category)}
            </p>
            <h1 className="mt-2 text-3xl font-bold leading-tight text-navy md:text-4xl">
              {product.name}
            </h1>
            <p className="mt-3 text-sm leading-relaxed text-navy-600">{product.summary}</p>

            <div className="mt-6 flex flex-wrap items-center gap-4">
              <span className="text-3xl font-extrabold text-orange">
                {formatNaira(product.price)}
              </span>
              {product.oldPrice && (
                <span className="text-lg text-navy-400 line-through">
                  {formatNaira(product.oldPrice)}
                </span>
              )}
              <span
                className={`rounded-full px-3 py-1 text-xs font-semibold ring-1 ${stock.className}`}
              >
                {stock.label}
              </span>
            </div>

            <p className="mt-5 text-sm leading-relaxed text-navy-700">{product.description}</p>

            {/* Highlights */}
            <ul className="mt-5 space-y-2">
              {product.highlights.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-navy-700">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-orange" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>

            {/* Specifications */}
            <div className="mt-8 overflow-hidden rounded-xl border border-navy-100 bg-white">
              <h2 className="border-b border-navy-100 bg-navy-50 px-5 py-3 text-sm font-semibold text-navy">
                Specifications
              </h2>
              <table className="w-full text-sm">
                <tbody className="divide-y divide-navy-100">
                  {Object.entries(product.specs).map(([key, value]) => (
                    <tr key={key}>
                      <th
                        scope="row"
                        className="w-2/5 px-5 py-3 text-left font-medium text-navy-600"
                      >
                        {key}
                      </th>
                      <td className="px-5 py-3 text-navy-800">{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Quantity + actions */}
            <div className="mt-8 rounded-xl border border-navy-100 bg-white p-5">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className="text-sm font-medium text-navy">Quantity</span>
                  <div className="flex items-center rounded-lg border border-navy-200">
                    <button
                      type="button"
                      onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                      disabled={quantity === 1}
                      aria-label="Decrease quantity"
                      className="p-2.5 text-navy-600 transition-colors hover:text-orange disabled:opacity-40"
                    >
                      <Minus className="h-4 w-4" aria-hidden="true" />
                    </button>
                    <span
                      aria-live="polite"
                      className="w-12 border-x border-navy-200 py-2 text-center text-sm font-semibold text-navy"
                    >
                      {quantity}
                    </span>
                    <button
                      type="button"
                      onClick={() => setQuantity((q) => Math.min(20, q + 1))}
                      disabled={quantity === 20}
                      aria-label="Increase quantity"
                      className="p-2.5 text-navy-600 transition-colors hover:text-orange disabled:opacity-40"
                    >
                      <Plus className="h-4 w-4" aria-hidden="true" />
                    </button>
                  </div>
                </div>

                <p className="text-sm text-navy-600">
                  Total{" "}
                  <span className="text-lg font-bold text-navy">{formatNaira(total)}</span>
                </p>
              </div>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <a
                  href={whatsappLink(orderMessage)}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary w-full"
                >
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  Order via WhatsApp
                </a>
                <a href={site.phoneHref} className="btn-outline w-full">
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  Contact Store
                </a>
              </div>

              <p className="mt-4 text-xs text-navy-500">
                Prices are for in-store pickup at {site.addressShort}. Delivery within Ondo State
                can be arranged when you order.
              </p>
            </div>

            {/* Assurances */}
            <ul className="mt-6 grid gap-4 sm:grid-cols-3">
              {[
                { icon: ShieldCheck, label: "Verified stock", text: "Tested before handover" },
                { icon: Truck, label: "Statewide delivery", text: "Ondo and surrounding towns" },
                { icon: RotateCcw, label: "7-day swap", text: "On manufacturer defects" },
              ].map(({ icon: Icon, label, text }) => (
                <li key={label} className="flex items-start gap-3 text-sm">
                  <Icon className="mt-0.5 h-5 w-5 shrink-0 text-orange" aria-hidden="true" />
                  <span>
                    <span className="block font-semibold text-navy">{label}</span>
                    <span className="text-navy-500">{text}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="section bg-white">
        <div className="container">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="heading-lg">You may also like</h2>
            <Link
              to="/products"
              className="text-sm font-semibold text-orange hover:text-orange-600"
            >
              View all products
            </Link>
          </div>

          <ul className="mt-8 grid grid-cols-2 gap-4 md:gap-6 lg:grid-cols-4">
            {related.map((item) => (
              <li key={item.id}>
                <ProductCard product={item} />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
