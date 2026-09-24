import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Star,
  MapPin,
  Phone,
  Clock,
  ShieldCheck,
  Wrench,
  Headset,
  Settings2,
  Lightbulb,
  BadgeCheck,
  Users,
  Navigation,
} from "lucide-react";
import SectionHeading from "../components/ui/SectionHeading";
import { categoryCards } from "../data/categories";
import { site, directionsUrl, mapEmbedUrl } from "../lib/site";

// Import custom image from assets folder
import heroRedmi from "../assets/hero-redmi.jpg";

/* ---------------------------------------------------------------- data ---- */

const heroImages = [
  {
    src: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=900&q=80",
    alt: "Laptop on a retail display table",
    className: "col-span-2 row-span-2",
  },
  {
    src: "hero-redmi.jpg",
    alt: "Redmi A7 Pro Smartphone",
    className: "",
  },
  {
    src: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&w=600&q=80",
    alt: "PlayStation 5 console and controller",
    className: "",
  },
  {
    src: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=600&q=80",
    alt: "CCTV surveillance camera",
    className: "",
  },
  {
    src: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80",
    alt: "Over-ear headphones and accessories",
    className: "",
  },
];

const services = [
  {
    icon: Users,
    title: "Sales & Consultation",
    text: "Get expert advice on the best tech for your needs.",
  },
  {
    icon: Wrench,
    title: "Installation Support",
    text: "Professional setup for CCTV, networks and more.",
  },
  {
    icon: Headset,
    title: "After-Sales Support",
    text: "We're here to help, even after your purchase.",
  },
  {
    icon: Settings2,
    title: "Technical Support",
    text: "Quick and reliable assistance.",
  },
  {
    icon: Lightbulb,
    title: "Custom Solutions",
    text: "Tailored solutions for homes, offices and businesses.",
  },
];

const highlights = [
  {
    icon: BadgeCheck,
    title: "Quality Products",
    text: "Original and reliable brands.",
  },
  {
    icon: ShieldCheck,
    title: "Expert Support",
    text: "Friendly and knowledgeable team.",
  },
  {
    icon: MapPin,
    title: "Convenient Location",
    text: "Easy to find in Ondo City.",
  },
];

const testimonials = [
  {
    quote:
      "Tech City has really been a reliable place for all my tech needs. The staff are always helpful and professional.",
    name: "James D.",
    role: "Business owner, Ondo",
  },
  {
    quote:
      "I love the variety of products and their customer service. They always go the extra mile.",
    name: "Tolu A.",
    role: "Student, AAUA",
  },
  {
    quote:
      "Great experience! The team is very knowledgeable and helped me get the right laptop for my work.",
    name: "Mercy E.",
    role: "Accountant",
  },
];

/* -------------------------------------------------- animation variants ---- */

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

/* ---------------------------------------------------------------- page ---- */

export default function HomePage() {
  return (
    <>
      <Hero />
      <Categories />
      <Services />
      <About />
      <Testimonials />
      <VisitStore />
    </>
  );
}

/* ---------------------------------------------------------------- hero ---- */

