import { FaMoon, FaSun } from "react-icons/fa";

import { useTheme } from "../context/useTheme";

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme} className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-glass text-slate-200 transition hover:border-cyan-400 hover:text-cyan-400" aria-label="Toggle theme">
      {theme === "dark" ? <FaSun /> : <FaMoon />}
    </button>
  );
}

export default ThemeToggle;