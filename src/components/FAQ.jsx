import { useState } from "react";
import { motion } from "framer-motion";
import { FaPlus, FaMinus } from "react-icons/fa";

function FAQ() {
  const faqs = [
    {
      id: 1,
      question: "What services do you provide?",
      answer:
        "I provide Full Stack MERN Development, Business Websites, Portfolio Websites, Blog Systems, E-Commerce Websites, React Frontend Development, React Native Mobile Apps, API Development, Deployment and Maintenance.",
    },
    {
      id: 2,
      question: "Do you build responsive websites?",
      answer:
        "Yes. Every website I build is fully responsive and optimized for mobile, tablet, laptop and desktop devices.",
    },
    {
      id: 3,
      question: "Which technologies do you use?",
      answer:
        "I mainly work with React, Next.js, JavaScript, Tailwind CSS, Node.js, Express.js, MongoDB, Firebase, GitHub, Netlify, and Vercel.",
    },
    {
      id: 4,
      question: "Can you redesign an existing website?",
      answer:
        "Yes. I can redesign outdated websites with a modern UI/UX, improve performance and optimize SEO.",
    },
    {
      id: 5,
      question: "How can we work together?",
      answer:
        "Simply contact me through the contact form, email, LinkedIn, or Telegram. We'll discuss your project requirements and timeline.",
    },
    {
      id: 6,
      question: "Do you provide website maintenance?",
      answer:
        "Yes. I provide bug fixes, updates, security improvements, deployment and long-term maintenance.",
    },
  ];

  const [active, setActive] = useState(null);

  const toggleFAQ = (id) => {
    setActive(active === id ? null : id);
  };

  return (
    <section id="faq" className="relative overflow-hidden px-6 py-24 sm:px-8 lg:px-10">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-linear-to-b from-violet-500/10 to-transparent" />
      <div className="mx-auto max-w-5xl relative">
        <div className="mb-16 text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400">FAQ</span>
          <h2 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">Frequently asked questions about working together.</h2>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-slate-400">Answers to the most common questions clients ask before starting a website or web application project.</p>
        </div>

        <div className="space-y-5">
          {faqs.map((faq) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: faq.id * 0.05 }}
              className="rounded-4xl border border-white/10 bg-card shadow-[0_30px_90px_rgba(14,165,233,0.08)] backdrop-blur-xl"
            >
              <button
                onClick={() => toggleFAQ(faq.id)}
                className="flex w-full items-center justify-between gap-4 p-6 text-left"
              >
                <span className="text-lg font-semibold text-white">{faq.question}</span>
                {active === faq.id ? <FaMinus className="text-cyan-400" /> : <FaPlus className="text-cyan-400" />}
              </button>

              {active === faq.id && (
                <div className="border-t border-white/10 px-6 pb-6 pt-3">
                  <p className="text-slate-400 leading-8">{faq.answer}</p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
