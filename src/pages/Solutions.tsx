import PageHero from "../components/PageHero";
import BotSection from "../components/BotSections";
import WhyPartnerWithUs from "../components/WhyPartnerWithUs";
import { motion } from "framer-motion";

const tabs = [
  {
    id: "teleport",
    title: "Satellite Teleport",
    image: "/teleportt.jpg",
    subtitle:
      "Future-proof ground segment infrastructure and Multiservice Satellite Platform",
    heading: "Satellite Teleport and VSAT Services",
    content: [
      `K-NET owns and operates a world-class Satellite Teleport located in the capital city of Ghana, Accra. 
      The Teleport has multiple Earth Station Antennae (ESA), Radio Frequency Transmitters (RFT) and multiple VSAT hubs which are fully integrated for various service delivery on any satellite.`,
      `We offer: 
      • VSAT Hub Lease (HNO & VNO) Services 
      • VSAT Managed Services 
      • Space Tracking Station services 
      • Earth Station Antenna Lease 
      • 24x7 Global NOC with TAC assistance`,
    ],
  },
  {
    id: "broadcasting",
    title: "Broadcasting",
    image: "/digitall.jpg",
    subtitle:
      "A home to over 200+ TV Broadcasters, both Local, Regional and International",
    heading: "Broadcasting Infrastructure Services",
    content: [
      `Leveraging on our resilient teleport infrastructure, we deliver broadcast services regardless of the technology, DVB-S/2X or IP.`,
      `Distribution:
      • Direct-To-Home (DTH)
      • Broadcast Turnkey Solutions
      • Distribution to Headends
      • Distribution to DTT Towers
      • Satellite & OTT Solutions`,
      `Contribution:
      • Satellite Newsgathering
      • Fixed Broadcast Contribution
      • File & Media Exchange
      • IP Newsgathering`,
      `Broadcast Turnkey Solutions:
      • OB VAN Solutions
      • Remote Production
      • Multiservice solutions (video, audio, file sharing)`,
    ],
  },
  {
    id: "rural",
    title: "Rural Telephony",
    image: "/telephonyy.jpg",
    subtitle:
      "Connecting remote communities in Sub-Sahara Africa with 2G/3G/4G LTE network services",
    heading: "Rural Telephony & Mobile Backhauling",
    content: [
      `We are the architects of the ITU award-winning “Managed Rural ICT Infrastructure Deployment” (MRIID) solution that provides telephony service for people in very remote and unserved communities.`,
      `Value We Deliver:
      • Best UX with highest throughput
      • Lowest TCO via unique operational efficiency
      • End-to-end rural telephony network build and operation
      • Seamless GSM integration and edge computing
      • Business models and value-added services for rural areas`,
    ],
  },
  {
    id: "isp",
    title: "NSP – ISP – VSAT",
    image: "/nspp.jpg",
    subtitle:
      "Innovative technology mix for seamless high-speed data connectivity",
    heading: "NSP – ISP – VSAT Services",
    content: [
      `K-NET is a licensed ISP with remarkable experience in deploying Internet and Data Network services. 
      Our Internet, WAN, and VSAT solutions meet diverse client needs with reliability and scalability.`,
      `Value We Deliver:
      • Highest-speed IP data via Fibre, Microwave, 4G LTE & VSAT
      • Efficient use of space segment
      • Shared bandwidth options with low jitter
      • Integration with terrestrial infrastructure
      • Fast, easy deployments for any network size`,
    ],
  },
  {
    id: "iot",
    title: "IoT",
    image: "/iott.jpg",
    subtitle:
      "Stay connected to your devices and applications, and make informed decisions based on real-time data",
    heading: "IoT Services",
    content: [
      `We offer cutting-edge Internet of Things (IoT) solutions across Africa, powered by AYECKA’s patented RFModem® technology, enabling cost-effective IoT connectivity and wideband return channels.`,
      `The system integrates all IoT terminal elements in a single outdoor unit, designed to withstand harsh environments, with the latest SATCOM standards and software-defined radio capabilities.`,
    ],
  },
  {
    id: "solar",
    title: "Solar Power Systems",
    image: "/solarr.jpg",
    subtitle:
      "Providing constant power to critical communication and information systems of our lives.",
    heading: "Solar Power Systems",
    content: [
      `KNET partners with top manufacturers to design and operate reliable, robust power systems for telecom base stations and broadcast transmission sites.`,
      `We offer Off-Grid, Hybrid, and Grid-Tie solar systems that ensure uninterrupted power supply, even when the sun isn’t shining.`,
    ],
  },
  {
    id: "software",
    title: "Software Development",
    image: "/software.jpg",
    subtitle:
      "Custom digital solutions designed to drive business efficiency and innovation",
    heading: "Software Development & Integration",
    content: [
      `Our Software Development team specializes in building high-performance web, mobile, and enterprise applications.`,
      `We leverage the latest technologies to deliver solutions tailored to client needs, including: 
      • Web & Mobile App Development 
      • Cloud-based Systems Integration 
      • API & Middleware Development 
      • DevOps Automation and Support 
      • UI/UX Design and Optimization`,
    ],
  },
];

