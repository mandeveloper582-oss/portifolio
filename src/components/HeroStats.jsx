import { FaAward, FaCode, FaLaptopCode, FaUsers } from "react-icons/fa";
import { motion } from "framer-motion";

function HeroStats() {
  const stats = [
    {
      id: 1,
      icon: <FaCode />,
      number: "5+",
      title: "Projects shipped",
      color: "text-cyan-400",
    },
    {
      id: 2,
      icon: <FaLaptopCode />,
      number: "3+",
      title: "Years building",
      color: "text-emerald-400",
    },
    {
      id: 3,
      icon: <FaAward />,
      number: "100%",
      title: "Client focus",
      color: "text-violet-400",
    },
    {
      id: 4,
      icon: <FaUsers />,
      number: "24/7",
      title: "Reliable support",
      color: "text-amber-400",
    },
  ];

  return (
    <section className="mt-16">
      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((item) => (
          <motion.div
            key={item.id}
            whileHover={{ scale: 1.04, y: -6 }}
            transition={{ duration: 0.25 }}
            className="rounded-2xl border border-white/10 bg-slate-900/70 p-6 text-center shadow-lg shadow-black/20"
          >
            <div className={`mb-4 flex justify-center text-3xl ${item.color}`}>{item.icon}</div>
            <h3 className="text-3xl font-semibold text-white">{item.number}</h3>
            <p className="mt-2 text-sm text-slate-400">{item.title}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default HeroStats;