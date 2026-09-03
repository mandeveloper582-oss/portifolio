import { motion } from "framer-motion";
import { backendSkills, frontendSkills, tools } from "../data/Skills";

function Skills() {
  return (
    <section id="skills" className="relative py-20 sm:py-24">
      <div className="section-shell relative">
        <div className="mb-10 max-w-3xl">
          <span className="section-label">My skills</span>
          <h2 className="mt-5 text-3xl font-bold tracking-[-0.04em] text-white sm:text-4xl lg:text-5xl">
            Modern tools for building standout digital products.
          </h2>
        </div>

        <div className="grid gap-6 xl:grid-cols-2">
          <div className="space-y-4">
            {frontendSkills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={skill.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: index * 0.04 }}
                  whileHover={{ y: -4 }}
                  className="rounded-[1.4rem] border border-white/10 bg-slate-900/60 p-4 shadow-[0_16px_50px_rgba(2,6,23,0.35)]"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3 min-w-0">
                      <div className={`flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 ${skill.color}`}>
                        <Icon />
                      </div>
                      <div className="min-w-0">
                        <p className="truncate text-base font-semibold text-white">{skill.name}</p>
                        <p className="text-xs text-slate-400">Proficiency</p>
                      </div>
                    </div>
                    <span className="text-sm font-semibold text-cyan-300">{skill.level}%</span>
                  </div>
                  <div className="mt-4 h-2.5 overflow-hidden rounded-full bg-white/5">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      className="h-full rounded-full bg-linear-to-r from-violet-500 via-indigo-500 to-cyan-400"
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="space-y-4">
            {backendSkills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={skill.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: index * 0.04 }}
                  whileHover={{ y: -4 }}
                  className="rounded-[1.4rem] border border-white/10 bg-slate-900/60 p-4 shadow-[0_16px_50px_rgba(2,6,23,0.35)]"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3 min-w-0">
                      <div className={`flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 ${skill.color}`}>
                        <Icon />
                      </div>
                      <div className="min-w-0">
                        <p className="truncate text-base font-semibold text-white">{skill.name}</p>
                        <p className="text-xs text-slate-400">Platform</p>
                      </div>
                    </div>
                    <span className="text-sm font-semibold text-cyan-300">{skill.level}%</span>
                  </div>
                  <div className="mt-4 h-2.5 overflow-hidden rounded-full bg-white/5">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      className="h-full rounded-full bg-linear-to-r from-emerald-500 via-cyan-500 to-sky-400"
                    />
                  </div>
                </motion.div>
              );
            })}

            <div className="rounded-[1.4rem] border border-white/10 bg-slate-900/60 p-5 shadow-[0_16px_50px_rgba(2,6,23,0.35)]">
              <div className="mb-5 flex items-center justify-between gap-4">
                <h3 className="text-xl font-semibold text-white">Tools & Platforms</h3>
              </div>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                {tools.map((tool, index) => {
                  const Icon = tool.icon;
                  return (
                    <motion.div
                      key={tool.id}
                      initial={{ opacity: 0, scale: 0.96 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.35, delay: index * 0.04 }}
                      whileHover={{ y: -3 }}
                      className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center"
                    >
                      <div className={`mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 ${tool.color}`}>
                        <Icon />
                      </div>
                      <p className="mt-3 text-xs font-medium text-slate-200">{tool.name}</p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
