import { useState } from "react";
import { motion } from "framer-motion";

import { projects } from "../data/Projects";
import ProjectCard from "./ProjectCard";
import { fadeUp } from "../utils/Animation";

function Projects() {
  const categories = ["All", "Portfolio", "MERN", "Business", "E-Commerce", "Mobile", "AI"];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects = selectedCategory === "All" ? projects : projects.filter((project) => project.category === selectedCategory);

  return (
    <section id="projects" className="px-6 py-24 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="mb-16 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400">Projects</p>
          <h2 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">Selected work built for product clarity, performance, and client impact.</h2>
          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-400">Each project reflects a practical focus on business goals, polished execution, and a premium experience that feels intentional from the first interaction.</p>
        </motion.div>

        <div className="mb-12 flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button key={category} onClick={() => setSelectedCategory(category)} className={`rounded-full px-4 py-2 text-sm font-medium transition ${selectedCategory === category ? "bg-cyan-500 text-slate-950" : "border border-white/10 bg-slate-900/70 text-slate-300 hover:border-cyan-400 hover:text-cyan-400"}`}>
              {category}
            </button>
          ))}
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <a href="https://github.com/mandeveloper582-oss" target="_blank" rel="noreferrer" className="rounded-full bg-cyan-500 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-400">
            View More Projects
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;