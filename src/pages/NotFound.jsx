import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaHome } from "react-icons/fa";

function NotFound() {
  return (
    <section className="min-h-screen bg-[#050816] flex items-center justify-center px-6">

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        className="text-center"
      >

        <h1 className="text-8xl md:text-9xl font-black text-blue-500">
          404
        </h1>

        <h2 className="text-4xl font-bold mt-6">
          Page Not Found
        </h2>

        <p className="text-gray-400 mt-6 max-w-xl mx-auto leading-8">
          Sorry, the page you are looking for doesn't exist
          or has been moved.
        </p>

        <Link
          to="/"
          className="inline-flex items-center gap-3 mt-10 bg-blue-600 hover:bg-blue-700 transition px-8 py-4 rounded-xl font-semibold"
        >
          <FaHome />
          Back Home
        </Link>

      </motion.div>

    </section>
  );
}

export default NotFound;