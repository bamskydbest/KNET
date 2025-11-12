import { FiFacebook, FiLinkedin, FiYoutube } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      className="text-white py-4 md:py-6" 
      style={{ backgroundColor: "#002f6c" }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 sm:grid-cols-3 gap-4 items-center text-center sm:text-left"> 
        

        {/* Left Section - Logo */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start justify-center sm:justify-start gap-2">
          
          <img
            src="/k-NET.png"
            alt="K-NET"
            className="h-10 object-contain"
          />
        </div>

        {/* Center Section - Dynamic Year */}
        <div className="text-md opacity-90 flex justify-center items-center gap-1">
          <span>Copyright © {new Date().getFullYear()}</span>
          <span className="text-[#2e94eb]">K-NET</span>
          <span>...Endless Possibilities</span>
        </div>

        {/* Right Section - Social Icons */}
        <div className="flex justify-center sm:justify-end items-center gap-3 text-xl">
          
          <a
            href="https://www.facebook.com/knetafrica/"
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook"
            className="hover:text-[#39cdcc] transition-colors duration-300"
          >
            <FiFacebook />
          </a>
          <a
            href="https://www.instagram.com/knetghana/"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className="hover:text-[#39cdcc] transition-colors duration-300"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.linkedin.com/company/knet-ghana/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="hover:text-[#39cdcc] transition-colors duration-300"
          >
            <FiLinkedin />
          </a>
          <a
            href="https://www.youtube.com/@knetghana4228"
            target="_blank"
            rel="noreferrer"
            aria-label="YouTube"
            className="hover:text-[#39cdcc] transition-colors duration-300"
          >
            <FiYoutube />
          </a>
        </div>
      </div>
    </footer>
  );
}
