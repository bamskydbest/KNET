import Hero from "../components/Hero";
import { useEffect, useState } from "react";
import { FaCheck } from "react-icons/fa6";
import OurStory from "../components/OurStory";
import LogoSlider from "../components/LogoSlider";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

export default function Home() {


 



  const slideLeftStat: Variants = {
    hidden: { x: -200, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.8 } },
  };

  const slideRightStat: Variants = {
    hidden: { x: 200, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.8 } },
  };

  return (
    <div className="font-['Raleway'] overflow-x-hidden ">
      <Hero />

      {/* We Build Operate & Transfer Section */}
<section className="py-8 bg-[#0a2a66]">
  <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col md:flex-row gap-10 items-stretch">
    {/* Left Text */}
    <div className="flex-1 flex flex-col justify-center space-y-4">
      <motion.h2
        className="font-['Montserrat'] text-3xl md:text-4xl font-bold text-[#dfebf7]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        We Build Operate & Transfer
      </motion.h2>

      {(() => {
        const texts = [
          "DTT - DIGITAL TERRESTRIAL TELEVISION",
          "DTH - DIRECT TO HOME",
          "DAB - DIGITAL AUDIO BROADCASTING",
          "OTT - OVER THE TOP",
        ];

        const [currentIndex, setCurrentIndex] = useState(0);
        const [fade, setFade] = useState(true);

        // Sync both text and image together
        useEffect(() => {
          const interval = setInterval(() => {
            setFade(false);
            setTimeout(() => {
              setCurrentIndex((prev) => (prev + 1) % texts.length);
              setFade(true);
            }, 300);
          }, 3500);
          return () => clearInterval(interval);
        }, []);

        const images = [
          "/image1.jpg", // DTT
          "/image2.jpg", // DTH
          "/image3.jpg", // DAB
          "/image4.jpg", // OTT
        ];

        return (
          <div className="flex flex-col md:flex-row gap-10 items-stretch">
            {/* Left Text Column */}
            <div className="flex-1 flex flex-col justify-center">
              <div className="mt-3 h-8 overflow-hidden">
                <h2
                  className={`text-[#79a8f7] text-base md:text-lg font-semibold transition-opacity duration-500 ${
                    fade ? "opacity-100" : "opacity-0"
                  }`}
                >
                  {texts[currentIndex]}
                </h2>
              </div>

              <motion.p
                className="mt-8 mb-6 text-[#e0e6ef] leading-relaxed font-extralight tracking-wide [font-family:'Raleway',_sans-serif]!"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                We are committed to providing reliable and high-quality <br />
                communication and broadcasting solutions to <br /> businesses and
                organizations across Africa.
              </motion.p>

              {/* List Section */}
              <ul className="mt-2 space-y-2 text-[#c7d4f0]">
                {[
                  "We deliver world-class telecoms services",
                  "Our Satellite teleport covers all over Ghana as well as West & Central Africa",
                  "We connect from city to countryside through our resilient Satellite – Terrestrial infrastructure",
                  "Global 24x7 Network Operations Centre",
                ].map((text, i) => (
                  <motion.li
                    key={i}
                    className="flex items-start gap-3 bg-transparent rounded-lg transition-all duration-300 hover:bg-[#ffffff1a] hover:translate-x-2 py-2 px-3"
                    custom={i}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: {
                        opacity: 1,
                        y: 0,
                        transition: { delay: i * 0.2, duration: 0.6 },
                      },
                    }}
                  >
                    <FaCheck className="text-[#9fb7e3] mt-[2px] flex-shrink-0" />
                    <span className="text-[#ffffff] font-['Raleway'] text-sm sm:text-base leading-snug">
                      {text}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Right Image Slideshow - Synced with text */}
            <motion.div
  className="flex-1 flex justify-center relative overflow-hidden rounded-xl shadow-lg w-full
  min-h-[220px] sm:min-h-[280px] md:min-h-0 md:max-h-[700px]"
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.2 }}
  transition={{ duration: 0.8 }}
>
  <div className="relative w-full h-full min-h-[220px] sm:min-h-[280px]">
    {images.map((img, i) => (
      <motion.img
        key={i}
        src={img}
        alt={`Slide ${i + 1}`}
        className="absolute inset-0 w-full h-full object-cover rounded-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: i === currentIndex ? 1 : 0 }}
        transition={{ duration: 1, ease: 'easeInOut' }}
      />
    ))}

    {/* Dots */}
    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-10">
      {images.map((_, i) => (
        <button
          key={i}
          onClick={() => setCurrentIndex(i)}
          className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
            i === currentIndex ? 'bg-[#79a8f7]' : 'bg-white/40'
          }`}
        ></button>
      ))}
    </div>
  </div>
</motion.div>

          </div>
        );
      })()}
    </div>
  </div>
</section>


      {/* Stats Section */}
      <section
        className="relative min-h-[40vh] md:min-h-[40vh] flex items-center text-center overflow-hidden bg-cover bg-center py-8"
        style={{ backgroundImage: "url('/kbg.jpg')" }}
      >
        <div className="relative max-w-7xl mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center justify-between w-full gap-8 md:gap-0">
          {/* Left Stat */}
          <motion.div
            className="flex-1 text-center md:text-left"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideLeftStat}
          >
            <h3 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-[900] font-['Montserrat'] text-[#0f4ea4] leading-none">
              850+
            </h3>
            <p className="mt-3 uppercase tracking-[2px] text-[#0a2a66] font-['Raleway'] text-sm sm:text-base font-medium">
              Happy Clients
            </p>
          </motion.div>

          {/* Center Stat */}
          <div className="flex-1 flex flex-col items-center justify-center">
            <div
              className="relative perspective-[800px] w-full max-w-[300px]"
              onMouseMove={(e) => {
                const card = e.currentTarget.querySelector<HTMLDivElement>(".tilt-card");
                if (!card) return;
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                const rotateX = ((y - centerY) / centerY) * 15;
                const rotateY = ((x - centerX) / centerX) * -15;
                card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
              }}
              onMouseLeave={(e) => {
                const card = e.currentTarget.querySelector<HTMLDivElement>(".tilt-card");
                if (!card) return;
                card.style.transform = `rotateX(0deg) rotateY(0deg)`;
              }}
            >
              <div className="tilt-card transition-transform duration-150 [transform-style:preserve-3d]">
                {(() => {
  const foundedYear = 1996;
  const currentYear = new Date().getFullYear();
  const experience = currentYear - foundedYear;
  return (
    <h3
      className="font-['Montserrat'] font-[900] uppercase tracking-tight inline-block text-transparent bg-clip-text leading-none"
      style={{
        backgroundImage: "url('/years.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        fontSize: "clamp(6rem, 18vw, 16rem)",
      }}
    >
      {experience}+
    </h3>
  );
})()}

                <p className="mt-4 uppercase tracking-[4px] text-[#0a2a66] font-['Raleway'] text-sm sm:text-base md:text-lg font-semibold">
                  Years of Experience
                </p>
              </div>
            </div>
          </div>

          {/* Right Stat */}
          <motion.div
            className="flex-1 text-center md:text-right"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideRightStat}
          >
            <h3 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-[900] font-['Montserrat'] text-[#0f4ea4] leading-none">
              50+
            </h3>
            <p className="mt-3 uppercase tracking-[2px] text-[#0a2a66] font-['Raleway'] text-sm sm:text-base font-medium">
              MRIID Sites
            </p>
          </motion.div>
        </div>
      </section>

      <OurStory />

    {/* 24/7 Support Section */}
<section
  className="relative bg-gradient-to-r from-[#0a2a66] via-[#174a9c] to-[#2e94eb] text-white"
  style={{
    minHeight: "200px",
  }}
>
  <div className="container mx-auto px-8 md:px-20 py-8 md:py-10">
    <div className="flex flex-wrap items-center justify-between md:ml-12">
      {/* Text Section */}
      <div className="w-full md:w-8/12 sm:w-10/12 text-center md:text-left mb-4 md:mb-0">
        <h2
          className="font-semibold text-3xl md:text-4xl mb-4 drop-shadow-lg"
          style={{ fontFamily: "'Raleway', sans-serif" }}
        >
          24/7 Support
        </h2>
        <p
          className="text-lg md:text-xl leading-relaxed max-w-2xl opacity-90"
          style={{ fontFamily: "'Raleway', sans-serif" }}
        >
          We have a Networks Operation Centre with highly skilled network engineers ensuring
          <span className="font-semibold text-[#bfe0ff]"> 99.5% uptime </span>
          with fast & efficient troubleshooting.
        </p>
      </div>

      {/* Button */}
      <div className="w-full md:w-auto text-center md:text-left mt-4 md:mt-0 md:ml-12">
        <a
          href="/contact"
          className="inline-block rounded-full font-semibold px-8 py-3 transition-all duration-300 border-2 border-[#0a2a66] bg-[#0a2a66] hover:bg-transparent hover:text-[#bfe0ff]"
          style={{
            boxShadow: "0 0 15px rgba(46, 148, 235, 0.4)",
          }}
        >
          Get in touch <i className="fa fa-arrow-right ml-2"></i>
        </a>
      </div>
    </div>
  </div>
</section>


      <LogoSlider />
    </div>
  );
}
