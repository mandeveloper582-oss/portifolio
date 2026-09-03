import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";

import { projects } from "../data/Projects";

function ProjectDetails() {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return (
      <section className="flex min-h-screen items-center justify-center px-6 py-24">
        <div className="text-center">
          <h1 className="text-4xl font-semibold text-white">Project not found</h1>
          <p className="mt-4 text-slate-400">The project you are looking for does not exist.</p>
          <Link to="/" className="mt-8 inline-flex rounded-full bg-cyan-500 px-6 py-3 font-semibold text-slate-950">Back Home</Link>
        </div>
      </section>
    );
  }

  return (
    <section className="px-6 py-28 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-6xl rounded-4xl border border-white/10 bg-card p-8 shadow-2xl shadow-black/20">
        <img src={project.image} alt={project.title} loading="eager" decoding="async" className="h-96 w-full rounded-3xl object-cover object-center" />

        <div className="mt-10">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400">{project.category}</p>
          <h1 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">{project.title}</h1>
          <p className="mt-6 text-lg leading-8 text-slate-400">{project.description}</p>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          {project.technologies.map((tech) => (
              <span key={tech} className="rounded-full border border-white/10 bg-glass px-4 py-2 text-sm text-slate-300">{tech}</span>
            ))}
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-white">Highlights</h2>
          <ul className="mt-6 space-y-3 text-slate-400">
            {project.features.map((feature) => (
              <li key={feature} className="flex items-center gap-3"><span className="text-cyan-400">•</span>{feature}</li>
            ))}
          </ul>
        </div>

        <div className="mt-12 flex flex-wrap gap-4">
          <a href={project.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-cyan-500 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-400">
            <FaGithub /> Source Code
          </a>
          <a href={project.demo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 px-6 py-3 font-semibold text-cyan-300 transition hover:bg-cyan-400/10">
            <FaExternalLinkAlt /> Live Demo
          </a>
        </div>
      </div>
    </section>
  );
}

export default ProjectDetails;