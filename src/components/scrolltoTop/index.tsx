import { useEffect, useState } from "react";

export default function ScrollToTopProgress() {
  const [progress, setProgress] = useState(0);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const percent = (scrollTop / docHeight) * 100;
      setProgress(percent);

      setShow(scrollTop > 200); // show button after scrolling
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const radius = 26;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  return (
    show && (
      <button
        onClick={() =>
          window.scrollTo({ top: 0, behavior: "smooth" })
        }
        className="fixed bottom-6 right-6 w-16 h-16 group z-50 rounded-full bg-primary text-accent flex items-center justify-center shadow-lg"
      >
        <svg className="w-full h-full rotate-[-90deg]">
          {/* Background circle */}
          <circle
            cx="32"
            cy="32"
            r={radius}
            stroke="rgba(0,0,0,0.2)"
            strokeWidth="4"
            fill="none"
          />

          {/* Progress stroke */}
          <circle
            cx="32"
            cy="32"
            r={radius}
            stroke="currentColor"
            strokeWidth="4"
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            className="transition-all duration-150"
          />
        </svg>

        {/* Arrow */}
        <span className="absolute inset-0 flex items-center justify-center text-lg">
          ↑
        </span>
      </button>
    )
  );
}