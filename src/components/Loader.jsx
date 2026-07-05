import { motion } from "framer-motion";

function Loader() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-slate-950">
      <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: "linear" }} className="h-16 w-16 rounded-full border-4 border-cyan-400/30 border-t-cyan-400" />
    </div>
  );
}

export default Loader;