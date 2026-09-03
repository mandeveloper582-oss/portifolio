import { useState } from "react";
import { FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt, FaPaperPlane, FaPhoneAlt, FaTelegram, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

import { sendEmail } from "../utils/Email";

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState("idle");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus("sending");

    try {
      await sendEmail({
        from_name: formData.name,
        reply_to: formData.email,
        subject: formData.subject,
        message: formData.message,
      });
      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  const contactItems = [
    { icon: <FaEnvelope />, title: "Email", value: "lenchoa391@gmail.com", accent: "text-cyan-400" },
    { icon: <FaPhoneAlt />, title: "Phone", value: "+251 921399695", accent: "text-emerald-400" },
    { icon: <FaMapMarkerAlt />, title: "Location", value: "Dire Dawa, Ethiopia", accent: "text-violet-400" },
  ];

  return (
    <section id="contact" className="relative px-6 py-24 sm:px-8 lg:px-10">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-linear-to-b from-sky-500/10 to-transparent" />
      <div className="mx-auto max-w-7xl relative">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="mb-16 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400">Contact</p>
          <h2 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">Let’s build something your audience will remember.</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-400">Whether you need a polished launch site, a scalable app, or a modern product experience, I’m ready to help you move fast and ship with confidence.</p>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="space-y-6">
            {contactItems.map((item) => (
              <div key={item.title} className="rounded-4xl border border-white/10 bg-card p-7 shadow-[0_30px_80px_rgba(14,165,233,0.08)] backdrop-blur-xl">
                <div className="flex items-center gap-4">
                  <div className={`flex h-14 w-14 items-center justify-center rounded-3xl bg-glass text-xl ${item.accent}`}>{item.icon}</div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                    <p className="text-slate-400">{item.value}</p>
                  </div>
                </div>
              </div>
            ))}

            <div className="rounded-4xl border border-white/10 bg-card p-7 shadow-[0_30px_80px_rgba(14,165,233,0.08)] backdrop-blur-xl">
              <h3 className="text-xl font-semibold text-white">Follow Me</h3>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="https://github.com/mandeveloper582-oss" target="_blank" rel="noopener noreferrer" aria-label="GitHub — Lencho Ahmed" className="inline-flex h-12 w-12 items-center justify-center rounded-3xl border border-white/10 bg-glass text-slate-200 transition hover:border-cyan-400/30 hover:text-cyan-400"> <FaGithub /> </a>
                <a href="https://www.linkedin.com/in/lencho-ahmed-4a850136b" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn — Lencho Ahmed" className="inline-flex h-12 w-12 items-center justify-center rounded-3xl border border-white/10 bg-glass text-slate-200 transition hover:border-cyan-400/30 hover:text-cyan-400"> <FaLinkedin /> </a>
                <a href="https://t.me/lench34" target="_blank" rel="noopener noreferrer" aria-label="Telegram — Lencho Ahmed" className="inline-flex h-12 w-12 items-center justify-center rounded-3xl border border-white/10 bg-glass text-slate-200 transition hover:border-cyan-400/30 hover:text-cyan-400"> <FaTelegram /> </a>
                <a href="https://wa.me/251921399695" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp — Lencho Ahmed" className="inline-flex h-12 w-12 items-center justify-center rounded-3xl border border-white/10 bg-glass text-slate-200 transition hover:border-cyan-400/30 hover:text-cyan-400"> <FaWhatsapp /> </a>
              </div>
            </div>
          </div>

          <motion.form onSubmit={handleSubmit} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }} className="rounded-4xl border border-white/10 bg-card p-8 shadow-[0_30px_80px_rgba(14,165,233,0.08)] backdrop-blur-xl">
            <div className="grid gap-6 md:grid-cols-2">
              {[
                { name: "name", label: "Full Name", type: "text" },
                { name: "email", label: "Email Address", type: "email" },
              ].map((field) => (
                <label key={field.name} className="relative block">
                  <input
                    type={field.type}
                    name={field.name}
                    value={formData[field.name]}
                    onChange={handleChange}
                    required
                    className="peer h-14 w-full rounded-3xl border border-white/10 bg-glass px-4 pt-5 text-slate-100 outline-none transition focus:border-cyan-400"
                  />
                  <span className="absolute left-4 top-4 text-sm text-slate-500 transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-500 peer-focus:-top-3 peer-focus:text-xs peer-focus:text-cyan-400">
                    {field.label}
                  </span>
                </label>
              ))}
            </div>

            <label className="relative mt-6 block">
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="peer h-14 w-full rounded-3xl border border-white/10 bg-glass px-4 pt-5 text-slate-100 outline-none transition focus:border-cyan-400"
              />
              <span className="absolute left-4 top-4 text-sm text-slate-500 transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-500 peer-focus:-top-3 peer-focus:text-xs peer-focus:text-cyan-400">
                Subject
              </span>
            </label>

            <label className="relative mt-6 block">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="6"
                required
                className="peer w-full rounded-3xl border border-white/10 bg-glass px-4 pt-5 text-slate-100 outline-none transition focus:border-cyan-400"
              />
              <span className="absolute left-4 top-4 text-sm text-slate-500 transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-500 peer-focus:-top-3 peer-focus:text-xs peer-focus:text-cyan-400">
                Message
              </span>
            </label>

            <button type="submit" className="mt-6 inline-flex items-center gap-3 rounded-full btn-gradient px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/15 transition hover:-translate-y-1" disabled={status === "sending"}>
              <FaPaperPlane /> {status === "sending" ? "Sending..." : "Send Message"}
            </button>

            {status === "success" && <p className="mt-4 text-emerald-400">Message sent successfully.</p>}
            {status === "error" && <p className="mt-4 text-rose-400">Something went wrong. Please email me directly.</p>}
          </motion.form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
