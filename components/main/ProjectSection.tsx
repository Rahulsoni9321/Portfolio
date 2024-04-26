"use client";
import React from "react";
import { Meteors } from "../ui/meteors";
import ProjectDetail from "../ui/ProjectDetail";
import { motion } from "framer-motion";
import MiniProject from "../ui/MiniProject";
import { MdConstruction } from "react-icons/md";

const ProjectSection = () => {
  return (
    <motion.div
      whileInView={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      id="3"
      className="w-full relative  flex flex-col gap-24 justify-between items-center bg-black overflow-y-auto py-12 overflow-x-hidden "
    >
      
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.3 }}
        className="  text-center text-3xl md:text-5xl 2xl:text-9xl bg-clip-text z-10 text-transparent bg-gradient-to-r from-neutral-700 to-white font-bold"
      >
        PROJECTS
      </motion.div>
      <ProjectDetail />


      
      <div className="w-full flex flex-col 2xl:gap-20 md:gap-12 gap-6 ">
        <motion.div whileInView={{y:0,opacity:1}} initial={{y:200,opacity:0}} transition={{duration:0.4}} className="text-center text-xl md:text-3xl 2xl:text-5xl  z-10 text-transparent bg-clip-text  bg-gradient-to-r from-black via-gray-200 to-white font-bold ">


          Mini Projects
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 place-content-center gap-12 place-items-center">
          <MiniProject
            title="Youtube Clone"
            description="Utilized React and Tailwind CSS to create a visually appealing YouTube-like interface. Implemented dynamic routing with React Router for seamless navigation between pages. This project demonstrates proficiency in React, Tailwind CSS, and React Router."
            url="https://github.com/Rahulsoni9321/Youtube-clone"
          ></MiniProject>

          <MiniProject
            title="Discord-AI-Chatbot"
            description="Discord chatbot equipped with generative response capabilities, just like ChatGPT! Leveraging Flock-io API and Discord's API. A personalized chatbot on Discord!  with just a simple '/', users can summon their own private thread for personalized responses."
            url="https://github.com/Rahulsoni9321/AI-Chatbot-Discord"
          ></MiniProject>

          <MiniProject
            title="Dukaan-UI-clone"
            description="Dashboard of Dukaan web application made using React and Tailwind. Built a clean UI with multiple reusable components."
            url="https://dukaan-fe-five.vercel.app/"
          ></MiniProject>
          <MiniProject
            title="Qid-clone"
            description="Built a multi page website static website leveraging react-router-dom for dynamic routes. Cloned the website in a pixel perfect way.  
Tech Stack - React, Tailwind"
            url="https://qid-clone-xi.vercel.app"
          ></MiniProject>
          <motion.div whileInView={{y:0,opacity:1}} initial={{y:100,opacity:0}} transition={{duration:0.4}} className="flex flex-col col-span-1 md:col-span-2 w-11/12 md:w-10/12 p-4 shadow-lg shadow-white/20  items-center  border border-gray-200 rounded-xl bg-black/70 text-white gap-6  ">
            <a
              href="https://github.com/Rahulsoni9321/"
              target="_blank"
              className="text-2xl 2xl:text-4xl text-center cursor-pointer hover:text-gray-400"
            >
              More Projects are Under Construction
            </a>
            <p className="text-xs md:text-sm 2xl:text-xl 2xl:gap-6 font-medium flex gap-3 items-center">Stay Tuned.... <MdConstruction className="text-white w-3 h-3 md:w-5 md:h-5 2xl:w-9 2xl:h-9"></MdConstruction></p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectSection;
