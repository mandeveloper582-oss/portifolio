import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";
import { testimonials } from "../data/Testimonials";

function Testimonials() {
  return (
    <section id="testimonials" className="relative py-20 sm:py-24">
      <div className="section-shell relative">
        <div className="mb-10 max-w-3xl">
          <span className="section-label">What clients say</span>
          <h2 className="mt-5 text-3xl font-bold tracking-[-0.04em] text-white sm:text-4xl lg:text-5xl">
            Trusted by teams that value clarity and execution.
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {testimonials.map((client, index) => (
            <motion.article
              key={client.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.08 }}
              className="rounded-[1.5rem] border border-white/10 bg-slate-900/60 p-5 shadow-[0_16px_50px_rgba(2,6,23,0.35)]"
            >
              <div className="flex items-center gap-4">
                <img src={client.image} alt={client.name} loading="lazy" className="h-14 w-14 rounded-full border border-cyan-400/20 object-cover object-center" />
                <div>
                  <h3 className="text-lg font-semibold text-white">{client.name}</h3>
                  <p className="text-sm text-slate-400">{client.position}</p>
                </div>
              </div>

              <div className="mt-5 flex gap-1 text-amber-400">
                {[...Array(client.rating)].map((_, starIndex) => (
                  <FaStar key={starIndex} />
                ))}
              </div>

              <p className="mt-5 text-sm leading-7 text-slate-300">“{client.review}”</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
