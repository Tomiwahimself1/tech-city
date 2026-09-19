import { Link } from "react-router-dom";

/**
 * Tech City wordmark.
 * @param {"light"|"dark"} tone  "dark" = navy text (white backgrounds), "light" = white text (navy backgrounds)
 */
export default function Logo({ tone = "dark", className = "" }) {
  const primary = tone === "light" ? "text-white" : "text-navy";
  const sub = tone === "light" ? "text-navy-200" : "text-navy-500";

  return (
    <Link to="/" className={`group inline-flex flex-col leading-none ${className}`}>
      <span className={`text-xl font-extrabold tracking-tight md:text-2xl ${primary}`}>
        TECH <span className="text-orange">CITY</span>
      </span>
      <span className={`mt-1 text-[11px] font-medium tracking-wide md:text-xs ${sub}`}>
        Technology Mall
      </span>
    </Link>
  );
}
