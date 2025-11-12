import { FiFacebook, FiLinkedin, FiYoutube } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      className="text-white py-4 md:py-6"
      style={{ backgroundColor: "#002f6c" }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">

        {/* Left Section - Logo */}
        <div className="flex items-center justify-center sm:justify-start">
          <img
            src="/k-NET.png"
            alt="K-NET"
            className="h-10 object-contain"
          />
        </div>

        {/* Center Section - Dynamic Year */}
        <div className="flex flex-col sm:flex-row items-center gap-2 text-md opacity-90 text-center">
          {/* Copyright (always together) */}
          <div className="whitespace-nowrap">
            Copyright © {new Date().getFullYear()}
          </div>

          {/* K-NET + Endless Possibilities (always together) */}
          <div className="flex items-center gap-1 whitespace-nowrap">
            <span className="text-[#2e94eb] font-semibold">K-NET</span>
            <span>...Endless Possibilities</span>
          </div>
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