export default function Solutions() {
  // const [activeTab, setActiveTab] = useState("teleport");

  return (
    <div className="bg-white text-gray-800">
        {/* === PAGE HERO === */}
            <motion.div
              initial={{ opacity: 0, y: -40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
                          <PageHero title="K-NET Solutions" subtitle="Seamless Connectivity for All" />

            </motion.div>

      {/* ===== BOT SECTION ===== */}
      <BotSection />

     {/* ===== SOLUTIONS GRID SECTION ===== */}
<section className="py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  <h3 className="text-4xl font-semibold text-knetBlue mb-8 text-left">
    Products & Services
  </h3>

  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-10">
    {[...tabs,
      {
        id: "contact",
        title: "Contact Us",
        subtitle: "Get in touch with K-NET",
        image: "/rurall.jpg",
        content: [
          "Reach out to us for custom connectivity solutions, partnerships, and expert support for your telecommunications or broadcasting needs."
        ]
      },
    ].map((tab, index) => (
      <motion.div
  key={tab.id}
  variants={{
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  }}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.2 }}
  transition={{
    duration: 0.6,
    ease: "easeOut",
    delay: index * 0.1,
  }}

        className="group bg-[#0a183d] text-white rounded-xl shadow-lg overflow-hidden flex flex-col h-full transition-all duration-500 ease-in-out hover:-translate-y-1 hover:shadow-2xl hover:bg-[#e6f7ff] hover:text-[#0a183d]"      >
       {/* Image */}
<div className="w-full 
  h-[220px] sm:h-[280px] md:h-[340px] lg:h-[380px] 
  border-[2px] border-[#42b3f6] overflow-hidden relative rounded-t-xl"
>
  <img
    src={tab.image}
    alt={tab.title}
    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
  />
</div>


        {/* Text Content */}
        <div className="flex flex-col justify-between flex-1 p-5 sm:p-6 md:p-8 transition-colors duration-500">
          <div>
            <h4 className="text-xl sm:text-2xl font-bold mb-2 uppercase tracking-wide transition-colors duration-500 group-hover:text-[#0a183d]">
              {tab.title}
            </h4>
            <p className="text-[#42b3f6] text-sm sm:text-base mb-3 transition-colors duration-500 group-hover:text-[#0a183d]/80">
              {tab.subtitle}
            </p>
            {tab.content.map((text, i, arr) => (
              <p
                key={i}
                className={`leading-relaxed text-sm md:text-base mb-3 last:mb-0 transition-colors duration-500 ${
                  i === arr.length - 1
                   ? "font-semibold text-[#42b3f6] group-hover:text-[#0a183d]"
: "text-white/90 group-hover:text-[#0a183d]"

                }`}
                style={{ fontFamily: "Raleway, sans-serif" }}
              >
                {text}
              </p>
            ))}

            {/* ✅ Contact Us Button */}
            {tab.id === "contact" && (
              <div className="mt-6">
                <a
                  href="/contact"
                  className="inline-block rounded-full border-2 font-semibold px-6 py-3 text-white transition-all duration-300"
                  style={{
                    backgroundColor: "#2e94eb",
                    borderColor: "#2e94eb",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "transparent";
                    e.currentTarget.style.color = "#2e94eb";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "#2e94eb";
                    e.currentTarget.style.color = "white";
                  }}
                >
                  Get in touch <i className="fa fa-arrow-right ml-2"></i>
                </a>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    ))}
  </div>
</section>







      <WhyPartnerWithUs/>
    </div>
  );
}
