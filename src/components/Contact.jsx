import { useState } from "react";
import { FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt, FaPaperPlane, FaPhoneAlt, FaTelegram, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

import { sendEmail } from "../utils/Email";

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState("idle");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const nextErrors = {};
    const trimmed = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      subject: formData.subject.trim(),
      message: formData.message.trim(),
    };

    if (!trimmed.name) nextErrors.name = "Name is required.";
    if (!trimmed.email) nextErrors.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed.email)) nextErrors.email = "Please enter a valid email address.";
    if (!trimmed.subject) nextErrors.subject = "Subject is required.";
    if (!trimmed.message) nextErrors.message = "Message is required.";
    if (trimmed.message && trimmed.message.length < 10) nextErrors.message = "Message should be at least 10 characters long.";

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
    if (status !== "idle") setStatus("idle");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!validateForm()) {
      setStatus("error");
      return;
    }

    setStatus("sending");

    try {
      await sendEmail({
        from_name: formData.name.trim(),
        reply_to: formData.email.trim(),
        subject: formData.subject.trim(),
        message: formData.message.trim(),
      });
      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setErrors({});
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

  const renderField = (field, label, type = "text", textarea = false) => (
    <label key={field} className="block">
      <span className="mb-2 block text-sm font-medium text-(--text-primary)">{label}</span>
      {textarea ? (
        <textarea
          name={field}
          rows="6"
          value={formData[field]}
          onChange={handleChange}
          className="w-full rounded-2xl border border-(--border) bg-(--panel-soft) px-4 py-3 text-(--text-primary) placeholder:text-(--text-muted) outline-none transition focus:border-cyan-400/60"
          placeholder={label}
          aria-invalid={Boolean(errors[field])}
          aria-describedby={errors[field] ? `${field}-error` : undefined}
        />
      ) : (
        <input
          type={type}
          name={field}
          value={formData[field]}
          onChange={handleChange}
          className="h-12 w-full rounded-2xl border border-(--border) bg-(--panel-soft) px-4 py-3 text-(--text-primary) placeholder:text-(--text-muted) outline-none transition focus:border-cyan-400/60"
          placeholder={label}
          aria-invalid={Boolean(errors[field])}
          aria-describedby={errors[field] ? `${field}-error` : undefined}
        />
      )}
      {errors[field] && (
        <span id={`${field}-error`} className="mt-2 block text-sm text-rose-500">
          {errors[field]}
        </span>
      )}
    </label>
  );

  return (
    <section id="contact" className="relative px-6 py-24 sm:px-8 lg:px-10">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-linear-to-b from-sky-500/10 to-transparent" />
      <div className="mx-auto max-w-7xl relative">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="mb-16 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400">Contact</p>
          <h2 className="mt-4 text-4xl font-semibold text-(--text-primary) sm:text-5xl">Get In Touch</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-(--text-secondary)">Have a project in mind? Let&apos;s build something great together.</p>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="space-y-6">
            {contactItems.map((item) => (
              <div key={item.title} className="rounded-3xl border border-(--border) bg-(--panel) p-7 shadow-[0_30px_80px_rgba(14,165,233,0.08)] backdrop-blur-xl">
                <div className="flex items-center gap-4">
                  <div className={`flex h-14 w-14 items-center justify-center rounded-3xl bg-(--panel-soft) text-xl ${item.accent}`}>{item.icon}</div>
                  <div>
                    <h3 className="text-lg font-semibold text-(--text-primary)">{item.title}</h3>
                    <p className="text-(--text-secondary)">{item.value}</p>
                  </div>
                </div>
              </div>
            ))}

            <div className="rounded-3xl border border-(--border) bg-(--panel) p-7 shadow-[0_30px_80px_rgba(14,165,233,0.08)] backdrop-blur-xl">
              <h3 className="text-xl font-semibold text-(--text-primary)">Follow Me</h3>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="https://github.com/mandeveloper582-oss" target="_blank" rel="noopener noreferrer" aria-label="GitHub — Lencho Ahmed" className="inline-flex h-12 w-12 items-center justify-center rounded-3xl border border-(--border) bg-(--panel-soft) text-(--text-primary) transition hover:border-cyan-400/30 hover:text-cyan-400"> <FaGithub /> </a>
                <a href="https://www.linkedin.com/in/lencho-ahmed-4a850136b" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn — Lencho Ahmed" className="inline-flex h-12 w-12 items-center justify-center rounded-3xl border border-(--border) bg-(--panel-soft) text-(--text-primary) transition hover:border-cyan-400/30 hover:text-cyan-400"> <FaLinkedin /> </a>
                <a href="https://t.me/lench34" target="_blank" rel="noopener noreferrer" aria-label="Telegram — Lencho Ahmed" className="inline-flex h-12 w-12 items-center justify-center rounded-3xl border border-(--border) bg-(--panel-soft) text-(--text-primary) transition hover:border-cyan-400/30 hover:text-cyan-400"> <FaTelegram /> </a>
                <a href="https://wa.me/251921399695" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp — Lencho Ahmed" className="inline-flex h-12 w-12 items-center justify-center rounded-3xl border border-(--border) bg-(--panel-soft) text-(--text-primary) transition hover:border-cyan-400/30 hover:text-cyan-400"> <FaWhatsapp /> </a>
              </div>
            </div>
          </div>

          <motion.form onSubmit={handleSubmit} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }} className="rounded-[1.75rem] border border-(--border) bg-(--panel) p-8 shadow-[0_30px_80px_rgba(14,165,233,0.08)] backdrop-blur-xl">
            <div className="grid gap-6 md:grid-cols-2">
              {renderField("name", "Full Name")}
              {renderField("email", "Email Address", "email")}
            </div>

            <div className="mt-6">{renderField("subject", "Subject")}</div>
            <div className="mt-6">{renderField("message", "Message", "text", true)}</div>

            <button
              type="submit"
              className="mt-6 inline-flex items-center gap-3 rounded-full btn-gradient px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/15 transition hover:-translate-y-1 disabled:cursor-not-allowed disabled:opacity-70"
              disabled={status === "sending"}
            >
              <FaPaperPlane /> {status === "sending" ? "Sending..." : "Send Message"}
            </button>

            {status === "success" && <p className="mt-4 text-emerald-500">Thank you! Your message has been sent successfully.</p>}
            {status === "error" && <p className="mt-4 text-rose-500">Something went wrong. Please try again or contact me directly by email.</p>}
          </motion.form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
