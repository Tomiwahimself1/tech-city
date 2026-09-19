export default function SectionHeading({ title, subtitle, action, className = "" }) {
  return (
    <div
      className={`flex flex-wrap items-end justify-between gap-4 ${className}`}
    >
      <div className="max-w-2xl">
        <h2 className="heading-lg">{title}</h2>
        {subtitle && (
          <p className="mt-2 text-sm leading-relaxed text-navy-600 md:text-base">{subtitle}</p>
        )}
      </div>
      {action}
    </div>
  );
}
