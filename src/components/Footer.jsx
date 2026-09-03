import { FaArrowUp, FaEnvelope, FaGithub, FaHeart, FaLinkedin, FaTelegram, FaWhatsapp } from "react-icons/fa";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative pb-10 pt-6">
      <div className="section-shell">
        <div className="rounded-[1.8rem] border border-white/10 bg-slate-900/60 p-5 shadow-[0_24px_80px_rgba(2,6,23,0.35)] backdrop-blur-xl sm:p-6 lg:p-8">
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-5">
            <div className="xl:col-span-2">
              <div className="inline-flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-linear-to-br from-violet-500 via-indigo-500 to-cyan-400 text-sm font-bold text-slate-950">LA</span>
                <span className="text-lg font-semibold text-white">Lencho Ahmed</span>
              </div>
              <p className="mt-4 max-w-md text-sm leading-7 text-slate-400">
                I build premium web experiences for founders, startups, and businesses that want to stand out online.
              </p>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-300">Quick links</h3>
              <ul className="mt-4 space-y-3 text-sm text-slate-400">
                <li><a href="#home" className="transition hover:text-cyan-300">Home</a></li>
                <li><a href="#about" className="transition hover:text-cyan-300">About</a></li>
                <li><a href="#services" className="transition hover:text-cyan-300">Services</a></li>
                <li><a href="#projects" className="transition hover:text-cyan-300">Projects</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-300">Services</h3>
              <ul className="mt-4 space-y-3 text-sm text-slate-400">
                <li>Responsive websites</li>
                <li>MERN stack apps</li>
                <li>UI systems</li>
                <li>Deployment</li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-300">Connect</h3>
              <div className="mt-4 flex flex-wrap gap-3">
                <a href="https://github.com/mandeveloper582-oss" target="_blank" rel="noreferrer" aria-label="GitHub" className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200 transition hover:border-cyan-400/40 hover:text-cyan-300"><FaGithub /></a>
                <a href="https://www.linkedin.com/in/lencho-ahmed-4a850136b" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200 transition hover:border-cyan-400/40 hover:text-cyan-300"><FaLinkedin /></a>
                <a href="https://t.me/lench34" target="_blank" rel="noreferrer" aria-label="Telegram" className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200 transition hover:border-cyan-400/40 hover:text-cyan-300"><FaTelegram /></a>
                <a href="https://wa.me/251921399695" target="_blank" rel="noreferrer" aria-label="WhatsApp" className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200 transition hover:border-cyan-400/40 hover:text-cyan-300"><FaWhatsapp /></a>
              </div>
              <a href="mailto:lenchoa391@gmail.com" className="mt-4 inline-flex items-center gap-2 text-sm text-slate-300 transition hover:text-cyan-300"><FaEnvelope /> lenchoa391@gmail.com</a>
            </div>
          </div>

          <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-5 text-sm text-slate-500 md:flex-row">
            <p>© {year} Lencho Ahmed. All rights reserved.</p>
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center gap-2">Made with <FaHeart className="text-rose-500" /></span>
              <a href="#home" className="inline-flex items-center gap-2 text-slate-300 transition hover:text-cyan-300">Back to Top <FaArrowUp /></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
