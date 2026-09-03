function SectionHeading({ label, title, description, className = "" }) {
  return (
    <div className={`space-y-4 ${className}`.trim()}>
      <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400">{label}</p>
      <h2 className="max-w-3xl text-3xl font-semibold text-white sm:text-4xl md:text-5xl">{title}</h2>
      {description && <p className="max-w-3xl text-base leading-7 text-slate-400">{description}</p>}
    </div>
  );
}

export default SectionHeading;
