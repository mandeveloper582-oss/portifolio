import { useState } from "react";
import { Link } from "react-router-dom";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { FaGithub, FaLinkedin, FaTelegramPlane } from "react-icons/fa";

import ThemeToggle from "./ThemeToggle";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "#home" },
    { name: "About", path: "#about" },
    { name: "Services", path: "#services" },
    { name: "Skills", path: "#skills" },
    { name: "Projects", path: "#projects" },
    { name: "Contact", path: "#contact" },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
        <Link to="/" className="text-xl font-semibold tracking-[0.2em] text-white">
          LENCHO<span className="text-cyan-400">.</span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map((item) => (
            <a key={item.name} href={item.path} className="text-sm text-slate-300 transition hover:text-cyan-400">
              {item.name}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a href="https://github.com/mandeveloper582-oss" target="_blank" rel="noreferrer" className="rounded-full border border-white/10 p-2.5 text-slate-300 transition hover:border-cyan-400 hover:text-cyan-400">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/lencho-ahmed-4a850136b" target="_blank" rel="noreferrer" className="rounded-full border border-white/10 p-2.5 text-slate-300 transition hover:border-cyan-400 hover:text-cyan-400">
            <FaLinkedin />
          </a>
          <a href="https://t.me/lench34" target="_blank" rel="noreferrer" className="rounded-full border border-white/10 p-2.5 text-slate-300 transition hover:border-cyan-400 hover:text-cyan-400">
            <FaTelegramPlane />
          </a>
          <ThemeToggle />
          <a href="#contact" className="rounded-full bg-cyan-500 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400">
            Hire Me
          </a>
        </div>

        <div className="flex items-center gap-3 lg:hidden">
          <ThemeToggle />
          <button aria-label="Toggle menu" className="rounded-full border border-white/10 p-2.5 text-slate-200" onClick={() => setMenuOpen((prev) => !prev)}>
            {menuOpen ? <HiX className="text-xl" /> : <HiMenuAlt3 className="text-xl" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="border-t border-white/10 bg-slate-950/95 lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col px-6 py-4">
            {navLinks.map((item) => (
              <a key={item.name} href={item.path} onClick={() => setMenuOpen(false)} className="border-b border-white/10 py-3 text-sm text-slate-300">
                {item.name}
              </a>
            ))}
            <Link to="/resume" onClick={() => setMenuOpen(false)} className="mt-3 rounded-full bg-cyan-500 px-4 py-2 text-center text-sm font-semibold text-slate-950">
              View Resume
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;