import type { FC, ReactElement } from "react";
import { GiRadioTower } from "react-icons/gi";
import { LiaHandPointRight, LiaHandPointUp } from "react-icons/lia";
import { LuSquareMousePointer } from "react-icons/lu";

interface Feature {
  icon: ReactElement;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: <GiRadioTower />,
    title: "Key network infrastructure",
    description:
      "Owners of key network infrastructure with footprints across East, West & Central African Countries.",
  },
  {
    icon: <LuSquareMousePointer />,
    title: "Delivering Quality Services",
    description:
      "We pride ourselves in delivering quality services, therefore strictly adhering to all SLA agreements.",
  },
  {
    icon: <LiaHandPointRight />,
    title: "Developing an effective strategy",
    description:
      "We are integrators, i.e., we utilise a wide range of different technologies to provide an effective solution for our clients.",
  },
  {
    icon: <LiaHandPointUp />,
    title: "Automated testing and support",
    description:
      "We deliver world-class telecommunication services. Global 24/7 State-of-the-art Network Operations Centre (NOC) and Technical Assistance Centre (TAC).",
  },
];

const WhyPartnerWithUs: FC = () => {
  return (
    <section className="w-full py-8" style={{ backgroundColor: "#dfebf7" }}>
      <div className="px-3 sm:px-4 lg:px-6 max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-8">
          <span
            className="block text-base font-medium mb-2"
            style={{
              fontFamily: "Montserrat, sans-serif !important",
              color: "#b4b7bd",
            }}
          >
            Seamless Connectivity for All
          </span>
          <h2
            className="text-3xl md:text-4xl font-medium"
            style={{ fontFamily: "Montserrat, sans-serif !important" }}
          >
            Why partner with us
          </h2>
        </div>

        {/* Feature Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-4">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="group bg-white rounded-lg shadow overflow-hidden cursor-pointer transition-all duration-300 hover:bg-[#002f6c] flex items-center p-5 h-[180px]"
            >
              {/* Icon beside text */}
              <div className="text-[#002f6c] group-hover:text-[#dfebf7] transition-colors text-4xl flex-shrink-0 mr-4">
                {feature.icon}
              </div>

              {/* Text */}
              <div className="flex flex-col justify-center gap-1">
                <span
                  className="block font-semibold group-hover:text-white transition-colors text-lg"
                  style={{ fontFamily: "Montserrat, sans-serif !important" }}
                >
                  {feature.title}
                </span>
                <p
                  className="text-[#808080] text-base leading-snug group-hover:text-[#dfebf7]"
                  style={{
                    fontFamily: "Raleway, sans-serif !important",
                  }}
                >
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyPartnerWithUs;
