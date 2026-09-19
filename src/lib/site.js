export const site = {
  name: "Tech City",
  tagline: "Technology Mall",
  phoneDisplay: "0903 330 5309",
  phoneHref: "tel:+2349033305309",
  whatsappNumber: "2349033305309",
  email: "hello@techcityondo.com",
  addressShort: "4 Idishin, Yaba St, Ondo",
  addressFull: "4 Idishin, Yaba St, opposite Wema Bank, Ondo 351101, Ondo State",
  mapsQuery: "4+Idishin+Yaba+Street+Ondo+351101+Ondo+State+Nigeria",
  hours: [
    { day: "Monday – Friday", time: "8:00 AM – 7:00 PM" },
    { day: "Saturday", time: "9:00 AM – 6:00 PM" },
    { day: "Sunday", time: "Closed" },
  ],
  socials: [
    { label: "Facebook", href: "https://facebook.com/techcityondo" },
    { label: "Instagram", href: "https://instagram.com/techcityondo" },
    { label: "YouTube", href: "https://youtube.com/@techcityondo" },
  ],
};

export const navLinks = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Products/Services", to: "/products" },
  { label: "Projects", to: "/projects" },
  { label: "Blog", to: "/blog" },
  { label: "Contact", to: "/contact" },
];

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${site.mapsQuery}`;
export const mapEmbedUrl = `https://www.google.com/maps?q=${site.mapsQuery}&output=embed`;

/** Build a WhatsApp deep link with a pre-filled message. */
export function whatsappLink(message) {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

/** Format a number as Nigerian Naira, e.g. ₦845,000 */
export function formatNaira(value) {
  return `₦${Number(value).toLocaleString("en-NG")}`;
}
