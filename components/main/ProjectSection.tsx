"use client";
import React from "react";
import { Meteors } from "../ui/meteors";
import ProjectDetail from "../ui/ProjectDetail";
import { motion } from "framer-motion";
import MiniProject from "../ui/MiniProject";

const ProjectSection = () => {
  return (
    <motion.div
      whileInView={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      id="3"
      className="w-full relative  flex flex-col gap-24 justify-between items-center bg-black overflow-y-auto py-12 overflow-x-hidden "
    >
      <div className="absolute ">
        <Meteors number={30} className="z-30"></Meteors>
      </div>
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.3 }}
        className="  text-center text-3xl md:text-5xl bg-clip-text z-10 text-transparent bg-gradient-to-r from-neutral-700 to-white font-bold"
      >
        PROJECTS
      </motion.div>
      <ProjectDetail />
      <div className="w-full flex flex-col md:gap-12 gap-6 ">
        <motion.div whileInView={{y:0,opacity:1}} initial={{y:200,opacity:0}} transition={{duration:0.4}} className="text-center text-xl md:text-3xl z-10 text-transparent bg-clip-text  bg-gradient-to-r from-black via-gray-200 to-white font-bold ">
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
            title="Weather App"
            description=" web application built using HTML, CSS, and JavaScript. The app provides real-time weather information for different cities, including details such as temperature, humidity, and wind speed.The user interface is designed to be intuitive and visually appealing, offering a seamless experience for users to access weather updates."
            url="https://github.com/Rahulsoni9321/Weather-app"
          ></MiniProject>
          <MiniProject
            title="Todo App"
            description="A To-Do Application that take valid input from the user and stores the provided information to the database and also displays all the tasks and appends new task to it. User can also mark the task as completed and cannot put empty title and description as a task.
Tech Stack - React , Express , Node.js , Mongodb , zod"
            url="https://github.com/Rahulsoni9321/TO-DO-APP"
          ></MiniProject>
          <motion.div whileInView={{y:0,opacity:1}} initial={{y:100,opacity:0}} transition={{duration:0.4}} className="flex flex-col col-span-1 md:col-span-2 w-11/12 md:w-10/12 p-4 shadow-lg shadow-white/20  items-center  border border-gray-200 rounded-xl bg-black/70 text-white gap-6  ">
            <a
              href="https://github.com/Rahulsoni9321/"
              target="_blank"
              className="text-2xl text-center cursor-pointer hover:text-gray-400"
            >
              More Projects are Under Construction
            </a>
            <p className="text-xs md:text-sm font-medium">Stay Tuned ....</p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectSection;
