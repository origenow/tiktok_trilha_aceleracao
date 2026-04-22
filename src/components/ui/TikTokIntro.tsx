"use client";

import { useEffect, useRef, useState } from "react";

/* ── Path data: Official TikTok icon paths for each layer ── */
const PATH_CYAN = "m353.74,368.27v-17.18c-7.95-1.32-15.89-1.75-22.48-1.75-89.56,0-164.54,71.87-164.54,161,0,58.51,28.48,108.53,71.75,138.13-30.15-29.92-48.85-71.79-48.85-119.2,0-88.97,74.75-160.8,164.12-161Zm51.61-201.55v346.7c0,45.42-32.64,74.64-72.34,74.64-13.17,0-25.67-3.08-36.54-8.76,13.79,17.61,35.57,27.74,59.44,27.74,39.69,0,72.34-29.22,72.34-74.68V185.65h62.91c-1.71-6.04-3.12-12.35-4.21-18.93h-81.61Zm144.64,102.26c20.02,20.65,44.99,33.23,70.16,38.95v-15.5c-23.65-1.68-48.38-9.12-70.16-23.45Z";
const PATH_RED = "m549.99,268.97c-19.36-19.91-34.12-47.33-40.12-83.32h-18.7c10.67,38.92,32.64,66.07,58.82,83.32Zm70.16,38.95v65.64c-36.34,0-70.74-6.93-101.05-27.35,35.29,35.29,78.1,46.32,123.95,46.32v-81.18c-7.56-.51-15.27-1.64-22.91-3.43Zm-323.67,271.36c-9.74-12.31-15.54-28.24-15.54-46.94,0-52.47,41.02-80.21,95.71-74.44v-87.88c-7.95-1.32-15.89-1.75-22.52-1.75h-.39v70.66c-54.69-5.73-95.71,21.97-95.71,74.48,0,30.7,15.7,53.99,38.45,65.87Zm199.72-71.6c0,110.71-84.69,169.37-164.51,169.37-34.55,0-66.65-10.44-93.22-28.59,29.84,29.61,70.9,47.52,116.12,47.52,79.82,0,164.51-58.67,164.51-169.37v-180.4c-7.95-5.38-15.58-11.65-22.91-18.97v180.44Z";
const PATH_WHITE = "m331.69,677.06c79.82,0,164.51-58.67,164.51-169.37v-180.44c7.32,7.32,14.96,13.6,22.91,18.97,30.31,20.41,64.7,27.35,101.05,27.35v-65.64c-25.16-5.73-50.13-18.31-70.16-38.95-26.18-17.26-48.15-44.41-58.82-83.32h-62.91v346.7c0,45.46-32.64,74.68-72.34,74.68-23.88,0-45.65-10.13-59.44-27.74-22.75-11.88-38.45-35.18-38.45-65.87,0-52.51,41.02-80.21,95.71-74.48v-70.66c-89.36.19-164.12,72.03-164.12,161,0,47.41,18.7,89.28,48.85,119.2,26.57,18.15,58.67,28.59,93.22,28.59Z";

const INTRO_CSS = `
  #tk-logo-wrapper {
    position: absolute;
    top: 250px;
    left: 50%;
    transform: translate(-50%, 0);
    width: 324px;
    height: auto;
    will-change: transform, top, left;
    animation: tk-reposition 0.8s cubic-bezier(0.4, 0, 0.2, 1) 1.8s forwards;
  }

  @keyframes tk-reposition {
    from { 
      top: 250px; 
      left: 50%; 
      transform: translate(-50%, 0) scale(1);
    }
    to { 
      top: 32px; 
      left: 24px; 
      transform: translate(0, 0) scale(0.1975);
      transform-origin: 0 0;
    }
  }

  #tk-layer-white { will-change: stroke-dashoffset, fill, stroke-opacity; }
  @keyframes tk-line-draw { to { stroke-dashoffset: 0; } }
  @keyframes tk-fill-reveal {
    from { fill: transparent; stroke-opacity: 1; }
    to { fill: #ffffff; stroke-opacity: 0; }
  }

  #tk-layer-cyan {
    opacity: 0;
    will-change: transform, opacity;
    animation: tk-glitch-cyan 0.4s ease-out 1.4s forwards;
  }
  @keyframes tk-glitch-cyan {
    0% { opacity: 0; transform: translate(-4px, 2px); }
    100% { opacity: 1; transform: translate(0, 0); }
  }

  #tk-layer-red {
    opacity: 0;
    will-change: transform, opacity;
    animation: tk-glitch-red 0.4s ease-out 1.4s forwards;
  }
  @keyframes tk-glitch-red {
    0% { opacity: 0; transform: translate(4px, -2px); }
    100% { opacity: 1; transform: translate(0, 0); }
  }
`;

export function TikTokIntro({ onComplete }: { onComplete?: () => void }) {
  const [phase, setPhase] = useState<"visible" | "fading" | "done">("visible");
  const whiteRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    if (window.innerWidth >= 1024) {
      setPhase("done");
      return;
    }

    document.body.style.overflow = "hidden";

    const styleEl = document.createElement("style");
    styleEl.id = "tk-intro-styles";
    styleEl.textContent = INTRO_CSS;
    document.head.appendChild(styleEl);

    const white = whiteRef.current;
    if (white) {
      const len = white.getTotalLength();
      white.style.strokeDasharray = String(len);
      white.style.strokeDashoffset = String(len);
      white.getBoundingClientRect();
      white.style.animation =
        "tk-line-draw 1.4s ease-in-out 0s forwards, " +
        "tk-fill-reveal 0.2s ease-out 1.4s both";
    }

    const t1 = setTimeout(() => setPhase("fading"), 2700);
    const t2 = setTimeout(() => {
      setPhase("done");
      document.body.style.overflow = "";
      onComplete?.();
    }, 3200);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      document.body.style.overflow = "";
      document.getElementById("tk-intro-styles")?.remove();
    };
  }, [onComplete]);

  if (phase === "done") return null;

  return (
    <div
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        backgroundColor: "#000",
        opacity: phase === "fading" ? 0 : 1,
        transition: phase === "fading" ? "opacity 0.5s ease-out" : "none",
        pointerEvents: phase === "fading" ? "none" : "all",
      }}
    >
      <div className="relative w-full h-full mx-auto" style={{ maxWidth: "430px" }}>
        
        {/* Usando um wrapper DIV para posicionamento CSS fixo (pixel-perfect) */}
        <div 
          id="tk-logo-wrapper"
          style={{
            position: "absolute",
            top: "250px",
            left: "50%",
            transform: "translate(-50%, 0)",
            width: "324px",
            height: "auto",
            willChange: "transform, top, left",
          }}
        >
          <svg
            viewBox="0 0 810 863"
            xmlns="http://www.w3.org/2000/svg"
            style={{ display: "block", width: "100%", height: "auto" }}
          >
            {/* Cyan layer */}
            <path id="tk-layer-cyan" fill="#2DCCD3" d={PATH_CYAN} />
            {/* Red layer */}
            <path id="tk-layer-red" fill="#F1204A" d={PATH_RED} />
            {/* White layer */}
            <path
              id="tk-layer-white"
              ref={whiteRef}
              fill="none"
              stroke="#FFFFFF"
              strokeWidth={5}
              strokeLinecap="round"
              strokeLinejoin="round"
              d={PATH_WHITE}
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
