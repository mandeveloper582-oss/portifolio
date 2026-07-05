import { motion } from "framer-motion";

import { backendSkills, frontendSkills, tools } from "../data/Skills";

function Skills() {
  return (
    <section id="skills" className="px-6 py-24 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-16 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400">Skills</p>
          <h2 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">A modern toolkit for fast product delivery.</h2>
          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-400">I use a carefully chosen stack to build resilient interfaces, APIs, and polished digital products from concept to launch.</p>
        </motion.div>

        <div className="mb-16 space-y-8">
          <div>
            <h3 className="mb-6 text-2xl font-semibold text-white">Frontend</h3>
            <div className="grid gap-6 md:grid-cols-2">
              {frontendSkills.map((skill) => {
                const Icon = skill.icon;
                return (
                  <motion.div key={skill.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} whileHover={{ y: -6, scale: 1.01 }} className="rounded-3xl border border-white/10 bg-slate-900/70 p-6 shadow-lg shadow-black/20">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className={`text-3xl ${skill.color}`}>
                          <Icon />
                        </div>
                        <h4 className="text-lg font-semibold text-white">{skill.name}</h4>
                      </div>
                      <span className="text-sm font-semibold text-cyan-400">{skill.level}%</span>
                    </div>
                    <div className="mt-5 h-2.5 overflow-hidden rounded-full bg-slate-800">
                      <motion.div initial={{ width: 0 }} whileInView={{ width: `${skill.level}%` }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="h-full rounded-full bg-linear-to-r from-cyan-500 to-blue-500" />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          <div>
            <h3 className="mb-6 text-2xl font-semibold text-white">Backend & Data</h3>
            <div className="grid gap-6 md:grid-cols-2">
              {backendSkills.map((skill) => {
                const Icon = skill.icon;
                return (
                  <motion.div key={skill.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} whileHover={{ y: -6, scale: 1.01 }} className="rounded-3xl border border-white/10 bg-slate-900/70 p-6 shadow-lg shadow-black/20">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className={`text-3xl ${skill.color}`}>
                          <Icon />
                        </div>
                        <h4 className="text-lg font-semibold text-white">{skill.name}</h4>
                      </div>
                      <span className="text-sm font-semibold text-cyan-400">{skill.level}%</span>
                    </div>
                    <div className="mt-5 h-2.5 overflow-hidden rounded-full bg-slate-800">
                      <motion.div initial={{ width: 0 }} whileInView={{ width: `${skill.level}%` }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="h-full rounded-full bg-linear-to-r from-emerald-500 to-green-500" />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        <div>
          <h3 className="mb-6 text-2xl font-semibold text-white">Tools & Platforms</h3>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {tools.map((tool) => {
              const Icon = tool.icon;
              return (
                <motion.div key={tool.id} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.3 }} whileHover={{ y: -6, scale: 1.01 }} className="rounded-2xl border border-white/10 bg-slate-900/70 p-5 text-center shadow-lg shadow-black/20">
                  <div className={`flex justify-center text-3xl ${tool.color}`}><Icon /></div>
                  <h4 className="mt-4 text-sm font-semibold text-white">{tool.name}</h4>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;