import { useEffect, useState } from "react";

const LogoSlider = () => {
  const logos = Array.from({ length: 31 }, (_, i) =>
    i === 0 ? `/logos/logo1.jpg` : `/logos/logo${i + 1}.png`
  );

  const chunkSize = 8;
  const logoGroups: string[][] = [];

  for (let i = 0; i < logos.length; i += chunkSize) {
    const group = logos.slice(i, i + chunkSize);
    if (group.length === 8) logoGroups.push(group);
  }

  const [currentGroup, setCurrentGroup] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGroup((prev) => (prev + 1) % logoGroups.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [logoGroups.length]);

  return (
    <section
      className="relative bg-white flex items-center justify-center overflow-hidden py-2 md:py-4"
      style={{ minHeight: "120px" }} 
    >
      <div className="w-full max-w-7xl mx-auto px-2 sm:px-4 md:px-6 flex items-center justify-center">
        <div
          key={currentGroup}
          className="flex flex-wrap items-center justify-center gap-x-6 sm:gap-x-8 md:gap-x-10 gap-y-4 transition-opacity duration-700 ease-in-out opacity-100"
        >
          {logoGroups[currentGroup].map((src, index) => (
            <div
              key={index}
              className="flex items-center justify-center w-16 sm:w-20 md:w-24 lg:w-28 h-12 sm:h-14 md:h-16 lg:h-20"
            >
              <img
                src={src}
                alt={`Client Logo ${index + 1}`}
                className="h-full w-auto object-contain opacity-90 hover:opacity-100 transition-opacity duration-300"
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoSlider;
