import { FaLaptopCode, FaBriefcase, FaUserGraduate } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeLeft, fadeUp } from "../utils/Animation";
import SectionHeading from "./ui/SectionHeading";
import GlassCard from "./ui/GlassCard";

function About() {
  const pillars = [
    {
      title: "Design & Build",
      description: "Product-led interfaces with clean structure, fast interactions, and premium polish.",
      icon: <FaLaptopCode className="text-3xl text-cyan-400" />,
    },
    {
      title: "Business Growth",
      description: "Web solutions designed to build trust, qualify leads, and make every interaction count.",
      icon: <FaBriefcase className="text-3xl text-purple-400" />,
    },
    {
      title: "Continuous Learning",
      description: "A practice of improving systems, staying current on modern tools, and shipping better products.",
      icon: <FaUserGraduate className="text-3xl text-blue-400" />,
    },
  ];

  return (
    <section id="about" className="relative px-6 py-24 sm:px-8 lg:px-10">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-36 bg-linear-to-b from-purple-500/10 to-transparent" />
      <div className="mx-auto max-w-7xl relative">
        <SectionHeading
          label="About"
          title="Professional product development for growth-minded teams."
          description="I partner with ambitious founders and brands to deliver elegant web applications, scalable experiences, and modern digital products that feel premium and work reliably."
        />

        <div className="mt-12 grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <motion.div variants={fadeLeft} initial="hidden" whileInView="show" viewport={{ once: true }} className="space-y-6">
            <GlassCard>
              <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">Mission</p>
              <h3 className="mt-4 text-3xl font-semibold text-white">Create modern digital products that feel natural, confident, and easy to use.</h3>
              <p className="mt-4 text-slate-400 leading-8">I translate your product goals into polished interfaces, fast delivery, and user experiences that reflect the value of your brand.</p>
            </GlassCard>

            <GlassCard>
              <p className="text-sm uppercase tracking-[0.35em] text-sky-300">Vision</p>
              <h3 className="mt-4 text-3xl font-semibold text-white">Build web experiences that help growing businesses stand out and scale with clarity.</h3>
              <p className="mt-4 text-slate-400 leading-8">My work is centered on strong UX, clean layouts, and technology choices that keep product quality high over time.</p>
            </GlassCard>
          </motion.div>

          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid gap-6">
            {pillars.map((item) => (
              <GlassCard key={item.title} className="border-white/10">
                <div className="flex items-start gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-glass text-white shadow-lg shadow-black/20">{item.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                    <p className="mt-3 text-slate-400 leading-7">{item.description}</p>
                  </div>
                </div>
              </GlassCard>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;
