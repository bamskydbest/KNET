import PageHero from "../components/PageHero";
import BotSection from "../components/BotSections";
import { motion } from "framer-motion";

export default function PressReleases() {
  const items = [
    {
      title:
        "K-NET stamps authority as tech giant with two top GITTA 2024 Awards",
      date: "10 June 2024",
      src: "/5.jpg",
      excerpt:
        "K-NET, one of Africa’s leading broadcasting technology and IoT companies, has once again been recognized for its commanding role in that space, picking two top awards at this year’s GITTA.",
      source: "TechFocus24",
      link: "https://www.techfocus24.com/k-net-stamps-authority-as-tech-giant-with-two-top-gitta2024-awards/",
    },
    {
      title:
        "NCA kick-starts Digital Audio Broadcasting trial in Accra and Kumasi in August",
      date: "24 July 2023",
      src: "/2.jpg",
      excerpt:
        "The National Communications Authority (NCA) has commenced its Digital Audio Broadcasting (DAB) trial in Accra and Kumasi...",
      source: "MyJoyOnline",
      link: "https://www.myjoyonline.com/nca-kick-starts-digital-audio-broadcasting-trial-in-accra-and-kumasi-in-august/",
    },
    {
      title:
        "Ghana’s First Nationwide Satellite Broadband Network Launched by K-NET",
      date: "5 March 2023",
      src: "/1.jpg",
      excerpt:
        "K-NET launches Ghana’s first full satellite broadband network, enabling seamless connectivity across underserved regions.",
      source: "Graphic Online",
      link: "https://www.graphic.com.gh/tech/k-net-launches-ghana-satellite-broadband.html",
    },
    {
      title:
        "K-NET partners with Ghana Broadcasting Corporation for digital transition",
      date: "17 October 2022",
      src: "/4.jpg",
      excerpt:
        "The partnership strengthens Ghana’s digital TV infrastructure, providing reliable and scalable broadcast solutions nationwide.",
      source: "Citi Newsroom",
      link: "https://citinewsroom.com/knet-partners-gbc-for-digital-transition/",
    },
  ];

  return (
    <>
     
           {/* === PAGE HERO === */}
            <motion.div
              initial={{ opacity: 0, y: -40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
                           <PageHero
        title="Press Releases"
        subtitle="We deliver world-class telecoms services"
      />

            </motion.div>

      {/* === BOT SECTION === */}
      <BotSection />

      {/* === PRESS RELEASES SECTION === */}
     <section className="bg-[#f9f9f9] py-6 md:py-10">
  <div className="container mx-auto px-2 sm:px-4 md:px-6 lg:px-8 max-w-7xl">
    <h2 className="text-knetBlue text-5xl font-semibold text-center mb-5">
      Press Releases
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-10">
      {items.map((it) => (
        <article
          key={it.title}
          className="bg-white shadow-md rounded-md overflow-hidden transition-all hover:shadow-lg"
        >
          <a href={it.link} target="_blank" rel="noopener noreferrer">
            <img
              src={it.src}
              alt={it.title}
              className="w-full h-64 object-cover"
            />
          </a>

          <div className="p-6">
            <div className="text-sm uppercase text-knetBlue font-semibold mb-2">
              {it.date}
            </div>
            <a
              href={it.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-gray-900 text-lg font-semibold mb-3 hover:text-knetBlue transition-colors"
            >
              {it.title}
            </a>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              {it.excerpt}
            </p>
            <div className="text-xs uppercase tracking-wide text-gray-700 font-medium">
              {it.source}
            </div>
          </div>
        </article>
      ))}
    </div>
  </div>
</section>


    </>
  );
}
