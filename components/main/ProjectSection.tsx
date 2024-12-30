"use client";
import React from "react";
import ProjectDetail from "../ui/ProjectDetail";
import { motion } from "framer-motion";
import MiniProject from "../ui/MiniProject";
import { MdConstruction } from "react-icons/md";
import { MiniProjectDetails } from "@/conifg";
import { CgExternal } from "react-icons/cg";
import { GrGithub } from "react-icons/gr";

const ProjectSection = () => {
  return (
    <div
      id="3"
      className="w-full relative  flex flex-col gap-24 justify-between overflow-y-hidden items-center bg-gradient-to-b from-black via-black to-[#090018]  py-12 overflow-x-hidden "
    >
      <div className="  text-center text-3xl md:text-5xl 2xl:text-6xl bg-clip-text z-10 text-transparent bg-gradient-to-r from-neutral-700 to-white font-bold">
        PROJECTS
      </div>
      <ProjectDetail />

      <div className="w-full flex flex-col 2xl:gap-20 md:gap-12 gap-6 2xl:max-w-7xl">
        <div className="text-center text-xl md:text-3xl 2xl:text-5xl  z-10 text-transparent bg-clip-text  bg-gradient-to-r from-black via-gray-200 to-white font-bold ">
          Mini Projects
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 place-content-center gap-12 place-items-center">
          {
            MiniProjectDetails.map((project,index)=>{
              return <MiniProject key={index} title={project.title} description={project.description} url={project.url}></MiniProject>
            })
          }
        
         
          <motion.div
            animate={{ y: 0, opacity: 1 }}
            initial={{ y: 100, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col col-span-1 md:col-span-2 w-11/12 md:w-10/12 p-4 shadow-lg shadow-white/20  items-center  border border-gray-200 rounded-xl bg-black/70 text-white gap-6  "
          >
            <a
              href="https://github.com/Rahulsoni9321/"
              target="_blank"
              className="text-2xl 2xl:text-4xl text-center cursor-pointer flex items-center gap-2 hover:text-gray-400"
            >
              <GrGithub></GrGithub> Explore  Github  
            </a>
            <p className="text-xs md:text-sm 2xl:text-xl 2xl:gap-6 font-medium flex gap-3 items-center">
              Stay Tuned....{" "}
              <MdConstruction className="text-white w-3 h-3 md:w-5 md:h-5 2xl:w-9 2xl:h-9"></MdConstruction>
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
