import PageHero from "../components/PageHero";
import BotSection from "../components/BotSections";
import { motion } from "framer-motion";

export default function KeyProjects() {
  const projects = [
    { title: "Digital Terrestrial Television (DTT)", img: "/dtt.jpg", countries: ["Ghana"] },
    { title: "Long Term Evolution/Private (Licensed) 4G", img: "/4g.jpg", countries: ["Ghana"] },
    { title: "Solar Power Systems", img: "/solar.jpg", countries: ["Ghana", "Liberia"] },
    { title: "Digital Audio Broadcasting (DAB)", img: "/dab.jpg", countries: ["Ghana"] },
    { title: "Rural Telephony", img: "/rt.jpg", countries: ["Sierra Leone", "Ghana", "Liberia"] },
    { title: "Outdoor Broadcasting", img: "/ob.jpg", countries: ["Ghana", "Liberia"] },
  ];

  return (
    <div className="bg-white text-gray-800">
      {/* === PAGE HERO === */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <PageHero title="Key Projects" subtitle="We deliver world-class telecoms services" />
      </motion.div>

      {/* === BOT SECTION === */}
      <BotSection />

      {/* === PROJECT GRID === */}
      <section className="px-4 sm:px-8 md:px-12 xl:px-20 mt-4 pb-4">
  <div className="flex flex-col gap-6 md:gap-6"> 
    
    {/* === ROW 1 === */}
    <div className="flex flex-col md:flex-row justify-between items-stretch gap-4 md:gap-5">
      {/* Large Tall Image (Left) */}
      <div className="relative group overflow-hidden shadow-md w-full md:w-[50%] h-[556px]">
        <img
          src={projects[0].img}
          alt={projects[0].title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-[#213f7d]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="absolute inset-0 flex flex-col justify-between p-6 md:p-8 text-white">
          <div>
            {projects[0].countries.map((c, index) => (
              <span
                key={index}
                className="text-sm font-semibold bg-black text-white px-3 py-1 mr-2 transition-all duration-300 group-hover:bg-white group-hover:text-black"
              >
                {c}
              </span>
            ))}
          </div>
          <h3 className="text-2xl font-semibold mt-auto w-[85%] md:w-full">
            {projects[0].title}
          </h3>
        </div>
      </div>

      {/* Two Smaller Stacked Images (Right) */}
      <div className="flex flex-col w-full md:w-[50%] gap-4 md:gap-4">
        {projects.slice(1, 3).map((p, i) => (
          <div
            key={i}
            className="relative group overflow-hidden shadow-md h-[270px]"
          >
            <img
              src={p.img}
              alt={p.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-[#213f7d]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute inset-0 flex flex-col justify-between p-6 md:p-8 text-white">
              <div>
                {p.countries.map((c, index) => (
                  <span
                    key={index}
                    className="text-sm font-semibold bg-black text-white px-3 py-1 mr-2 transition-all duration-300 group-hover:bg-white group-hover:text-black"
                  >
                    {c}
                  </span>
                ))}
              </div>
              <h3 className="text-lg font-semibold mt-auto w-[85%] md:w-full">
                {p.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* === ROW 2 === */}
    <div className="flex flex-col md:flex-row justify-between items-stretch gap-4 md:gap-5">
      {/* Two Smaller Stacked Images (Left) */}
      <div className="flex flex-col w-full md:w-[50%] gap-4 md:gap-4">
        {projects.slice(4, 6).map((p, i) => (
          <div
            key={i}
            className="relative group overflow-hidden shadow-md h-[270px]"
          >
            <img
              src={p.img}
              alt={p.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-[#213f7d]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute inset-0 flex flex-col justify-between p-6 md:p-8 text-white">
              <div>
                {p.countries.map((c, index) => (
                  <span
                    key={index}
                    className="text-sm font-semibold bg-black text-white px-3 py-1 mr-2 transition-all duration-300 group-hover:bg-white group-hover:text-black"
                  >
                    {c}
                  </span>
                ))}
              </div>
              <h3 className="text-lg font-semibold mt-auto w-[85%] md:w-full">
                {p.title}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {/* Large Tall Image (Right) */}
      <div className="relative group overflow-hidden shadow-md w-full md:w-[50%] h-[556px] order-1 md:order-2">
        <img
          src={projects[3].img}
          alt={projects[3].title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-[#213f7d]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="absolute inset-0 flex flex-col justify-between p-6 md:p-8 text-white">
          <div>
            {projects[3].countries.map((c, index) => (
              <span
                key={index}
                className="text-sm font-semibold bg-black text-white px-3 py-1 mr-2 transition-all duration-300 group-hover:bg-white group-hover:text-black"
              >
                {c}
              </span>
            ))}
          </div>
          <h3 className="text-2xl font-semibold mt-auto w-[85%] md:w-full">
            {projects[3].title}
          </h3>
        </div>
      </div>
    </div>
  </div>
</section>


    </div>
  );
}
