import { Link } from "react-router-dom";
import { Compass } from "lucide-react";

export default function NotFoundPage() {
  return (
    <section className="section bg-canvas">
      <div className="container max-w-xl text-center">
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-orange-50 text-orange">
          <Compass className="h-6 w-6" aria-hidden="true" />
        </span>
        <h1 className="mt-6 text-3xl font-bold text-navy">This page does not exist</h1>
        <p className="mt-3 text-sm leading-relaxed text-navy-600">
          The link may be old or mistyped. Start from the home page, or jump straight to the
          catalogue.
        </p>
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <Link to="/" className="btn-primary">
            Go to home page
          </Link>
          <Link to="/products" className="btn-outline">
            Browse products
          </Link>
        </div>
      </div>
    </section>
  );
}
