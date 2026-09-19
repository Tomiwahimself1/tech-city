import { Phone, MapPin, Facebook, Instagram, Youtube } from "lucide-react";
import { site } from "../../lib/site";

const socialIcons = { Facebook, Instagram, YouTube: Youtube };

export default function TopBar() {
  return (
    <div className="hidden bg-navy text-white lg:block">
      <div className="container flex h-10 items-center justify-between text-[13px]">
        <p className="flex items-center gap-2 text-navy-100">
          <MapPin className="h-4 w-4 text-orange" aria-hidden="true" />
          Your Trusted Technology Store in Ondo
        </p>

        <div className="flex items-center gap-7">
          <a
            href={site.phoneHref}
            className="flex items-center gap-2 text-navy-100 transition-colors hover:text-white"
          >
            <Phone className="h-4 w-4 text-orange" aria-hidden="true" />
            {site.phoneDisplay}
          </a>

          <span className="flex items-center gap-2 text-navy-100">
            <MapPin className="h-4 w-4 text-orange" aria-hidden="true" />
            {site.addressShort}
          </span>

          <ul className="flex items-center gap-4">
            {site.socials.map(({ label, href }) => {
              const Icon = socialIcons[label];
              return (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Tech City on ${label}`}
                    className="block text-navy-100 transition-colors hover:text-orange"
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
  );
}
