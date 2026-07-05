import { motion, useScroll } from "framer-motion";

function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return <motion.div className="fixed inset-x-0 top-0 z-[9999] h-1 origin-left bg-cyan-400" style={{ scaleX: scrollYProgress }} />;
}

export default ScrollProgress;