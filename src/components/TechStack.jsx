import { FaCss3Alt, FaGitAlt, FaGithub, FaHtml5, FaNodeJs, FaReact } from "react-icons/fa";
import { SiExpress, SiFirebase, SiJavascript, SiMongodb, SiNextdotjs, SiTailwindcss } from "react-icons/si";

function TechStack() {
  const technologies = [
    { id: 1, name: "React", icon: <FaReact />, color: "text-cyan-400" },
    { id: 2, name: "Next.js", icon: <SiNextdotjs />, color: "text-white" },
    { id: 3, name: "JavaScript", icon: <SiJavascript />, color: "text-yellow-400" },
    { id: 4, name: "HTML5", icon: <FaHtml5 />, color: "text-orange-500" },
    { id: 5, name: "CSS3", icon: <FaCss3Alt />, color: "text-blue-500" },
    { id: 6, name: "Tailwind CSS", icon: <SiTailwindcss />, color: "text-cyan-500" },
    { id: 7, name: "Node.js", icon: <FaNodeJs />, color: "text-green-500" },
    { id: 8, name: "Express", icon: <SiExpress />, color: "text-gray-300" },
    { id: 9, name: "MongoDB", icon: <SiMongodb />, color: "text-green-600" },
    { id: 10, name: "Firebase", icon: <SiFirebase />, color: "text-yellow-500" },
    { id: 11, name: "Git", icon: <FaGitAlt />, color: "text-orange-600" },
    { id: 12, name: "GitHub", icon: <FaGithub />, color: "text-white" },
  ];

  return (
    <section className="mt-24 rounded-4xl border border-white/10 bg-card p-8 shadow-2xl shadow-black/20 sm:p-10">
      <div className="mb-10 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400">Technology Stack</p>
        <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">Modern tools for high-performance product development.</h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-400">I use a streamlined stack that balances speed, maintainability, and professional polish for your product.</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {technologies.map((tech) => (
          <div key={tech.id} className="group rounded-2xl border border-white/10 bg-card p-5 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/50">
            <div className={`flex justify-center text-4xl ${tech.color} transition duration-300 group-hover:scale-110`}>{tech.icon}</div>
            <h3 className="mt-4 text-center text-base font-semibold text-white">{tech.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TechStack;