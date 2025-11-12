import { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";
import { FiFacebook, FiLinkedin, FiYoutube } from "react-icons/fi";
import { FaGreaterThan } from "react-icons/fa";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navItems = [
    { to: "/solutions", label: "Solutions" },
    { to: "/key-projects", label: "Key Projects" },
    { to: "/our-story", label: "Our Story" },
    {
      to: "/press-releases",
      label: "Media",
      dropdown: [
        { label: "Press Releases", to: "/press-releases" },
        {
          label: "CABSAT",
          to: "https://www.flickr.com/photos/192942734@N02/albums/72177720308583975",
          external: true,
        },
      ],
    },
    { to: "/about-us", label: "Company" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <header className="w-full bg-white shadow-sm fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-10 py-6">
        <Link to="/" className="flex items-center gap-2">
          <img src="/k-NET.png" alt="KNET Logo" className="w-28 h-auto object-contain" />
        </Link>

       {/* Desktop Navigation */}
<nav className="hidden lg:flex items-center gap-8 relative">
  {[
    { to: "/solutions", label: "Solutions" },
    { to: "/key-projects", label: "Key Projects" },
    { to: "/our-story", label: "Our Story" },
    {
      to: "/press-releases", // Navigation to press releases page
      label: "Media",
      dropdown: [
        { label: "Press Releases", to: "/press-releases" },
        {
          label: "CABSAT",
          to: "https://www.flickr.com/photos/192942734@N02/albums/72177720308583975",
          external: true,
        },
      ],
    },
    { to: "/about-us", label: "Company" },
    { to: "/contact", label: "Contact" },
  ].map((item) => {
    if (item.dropdown) {
      return (
        <div key={item.to} className="relative group">
          <NavLink
            to={item.to}
            className="text-[15px] font-medium text-[#0a2a66] hover:text-gray-600 transition-colors duration-200"
          >
            {item.label}
          </NavLink>

         {/* Dropdown Menu */}
<div className="absolute left-0 mt-6 w-48 bg-white shadow-md rounded-md opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200 z-50">
  {item.dropdown.map((child) =>
    child.external ? (
      <a
        key={child.label}
        href={child.to}
        target="_blank"
        rel="noopener noreferrer"
        className="block px-4 py-2 text-[15px] font-medium text-[#0a2a66] hover:text-gray-600 transition-colors duration-200 flex justify-between items-center"
      >
        {child.label}
        {child.label === "CABSAT" && (
          <FaGreaterThan className="ml-2" style={{ fontSize: "0.6em" }} />
        )}
      </a>
    ) : (
      <NavLink
        key={child.label}
        to={child.to}
        className={({ isActive }) =>
          `block px-4 py-2 text-[15px] font-medium text-[#0a2a66] hover:text-gray-600 transition-colors duration-200 flex justify-between items-center ${
            isActive ? "font-semibold" : "font-medium"
          }`
        }
      >
        {child.label}
        {child.label === "CABSAT" && (
          <FaGreaterThan className="ml-2" style={{ fontSize: "0.6em" }} />
        )}
      </NavLink>
    )
  )}
</div>

        </div>
      );
    } else {
      return (
        <NavLink
          key={item.to}
          to={item.to}
          className={({ isActive }) =>
            `text-[15px] font-medium transition-colors duration-200 ${
              isActive
                ? "text-[#0a2a66] font-semibold"
                : "text-[#0a2a66] hover:text-gray-600"
            }`
          }
        >
          {item.label}
        </NavLink>
      );
    }
  })}
</nav>


        <div className="hidden lg:flex items-center gap-4 text-knetBlue text-lg">
          <a href="https://www.facebook.com/knetafrica/" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
            <FiFacebook />
          </a>
          <a href="https://www.instagram.com/knetghana/" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://www.linkedin.com/company/knet-ghana/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
            <FiLinkedin />
          </a>
          <a href="https://www.youtube.com/@knetghana4228" aria-label="YouTube" target="_blank" rel="noopener noreferrer">
            <FiYoutube />
          </a>
        </div>

        <button
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation"
          className="lg:hidden text-[#0a2a66] text-3xl focus:outline-none"
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {menuOpen && (
        <div ref={menuRef} className="lg:hidden absolute top-full left-0 w-full bg-white shadow-md border-t border-gray-100">
          <div className="flex flex-col items-center py-4 space-y-4">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className="text-gray-800 hover:text-knetBlue font-medium"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}

            <div className="flex items-center gap-4 pt-2 text-knetBlue text-lg">
              <a href="https://www.facebook.com/knetafrica/" aria-label="Facebook">
                <FiFacebook />
              </a>
              <a href="https://www.instagram.com/knetghana/" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="https://www.linkedin.com/company/knet-ghana/" aria-label="LinkedIn">
                <FiLinkedin />
              </a>
              <a href="https://www.youtube.com/@knetghana4228" aria-label="YouTube">
                <FiYoutube />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
