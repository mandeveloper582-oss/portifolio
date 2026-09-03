import { motion } from "framer-motion";
import { FaBriefcase, FaGraduationCap, FaLaptopCode, FaCode } from "react-icons/fa";

const timeline = [
  {
    id: 1,
    icon: <FaGraduationCap className="text-xl text-cyan-300" />,
    title: "Computer Science Student",
    company: "University",
    year: "2025 - Present",
    description: "Studying computer science with a focus on software engineering, databases, and modern web technologies.",
  },
  {
    id: 2,
    icon: <FaCode className="text-xl text-violet-300" />,
    title: "Frontend Developer",
    company: "Self Learning",
    year: "2023",
    description: "Built responsive websites using HTML, CSS, JavaScript, React, Tailwind CSS, and Vite while improving UI/UX skills.",
  },
  {
    id: 3,
    icon: <FaLaptopCode className="text-xl text-emerald-300" />,
    title: "MERN Stack Developer",
    company: "Coursera Training",
    year: "2024",
    description: "Completed hands-on MERN training and shipped production-ready apps with React, Node.js, Express, and MongoDB.",
  },
  {
    id: 4,
    icon: <FaBriefcase className="text-xl text-sky-300" />,
    title: "Freelance Developer",
    company: "Odaa Family Group",
    year: "2026",
    description: "Helping businesses and individuals build modern websites, web applications, and scalable digital solutions.",
  },
];

function Experience() {
  return (
    <section id="experience" className="relative py-20 sm:py-24">
      <div className="section-shell relative">
        <div className="mb-10 max-w-3xl">
          <span className="section-label">Experience</span>
          <h2 className="mt-5 text-3xl font-bold tracking-[-0.04em] text-white sm:text-4xl lg:text-5xl">
            My journey in product development.
          </h2>
        </div>

        <div className="relative ml-2 border-l border-white/10 pl-6 sm:ml-4 sm:pl-8">
          {timeline.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.06 }}
              className="relative mb-8 last:mb-0"
            >
              <span className="absolute -left-[1.78rem] top-3 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-slate-900 shadow-[0_12px_30px_rgba(56,189,248,0.12)]">
                {item.icon}
              </span>

              <div className="rounded-[1.5rem] border border-white/10 bg-slate-900/60 p-6 shadow-[0_16px_50px_rgba(2,6,23,0.35)]">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <span className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300">{item.year}</span>
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-300">
                    {item.company}
                  </span>
                </div>
                <h3 className="mt-4 text-2xl font-semibold text-white">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-400">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
