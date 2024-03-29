"use client"
import React from "react";
import { FaDownload } from "react-icons/fa6";
import ContactForm from "../ui/ContactForm";
import {motion} from "framer-motion";

const ContactMe = () => {
  return (
    <div className="w-full flex md:flex-row flex-col gap-12 md:mb-12">
      <div className="flex-grow  flex flex-col gap-8 justify-center items-center ">
        <motion.div whileInView={{opacity:1,x:0}} initial={{opacity:0,x:100}} transition={{duration:0.4}} className=" text-3xl md:text-6xl font-bold bg-clip-text text-transparent  bg-gradient-to-r from-[#45337d] via-[#d6b3e8] to-[#f7cee7]">
          Get in Touch...
        </motion.div>
        <motion.button whileInView={{opacity:1,y:0}} initial={{opacity:0,y:100}} transition={{duration:0.4}} className="flex items-center gap-2 px-3 py-2 bg-black/90  bg-opacity-80   border-white/20 hover:border-white/60 hover:text-white  text-sky-200 border-2 rounded-lg border-sky-200 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_1px_#08f,0_0_15px_#08f]">
          <a 
            href="/Resume.pdf"
            download={true}
            className="text-md font-medium bg-gradient-to-r from-white  to-slate-500 text-transparent bg-clip-text"
          >
            Download Resume{" "}
          </a>
          <FaDownload className="w-4  h-4 opacity-70 text-white"></FaDownload>
        </motion.button>
      </div>

      <ContactForm></ContactForm>
    </div>
  );
};




export default ContactMe;
