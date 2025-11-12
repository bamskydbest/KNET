import { motion} from "framer-motion";
import type { Variants } from "framer-motion";
import {
  FaSatelliteDish,
  FaBroadcastTower,
  FaNetworkWired,
  FaSolarPanel,
  FaGlobe,
  FaCloud,
  FaCode,
} from "react-icons/fa";

const iconVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function AboutUsIcons() {
  const items = [
    {
      icon: <FaSatelliteDish />,
      title: "Teleport",
      desc: "Various lease offerings from VSAT gateways, ESA to satellite capacities. Satellite Operator Agnostic Multiservice platform",
    },
    {
      icon: <FaBroadcastTower />,
      title: "Satellite Uplink",
      desc: "A converged, flexible & resilient broadcast infrastructure for DTT, DTH & DAB services. TV Uplink Services",
    },
    {
      icon: <FaNetworkWired />,
      title: "HNO & VNO",
      desc: "A high performing and cost-effective connectivity to remote, rural and ultra-rural areas. Compatible; 2G, 3G and 4G/LTE",
    },
    {
      icon: <FaCloud />,
      title: "CDN",
      desc: "A robust, secure telco-grade IP-data circuits delivering critical applications and services to private and public networks.",
    },
    {
      icon: <FaSolarPanel />,
      title: "Solar Energy",
      desc: "A sustainable and cost-effective gridless power solution for critical broadcast and telecoms infrastructure",
    },
    {
      icon: <FaGlobe />,
      title: "IoT",
      desc: "An intelligent connectivity delivering real-time data insights to optimize productivity and growth",
    },
    {
      icon: <FaCode />,
      title: "Software Development",
      desc: "We design and build innovative, scalable, and secure software solutions tailored to meet modern business challenges.",
    },
  ];

  return (
    <section className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-7 border-t border-[#e7e7e7]">
      {items.map((item, i) => (
        <motion.div
          key={i}
          custom={i}
          variants={iconVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: i * 0.15 }}
          className="relative border border-[#e7e7e7] flex items-center justify-center h-32 sm:h-36 md:h-40 xl:h-44 text-center overflow-hidden bg-white group"
        >
          <motion.div
            className="flex flex-col items-center justify-center text-center w-full"
            initial="rest"
            whileHover="hover"
            animate="rest"
          >
            {/* Icon + Title */}
            <motion.div
              variants={{
                rest: { opacity: 1, y: 0 },
                hover: { opacity: 0, y: -60 },
              }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="absolute inset-0 flex flex-col items-center justify-center"
            >
              <div className="text-[#2ea8f3] text-4xl mb-3">{item.icon}</div>
              <h3 className="text-gray-800 font-semibold uppercase text-sm">
                {item.title}
              </h3>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={{
                rest: { opacity: 0, y: 60 },
                hover: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="text-gray-600 text-sm leading-relaxed text-center max-w-[90%] mx-auto"
            >
              {item.desc}
            </motion.p>
          </motion.div>
        </motion.div>
      ))}
    </section>
  );
}
