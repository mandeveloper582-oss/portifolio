function GlassCard({ children, className = "" }) {
  return (
    <div className={`rounded-4xl border border-white/10 bg-card p-6 shadow-[0_35px_80px_rgba(8,15,42,0.35)] backdrop-blur-xl ${className}`.trim()}>
      {children}
    </div>
  );
}

export default GlassCard;
