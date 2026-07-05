import { useState } from "react";
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
        "I mainly work with React, Next.js, JavaScript, Tailwind CSS, Node.js, Express.js, MongoDB, Firebase, Github.render,netlify and Vercel.",
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
        "Simply contact me through the contact form, email or LinkedIn and telegram. We'll discuss your project requirements and timeline.",
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
    <section
      id="faq"
      className="py-24 bg-[#08111F]"
    >
      <div className="max-w-4xl mx-auto px-6">

        <div className="text-center mb-16">

          <span className="text-blue-500 uppercase tracking-widest font-semibold">
            FAQ
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            Frequently Asked Questions
          </h2>

          <p className="text-gray-400 mt-5">
            Here are answers to some common questions clients ask before starting a project.
          </p>

        </div>

        <div className="space-y-5">

          {faqs.map((faq) => (

            <div
              key={faq.id}
              className="bg-[#111827] border border-gray-800 rounded-2xl overflow-hidden"
            >

              <button
                onClick={() => toggleFAQ(faq.id)}
                className="w-full flex justify-between items-center p-6 text-left"
              >

                <h3 className="text-lg md:text-xl font-semibold">
                  {faq.question}
                </h3>

                {active === faq.id ? (
                  <FaMinus className="text-blue-500" />
                ) : (
                  <FaPlus className="text-blue-500" />
                )}

              </button>

              {active === faq.id && (

                <div className="px-6 pb-6">

                  <p className="text-gray-400 leading-8">
                    {faq.answer}
                  </p>

                </div>

              )}

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default FAQ;