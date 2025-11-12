import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";

export default function Hero() {
  const fullHeading = "Welcome To A World Of Endless Possibilities";
  const fullParagraph =
    "Discover how organizations use our world-class solutions to meet their telecommunications, broadcasting, and data hosting business since 1996.";

  const [typedHeading, setTypedHeading] = useState("");
  const [typedParagraph, setTypedParagraph] = useState("");
  const [showParagraph, setShowParagraph] = useState(false);

  const headingIndex = useRef(0);
  const paragraphIndex = useRef(0);

  // Typing animation for heading (stable using requestAnimationFrame timing)
  useEffect(() => {
    const interval = setInterval(() => {
      if (headingIndex.current < fullHeading.length) {
        const nextChar = fullHeading.charAt(headingIndex.current);
        setTypedHeading((prev) => prev + nextChar);
        headingIndex.current += 1;
      } else {
        clearInterval(interval);
        setTimeout(() => setShowParagraph(true), 700);
      }
    }, 80);
    return () => clearInterval(interval);
  }, []);

  // Typing animation for paragraph
  useEffect(() => {
    if (!showParagraph) return;
    const interval = setInterval(() => {
      if (paragraphIndex.current < fullParagraph.length) {
        const nextChar = fullParagraph.charAt(paragraphIndex.current);
        setTypedParagraph((prev) => prev + nextChar);
        paragraphIndex.current += 1;
      } else {
        clearInterval(interval);
      }
    }, 25);
    return () => clearInterval(interval);
  }, [showParagraph]);

  // Add a line break after “Endless”
  const formattedHeading = typedHeading.replace("World ", "World\n");

  return (
    <section className="relative text-white overflow-hidden h-[64vh] flex items-center">
  {/* Background image with heartbeat */}
  <motion.div
    className="absolute inset-0 w-full h-full overflow-hidden"
    animate={{ scale: [1, 1.08, 1] }}
    transition={{
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  >
    <img
      src="/landing.jpg"
      alt="KNET Landing"
      className="w-full h-full object-cover"
    />
  </motion.div>

  {/* Hero content */}
  <div className="relative z-10 text-left px-8 md:px-16 lg:px-24 max-w-4xl drop-shadow-[0_2px_6px_rgba(0,0,0,0.5)]">
    <motion.h1
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="text-3xl md:text-5xl font-extrabold leading-snug text-white whitespace-pre-line"
    >
      {formattedHeading}
    </motion.h1>

    {showParagraph && (
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="mt-6 text-white/90 leading-relaxed text-lg"
      >
        {typedParagraph}
      </motion.p>
    )}

    {/* CTA Button */}
    <div className="mt-8">
      <Link
        to="/about-us"
        className="inline-flex items-center gap-2 px-8 py-3 border-2 border-white text-white rounded-full font-semibold 
                   bg-transparent hover:bg-white hover:text-black transition-all duration-300 group"
      >
        Discover KNET
        <FiArrowRight className="text-lg transition-transform duration-300 group-hover:translate-x-1" />
      </Link>
    </div>
  </div>
</section>

  );
}
