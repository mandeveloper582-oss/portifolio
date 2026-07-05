import { FaBriefcase, FaDownload, FaLaptopCode, FaUserGraduate } from "react-icons/fa";
import { motion } from "framer-motion";

import { fadeUp } from "../utils/Animation";

function About() {
  const highlights = [
    {
      title: "Development",
      description: "Crafting responsive, performant web apps with React, Node.js, Express, MongoDB, and Tailwind CSS.",
      icon: <FaLaptopCode className="text-4xl text-cyan-400" />,
    },
    {
      title: "Experience",
      description: "Shipping polished products for startups, agencies, and personal brands with thoughtful UX and clean code.",
      icon: <FaBriefcase className="text-4xl text-emerald-400" />,
    },
    {
      title: "Learning",
      description: "Always exploring modern systems, AI workflows, and product-led engineering practices.",
      icon: <FaUserGraduate className="text-4xl text-violet-400" />,
    },
  ];

  return (
    <motion.section id="about" variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="px-6 py-24 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400">About Me</p>
          <h2 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">I design and build digital products that look sharp and perform with purpose.</h2>
          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-400">
            I combine product strategy, modern UI, and reliable engineering to create websites and applications that earn trust, communicate clearly, and convert visitors into clients.
          </p>
        </div>

        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/70 p-3">
            <img src="/logo.jpg" alt="Portrait of Lencho" loading="lazy" decoding="async" className="h-[480px] w-full rounded-3xl object-cover object-center" />
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400">Who I Am</p>
            <h3 className="mt-5 text-3xl font-semibold text-white sm:text-4xl">A MERN Stack developer building high-quality digital experiences for ambitious brands.</h3>
            <p className="mt-6 text-lg leading-8 text-slate-400">
              I build responsive business websites, e-commerce experiences, portfolio sites, blog systems, APIs, and mobile-friendly products that are designed to feel premium and perform reliably in production.
            </p>
            <p className="mt-5 text-lg leading-8 text-slate-400">
              My approach is simple: ship clean code, strong UX, fast performance, and a clear path for clients to grow their business online.
            </p>
            <a href="/Resume.pdf" download className="mt-8 inline-flex items-center gap-3 rounded-full bg-cyan-500 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-400">
              Download Resume <FaDownload />
            </a>
          </div>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {highlights.map((item) => (
            <motion.div key={item.title} whileHover={{ y: -8, scale: 1.01 }} className="rounded-[1.75rem] border border-white/10 bg-slate-900/70 p-8 shadow-lg shadow-black/20">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-slate-800/80">{item.icon}</div>
              <h4 className="mt-6 text-2xl font-semibold text-white">{item.title}</h4>
              <p className="mt-4 text-base leading-7 text-slate-400">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default About;