function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-navy-50 via-white to-orange-50">
      <div className="container grid items-center gap-10 py-14 lg:grid-cols-2 lg:gap-14 lg:py-20">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.span
            variants={fadeInUp}
            className="inline-flex items-center gap-2 rounded-full bg-orange-50 px-3 py-1.5 text-xs font-semibold text-orange ring-1 ring-orange-200"
          >
            <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
            Your Trusted Technology Store in Ondo
          </motion.span>

          <motion.h1
            variants={fadeInUp}
            className="mt-5 text-4xl font-extrabold leading-[1.1] text-navy md:text-5xl lg:text-[3.4rem]"
          >
            Your Trusted Technology Store in Ondo
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="mt-5 max-w-xl text-base leading-relaxed text-navy-600"
          >
            Explore quality laptops, phones, gaming devices, CCTV systems, accessories, solar
            gadgets, smart home products and more at Tech City.
          </motion.p>

          <motion.div variants={fadeInUp} className="mt-8 flex flex-wrap gap-3">
            <Link to="/products" className="btn-primary transition-transform hover:scale-105">
              Explore Products
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link to="/about" className="btn-outline transition-transform hover:scale-105">
              Learn More
            </Link>
          </motion.div>

          <motion.dl
            variants={fadeInUp}
            className="mt-10 grid max-w-lg grid-cols-3 gap-6 border-t border-navy-100 pt-6"
          >
            {[
              { value: "10+", label: "Product categories" },
              { value: "2,000+", label: "Customers served" },
              { value: "12 mo", label: "Warranty on devices" },
            ].map((stat) => (
              <div key={stat.label}>
                <dt className="sr-only">{stat.label}</dt>
                <dd>
                  <span className="block text-2xl font-bold text-navy">{stat.value}</span>
                  <span className="mt-1 block text-xs text-navy-500">{stat.label}</span>
                </dd>
              </div>
            ))}
          </motion.dl>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative"
        >
          <div className="grid grid-cols-4 grid-rows-2 gap-3 md:gap-4">
            {heroImages.map((image, idx) => (
              <motion.div
                key={typeof image.src === "string" ? image.src : idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ scale: 1.03 }}
                className={`overflow-hidden rounded-xl bg-white shadow-card transition-shadow hover:shadow-lg ${image.className}`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
                  loading="eager"
                />
              </motion.div>
            ))}
          </div>

          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-5 left-4 hidden items-center gap-3 rounded-xl bg-white px-4 py-3 shadow-lift sm:flex"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-50 text-orange">
              <ShieldCheck className="h-5 w-5" aria-hidden="true" />
            </span>
            <span className="text-sm">
              <span className="block font-semibold text-navy">Tested before handover</span>
              <span className="text-navy-500">Every device, every time</span>
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------- categories ---- */

