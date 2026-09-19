import { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  Send,
  Check,
  Navigation,
} from "lucide-react";
import PageHero from "../components/ui/PageHero";
import { site, directionsUrl, mapEmbedUrl, whatsappLink } from "../lib/site";

const subjects = [
  "Product enquiry",
  "CCTV or network installation",
  "Solar and inverter systems",
  "Repairs and warranty",
  "Bulk or corporate order",
  "Something else",
];

const emptyForm = { name: "", email: "", phone: "", subject: subjects[0], message: "" };

export default function ContactPage() {
  const [form, setForm] = useState(emptyForm);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const update = (field) => (event) => {
    setForm((current) => ({ ...current, [field]: event.target.value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
  };

  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = "Tell us your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim()))
      next.email = "Enter an email address we can reply to.";
    if (!/^[0-9+\-\s()]{7,}$/.test(form.phone.trim()))
      next.phone = "Enter a phone number, e.g. 0803 000 0000.";
    if (form.message.trim().length < 10)
      next.message = "Add a little more detail so we can help properly.";
    return next;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const found = validate();
    setErrors(found);
    if (Object.keys(found).length > 0) return;

    // Connect this to your backend, Formspree, or an email service.
    setSent(true);
    setForm(emptyForm);
  };

  const fieldClass = (field) =>
    [
      "w-full rounded-lg border bg-canvas px-4 py-3 text-sm text-navy-800 placeholder:text-navy-400 focus:bg-white",
      errors[field] ? "border-red-400 focus:border-red-500" : "border-navy-200 focus:border-orange",
    ].join(" ");

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Talk to the Tech City team"
        description="Call, message on WhatsApp, or send the form below. We reply to messages the same working day."
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Contact" }]}
      />

      <section className="section bg-canvas">
        <div className="container grid gap-8 lg:grid-cols-12">
          {/* Form */}
          <div className="lg:col-span-7">
            <div className="rounded-xl border border-navy-100 bg-white p-6 shadow-card md:p-8">
              <h2 className="text-xl font-bold text-navy">Send us a message</h2>
              <p className="mt-2 text-sm text-navy-600">
                The more you tell us about what you need, the more useful our first reply will be.
              </p>

              {sent && (
                <div
                  role="status"
                  className="mt-6 flex items-start gap-3 rounded-lg bg-emerald-50 p-4 text-sm text-emerald-800 ring-1 ring-emerald-200"
                >
                  <Check className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                  <span>
                    Message received. We will reply by email or phone within one working day. For
                    anything urgent, call {site.phoneDisplay}.
                  </span>
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate className="mt-6 space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-navy">
                      Full name
                    </label>
                    <input
                      id="name"
                      type="text"
                      value={form.name}
                      onChange={update("name")}
                      placeholder="Adebayo Ojo"
                      aria-invalid={Boolean(errors.name)}
                      className={fieldClass("name")}
                    />
                    {errors.name && (
                      <p className="mt-1.5 text-xs text-red-600">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-navy">
                      Email address
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={form.email}
                      onChange={update("email")}
                      placeholder="you@example.com"
                      aria-invalid={Boolean(errors.email)}
                      className={fieldClass("email")}
                    />
                    {errors.email && (
                      <p className="mt-1.5 text-xs text-red-600">{errors.email}</p>
                    )}
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-navy">
                      Phone number
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      value={form.phone}
                      onChange={update("phone")}
                      placeholder="0803 000 0000"
                      aria-invalid={Boolean(errors.phone)}
                      className={fieldClass("phone")}
                    />
                    {errors.phone && (
                      <p className="mt-1.5 text-xs text-red-600">{errors.phone}</p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="mb-1.5 block text-sm font-medium text-navy"
                    >
                      Subject
                    </label>
                    <select
                      id="subject"
                      value={form.subject}
                      onChange={update("subject")}
                      className="w-full rounded-lg border border-navy-200 bg-canvas px-4 py-3 text-sm text-navy-800 focus:border-orange focus:bg-white"
                    >
                      {subjects.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-navy">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    value={form.message}
                    onChange={update("message")}
                    placeholder="What do you need? Include your budget, location and timeline if you have them."
                    aria-invalid={Boolean(errors.message)}
                    className={`${fieldClass("message")} resize-y`}
                  />
                  {errors.message && (
                    <p className="mt-1.5 text-xs text-red-600">{errors.message}</p>
                  )}
                </div>

                <button type="submit" className="btn-primary w-full sm:w-auto">
                  <Send className="h-4 w-4" aria-hidden="true" />
                  Send message
                </button>
              </form>
            </div>
          </div>

          {/* Store info */}
          <aside className="space-y-6 lg:col-span-5">
            <div className="rounded-xl bg-navy p-6 text-white shadow-card md:p-8">
              <h2 className="text-xl font-bold">Store information</h2>

              <ul className="mt-6 space-y-5 text-sm">
                <li className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-orange">
                    <MapPin className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-semibold text-white">Address</h3>
                    <p className="mt-1 text-navy-200">{site.addressFull}</p>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-orange">
                    <Phone className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-semibold text-white">Phone</h3>
                    <a
                      href={site.phoneHref}
                      className="mt-1 block text-navy-200 hover:text-orange"
                    >
                      {site.phoneDisplay}
                    </a>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-orange">
                    <Mail className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-semibold text-white">Email</h3>
                    <a
                      href={`mailto:${site.email}`}
                      className="mt-1 block text-navy-200 hover:text-orange"
                    >
                      {site.email}
                    </a>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-orange">
                    <Clock className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <div className="w-full">
                    <h3 className="font-semibold text-white">Opening hours</h3>
                    <ul className="mt-1 space-y-1 text-navy-200">
                      {site.hours.map((entry) => (
                        <li key={entry.day} className="flex justify-between gap-4">
                          <span>{entry.day}</span>
                          <span>{entry.time}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              </ul>

              <a
                href={whatsappLink("Hello Tech City, I would like to make an enquiry.")}
                target="_blank"
                rel="noreferrer"
                className="btn mt-7 w-full bg-[#25D366] text-white hover:bg-[#1eb455]"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                Chat on WhatsApp
              </a>
            </div>

            <div className="overflow-hidden rounded-xl border border-navy-100 bg-white shadow-card">
              <iframe
                title="Map showing Tech City Technology Mall, Ondo"
                src={mapEmbedUrl}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-64 w-full border-0"
              />
              <div className="flex flex-wrap items-center justify-between gap-3 p-5">
                <p className="text-sm text-navy-600">
                  Opposite Wema Bank, a short walk from the Yaba Street junction.
                </p>
                <a
                  href={directionsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary"
                >
                  <Navigation className="h-4 w-4" aria-hidden="true" />
                  Get Directions
                </a>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
