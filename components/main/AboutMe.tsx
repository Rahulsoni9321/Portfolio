"use client";
import React from "react";
import { SparklesCore } from "../ui/Sparkles";

import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <div id="2" className="w-full  h-screen flex flex-col justify-center bg-black ">
       <div className="text-2xl md:text-5xl  text-center font-serif font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-700">
                  About Me
                </div>
      <div className="relative w-full flex-grow flex  items-center ">
      {/* <SparklesCore
          id="2"
          speed={15}
          background="transparent"
          minSize={1}
          maxSize={1.4}
          particleDensity={40}
          className="absolute w-full h-full bg-black/50"
          particleColor="#FFFFFF"
        /> */}
        <div className="w-full flex h-full justify-center items-center md:w-1/2">
          
            <div className=" dark:bg-black bg-black  dark:bg-grid-white/[0.2] bg-grid-white/[0.2] relative flex items-center justify-center ">
              <div className="absolute pointer-events-none inset-0 flex gap-1 items-center  justify-center bg-black dark:bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)]"></div>
              <div className=" relative z-20  w-11/12">
               

                <motion.div
                  initial={{ x: -700, display: "hidden" }}
                  animate={{ x: 0, display: "block" }}
                  transition={{ delay: 1, duration: 1.2 }}
                  className="z-10 opacity-80 my-8 text-white text-xs md:text-sm font-normal w-full"
                >
                  {" "}
                  Dynamic and results-driven professional with expertise in
                  full-stack development, software engineering, and proficient
                  in data structures and algorithms. Equipped with the ability
                  to architect and develop production-level applications,
                  coupled with a strong aptitude for problem-solving. I am
                  committed to leveraging my comprehensive skill set to excel in
                  the tech field and contribute significantly to innovative
                  projects. I am eager to immerse myself in the business aspects
                  of application development while continuously expanding my
                  knowledge in emerging technologies such as AI and Web 3. I am
                  seeking a challenging role where I can apply my diverse skill
                  set and dedication to drive tangible business outcomes.
                </motion.div>
              </div>
            </div>
          </div>
        
       
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 60 }}
          transition={{ delay: 2, duration: 1 }}
          className="md:flex-grow h-3/4 hidden md:block  bg-[url('/bgimage2.jpg')] bg-center bg-cover bg-no-repeat rounded-full z-10"
        >
          <div className="w-full h-3/4 bg-gradient-to-r from-black/40 via-black/30 to-black/20"></div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutMe;

export function GridBackgroundDemo({ content }: { content: string }) {
  return (
    <div className=" dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
        {content}
      </p>
    </div>
  );
}
