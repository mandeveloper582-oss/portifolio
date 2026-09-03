function Badge({ children, className = "" }) {
  return <span className={`inline-flex rounded-full bg-glass px-3 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-slate-300 ${className}`.trim()}>{children}</span>;
}

export default Badge;
