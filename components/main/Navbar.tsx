"use client";
import { AiOutlineInstagram } from "react-icons/ai";
import { BiLogoGithub } from "react-icons/bi";
import { BiLogoYoutube } from "react-icons/bi";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import {motion} from "framer-motion";

const Navigationcontent=[{
  id:"1",
  name:"Home"
},{
  id:"2",
  name:"About"
},
{
  id:"3",
  name:"Projects"
},
{
  id:"4",
  name:"Skills"
},
{
  id:"5",
  name:"Contact"
}]

export default function Navigationbar() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <motion.div initial={{opacity:0.2}} animate={{opacity:1}} transition={{delay:0.4,duration:2}} className="flex justify-center max-w-screen">
      <div className="w-11/12 2xl:max-w-7xl   py-4 z-50 fixed top-2 h-12 md:h-16 2xl:h-20 flex items-center md:justify-between rounded-full bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-90  shadow-lg shadow-black drop-shadow-lg">
        <div className=" flex md:flex-none flex-grow justify-around text-xs md:text-sm text-white  md:gap-8 lg:gap-12 mx-2 md:ml-10">
          {Navigationcontent.map((nav)=>{

         return  <div key={nav.id}
            className="cursor-pointer transform transition hover:scale-110 text-md 2xl:text-xl hover:text-gray-400"
            onClick={() => scrollToSection(nav.id)}
          >
            {nav.name}
          </div>
          })}
         
        </div>

        <div className="md:flex md:justify-between gap-6 hidden   md:gap-10 items-center mr-6 md:mr-12  lg:text-xl">
          <a href={"https://github.com/Rahulsoni9321"} target="_blank">
            <div>
              <BiLogoGithub className="cursor-pointer transform transition hover:scale-110 text-white hover:text-gray-400"></BiLogoGithub>
            </div>
          </a>
          <a
            href={"https://www.linkedin.com/in/rahul-soni-50b806203/"}
            target="_blank"
          >
            <div>
              <FaLinkedin className="cursor-pointer transform transition text-cyan-600  hover:scale-110 hover:text-gray-400"></FaLinkedin>
            </div>
          </a>
          <a href={"https://twitter.com/SoniRahul3108"} target="_blank">
            <div>
              <BsTwitterX className="cursor-pointer transform transition hover:scale-110 text-white hover:text-gray-400"></BsTwitterX>
            </div>
          </a>
          <a href={"https://www.youtube.com/@index.developers"} target="_blank">
            <div>
              <BiLogoYoutube className="cursor-pointer transform transition text-xl lg:text-2xl hover:scale-110 text-red-600 hover:text-gray-400"></BiLogoYoutube>
            </div>
          </a>
          <a
            href={"https://www.instagram.com/index.developers/"}
            target="_blank"
          >
            <div>
              <AiOutlineInstagram className="cursor-pointer transform transition text-xl lg:text-2xl text-pink-800 hover:scale-110 hover:text-gray-400"></AiOutlineInstagram>
            </div>
          </a>
        </div>
      </div>
    </motion.div>
  );
}
