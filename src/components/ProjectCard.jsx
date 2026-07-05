import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

function ProjectCard({ project }) {
  return (
    <motion.article whileHover={{ y: -8, scale: 1.01 }} transition={{ duration: 0.25 }} className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-slate-900/70 shadow-lg shadow-black/20">
      <div className="overflow-hidden">
        <img src={project.image} alt={project.title} loading="lazy" decoding="async" className="h-60 w-full object-cover object-center transition duration-500 hover:scale-105" />
      </div>

      <div className="p-7">
        <span className="inline-flex rounded-full bg-cyan-400/10 px-3 py-1 text-sm font-medium text-cyan-300">{project.category}</span>
        <h3 className="mt-5 text-2xl font-semibold text-white">{project.title}</h3>
        <p className="mt-4 text-base leading-7 text-slate-400">{project.description}</p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span key={tech} className="rounded-full border border-white/10 bg-slate-800/80 px-3 py-1 text-sm text-slate-300">{tech}</span>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link to={`/projects/${project.slug}`} className="rounded-full bg-cyan-500 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400">View Details</Link>
          <a href={project.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-400">
            <FaGithub /> GitHub
          </a>
          <a href={project.demo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 px-4 py-2 text-sm font-semibold text-cyan-300 transition hover:bg-cyan-400/10">
            <FaExternalLinkAlt /> Live Demo
          </a>
        </div>
      </div>
    </motion.article>
  );
}

export default ProjectCard;