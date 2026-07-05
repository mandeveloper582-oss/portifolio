import { FaBriefcase, FaCode, FaDownload, FaGraduationCap, FaLaptopCode } from "react-icons/fa";

function Resume() {
  const skills = ["React", "Next.js", "Tailwind CSS", "JavaScript", "TypeScript", "Node.js", "Express.js", "MongoDB", "Firebase", "Git", "GitHub", "REST API", "React Native"];

  return (
    <section className="px-6 py-28 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-6xl rounded-4xl border border-white/10 bg-slate-900/70 p-8 shadow-2xl shadow-black/20 sm:p-10">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400">Resume</p>
          <h1 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">My Resume</h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-400">A concise snapshot of my experience building modern web products and scalable developer workflows.</p>
          <a href="/Resume.pdf" download className="mt-8 inline-flex items-center gap-3 rounded-full bg-cyan-500 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-400">
            <FaDownload /> Download Resume
          </a>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-slate-800/70 p-8">
            <div className="flex items-center gap-3 text-cyan-400"><FaGraduationCap className="text-2xl" /><h2 className="text-2xl font-semibold text-white">Education</h2></div>
            <div className="mt-8 space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-white">BSc Computer Science</h3>
                <p className="mt-2 text-slate-400">Dire Dawa University</p>
                <p className="mt-1 text-sm text-slate-500">2025 – Present</p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-slate-800/70 p-8">
            <div className="flex items-center gap-3 text-emerald-400"><FaLaptopCode className="text-2xl" /><h2 className="text-2xl font-semibold text-white">Experience</h2></div>
            <div className="mt-8 space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-white">MERN Stack Developer</h3>
                <p className="mt-2 text-slate-400">Freelance & Personal Projects</p>
                <p className="mt-1 text-sm text-slate-500">2025 – Present</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">Frontend Developer</h3>
                <p className="mt-2 text-slate-400">React, Tailwind CSS, UI Systems</p>
                <p className="mt-1 text-sm text-slate-500">2025 – Present</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-semibold text-white">Professional Skills</h2>
          <div className="mt-6 flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span key={skill} className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-300">{skill}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;