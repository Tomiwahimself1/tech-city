import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import {
  Search,
  Menu,
  X,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Youtube,
  MessageCircle,
} from "lucide-react";
import Logo from "../ui/Logo";
import TopBar from "./TopBar";
import { navLinks, site, whatsappLink } from "../../lib/site";

const socialIcons = { Facebook, Instagram, YouTube: Youtube };

export default function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const drawerRef = useRef(null);

  // Close the drawer on route change.
  useEffect(() => {
    setDrawerOpen(false);
    setMobileSearchOpen(false);
  }, [location.pathname]);

  // Lock body scroll and close on Escape while the drawer is open.
  useEffect(() => {
    if (!drawerOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event) => {
      if (event.key === "Escape") setDrawerOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);

    drawerRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [drawerOpen]);

  const submitSearch = (event) => {
    event.preventDefault();
    const trimmed = query.trim();
    navigate(trimmed ? `/products?q=${encodeURIComponent(trimmed)}` : "/products");
    setQuery("");
    setMobileSearchOpen(false);
  };

  const navLinkClass = ({ isActive }) =>
    [
      "relative py-2 text-sm font-medium transition-colors",
      isActive ? "text-orange" : "text-navy-700 hover:text-orange",
      isActive
        ? "after:absolute after:inset-x-0 after:-bottom-1 after:h-0.5 after:rounded-full after:bg-orange"
        : "",
    ].join(" ");

  return (
    <header className="sticky top-0 z-50 w-full">
      <TopBar />

      <div className="border-b border-navy-100 bg-white/95 backdrop-blur">
        <div className="container flex h-16 items-center justify-between gap-4 md:h-20">
          {/* Mobile: menu trigger */}
          <button
            type="button"
            onClick={() => setDrawerOpen(true)}
            aria-label="Open menu"
            aria-expanded={drawerOpen}
            className="rounded-md p-2 text-navy transition-colors hover:bg-navy-50 lg:hidden"
          >
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>

          <Logo />

          {/* Desktop navigation */}
          <nav aria-label="Main" className="hidden lg:block">
            <ul className="flex items-center gap-7">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <NavLink to={link.to} end={link.to === "/"} className={navLinkClass}>
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* Desktop search */}
          <form
            onSubmit={submitSearch}
            role="search"
            className="hidden max-w-sm flex-1 items-center xl:flex"
          >
            <label htmlFor="site-search" className="sr-only">
              Search products and services
            </label>
            <div className="relative w-full">
              <input
                id="site-search"
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search for products, services or information..."
                className="w-full rounded-lg border border-navy-200 bg-canvas py-2.5 pl-4 pr-11 text-sm text-navy-800 placeholder:text-navy-400 focus:border-orange focus:bg-white"
              />
              <button
                type="submit"
                aria-label="Search"
                className="absolute inset-y-0 right-0 flex w-11 items-center justify-center rounded-r-lg text-navy-500 transition-colors hover:text-orange"
              >
                <Search className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>
          </form>

          {/* Desktop CTA */}
          <Link to="/contact" className="btn-primary hidden lg:inline-flex">
            Contact Us
          </Link>

          {/* Mobile actions */}
          <div className="flex items-center gap-1 lg:hidden">
            <a
              href={site.phoneHref}
              aria-label={`Call ${site.phoneDisplay}`}
              className="rounded-md p-2 text-navy transition-colors hover:bg-navy-50"
            >
              <Phone className="h-5 w-5" aria-hidden="true" />
            </a>
            <button
              type="button"
              onClick={() => setMobileSearchOpen((open) => !open)}
              aria-label="Toggle search"
              aria-expanded={mobileSearchOpen}
              className="rounded-md p-2 text-navy transition-colors hover:bg-navy-50"
            >
              <Search className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>

        {/* Mobile search panel */}
        {mobileSearchOpen && (
          <div className="border-t border-navy-100 bg-white px-4 py-3 lg:hidden">
            <form onSubmit={submitSearch} role="search" className="relative">
              <label htmlFor="mobile-search" className="sr-only">
                Search products and services
              </label>
              <input
                id="mobile-search"
                type="search"
                autoFocus
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search products, services..."
                className="w-full rounded-lg border border-navy-200 bg-canvas py-2.5 pl-4 pr-11 text-sm focus:border-orange focus:bg-white"
              />
              <button
                type="submit"
                aria-label="Search"
                className="absolute inset-y-0 right-0 flex w-11 items-center justify-center text-navy-500"
              >
                <Search className="h-4 w-4" aria-hidden="true" />
              </button>
            </form>
          </div>
        )}
      </div>

      {/* Mobile drawer */}
      {drawerOpen && (
        <div className="lg:hidden">
          <div
            className="fixed inset-0 z-40 animate-fade-in bg-navy-900/60"
            onClick={() => setDrawerOpen(false)}
            aria-hidden="true"
          />
          <div
            ref={drawerRef}
            tabIndex={-1}
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
            className="fixed inset-y-0 right-0 z-50 flex w-[86%] max-w-sm animate-slide-in flex-col bg-white shadow-lift"
          >
            <div className="flex items-center justify-between border-b border-navy-100 px-5 py-4">
              <Logo />
              <button
                type="button"
                onClick={() => setDrawerOpen(false)}
                aria-label="Close menu"
                className="rounded-md p-2 text-navy transition-colors hover:bg-navy-50"
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>

            <nav aria-label="Mobile" className="flex-1 overflow-y-auto px-3 py-4">
              <ul className="space-y-1">
                {navLinks.map((link) => (
                  <li key={link.to}>
                    <NavLink
                      to={link.to}
                      end={link.to === "/"}
                      className={({ isActive }) =>
                        [
                          "block rounded-lg px-4 py-3 text-base font-medium transition-colors",
                          isActive
                            ? "bg-orange-50 text-orange"
                            : "text-navy-700 hover:bg-navy-50 hover:text-navy",
                        ].join(" ")
                      }
                    >
                      {link.label}
                    </NavLink>
                  </li>
                ))}
              </ul>

              <div className="mt-6 space-y-3 px-1">
                <Link to="/contact" className="btn-primary w-full">
                  Contact Us
                </Link>
                <a
                  href={whatsappLink("Hello Tech City, I have a question.")}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-outline w-full"
                >
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  Chat on WhatsApp
                </a>
              </div>
            </nav>

            <div className="space-y-3 border-t border-navy-100 bg-canvas px-5 py-5 text-sm">
              <a
                href={site.phoneHref}
                className="flex items-center gap-3 text-navy-700 hover:text-orange"
              >
                <Phone className="h-4 w-4 text-orange" aria-hidden="true" />
                {site.phoneDisplay}
              </a>
              <p className="flex items-start gap-3 text-navy-600">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-orange" aria-hidden="true" />
                {site.addressFull}
              </p>
              <ul className="flex items-center gap-4 pt-1">
                {site.socials.map(({ label, href }) => {
                  const Icon = socialIcons[label];
                  return (
                    <li key={label}>
                      <a
                        href={href}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`Tech City on ${label}`}
                        className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-navy-600 shadow-card transition-colors hover:text-orange"
                      >
                        <Icon className="h-4 w-4" aria-hidden="true" />
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
