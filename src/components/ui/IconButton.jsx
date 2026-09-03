function IconButton({ icon, label, href, onClick, className = "" }) {
  const base = "inline-flex h-11 w-11 items-center justify-center rounded-3xl border border-white/10 bg-glass text-slate-200 transition duration-200 hover:border-cyan-400/30 hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/30";
  const classes = `${base} ${className}`.trim();

  if (href) {
    return (
      <a href={href} aria-label={label} className={classes}>
        {icon}
      </a>
    );
  }

  return (
    <button onClick={onClick} aria-label={label} className={classes}>
      {icon}
    </button>
  );
}

export default IconButton;
