import PageHero from "../components/PageHero";
import { motion } from "framer-motion";

export default function OurStory() {
  const videos = [
    {
      src: "https://www.youtube.com/embed/sfcKhidqBJg?autoplay=1;&mute=1;rel=0&showinfo=0",
      caption: "K-NET Network Operations Centre",
    },
    {
      src: "https://www.youtube.com/embed/Y_HDMwBUYbw?autoplay=1;&mute=1;rel=0&showinfo=0",
      caption:
        "Government Of Ghana Digital Terrestrial Television Headend - built, managed & operated by K-NET.",
    },
    {
      src: "https://www.youtube.com/embed/J3I_EMSLpcY?autoplay=1;&mute=1;rel=0&showinfo=0",
      caption: "K-NET Ghana Documentary",
    },
    {
      src: "https://www.youtube.com/embed/ddR5-axWJyU?autoplay=1;&mute=1;rel=0&showinfo=0",
      caption: "K-NET Connectivity Solutions, Digital TV, Internet Access...",
    },
    {
      src: "https://www.youtube.com/embed/dID8lnVsBDg?autoplay=1;&mute=1;rel=0&showinfo=0",
      caption: "K-NET Digital Terrestrial Television (DTT)",
    },
    {
      src: "https://www.youtube.com/embed/l_uUYipToYg?autoplay=1;&mute=1;rel=0&showinfo=0",
      caption:
        "K-NET Rollout Mobile Connectivity to Rural Communities in Ghana",
    },
    {
      src: "https://www.youtube.com/embed/TuPNHBz5E3Q?autoplay=1;&mute=1;rel=0&showinfo=0",
      caption:
        "A Fact Finding and Tour of K-NET Faculties by a Team of The Republic of Togo",
    },
    {
      src: "https://www.youtube.com/embed/ArbMjlTJrp4?autoplay=1;&mute=1;rel=0&showinfo=0",
      caption: "Team of The Republic of Sierra Leone's Government Officials",
    },
  ];

  return (
    <div className="bg-white text-gray-800">
     
        {/* === PAGE HERO === */}
            <motion.div
              initial={{ opacity: 0, y: -40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
                            <PageHero
        title="Our Story"
        subtitle="Pushing the limits of what's possible"
      />

            </motion.div>

      {/* === VIDEO GRID SECTION === */}
      <section className="py-16 sm:py-12">
        <div className="container mx-auto px-4 sm:px-8 md:px-12 xl:px-20">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 md:gap-8 text-center">
            {videos.map((video, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="aspect-video w-full overflow-hidden shadow-md rounded-md">
                  <iframe
                    src={video.src}
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </div>
                <span className="mt-3 text-sm text-gray-700 leading-snug">
                  {video.caption}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}


/* === VIDEO GRID SECTION === */
//       <section className="py-16 sm:py-12">
//         <div className="container mx-auto px-4 sm:px-8 md:px-12 xl:px-20">
//          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6">
//   {videos.map((video, i) => (
//     <div key={i} className="mb-6 break-inside-avoid">
//       <div className="aspect-video overflow-hidden rounded-md shadow-md">
//         <iframe src={video.src} allowFullScreen className="w-full h-full"></iframe>
//       </div>
//       <p className="mt-2 text-sm text-gray-700">{video.caption}</p>
//     </div>
//   ))}
// </div>

//         </div>
//       </section>
