"use client";
import { AiOutlineInstagram } from "react-icons/ai";
import { BiLogoGithub } from "react-icons/bi";
import { BiLogoYoutube } from "react-icons/bi";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";

export default function Navigationbar() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="flex justify-center">
      <div className="w-11/12 text-white text-lg md:text-xl py-4 z-50 fixed top-2 h-10 md:h-16 flex items-center justify-between  rounded-full bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-90  shadow-lg shadow-black drop-shadow-lg">
        <div className="flex text-sm gap-8 md:gap-12 ml-4 md:ml-10">
          <div
            className="cursor-pointer transform transition hover:scale-110 hover:text-gray-400"
            onClick={() => scrollToSection("1")}
          >
            Home
          </div>
          <div
            className="cursor-pointer transform transition hover:scale-110 hover:text-gray-400"
            onClick={() => scrollToSection("2")}
          >
            About Me
          </div>
          <div
            className="cursor-pointer transform transition hover:scale-110 hover:text-gray-400"
            onClick={() => scrollToSection("3")}
          >
            Projects
          </div>
          <div
            className="cursor-pointer transform transition hover:scale-110 hover:text-gray-400"
            onClick={() => scrollToSection("1")}
          >
            Skills
          </div>
          <div
            className="cursor-pointer transform transition hover:scale-110 hover:text-gray-400"
            onClick={() => scrollToSection("5")}
          >
            Contact
          </div>
        </div>

        <div className="flex justify-between gap-6 md:gap-10 items-center mr-6 md:mr-12">
          <a href={"https://github.com/Rahulsoni9321"} target="_blank">
            <div>
              <BiLogoGithub className="cursor-pointer transform transition hover:scale-110 hover:text-gray-400"></BiLogoGithub>
            </div>
          </a>
          <a
            href={"https://www.linkedin.com/in/rahul-soni-50b806203/"}
            target="_blank"
          >
            <div>
              <FaLinkedin className="cursor-pointer transform transition hover:scale-110 hover:text-gray-400"></FaLinkedin>
            </div>
          </a>
          <a href={"https://twitter.com/SoniRahul3108"} target="_blank">
            <div>
              <BsTwitterX className="cursor-pointer transform transition hover:scale-110 hover:text-gray-400"></BsTwitterX>
            </div>
          </a>
          <a href={"https://www.youtube.com/@index.developers"} target="_blank">
            <div>
              <BiLogoYoutube className="cursor-pointer transform transition hover:scale-110 hover:text-gray-400"></BiLogoYoutube>
            </div>
          </a>
          <a
            href={"https://www.instagram.com/index.developers/"}
            target="_blank"
          >
            <div>
              <AiOutlineInstagram className="cursor-pointer transform transition hover:scale-110 hover:text-gray-400"></AiOutlineInstagram>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
