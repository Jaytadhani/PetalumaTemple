import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const GsapButton = () => {
  const buttonRef = useRef(null);
  const iconRef = useRef(null);

  useEffect(() => {
    const button = buttonRef.current;
    const icon = iconRef.current;

    const tl = gsap.timeline({ paused: true });

    tl.to(icon, {
      y: -50, // Moves the SVG upward
      opacity: 1,
      scale: 1.2,
      duration: 0.4,
      ease: "power2.out",
    });

    button.addEventListener("mouseenter", () => tl.play());
    button.addEventListener("mouseleave", () => tl.reverse());

    return () => {
      button.removeEventListener("mouseenter", () => tl.play());
      button.removeEventListener("mouseleave", () => tl.reverse());
    };
  }, []);

  return (
    <div className="relative flex flex-col items-center">
      {/* Floating Icon */}
      <svg
        ref={iconRef}
        className="absolute opacity-0 transition-transform"
        width="30"
        height="30"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
          fill="yellow"
        />
      </svg>

      {/* Button */}
      <button
        ref={buttonRef}
        className="relative flex items-center gap-2 px-6 py-3 text-white border border-green-400 rounded-full hover:bg-green-700 transition-all duration-300"
      >
        Get <span className="font-bold">GSAP</span>
      </button>
    </div>
  );
};

export default GsapButton;
