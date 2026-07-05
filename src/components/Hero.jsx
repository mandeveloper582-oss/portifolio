import { FaDownload, FaGithub, FaLinkedin, FaTelegramPlane } from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi";
import { motion } from "framer-motion";

import HeroStats from "./HeroStats";
import TechStack from "./TechStack";
import { fadeRight } from "../utils/Animation";

function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-transparent px-6 pb-24 pt-28 sm:px-8 lg:px-10 lg:pt-36">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.18),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(99,102,241,0.18),_transparent_35%)]" />

      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-300">
            <span className="h-2.5 w-2.5 rounded-full bg-cyan-400" />
            Available for select freelance projects and full-time product roles
          </div>

          <h1 className="mt-8 text-4xl font-semibold leading-[0.95] text-white sm:text-5xl lg:text-7xl">
            I build premium web products that help startups and businesses grow.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400 sm:text-xl">
            I’m Lencho Ahmed, a MERN Stack developer focused on fast, modern, conversion-ready websites and applications for founders, startups, and growing brands.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-cyan-500 px-6 py-3 text-base font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:-translate-y-0.5 hover:bg-cyan-400">
              Hire Me <HiArrowRight />
            </a>
            <a href="#projects" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-base font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-300">
              View Projects
            </a>
            <a href="/Resume.pdf" download className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 px-6 py-3 text-base font-semibold text-cyan-300 transition hover:bg-cyan-400/10">
              Download Resume <FaDownload />
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4 text-slate-400">
            <a href="https://github.com/mandeveloper582-oss" target="_blank" rel="noreferrer" className="rounded-full border border-white/10 p-3 transition hover:border-cyan-400 hover:text-cyan-400">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/lencho-ahmed-4a850136b" target="_blank" rel="noreferrer" className="rounded-full border border-white/10 p-3 transition hover:border-cyan-400 hover:text-cyan-400">
              <FaLinkedin />
            </a>
            <a href="https://t.me/lench34" target="_blank" rel="noreferrer" className="rounded-full border border-white/10 p-3 transition hover:border-cyan-400 hover:text-cyan-400">
              <FaTelegramPlane />
            </a>
          </div>

          <HeroStats />
        </div>

        <motion.div variants={fadeRight} initial="hidden" whileInView="show" viewport={{ once: true }} className="flex justify-center lg:justify-end">
          <div className="relative w-full max-w-md rounded-[2rem] border border-cyan-400/20 bg-slate-900/80 p-3 shadow-[0_0_80px_rgba(34,211,238,0.15)]">
            <img src="/logo.jpg" alt="Lencho Ahmed" loading="eager" decoding="async" className="h-[420px] w-full rounded-3xl object-cover object-center" />
          </div>
        </motion.div>
      </div>

      <TechStack />
    </section>
  );
}

export default Hero;