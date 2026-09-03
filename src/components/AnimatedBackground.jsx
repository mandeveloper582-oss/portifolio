import { motion } from "framer-motion";

function AnimatedBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" style={{ background: 'rgba(5,8,22,0.7)' }}>
      <motion.div animate={{ x: [0, 160, 0], y: [0, 120, 0] }} transition={{ repeat: Infinity, duration: 18, ease: "easeInOut" }} className="absolute left-[-5rem] top-[-2rem] h-80 w-80 rounded-full bg-cyan-500/20 blur-3xl" />
      <motion.div animate={{ x: [120, -140, 120], y: [50, 180, 50] }} transition={{ repeat: Infinity, duration: 22, ease: "easeInOut" }} className="absolute right-[-4rem] top-40 h-96 w-96 rounded-full bg-indigo-500/20 blur-3xl" />
      <motion.div animate={{ y: [0, -120, 0] }} transition={{ repeat: Infinity, duration: 15, ease: "easeInOut" }} className="absolute bottom-[-3rem] left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-violet-500/20 blur-3xl" />
    </div>
  );
}

export default AnimatedBackground;