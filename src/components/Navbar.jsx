import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";

import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { name: "Home", path: "#home" },
  { name: "About", path: "#about" },
  { name: "Services", path: "#services" },
  { name: "Projects", path: "#projects" },
  { name: "Skills", path: "#skills" },
  { name: "Experience", path: "#experience" },
  { name: "Testimonials", path: "#testimonials" },
  { name: "Contact", path: "#contact" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
      const sections = ["home", "about", "services", "projects", "skills", "experience", "testimonials", "contact"];
      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (!element) return;
        const rect = element.getBoundingClientRect();
        if (rect.top <= 140 && rect.bottom > 140) {
          setActiveSection(section);
        }
      });
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const closeOnResize = () => setMenuOpen(false);
    window.addEventListener("resize", closeOnResize);
    return () => window.removeEventListener("resize", closeOnResize);
  }, [menuOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "border-b border-white/10 bg-slate-950/70 shadow-[0_20px_60px_rgba(2,6,23,0.4)] backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <div className="section-shell flex h-20 items-center justify-between gap-4">
        <Link to="/" className="inline-flex items-center gap-3 text-sm font-semibold text-white">
          <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-linear-to-br from-violet-500 via-indigo-500 to-cyan-400 text-base font-bold text-slate-950 shadow-[0_15px_30px_rgba(99,102,241,0.35)]">
            LA
          </span>
          <span className="hidden items-center gap-2 md:flex md:flex-col md:items-start">
            <span className="text-[0.72rem] font-semibold uppercase tracking-[0.26em] text-slate-100">Lencho Ahmed</span>
            <span className="text-[0.58rem] uppercase tracking-[0.34em] text-slate-500">Developer</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary navigation">
          {navLinks.map((item) => {
            const id = item.path.replace("#", "");
            return (
              <a
                key={item.name}
                href={item.path}
                className={`relative text-sm font-medium transition ${
                  activeSection === id ? "text-white" : "text-slate-300 hover:text-white"
                }`}
                aria-current={activeSection === id ? "page" : undefined}
              >
                {item.name}
                <span
                  className={`absolute inset-x-0 -bottom-3 mx-auto h-0.5 rounded-full bg-linear-to-r from-violet-400 to-cyan-400 transition-all duration-300 ${
                    activeSection === id ? "w-8 opacity-100" : "w-0 opacity-0"
                  }`}
                />
              </a>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle />
          <a href="https://t.me/lench34" target="_blank" rel="noreferrer" className="rounded-full btn-gradient px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:shadow-[0_15px_35px_rgba(96,165,250,0.25)]">
            Hire Me
          </a>
        </div>

        <div className="flex items-center gap-3 lg:hidden">
          <ThemeToggle />
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen((prev) => !prev)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-slate-200 transition hover:border-cyan-400/40 hover:text-cyan-300"
          >
            {menuOpen ? <HiX className="text-xl" /> : <HiMenuAlt3 className="text-xl" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14 }}
            transition={{ duration: 0.22 }}
            className="section-shell lg:hidden"
          >
            <div className="mb-4 rounded-[1.5rem] border border-white/10 bg-slate-950/85 p-4 shadow-[0_30px_80px_rgba(2,6,23,0.5)] backdrop-blur-xl">
              <div className="space-y-2">
                {navLinks.map((item) => (
                  <a
                    key={item.name}
                    href={item.path}
                    onClick={() => setMenuOpen(false)}
                    className="block rounded-2xl px-4 py-3 text-sm font-medium text-slate-100 transition hover:bg-white/5"
                  >
                    {item.name}
                  </a>
                ))}
              </div>

              <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 p-3">
                <a href="/Resume.pdf" className="block rounded-full bg-linear-to-r from-violet-500 via-indigo-500 to-cyan-400 px-4 py-3 text-center text-sm font-semibold text-slate-950">
                  View Resume
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;
