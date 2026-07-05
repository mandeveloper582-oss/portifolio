import { useEffect, useState } from "react";

function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return <div className="pointer-events-none fixed z-9998 hidden h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-400/70 bg-cyan-400/20 lg:block" style={{ left: position.x, top: position.y }} />;
}

export default CustomCursor;