import { Link } from "react-router-dom";

/**
 * Tech City official image logo.
 */
export default function Logo({ className = "" }) {
  return (
    <Link to="/" className={`inline-flex items-center ${className}`}>
      <img
        src="public/tech-city-logo.jpeg"
        alt="Tech City - Smart Tech for Smart Living"
        className="h-8 sm:h-10 w-auto object-contain"
      />
    </Link>
  );
}