import { GrSatellite } from "react-icons/gr";
import { LuSatelliteDish } from "react-icons/lu";
import { PiCellTower } from "react-icons/pi";
import { TbCloudLock } from "react-icons/tb";

export default function OurStory() {
  return (
    <section
      className="relative flex justify-center wow animate__fadeIn bg-cover bg-center bg-no-repeat !font-['Raleway'] py-12 md:py-16"
      style={{ backgroundImage: "url('/knetbg.png')" }}
    >
      {/* White overlay */}
      <div className="absolute inset-0 bg-white opacity-30"></div>

      {/* Section content */}
      <div className="relative w-full max-w-7xl px-6 md:px-10">
        <div className="flex flex-wrap justify-center">
          {/* Left Column */}
          <div className="w-full xl:w-3/12 lg:w-4/12 sm:w-7/12 flex flex-col text-center lg:text-left mb-16 lg:mb-0 lg:mr-20 xl:mr-24">
            <div className="mb-4 sm:mb-5">
              <span className="uppercase tracking-wide font-semibold" style={{ color: "#3b608e" }}>
                Our Story
              </span>
            </div>

            <h2
              className="font-['Montserrat'] font-bold mb-3 md:mb-5 text-2xl md:text-2.5xl lg:text-3xl leading-snug"
              style={{ color: "#3b608e" }}
            >
              Pushing the <br /> limits of what's <br /> possible
            </h2>

            <p
              className="text-base md:text-lg font-light"
              style={{
                color: "#989898",
                fontFamily: "'Raleway', sans-serif",
                lineHeight: "1.75",
              }}
            >
              K-NET’s business solutions offer unrivalled levels of reliability, performance,
              customer service and value.
            </p>

            <div className="mt-6 mx-auto lg:mx-0 pt-6">
              <a
                href="/about-us"
                className="btn btn-fancy btn-small rounded-full border-2 border-[#3b608e] text-[#989898] px-6 py-2 transition-colors duration-300 
                hover:bg-[#dbdbdb] hover:text-black hover:border-[#dbdbdb]
                sm:px-5 sm:py-2 sm:text-sm md:px-6 md:py-2 md:text-base lg:px-6 lg:py-2 lg:text-base"
              >
                Discover KNET
              </a>
            </div>
          </div>

          {/* Right Column */}
          <div className="w-full xl:w-7/12 lg:w-8/12">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-12 lg:gap-14">
              {/* Feature 1 */}
              <div className="feature-box flex items-start gap-6 wow animate__fadeIn">
                <div className="text-3xl mt-1" style={{ color: "#3b608e" }}>
                  <GrSatellite />
                </div>
                <div>
                  <span className="font-['Montserrat'] font-bold block mb-1" style={{ color: "#3b608e" }}>
                    State-of-the-art
                  </span>
                  <p
                    className="text-base font-light"
                    style={{
                      color: "#989898",
                      fontFamily: "'Raleway', sans-serif",
                      lineHeight: "1.75",
                    }}
                  >
                    We have state-of-the-art <br /> infrastructure and tremendous <br /> knowledge in
                    telecommunication and <br /> broadcasting solutions.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="feature-box flex items-start gap-6 wow animate__fadeIn" style={{ animationDelay: "0.2s" }}>
                <div className="text-3xl mt-1" style={{ color: "#3b608e" }}>
                  <TbCloudLock />
                </div>
                <div>
                  <span className="font-['Montserrat'] font-bold block mb-1" style={{ color: "#3b608e" }}>
                    World Class
                  </span>
                  <p
                    className="text-base font-light"
                    style={{
                      color: "#989898",
                      fontFamily: "'Raleway', sans-serif",
                      lineHeight: "1.75",
                    }}
                  >
                    We deliver world-class <br /> telecoms services comparable <br /> to any telecom
                    services to be <br /> found anywhere in the world.
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="feature-box flex items-start gap-6 wow animate__fadeIn" style={{ animationDelay: "0.4s" }}>
                <div className="text-3xl mt-1" style={{ color: "#3b608e" }}>
                  <LuSatelliteDish />
                </div>
                <div>
                  <span className="font-['Montserrat'] font-bold block mb-1" style={{ color: "#3b608e" }}>
                    Satellite Teleport
                  </span>
                  <p
                    className="text-base font-light"
                    style={{
                      color: "#989898",
                      fontFamily: "'Raleway', sans-serif",
                      lineHeight: "1.75",
                    }}
                  >
                    Our Satellite teleport covers all <br /> over Ghana as well as West & <br /> Central Africa.
                  </p>
                </div>
              </div>

              {/* Feature 4 */}
              <div className="feature-box flex items-start gap-6 wow animate__fadeIn" style={{ animationDelay: "0.6s" }}>
                <div className="text-3xl mt-1" style={{ color: "#3b608e" }}>
                  <PiCellTower />
                </div>
                <div>
                  <span className="font-['Montserrat'] font-bold block mb-1" style={{ color: "#3b608e" }}>
                    Terrestrial Infrastructure
                  </span>
                  <p
                    className="text-base font-light"
                    style={{
                      color: "#989898",
                      fontFamily: "'Raleway', sans-serif",
                      lineHeight: "1.75",
                    }}
                  >
                    In Ghana, we connect from city <br /> to countryside through our <br /> resilient Satellite –
                    Terrestrial <br /> infrastructure.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
