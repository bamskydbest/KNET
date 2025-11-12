import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

let verticalOffset = 0.8; // default for large screens

if (window.innerWidth < 768) verticalOffset = 0.9; // small screens → 10% from bottom
else if (window.innerWidth < 1024) verticalOffset = 0.85; // medium screens → 15%

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isOnWhiteBackground, setIsOnWhiteBackground] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsVisible(scrollY > 200);

      // Detect the element behind the button
     const element = document.elementFromPoint(window.innerWidth - 40, window.innerHeight * verticalOffset);
      if (element) {
        const bgColor = window.getComputedStyle(element).backgroundColor;
        if (bgColor && bgColor.includes("rgb")) {
          const rgb = bgColor
            .replace(/[^\d,]/g, "")
            .split(",")
            .map((n) => parseInt(n.trim()));
          const brightness = (rgb[0] + rgb[1] + rgb[2]) / 3;
          setIsOnWhiteBackground(brightness > 200); // if bright, treat as white
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // run on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-[10%] md:bottom-[15%] lg:bottom-[20%] right-6 z-50 flex items-center justify-center rounded-full shadow-md transition-all duration-300 ${

        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      } w-12 h-12`}
      style={{
        backgroundColor: isOnWhiteBackground ? "#002f6c" : "#ffffff",
      }}
      aria-label="Scroll to top"
    >
      <FaArrowUp
        className="text-xl transition-colors duration-300"
        style={{
          color: isOnWhiteBackground ? "#ffffff" : "#002f6c",
        }}
      />
    </button>
  );
};

export default ScrollToTopButton;
