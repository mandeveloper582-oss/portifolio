import { motion } from "framer-motion";
import { FaBlog, FaCloudUploadAlt, FaLaptopCode, FaMobileAlt, FaReact, FaServer, FaShoppingCart, FaUserTie } from "react-icons/fa";

const services = [
  { title: "MERN Stack Development", description: "Full-stack applications built with React, Node.js, Express, and MongoDB for scale, speed, and maintainability.", icon: <FaLaptopCode /> },
  { title: "React Development", description: "Modern, interactive interfaces with clean architecture and premium user experience for startups and product teams.", icon: <FaReact /> },
  { title: "Responsive Website Development", description: "Beautiful, mobile-first websites that feel effortless on every screen and improve engagement across devices.", icon: <FaMobileAlt /> },
  { title: "Business Websites", description: "Professional websites designed to build trust, introduce your brand, and turn visitors into leads.", icon: <FaUserTie /> },
  { title: "E-Commerce Websites", description: "Conversion-focused storefronts with strong UX, clear product flows, and a polished shopping experience.", icon: <FaShoppingCart /> },
  { title: "Portfolio & Blog Systems", description: "Elegant portfolio sites and content systems that help your work or story stand out online.", icon: <FaBlog /> },
  { title: "API Development", description: "Reliable REST APIs and backend services that connect your frontend, data, and business logic efficiently.", icon: <FaServer /> },
  { title: "Deployment & Maintenance", description: "Production deployment, performance monitoring, updates, and long-term support so your product stays healthy.", icon: <FaCloudUploadAlt /> },
];

function Services() {
  return (
    <section id="services" className="px-6 py-24 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400">Services</p>
          <h2 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">Digital solutions built for growth, trust, and long-term impact.</h2>
          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-400">I help businesses and founders launch polished web products that communicate value clearly, look premium, and support real commercial goals.</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => (
            <motion.article key={service.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.35, delay: index * 0.05 }} whileHover={{ y: -8, scale: 1.01 }} className="rounded-[1.75rem] border border-white/10 bg-slate-900/70 p-8 shadow-lg shadow-black/20">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-400/10 text-2xl text-cyan-400">{service.icon}</div>
              <h3 className="mt-6 text-2xl font-semibold text-white">{service.title}</h3>
              <p className="mt-4 text-base leading-7 text-slate-400">{service.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;