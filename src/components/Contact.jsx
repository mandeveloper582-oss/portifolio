import { useState } from "react";
import { FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt, FaPaperPlane, FaPhoneAlt, FaTelegram, FaWhatsapp } from "react-icons/fa";

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

  return (
    <section id="contact" className="px-6 py-24 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400">Contact</p>
          <h2 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">Let’s build something your audience will remember.</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-400">Whether you need a polished launch site, a scalable web app, or a modern product experience, I’m ready to help you move fast and ship with confidence.</p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-6">
            {[
              { icon: <FaEnvelope />, title: "Email", value: "lenchoa391@gmail.com", accent: "text-cyan-400" },
              { icon: <FaPhoneAlt />, title: "Phone", value: "+251 921399695", accent: "text-emerald-400" },
              { icon: <FaMapMarkerAlt />, title: "Location", value: "Dire Dawa, Ethiopia", accent: "text-violet-400" },
            ].map((item) => (
              <div key={item.title} className="rounded-3xl border border-white/10 bg-slate-900/70 p-7 shadow-lg shadow-black/20">
                <div className="flex items-center gap-4">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-800 text-xl ${item.accent}`}>{item.icon}</div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                    <p className="text-slate-400">{item.value}</p>
                  </div>
                </div>
              </div>
            ))}

            <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-7 shadow-lg shadow-black/20">
              <h3 className="text-xl font-semibold text-white">Follow Me</h3>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="https://github.com/mandeveloper582-oss" target="_blank" rel="noreferrer" className="rounded-full border border-white/10 p-3 text-slate-300 transition hover:border-cyan-400 hover:text-cyan-400"><FaGithub /></a>
                <a href="https://www.linkedin.com/in/lencho-ahmed-4a850136b" target="_blank" rel="noreferrer" className="rounded-full border border-white/10 p-3 text-slate-300 transition hover:border-cyan-400 hover:text-cyan-400"><FaLinkedin /></a>
                <a href="https://t.me/lench34" target="_blank" rel="noreferrer" className="rounded-full border border-white/10 p-3 text-slate-300 transition hover:border-cyan-400 hover:text-cyan-400"><FaTelegram /></a>
                <a href="https://wa.me/251921399695" target="_blank" rel="noreferrer" className="rounded-full border border-white/10 p-3 text-slate-300 transition hover:border-cyan-400 hover:text-cyan-400"><FaWhatsapp /></a>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="rounded-4xl border border-white/10 bg-slate-900/70 p-8 shadow-2xl shadow-black/20">
            <div className="grid gap-6 md:grid-cols-2">
              <input name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" className="rounded-2xl border border-white/10 bg-slate-800/80 px-4 py-3 text-slate-200 outline-none ring-0 placeholder:text-slate-500 focus:border-cyan-400" required />
              <input name="email" type="email" value={formData.email} onChange={handleChange} placeholder="Your Email" className="rounded-2xl border border-white/10 bg-slate-800/80 px-4 py-3 text-slate-200 outline-none ring-0 placeholder:text-slate-500 focus:border-cyan-400" required />
            </div>
            <input name="subject" value={formData.subject} onChange={handleChange} placeholder="Subject" className="mt-6 w-full rounded-2xl border border-white/10 bg-slate-800/80 px-4 py-3 text-slate-200 outline-none ring-0 placeholder:text-slate-500 focus:border-cyan-400" required />
            <textarea name="message" value={formData.message} onChange={handleChange} rows="6" placeholder="Write your message..." className="mt-6 w-full rounded-2xl border border-white/10 bg-slate-800/80 px-4 py-3 text-slate-200 outline-none ring-0 placeholder:text-slate-500 focus:border-cyan-400" required />
            <button type="submit" className="mt-6 inline-flex items-center gap-3 rounded-full bg-cyan-500 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-400" disabled={status === "sending"}>
              <FaPaperPlane /> {status === "sending" ? "Sending..." : "Send Message"}
            </button>
            {status === "success" && <p className="mt-4 text-emerald-400">Message sent successfully.</p>}
            {status === "error" && <p className="mt-4 text-rose-400">Something went wrong. Please email me directly.</p>}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;