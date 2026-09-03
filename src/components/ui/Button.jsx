function Button({ children, href, type = "button", variant = "primary", className = "", ...props }) {
  const base = "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/30";
  const variants = {
    primary: "btn-gradient text-slate-950 shadow-lg shadow-slate-950/20 hover:-translate-y-0.5",
    secondary: "border border-white/10 bg-glass text-slate-100 hover:border-cyan-400/30 hover:text-cyan-200",
    ghost: "text-slate-100 hover:text-white",
  };
  const classes = `${base} ${variants[variant] ?? variants.primary} ${className}`.trim();

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={classes} {...props}>
      {children}
    </button>
  );
}

export default Button;
