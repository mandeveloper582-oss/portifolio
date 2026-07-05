import { FaArrowUp, FaEnvelope, FaGithub, FaHeart, FaLinkedin, FaTelegram, FaWhatsapp } from "react-icons/fa";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-slate-950/90 px-6 py-16 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h2 className="text-2xl font-semibold text-white">Lencho<span className="text-cyan-400">.dev</span></h2>
            <p className="mt-4 text-base leading-7 text-slate-400">I build premium web experiences for founders, startups, and businesses that want to stand out online.</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="mt-4 space-y-3 text-slate-400">
              <li><a href="#home" className="transition hover:text-cyan-400">Home</a></li>
              <li><a href="#about" className="transition hover:text-cyan-400">About</a></li>
              <li><a href="#services" className="transition hover:text-cyan-400">Services</a></li>
              <li><a href="#projects" className="transition hover:text-cyan-400">Projects</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white">Services</h3>
            <ul className="mt-4 space-y-3 text-slate-400">
              <li>Responsive websites</li>
              <li>MERN stack apps</li>
              <li>UI systems</li>
              <li>Deployment & support</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white">Connect</h3>
            <div className="mt-4 flex flex-col gap-3 text-slate-400">
              <a href="mailto:lenchoa391@gmail.com" className="inline-flex items-center gap-2 transition hover:text-cyan-400"><FaEnvelope /> lenchoa391@gmail.com</a>
              <div className="mt-2 flex flex-wrap gap-3">
                <a href="https://github.com/mandeveloper582-oss" target="_blank" rel="noreferrer" className="rounded-full border border-white/10 p-3 transition hover:border-cyan-400 hover:text-cyan-400"><FaGithub /></a>
                <a href="https://www.linkedin.com/in/lencho-ahmed-4a850136b" target="_blank" rel="noreferrer" className="rounded-full border border-white/10 p-3 transition hover:border-cyan-400 hover:text-cyan-400"><FaLinkedin /></a>
                <a href="https://t.me/lench34" target="_blank" rel="noreferrer" className="rounded-full border border-white/10 p-3 transition hover:border-cyan-400 hover:text-cyan-400"><FaTelegram /></a>
                <a href="https://wa.me/251921399695" target="_blank" rel="noreferrer" className="rounded-full border border-white/10 p-3 transition hover:border-cyan-400 hover:text-cyan-400"><FaWhatsapp /></a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-slate-500 md:flex-row">
          <p>© {year} Lencho Ahmed. Designed and built for modern product teams and ambitious brands.</p>
          <p className="inline-flex items-center gap-2">Made with <FaHeart className="text-rose-500" /> for thoughtful digital experiences</p>
        </div>
      </div>

      <a href="#home" className="fixed bottom-6 right-6 flex h-12 w-12 items-center justify-center rounded-full bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/30 transition hover:bg-cyan-400"> <FaArrowUp /> </a>
    </footer>
  );
}

export default Footer;