function Categories() {
  return (
    <section className="section bg-white">
      <div className="container">
        <SectionHeading
          title="Our Product Categories"
          subtitle="Explore our wide range of technology products and solutions."
          action={
            <Link
              to="/products"
              className="text-sm font-semibold text-orange hover:text-orange-600"
            >
              View All
            </Link>
          }
        />

        <motion.ul
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="mt-8 grid grid-cols-3 gap-3 sm:grid-cols-4 md:gap-4 lg:grid-cols-5"
        >
          {categoryCards.map(({ slug, label, icon: Icon }) => (
            <motion.li key={label} variants={fadeInUp}>
              <Link
                to={slug === "all" ? "/products" : `/products?category=${slug}`}
                className="group flex h-full flex-col items-center justify-center gap-3 rounded-xl bg-navy-50 p-4 text-center transition-all duration-300 hover:-translate-y-1 hover:bg-orange hover:shadow-md md:p-6"
              >
                <Icon
                  className="h-7 w-7 text-orange transition-colors group-hover:text-white"
                  aria-hidden="true"
                />
                <span className="text-xs font-semibold leading-snug text-navy transition-colors group-hover:text-white md:text-sm">
                  {label}
                </span>
              </Link>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------ services ---- */

function Services() {
  return (
    <section className="section bg-navy-50">
      <div className="container">
        <SectionHeading
          title="Our Services"
          subtitle="We provide more than just products. We offer complete technology solutions to meet your needs."
        />

        <motion.ul
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-5 lg:divide-x lg:divide-navy-200"
        >
          {services.map(({ icon: Icon, title, text }) => (
            <motion.li
              key={title}
              variants={fadeInUp}
              className="flex items-start gap-4 lg:px-5 lg:first:pl-0 lg:last:pr-0"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-orange bg-white text-orange transition-transform duration-300 hover:scale-110">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <h3 className="text-sm font-semibold text-navy">{title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-navy-600">{text}</p>
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}

/* --------------------------------------------------------------- about ---- */

function About() {
  return (
    <section className="section bg-white">
      <div className="container grid gap-8 lg:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-4"
        >
          <div className="overflow-hidden rounded-xl shadow-card">
            <img
              src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=900&q=80"
              alt="Inside the Tech City Technology Mall showroom"
              loading="lazy"
              className="h-64 w-full object-cover transition-transform duration-500 hover:scale-105 lg:h-full"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="lg:col-span-4"
        >
          <h2 className="heading-lg">About Tech City</h2>
          <p className="mt-4 text-sm leading-relaxed text-navy-600">
            Tech City is a tech mall where we sell all kinds of tech gadgets such as laptops,
            desktops, POS systems, surveillance CCTV cameras, content creator kits, phones, PS4
            &amp; 5, UPS, video games, phone accessories, computer accessories, solar gadgets and
            smart home gadgets.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-navy-600">
            We have served students, traders, schools and small businesses across Ondo State since
            we opened our doors — and we stay reachable long after the receipt is printed.
          </p>
          <Link to="/about" className="btn-primary mt-6 inline-block transition-transform hover:scale-105">
            Learn More
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-4"
        >
          <ul className="space-y-4 rounded-xl bg-navy-50 p-5 md:p-6">
            {highlights.map(({ icon: Icon, title, text }) => (
              <li key={title} className="flex items-start gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-orange bg-white text-orange">
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-sm font-semibold text-navy">{title}</h3>
                  <p className="mt-0.5 text-sm text-navy-600">{text}</p>
                </div>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------- testimonials ---- */

function Stars() {
  return (
    <div className="flex items-center gap-0.5" aria-label="Rated 5 out of 5">
      {Array.from({ length: 5 }).map((_, index) => (
        <Star key={index} className="h-4 w-4 fill-orange text-orange" aria-hidden="true" />
      ))}
    </div>
  );
}

function Testimonials() {
  return (
    <section className="section bg-canvas">
      <div className="container">
        <SectionHeading title="What Our Customers Say" subtitle="Real people. Real experiences." />

        <motion.ul
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="mt-8 grid gap-5 md:grid-cols-3"
        >
          {testimonials.map(({ quote, name, role }) => (
            <motion.li key={name} variants={fadeInUp}>
              <figure className="flex h-full flex-col rounded-xl border border-navy-100 bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
                <blockquote className="flex-1 text-sm leading-relaxed text-navy-700">
                  “{quote}”
                </blockquote>
                <figcaption className="mt-5 border-t border-navy-100 pt-4">
                  <span className="block text-sm font-semibold text-navy">— {name}</span>
                  <span className="mt-0.5 block text-xs text-navy-500">{role}</span>
                  <div className="mt-2">
                    <Stars />
                  </div>
                </figcaption>
              </figure>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}

/* --------------------------------------------------------- visit store ---- */

function VisitStore() {
  return (
    <section className="section bg-white">
      <div className="container">
        <SectionHeading
          title="Visit Our Store"
          subtitle="Come and see the products in person. Our team is on the floor six days a week."
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-8 grid gap-6 overflow-hidden rounded-xl border border-navy-100 shadow-card lg:grid-cols-2 lg:gap-0"
        >
          <div className="min-h-[280px] bg-navy-50">
            <iframe
              title="Map showing Tech City Technology Mall, Ondo"
              src={mapEmbedUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full min-h-[280px] w-full border-0"
            />
          </div>

          <div className="p-6 md:p-8">
            <ul className="space-y-5 text-sm">
              <li className="flex items-start gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange-50 text-orange">
                  <MapPin className="h-4 w-4" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-semibold text-navy">Address</h3>
                  <p className="mt-1 text-navy-600">{site.addressFull}</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange-50 text-orange">
                  <Phone className="h-4 w-4" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-semibold text-navy">Phone</h3>
                  <a href={site.phoneHref} className="mt-1 block text-navy-600 hover:text-orange">
                    {site.phoneDisplay}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange-50 text-orange">
                  <Clock className="h-4 w-4" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-semibold text-navy">Opening hours</h3>
                  <ul className="mt-1 space-y-1 text-navy-600">
                    {site.hours.map((entry) => (
                      <li key={entry.day} className="flex gap-2">
                        <span className="w-36 shrink-0">{entry.day}</span>
                        <span>{entry.time}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            </ul>

            <a
              href={directionsUrl}
              target="_blank"
              rel="noreferrer"
              className="btn-primary mt-7 inline-flex items-center gap-2 transition-transform hover:scale-105"
            >
              <Navigation className="h-4 w-4" aria-hidden="true" />
              Get Directions
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}