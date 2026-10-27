import { Link } from "react-router-dom";

export default function Logo({ className = "" }) {
  return (
    <Link to="/" className={`inline-flex items-center shrink-0 ${className}`}>
      <img
        src="public/tech-city-logo.jpeg"
        alt="Tech City - Smart Tech for Smart Living"
        className="h-8 w-auto max-w-[140px] object-contain sm:h-10 sm:max-w-[180px]"
      />
    </Link>
  );
}