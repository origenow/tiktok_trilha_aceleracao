"use client";
import { useRef, useEffect } from "react";

export function ModaHandwriting({
  color = "#033624",
  strokeWidth = 5,
}: {
  color?: string;
  strokeWidth?: number;
}) {
  const strokeRef = useRef<SVGTextElement>(null);
  const fillRef = useRef<SVGTextElement>(null);

  useEffect(() => {
    const stroke = strokeRef.current;
    const fill = fillRef.current;
    if (!stroke || !fill) return;

    // Set initial hidden state via JS (more reliable than React style prop)
    stroke.style.strokeDasharray = "4000";
    stroke.style.strokeDashoffset = "4000";
    stroke.style.transition = "none";
    fill.style.opacity = "0";
    fill.style.transition = "none";

    // Force reflow so browser registers the initial state
    void stroke.getBoundingClientRect();

    // Delay start slightly so parent fade-in (0.8s delay) has begun
    const startTimer = setTimeout(() => {
      const s = strokeRef.current;
      const f = fillRef.current;
      if (!s || !f) return;

      s.style.transition = "stroke-dashoffset 2.4s cubic-bezier(0.4, 0, 0.2, 1)";
      s.style.strokeDashoffset = "0";

      const fillTimer = setTimeout(() => {
        f.style.transition = "opacity 0.25s ease";
        f.style.opacity = "1";
      }, 1000);

      return () => clearTimeout(fillTimer);
    }, 950);

    return () => clearTimeout(startTimer);
  }, []);

  return (
    <div className="w-full h-full cursor-default">
      <svg
        viewBox="0 0 260 90"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
        aria-label="Moda"
        overflow="visible"
      >
        <text
          ref={strokeRef}
          x="5"
          y="76"
          fontFamily="'Dancing Script', cursive"
          fontSize="80"
          fontWeight="700"
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          Moda
        </text>
        <text
          ref={fillRef}
          x="5"
          y="76"
          fontFamily="'Dancing Script', cursive"
          fontSize="80"
          fontWeight="700"
          fill={color}
          stroke="none"
        >
          Moda
        </text>
      </svg>
    </div>
  );
}
