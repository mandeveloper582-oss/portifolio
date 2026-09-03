import { motion } from "framer-motion";
import { HiArrowRight } from "react-icons/hi";
import { FaDownload, FaGithub, FaLinkedin, FaTelegramPlane } from "react-icons/fa";
import HeroStats from "./HeroStats";
import TechStack from "./TechStack";
import { fadeRight } from "../utils/Animation";

function Hero() {
  const highlights = [
    { label: "Launch-ready work", value: "5+ polished products" },
    { label: "MERN architecture", value: "Scalable apps and APIs" },
    { label: "Conversion-first UI", value: "Premium experiences" },
  ];

  return (
    <section id="home" className="relative overflow-hidden bg-slate-950 px-6 pb-24 pt-28 sm:px-8 lg:px-10">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.16),_transparent_26%),radial-gradient(circle_at_bottom_right,_rgba(139,92,246,0.12),_transparent_28%)]" />
      <div className="pointer-events-none absolute left-0 top-16 h-60 w-60 rounded-full bg-violet-500/10 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-24 h-56 w-56 rounded-full bg-cyan-400/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.02fr_0.98fr]">
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-900/70 px-4 py-2 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">
            <span className="h-2.5 w-2.5 rounded-full bg-cyan-400" />
            Available for product and freelance partnerships
          </div>

          <h1 className="mt-8 max-w-3xl text-4xl font-semibold leading-[1.05] text-white sm:text-5xl lg:text-6xl">
            Premium MERN experiences with polished UI, scalable engineering, and strong product focus.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400 sm:text-xl">
            I’m Lencho Ahmed — a full-stack developer crafting elegant websites, high-conversion web apps, and modern digital products for ambitious founders.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-linear-to-r from-purple-500 via-blue-500 to-cyan-400 px-6 py-3 text-base font-semibold text-slate-950 shadow-lg shadow-cyan-500/15 transition hover:-translate-y-0.5">
              Hire Me <HiArrowRight className="text-lg" />
            </a>
            <a href="#projects" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-900/80 px-6 py-3 text-base font-semibold text-white transition hover:border-cyan-400/40 hover:text-cyan-300">
              View Projects
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-4 text-slate-300">
            <a href="https://github.com/mandeveloper582-oss" target="_blank" rel="noreferrer" className="inline-flex h-11 w-11 items-center justify-center rounded-3xl border border-white/10 bg-slate-900/80 text-slate-200 transition hover:border-cyan-400/30 hover:text-cyan-300">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/lencho-ahmed-4a850136b" target="_blank" rel="noreferrer" className="inline-flex h-11 w-11 items-center justify-center rounded-3xl border border-white/10 bg-slate-900/80 text-slate-200 transition hover:border-cyan-400/30 hover:text-cyan-300">
              <FaLinkedin />
            </a>
            <a href="https://t.me/lench34" target="_blank" rel="noreferrer" className="inline-flex h-11 w-11 items-center justify-center rounded-3xl border border-white/10 bg-slate-900/80 text-slate-200 transition hover:border-cyan-400/30 hover:text-cyan-300">
              <FaTelegramPlane />
            </a>
            <a href="/Resume.pdf" download className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-900/80 px-5 py-3 text-sm font-semibold text-slate-200 transition hover:border-cyan-400/30 hover:text-cyan-300">
              <FaDownload /> Resume
            </a>
          </div>

          <div className="mt-14 grid gap-4 sm:grid-cols-3">
            {highlights.map((item) => (
              <div key={item.label} className="rounded-4xl border border-white/10 bg-slate-900/85 p-6 shadow-[0_24px_80px_rgba(8,15,32,0.24)] transition hover:-translate-y-1">
                <p className="text-xs uppercase tracking-[0.35em] text-slate-500">{item.label}</p>
                <p className="mt-3 text-xl font-semibold text-white">{item.value}</p>
              </div>
            ))}
          </div>
        </div>

        <motion.div variants={fadeRight} initial="hidden" whileInView="show" viewport={{ once: true }} className="relative flex justify-center">
          <div className="absolute inset-0 -z-10 m-auto h-[420px] w-[420px] rounded-full bg-gradient-to-br from-violet-500/10 to-transparent blur-3xl" />
          <div className="relative w-full max-w-[520px] rounded-[2.25rem] border border-white/10 bg-slate-900/90 p-4 shadow-[0_40px_120px_rgba(8,15,32,0.35)] backdrop-blur-xl">
            <div className="relative overflow-hidden rounded-[2rem] bg-slate-950 shadow-[0_40px_90px_rgba(0,0,0,0.25)]">
              <img src="/logo.jpg" alt="Lencho Ahmed portrait" loading="eager" decoding="async" className="h-[520px] w-full object-cover object-center" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(168,85,247,0.18),_transparent_40%),radial-gradient(circle_at_bottom_right,_rgba(34,211,238,0.16),_transparent_40%)]" />
            </div>
            <div className="absolute left-6 bottom-8 rounded-[1.75rem] border border-white/10 bg-slate-950/85 px-5 py-4 text-slate-200 shadow-2xl shadow-slate-950/20">
              <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Design & Build</p>
              <p className="mt-3 max-w-xs text-sm leading-6 text-slate-300">Interfaces designed for clarity, performance, and premium brand presence.</p>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="mx-auto mt-24 max-w-7xl">
        <HeroStats />
      </div>

      <div className="mx-auto mt-12 max-w-7xl">
        <TechStack />
      </div>
    </section>
  );
}

export default Hero;
