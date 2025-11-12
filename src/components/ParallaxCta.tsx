import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ParallaxCTA() {
  const ref = useRef(null);

  // Track scroll progress relative to this section
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Move background image upward as user scrolls
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-25%"]);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden text-white"
      style={{ height: "70vh" }}
    >
      {/* Background image with parallax motion */}
      <motion.div
        style={{
          y,
          backgroundImage: "url('/digitall.jpg')",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        className="absolute inset-0 will-change-transform"
      />

      {/* Content layer (no gray tint) */}
      <div className="relative container mx-auto h-full flex flex-col md:flex-row justify-center md:justify-between items-center text-center md:text-left px-[10%] md:px-[5%]">
        <h3 className="text-xl md:text-2xl font-light mb-6 md:mb-0 max-w-3xl md:ml-[10%]">
          A strategic ground segment <br /> technology partner to the satellite <br /> market
          in Africa.
        </h3>

        <a
          href="/contact"
          className="flex items-center gap-2 border-2 rounded-full font-medium py-3 px-8 transition-all duration-300 md:mr-[5%]"
          style={{
            backgroundColor: "#2e94eb",
            borderColor: "#2e94eb",
            color: "#fff",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "transparent";
            e.currentTarget.style.color = "#2e94eb";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "#2e94eb";
            e.currentTarget.style.color = "#fff";
          }}
        >
          Get in touch <i className="fa fa-arrow-right"></i>
        </a>
      </div>
    </section>
  );
}
