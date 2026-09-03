import { FaAward, FaCode, FaLaptopCode, FaUsers } from "react-icons/fa";
import { motion } from "framer-motion";

function HeroStats() {
  const stats = [
    {
      id: 1,
      icon: <FaCode className="text-2xl" />,
      number: "20+",
      title: "Projects Completed",
      color: "text-cyan-300",
    },
    {
      id: 2,
      icon: <FaUsers className="text-2xl" />,
      number: "10+",
      title: "Happy Clients",
      color: "text-violet-300",
    },
    {
      id: 3,
      icon: <FaLaptopCode className="text-2xl" />,
      number: "2+",
      title: "Years Experience",
      color: "text-emerald-300",
    },
    {
      id: 4,
      icon: <FaAward className="text-2xl" />,
      number: "100%",
      title: "Client Satisfaction",
      color: "text-amber-300",
    },
  ];

  return (
    <section className="mx-auto max-w-5xl">
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            whileHover={{ y: -4, scale: 1.01 }}
            className="rounded-[1.5rem] border border-white/10 bg-slate-900/60 p-5 shadow-[0_24px_70px_rgba(2,6,23,0.35)] backdrop-blur-xl"
          >
            <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 ${item.color}`}>
              {item.icon}
            </div>
            <h3 className="text-3xl font-bold text-white">{item.number}</h3>
            <p className="mt-2 text-sm text-slate-400">{item.title}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default HeroStats;