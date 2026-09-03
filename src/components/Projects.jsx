import { useState } from "react";
import { motion } from "framer-motion";

import { projects } from "../data/Projects";
import ProjectCard from "./ProjectCard";

const categories = ["All", "Portfolio", "MERN", "Business", "E-Commerce", "Mobile"];

function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const filteredProjects = selectedCategory === "All" ? projects : projects.filter((project) => project.category === selectedCategory);

  return (
    <section id="projects" className="relative py-20 sm:py-24">
      <div className="section-shell relative">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="section-label">Featured projects</span>
            <h2 className="mt-5 text-3xl font-bold tracking-[-0.04em] text-white sm:text-4xl lg:text-5xl">
              Selected work.</h2>
          </div>
          <a href="https://github.com/mandeveloper582-oss" target="_blank" rel="noreferrer" className="inline-flex items-center self-start rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-cyan-400/40 hover:text-cyan-300">
            View All
          </a>
        </div>

        <div className="mb-8 flex flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setSelectedCategory(category)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                selectedCategory === category
                  ? "bg-linear-to-r from-violet-500 to-cyan-400 text-slate-950 shadow-[0_12px_30px_rgba(99,102,241,0.28)]"
                  : "border border-white/10 bg-white/5 text-slate-300 hover:border-cyan-400/40 hover:text-cyan-300"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.06 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
