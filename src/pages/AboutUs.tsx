
import React, { useEffect, useState, useRef } from "react";
import { motion, animate, useInView } from "framer-motion";
import PageHero from "../components/PageHero";
import AboutUsIcons from "../components/AboutUsIcons";
import ParallaxCTA from "../components/ParallaxCta";
import { FaPlay } from "react-icons/fa";

// === CountUpNumber Component ===
const CountUpNumber: React.FC<{ target: number; duration?: number }> = ({
  target,
  duration = 2,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, target, {
        duration,
        ease: "easeOut",
        onUpdate(value) {
          setDisplay(Math.floor(value));
        },
      });
      return () => controls.stop();
    }
  }, [isInView, target, duration]);

  return (
    <motion.h2
      ref={ref}
      className="text-3xl font-semibold text-knetBlue flex items-baseline justify-center gap-1"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {display}
      <motion.span
        key="plus"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: duration - 0.2, duration: 0.4 }}
        className="text-knetBlue text-xl"
      >
        +
      </motion.span>
    </motion.h2>
  );
};

// === Logo shuffle utility and component ===
const logoPaths = Array.from({ length: 30 }, (_, i) =>
  `/logos/logo${i + 1}.${i === 0 ? "jpg" : "png"}`
);

const shuffleArray = (array: string[]) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const AnimatedLogosGrid: React.FC = () => {
  const [logos, setLogos] = useState<string[]>(logoPaths);

  useEffect(() => {
    const interval = setInterval(() => {
      setLogos((prev) => {
        const shuffled = shuffleArray(prev);
        return [...shuffled];
      });
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      layout
      className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 place-items-center"
    >
      {logos.map((logo, index) => (
        <motion.div
          key={index}
          layout
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="flex justify-center items-center"
        >
          <motion.div
            initial={false}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
            className="border border-gray-200 p-2 rounded-lg bg-white flex justify-center items-center hover:shadow-lg transition-all duration-300"
          >
            <img
              src={logo}
              alt={`Partner Logo ${index + 1}`}
              className="w-32 h-20 object-contain"
            />
          </motion.div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default function AboutUs() {
  return (
    <div className="w-full overflow-hidden">
      {/* === PAGE HERO === */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <PageHero
          title="Who We Are"
          subtitle="To provide exceptional world class telecommunication services"
        />
      </motion.div>

      {/* ===== ICON GRID ===== */}
      <AboutUsIcons />

     {/* ===== ABOUT SECTION ===== */}
<section
  className="relative bg-[#0a2a66] py-5 bg-cover bg-center"
  style={{ backgroundImage: "url('/images/ourstory.jpg')" }}
>
  {/* Overlay for better text contrast */}
  <div className="absolute inset-0 bg-black/10"></div>

  <div className="relative container mx-auto px-6 sm:px-8 md:px-12 lg:px-20 grid gap-10 md:grid-cols-[55%_45%] items-stretch">
    {/* LEFT TEXT - 55% */}
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="bg-white/90 backdrop-blur-sm p-8 shadow-md rounded-md flex flex-col justify-center"
    >
      <h2 className="text-2xl font-semibold text-knetBlue mb-4">
        About K-NET
      </h2>
      <p className="text-gray-700 leading-7 mb-4">
        K-NET is a Ghanaian privately-owned telecommunications company
        established in 1996, serving business and government clients across
        West Africa.
      </p>
      <p className="text-gray-700 leading-7 mb-4">
        With its enormous industry knowledge, K-NET has built long-lasting
        partnerships with leading Mobile Operators in various capacities,
        including backhauling GSM traffic from rural communities and providing
        ISP data connectivity.
      </p>
      <p className="text-gray-700 leading-7">
        Our job is delivering world-class solutions tailored for local and
        international clients:
        <br />
        <br />• Teleport
        <br />• Broadcasting
        <br />• Wide Area Networks
        <br />• Rural Telephony
        <br />• Solar Power Systems
        <br />• LTE/Private 4G
        <br />• Internet of Things (IoT)
        <br />• Electronic Payment Systems
        <br />• Software Development
      </p>
    </motion.div>

    {/* RIGHT SIDEBAR - 45% */}
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="flex flex-col justify-between bg-white/90 backdrop-blur-sm p-6 shadow-md rounded-md"
    >
      <img
        src="/satellite.jpg"
        alt="Satellite"
        className="rounded-lg mb-6 shadow-md w-full h-80 object-cover"
      />

      <div className="flex flex-col gap-6">
        <blockquote className="border-l-4 border-knetLBlue pl-4 py-2 bg-white/70 rounded">
          <h4 className="text-knetBlue font-semibold mb-2">Vision</h4>
          <p className="text-gray-600 text-sm">
            To continually provide exceptional world class telecommunication
            services to our clients.
          </p>
        </blockquote>

        <blockquote className="border-l-4 border-gray-400 pl-4 py-2 bg-white/70 rounded">
          <h4 className="text-knetBlue font-semibold mb-2">Our Promise</h4>
          <p className="text-gray-600 text-sm">
            To be the leading provider of customer-focused telecommunication
            solutions for businesses in Sub-Saharan Africa, impacting ICT
            development in Africa.
          </p>
        </blockquote>
      </div>
    </motion.div>
  </div>
</section>



      {/* ===== BLUE CTA + OVERLAY STATS ===== */}
<section className="relative">
  <ParallaxCTA />

  <motion.section
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    viewport={{ once: true }}
    className="relative md:absolute md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 z-20 w-full md:w-[75%] bg-white shadow-lg rounded-lg mt-8 md:mt-0"
    style={{ top: "85%" }}
  >
    <div className="container mx-auto grid md:grid-cols-3 text-center divide-x md:divide-x divide-gray-200 py-12">
      {[
        { num: 50, label: "MRIID Sites" },
        { num: 100, label: "Employees" },
        { num: 29, label: "Years Experience" },
      ].map((stat, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: i * 0.2, duration: 0.5 }}
          viewport={{ once: true }}
          className="py-4"
        >
          <CountUpNumber target={parseInt(stat.num.toString())} />
          <p className="text-gray-700 mt-1 text-sm md:text-base">{stat.label}</p>
        </motion.div>
      ))}
    </div>
  </motion.section>
</section>


      {/* ===== CLIENT / PARTNERS SECTION ===== */}
      <section className="py-10 bg-white overflow-hidden relative z-10">
        <div className="container mx-auto px-[11%]">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <motion.h6
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-center md:text-left text-2xl md:text-3xl font-light text-knetBlue leading-snug"
            >
              <strong
                style={{ color: "#1fa1f2" }}
                className="underline font-semibold"
              >
                29+ years
              </strong>{" "}
              we've worked with global brands.
            </motion.h6>

            <motion.a
              href="https://www.youtube.com/watch?v=Y_HDMwBUYbw"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="flex items-center justify-center gap-3 bg-gradient-to-r from-[#0f33e2] to-[#7c04d5] text-white py-4 px-10 font-semibold uppercase hover:bg-gradient-to-l transition-all duration-500 shadow-md"
              style={{ borderRadius: "0px" }}
            >
              <FaPlay className="text-lg" />
              <div className="text-left leading-tight">
                <span className="text-xs block">Story Video</span>
                <span className="text-sm font-bold">Watch</span>
              </div>
            </motion.a>
          </div>

          {/* === CLIENT LOGOS GRID === */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mt-16"
          >
            <AnimatedLogosGrid />
          </motion.div>
        </div>
      </section>
    </div>
  );
}
