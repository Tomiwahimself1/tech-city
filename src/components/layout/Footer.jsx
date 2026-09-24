import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Phone,
  MapPin,
  Mail,
  Facebook,
  Instagram,
  Youtube,
  MessageCircle,
  Check,
} from "lucide-react";
import Logo from "../ui/Logo";
import { navLinks, site } from "../../lib/site";

const socialIcons = { Facebook, Instagram, YouTube: Youtube };

const services = [
  "Sales & Consultation",
  "Installation Support",
  "After-Sales Support",
  "Technical Support",
  "Custom Solutions",
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (event) => {
    event.preventDefault();
    if (!email.trim()) return;
    // Wire this to your mailing provider (Mailchimp, Brevo, a Netlify function, etc.)
    setSubscribed(true);
    setEmail("");
  };

  return (
    <footer className="bg-navy text-navy-100">
      <div className="container grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
        {/* Brand */}
        <div>
          <Logo tone="light" />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-navy-200">
            A technology mall in Ondo State selling laptops, desktops, phones, POS systems,
            surveillance cameras, gaming consoles, solar and smart home gadgets with support
            that continues after the sale.
          </p>

          <ul className="mt-6 space-y-3 text-sm">
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-orange" aria-hidden="true" />
              <span className="text-navy-200">{site.addressFull}</span>
            </li>
            <li>
              <a
                href={site.phoneHref}
                className="flex items-center gap-3 text-navy-200 transition-colors hover:text-white"
              >
                <Phone className="h-4 w-4 shrink-0 text-orange" aria-hidden="true" />
                {site.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${site.email}`}
                className="flex items-center gap-3 text-navy-200 transition-colors hover:text-white"
              >
                <Mail className="h-4 w-4 shrink-0 text-orange" aria-hidden="true" />
                {site.email}
              </a>
            </li>
          </ul>
        </div>

        {/* Quick links */}
        <nav aria-label="Footer">
          <h2 className="text-base font-semibold text-white">Quick Links</h2>
          <ul className="mt-5 space-y-3 text-sm">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="text-navy-200 transition-colors hover:text-orange"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Services */}
        <div>
          <h2 className="text-base font-semibold text-white">Our Services</h2>
          <ul className="mt-5 space-y-3 text-sm">
            {services.map((service) => (
              <li key={service}>
                <Link
                  to="/products"
                  className="text-navy-200 transition-colors hover:text-orange"
                >
                  {service}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h2 className="text-base font-semibold text-white">Subscribe to our newsletter</h2>
          <p className="mt-3 text-sm text-navy-200">
            New arrivals, price drops and practical tech advice about twice a month.
          </p>

          <form onSubmit={handleSubscribe} className="mt-5">
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <div className="flex overflow-hidden rounded-lg bg-white">
              <input
                id="newsletter-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="min-w-0 flex-1 px-4 py-3 text-sm text-navy-800 placeholder:text-navy-400 focus:outline-none"
              />
              <button
                type="submit"
                className="bg-orange px-5 text-sm font-semibold text-white transition-colors hover:bg-orange-600"
              >
                Subscribe
              </button>
            </div>
          </form>

          {subscribed && (
            <p className="mt-3 flex items-center gap-2 text-sm text-emerald-300">
              <Check className="h-4 w-4" aria-hidden="true" />
              You are on the list. Watch your inbox.
            </p>
          )}

          <div className="mt-6 flex items-center gap-3">
            {site.socials.map(({ label, href }) => {
              const Icon = socialIcons[label];
              return (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Tech City on ${label}`}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-orange"
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </a>
              );
            })}
            <a
              href={`https://wa.me/${site.whatsappNumber}`}
              target="_blank"
              rel="noreferrer"
              aria-label="Chat with Tech City on WhatsApp"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-orange"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container flex flex-col items-center justify-between gap-3 py-5 text-xs text-navy-300 sm:flex-row">
          <p>© {new Date().getFullYear()} Tech City Technology Mall. All rights reserved.</p>
          <ul className="flex items-center gap-6">
            <li>
              <Link to="/contact" className="transition-colors hover:text-orange">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/contact" className="transition-colors hover:text-orange">
                Terms &amp; Conditions
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
