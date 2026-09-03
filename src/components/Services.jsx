import { motion } from "framer-motion";
import { FaLaptopCode, FaShoppingCart, FaMobileAlt, FaRobot, FaNetworkWired } from "react-icons/fa";

const services = [
  {
    title: "Web Development",
    description: "Modern web applications built with React, Tailwind, and thoughtful UI structure.",
    icon: <FaLaptopCode className="text-2xl text-white" />,
    accent: "from-violet-500/25 to-cyan-500/25",
  },
  {
    title: "E-Commerce",
    description: "Conversion-driven storefronts with polished product presentation and checkout flows.",
    icon: <FaShoppingCart className="text-2xl text-white" />,
    accent: "from-indigo-500/25 to-violet-500/25",
  },
  {
    title: "Mobile Apps",
    description: "Cross-platform experiences designed for clarity, performance, and ongoing growth.",
    icon: <FaMobileAlt className="text-2xl text-white" />,
    accent: "from-cyan-500/25 to-sky-500/25",
  },
  {
    title: "AI Integration",
    description: "Smart automation and data-driven features that enhance product usability and speed.",
    icon: <FaRobot className="text-2xl text-white" />,
    accent: "from-purple-500/25 to-pink-500/25",
  },
  {
    title: "API Development",
    description: "Reliable REST APIs and backend services that connect frontend, data, and user workflows.",
    icon: <FaNetworkWired className="text-2xl text-white" />,
    accent: "from-emerald-500/25 to-cyan-500/25",
  },
];

function Services() {
  return (
    <section id="services" className="relative py-20 sm:py-24">
      <div className="section-shell relative">
        <div className="mb-10 text-left">
          <span className="section-label">What I can do for you</span>
          <h2 className="mt-5 max-w-2xl text-3xl font-bold tracking-[-0.04em] text-white sm:text-4xl lg:text-5xl">
            Premium digital solutions for ambitious brands.
          </h2>
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-5">
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              whileHover={{ y: -8, scale: 1.01 }}
              className="group relative overflow-hidden rounded-[1.6rem] border border-white/10 bg-slate-900/60 p-5 shadow-[0_24px_80px_rgba(2,6,23,0.35)]"
            >
              <div className={`absolute inset-x-0 top-0 h-24 bg-linear-to-r ${service.accent}`} />
              <div className="relative z-10">
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-br from-violet-500 to-cyan-400 shadow-[0_20px_35px_rgba(96,165,250,0.2)]">
                  {service.icon}
                </div>
                <h3 className="mt-6 text-xl font-semibold text-white">{service.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-400">{service.description}</p>
                <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">
                  Read more
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
