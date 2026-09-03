import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

function ProjectCard({ project }) {
  return (
    <motion.article
      whileHover={{ y: -10, scale: 1.01 }}
      transition={{ duration: 0.22 }}
      className="group overflow-hidden rounded-[1.6rem] border border-white/10 bg-slate-900/60 shadow-[0_24px_80px_rgba(2,6,23,0.35)]"
    >
      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          decoding="async"
          className="h-64 w-full object-cover object-center transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-linear-to-t from-slate-950/80 via-transparent to-transparent" />
        <span className="absolute left-4 top-4 rounded-full border border-white/10 bg-slate-950/60 px-2.5 py-1.5 text-[0.6rem] font-semibold uppercase tracking-[0.22em] text-cyan-300">
          {project.category}
        </span>
      </div>

      <div className="flex h-full flex-col gap-5 p-5">
        <div>
          <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
          <p className="mt-3 text-sm leading-7 text-slate-400">{project.description}</p>
        </div>

        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span key={tech} className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-slate-300">
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-auto flex flex-wrap gap-3">
          <a href={project.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-2.5 text-sm font-semibold text-slate-100 transition hover:border-cyan-400/40 hover:text-cyan-300">
            <FaGithub /> GitHub
          </a>
          <a href={project.demo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-linear-to-r from-violet-500 to-cyan-400 px-3.5 py-2.5 text-sm font-semibold text-slate-950 transition hover:brightness-110">
            <FaExternalLinkAlt /> Live Demo
          </a>
        </div>
      </div>
    </motion.article>
  );
}

export default ProjectCard;
