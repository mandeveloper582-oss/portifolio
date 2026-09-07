import { FaArrowRight } from "react-icons/fa";

function CTA() {
  return (
    <section className="py-10 sm:py-16">
      <div className="section-shell">
        <div className="cta-frame border border-violet-400/20 bg-linear-to-r from-violet-500/25 via-indigo-500/20 to-cyan-500/20 shadow-[0_30px_90px_rgba(99,102,241,0.15)]">
          <div className="flex flex-col items-center justify-between gap-6 rounded-[1.9rem] bg-(--panel-strong) px-6 py-8 text-center sm:flex-row sm:text-left">
            <div>
              <h3 className="text-2xl font-semibold text-(--text-primary) sm:text-3xl">Have a project in mind?</h3>
              <p className="mt-2 text-sm text-(--text-secondary) sm:text-base">
                Let’s work together and build something amazing.
              </p>
            </div>
            <a href="#contact" className="inline-flex items-center gap-3 rounded-full bg-linear-to-r from-violet-500 to-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-[0_18px_40px_rgba(96,165,250,0.2)] transition hover:-translate-y-0.5">
              Contact Me <FaArrowRight />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTA;
