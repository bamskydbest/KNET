import { useEffect, useState } from "react";

const botItems = [
  "DTT - Digital Terrestrial Television",
  "DTH - Direct To Home",
  "DAB - Digital Audio Broadcasting",
  "OTT - Over The Top",
  "RT - Rural Telephony",
  "SPS - Solar Power Systems",
];

export default function BotSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimate(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % botItems.length);
        setAnimate(true);
      }, 400);
    }, 2500); // speed of sliding

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-[#e8f5ff] py-3 md:py-4 text-center">
      <div className="flex flex-col md:flex-row justify-center items-center gap-2 md:gap-4 px-4 text-center">
        {/* Fixed text  */}
        <h2 className="text-[#023a78] font-semibold text-xl sm:text-2xl md:text-3xl whitespace-nowrap">
          We Build Operate & Transfer
        </h2>

        {/* Sliding text (left → right) */}
        <div className="relative w-[260px] sm:w-[350px] md:w-[480px] min-h-[2.2rem] overflow-hidden text-left">
          <span
            key={currentIndex}
            className={`absolute left-0 top-0 text-[#003273] font-medium text-base sm:text-lg md:text-2xl whitespace-normal transform transition-all duration-700 ease-in-out
              ${
                animate
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-full opacity-0"
              }`}
            style={{
              lineHeight: "1.4",
              width: "100%",
              display: "inline-block",
            }}
          >
            {botItems[currentIndex]}
          </span>
        </div>
      </div>
    </section>
  );
}
