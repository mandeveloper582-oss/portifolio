import { motion } from "framer-motion";

function TechBadge({ children, className = "", style = {} }) {
  return (
    <motion.div whileHover={{ scale: 1.08 }} className={`inline-flex items-center justify-center rounded-full bg-glass p-2 text-cyan-300 ${className}`} style={style}>
      {children}
    </motion.div>
  );
}

export default TechBadge;
