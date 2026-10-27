import { Link } from "react-router-dom";

/**
 * Tech City official image logo with mobile responsiveness.
 */
export default function Logo({ className = "" }) {
  return (
    <Link to="/" className={`inline-flex items-center shrink-0 ${className}`}>
      <img
        src="/tech-city-logo.jpg"
        alt="Tech City - Smart Tech for Smart Living"
        className="h-8 w-auto max-h-10 object-contain sm:h-10"
      />
    </Link>
  );
}