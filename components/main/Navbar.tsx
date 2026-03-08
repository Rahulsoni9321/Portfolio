"use client";
import { useState, useEffect } from "react";
import { AiOutlineInstagram } from "react-icons/ai";
import { BiLogoGithub, BiLogoYoutube } from "react-icons/bi";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

const navLinks = [
  { id: "home", name: "Home" },
  { id: "experience", name: "Experience" },
  { id: "projects", name: "Projects" },
  { id: "skills", name: "Skills" },
  { id: "about", name: "About" },
  { id: "contact", name: "Contact" },
];

export default function Navigationbar() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    navLinks.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { threshold: 0.35, rootMargin: "-5% 0px -5% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.div
      initial={{ opacity: 0.2 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4, duration: 2 }}
      className="flex justify-center max-w-screen fixed top-0 left-0 right-0 z-50 pt-2"
    >
      <div className="w-11/12 2xl:max-w-7xl py-4 z-50 h-12 md:h-16 2xl:h-20 flex items-center md:justify-between rounded-full bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-90 shadow-lg shadow-black drop-shadow-lg"
        style={{ background: "rgba(10,10,20,0.85)", border: "1px solid rgba(255,255,255,0.08)" }}
      >
        {/* Nav links */}
        <div className="flex md:flex-none flex-grow justify-around text-xs md:text-sm text-white md:gap-8 lg:gap-12 mx-2 md:ml-10">
          {navLinks.map((nav) => (
            <button
              key={nav.id}
              onClick={() => scrollTo(nav.id)}
              aria-current={activeSection === nav.id ? "page" : undefined}
              className="relative cursor-pointer transform transition hover:scale-110 text-md 2xl:text-xl outline-none"
              style={{ color: activeSection === nav.id ? "var(--accent-start)" : "#fff" }}
            >
              {nav.name}
              {activeSection === nav.id && (
                <motion.span
                  layoutId="nav-underline"
                  className="absolute -bottom-1.5 left-0 right-0 h-px rounded-full"
                  style={{ background: "var(--accent-start)" }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Social icons */}
        <div className="md:flex md:justify-between gap-6 hidden md:gap-10 items-center mr-6 md:mr-12 lg:text-xl">
          <a href="https://github.com/Rahulsoni9321" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <BiLogoGithub className="cursor-pointer transform transition hover:scale-110 text-white hover:text-gray-400" />
          </a>
          <a href="https://www.linkedin.com/in/rahul-soni-50b806203/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin className="cursor-pointer transform transition text-cyan-600 hover:scale-110 hover:text-gray-400" />
          </a>
          <a href="https://twitter.com/SoniRahul3108" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <BsTwitterX className="cursor-pointer transform transition hover:scale-110 text-white hover:text-gray-400" />
          </a>
          <a href="https://www.youtube.com/@index.developers" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
            <BiLogoYoutube className="cursor-pointer transform transition text-xl lg:text-2xl hover:scale-110 text-red-600 hover:text-gray-400" />
          </a>
          <a href="https://www.instagram.com/index.developers/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <AiOutlineInstagram className="cursor-pointer transform transition text-xl lg:text-2xl text-pink-800 hover:scale-110 hover:text-gray-400" />
          </a>
        </div>
      </div>
    </motion.div>
  );
}
