import { Link } from "react-router-dom";
import { MapPin, CalendarDays, ArrowRight } from "lucide-react";
import PageHero from "../components/ui/PageHero";
import SectionHeading from "../components/ui/SectionHeading";

const projects = [
  {
    title: "16-camera surveillance for a three-branch supermarket",
    client: "Retail chain, Ondo City",
    location: "Ondo City",
    date: "June 2026",
    scope: "CCTV & Surveillance",
    summary:
      "Sixteen ColorVu cameras across three branches, feeding one recorder per site with unified remote viewing for the owner. Stock loss dropped noticeably within the first quarter.",
    image:
      "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Computer lab build-out for 40 students",
    client: "Secondary school, Akure",
    location: "Akure",
    date: "April 2026",
    scope: "Desktops & Networking",
    summary:
      "Forty refurbished OptiPlex workstations, a managed switch, structured cabling and a 5kVA backup line. Delivered, imaged and handed over inside two weeks.",
    image:
      "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "5kVA hybrid solar for a residential duplex",
    client: "Private residence",
    location: "Ondo West",
    date: "March 2026",
    scope: "Solar & Inverters",
    summary:
      "Load audit, roof survey, eight panels and lithium storage sized for lights, fans, a fridge and a home office. The house now runs through outages without the generator.",
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "POS rollout for a pharmacy group",
    client: "Pharmacy group, Ondo State",
    location: "Ondo & Ore",
    date: "February 2026",
    scope: "POS Systems",
    summary:
      "Twelve Android terminals configured with the client's inventory software, staff trained on-site, and a spares pool held at our counter for same-day swaps.",
    image:
      "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Mesh Wi-Fi across a two-floor office",
    client: "Accounting firm",
    location: "Ondo City",
    date: "January 2026",
    scope: "Networking",
    summary:
      "Replaced four mismatched routers with a wired-backhaul mesh, one network name across both floors, and a separate guest network for clients in the waiting area.",
    image:
      "https://images.unsplash.com/photo-1606904825846-647eb07f5be2?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Content creator kit for a media startup",
    client: "Digital media studio",
    location: "Akure",
    date: "November 2025",
    scope: "Content Creation",
    summary:
      "Editing workstation, capture hardware, lighting, audio and storage — specified to the studio's actual output schedule rather than a generic bundle.",
    image:
      "https://images.unsplash.com/photo-1547082299-de196ea013d6?auto=format&fit=crop&w=900&q=80",
  },
];

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Projects"
        title="Installations we have delivered"
        description="Cameras, computer labs, solar systems and POS rollouts across Ondo State. Every one of these started as a conversation at our counter."
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Projects" }]}
      />

      <section className="section bg-canvas">
        <div className="container">
          <SectionHeading
            title="Selected work"
            subtitle="A sample of recent jobs, with the scope and location of each."
          />

          <ul className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <li key={project.title}>
                <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-navy-100 bg-white shadow-card transition-shadow hover:shadow-lift">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt=""
                      loading="lazy"
                      className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="absolute left-3 top-3 rounded-full bg-navy/90 px-3 py-1 text-[11px] font-semibold text-white">
                      {project.scope}
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="text-base font-semibold leading-snug text-navy">
                      {project.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-navy-600">
                      {project.summary}
                    </p>

                    <dl className="mt-5 space-y-2 border-t border-navy-100 pt-4 text-xs text-navy-500">
                      <div className="flex items-center gap-2">
                        <dt className="sr-only">Location</dt>
                        <MapPin className="h-3.5 w-3.5 text-orange" aria-hidden="true" />
                        <dd>{project.location}</dd>
                      </div>
                      <div className="flex items-center gap-2">
                        <dt className="sr-only">Completed</dt>
                        <CalendarDays className="h-3.5 w-3.5 text-orange" aria-hidden="true" />
                        <dd>{project.date}</dd>
                      </div>
                    </dl>
                  </div>
                </article>
              </li>
            ))}
          </ul>

          <div className="mt-12 flex flex-col items-start gap-4 rounded-xl bg-navy p-7 text-white sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-xl font-bold">Have a site that needs surveying?</h2>
              <p className="mt-2 text-sm text-navy-200">
                We visit, measure and quote before anyone commits to a budget.
              </p>
            </div>
            <Link to="/contact" className="btn-primary shrink-0">
              Request a survey
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
