import { FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "../context/useTheme";

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
      title={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-(--border) bg-(--panel-soft) text-(--text-primary) shadow-[0_10px_25px_rgba(14,165,233,0.12)] transition duration-200 hover:-translate-y-0.5 hover:border-cyan-400/40 hover:text-cyan-400"
    >
      {theme === "dark" ? <FaSun className="text-base" /> : <FaMoon className="text-base" />}
    </button>
  );
}

export default ThemeToggle;