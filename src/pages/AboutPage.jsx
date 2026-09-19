import { Link } from "react-router-dom";
import {
  Target,
  Eye,
  HeartHandshake,
  ShieldCheck,
  Sparkles,
  Users,
  ArrowRight,
} from "lucide-react";
import PageHero from "../components/ui/PageHero";
import SectionHeading from "../components/ui/SectionHeading";
import { site } from "../lib/site";

const pillars = [
  {
    icon: Target,
    title: "Our Mission",
    text: "To put genuine, well-priced technology within reach of everyone in Ondo State — and to stand behind every item we sell with advice, installation and repair that people can actually rely on.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    text: "To be the first place anyone in the South West thinks of when they need a laptop, a camera system or a solar setup, and to prove that you do not have to travel to Lagos for a serious tech store.",
  },
  {
    icon: HeartHandshake,
    title: "Core Values",
    text: "Honest pricing, tested products, plain explanations, and a phone line that still answers after the sale. We would rather lose a sale than sell you the wrong machine.",
  },
];

const values = [
  {
    icon: ShieldCheck,
    title: "Nothing leaves untested",
    text: "Every laptop, console and camera is powered on, updated and inspected before it is handed over.",
  },
  {
    icon: Users,
    title: "Advice before the sale",
    text: "We ask what you will use it for. Often the cheaper option is the right one, and we will say so.",
  },
  {
    icon: Sparkles,
    title: "Support that outlives the receipt",
    text: "Setup help, warranty claims and troubleshooting are part of the deal, not an upsell.",
  },
];

const facilities = [
  {
    src: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=900&q=80",
    alt: "The Tech City showroom floor",
    caption: "Showroom floor",
    text: "Laptops, phones and consoles you can handle before you buy.",
  },
  {
    src: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80",
    alt: "Technicians working at a repair bench",
    caption: "Service bench",
    text: "Diagnostics, upgrades and warranty repairs handled in-house.",
  },
  {
    src: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=900&q=80",
    alt: "CCTV demonstration wall",
    caption: "Security demo wall",
    text: "See live camera footage quality before you commit to a system.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="A technology mall built for Ondo State"
        description="Tech City opened to solve a simple problem: people in Ondo were travelling hours to buy equipment they could not test, from sellers they would never see again. We built the opposite of that."
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "About Us" }]}
      >
        <div className="flex flex-wrap gap-3">
          <Link to="/products" className="btn-primary">
            Browse our products
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
          <Link
            to="/contact"
            className="btn border border-white/30 text-white hover:bg-white hover:text-navy"
          >
            Visit the store
          </Link>
        </div>
      </PageHero>

      {/* Mission / Vision / Values */}
      <section className="section bg-white">
        <div className="container">
          <ul className="grid gap-5 md:grid-cols-3">
            {pillars.map(({ icon: Icon, title, text }) => (
              <li key={title}>
                <div className="flex h-full flex-col rounded-xl border border-navy-100 bg-canvas p-6 shadow-card">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-50 text-orange">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h2 className="mt-5 text-lg font-semibold text-navy">{title}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-navy-600">{text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Our story */}
      <section className="section bg-navy-50">
        <div className="container grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="order-2 lg:order-1">
            <h2 className="heading-lg">Our Story</h2>
            <div className="mt-5 space-y-4 text-sm leading-relaxed text-navy-700">
              <p>
                For years, buying a laptop in Ondo meant one of two things: ordering blind from a
                social media seller, or making the trip to Computer Village in Lagos and hoping the
                machine you carried home was the one you inspected.
              </p>
              <p>
                Tech City started as a small counter selling phone accessories. Customers kept
                asking the same questions — which laptop will survive my workload, can you fit
                cameras at my shop, what happens when this stops working? Answering those questions
                honestly, one person at a time, turned the counter into a mall.
              </p>
              <p>
                Today we carry laptops, desktops, phones, POS terminals, surveillance systems,
                gaming consoles, UPS units, solar gadgets, smart home kits and the accessories that
                go with all of it. We install, we configure, and we keep answering the phone when
                something needs attention.
              </p>
              <p>
                Bridging the tech gap in Ondo State is not marketing language for us. It is what we
                do on an ordinary Tuesday, for a student buying her first laptop or a trader wiring
                cameras across three shops.
              </p>
            </div>

            <dl className="mt-8 grid grid-cols-3 gap-6 border-t border-navy-200 pt-6">
              {[
                { value: "2,000+", label: "Customers served" },
                { value: "10+", label: "Product categories" },
                { value: "6 days", label: "Open every week" },
              ].map((stat) => (
                <div key={stat.label}>
                  <dt className="sr-only">{stat.label}</dt>
                  <dd>
                    <span className="block text-2xl font-bold text-navy">{stat.value}</span>
                    <span className="mt-1 block text-xs text-navy-500">{stat.label}</span>
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="order-1 grid grid-cols-2 gap-4 lg:order-2">
            <img
              src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80"
              alt="Customers browsing inside Tech City"
              loading="lazy"
              className="col-span-2 h-56 w-full rounded-xl object-cover shadow-card md:h-72"
            />
            <img
              src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=600&q=80"
              alt="Laptops on display"
              loading="lazy"
              className="h-40 w-full rounded-xl object-cover shadow-card md:h-48"
            />
            <img
              src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&w=600&q=80"
              alt="POS terminal in use at a counter"
              loading="lazy"
              className="h-40 w-full rounded-xl object-cover shadow-card md:h-48"
            />
          </div>
        </div>
      </section>

      {/* How we work */}
      <section className="section bg-white">
        <div className="container">
          <SectionHeading
            title="How we work"
            subtitle="Three commitments that shape every transaction on our floor."
          />
          <ul className="mt-8 grid gap-5 md:grid-cols-3">
            {values.map(({ icon: Icon, title, text }) => (
              <li key={title} className="flex items-start gap-4 rounded-xl bg-canvas p-6">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-orange bg-white text-orange">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-sm font-semibold text-navy">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-navy-600">{text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Facilities */}
      <section className="section bg-canvas">
        <div className="container">
          <SectionHeading
            title="Our store and facilities"
            subtitle={`Find us at ${site.addressFull}.`}
          />

          <ul className="mt-8 grid gap-5 md:grid-cols-3">
            {facilities.map(({ src, alt, caption, text }) => (
              <li key={caption}>
                <figure className="h-full overflow-hidden rounded-xl border border-navy-100 bg-white shadow-card">
                  <img src={src} alt={alt} loading="lazy" className="h-52 w-full object-cover" />
                  <figcaption className="p-5">
                    <h3 className="text-base font-semibold text-navy">{caption}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-navy-600">{text}</p>
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-col items-start gap-4 rounded-xl bg-navy p-7 text-white sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-xl font-bold">Planning a purchase or an installation?</h2>
              <p className="mt-2 text-sm text-navy-200">
                Tell us what you need and we will size it properly before you spend anything.
              </p>
            </div>
            <Link to="/contact" className="btn-primary shrink-0">
              Talk to our team
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
