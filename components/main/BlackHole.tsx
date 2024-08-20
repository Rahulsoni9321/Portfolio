"use client"
import React from "react";
import { SparklesCore } from "../ui/Sparkles";
import ContactMe from "./ContactMe";
import { Meteors } from "../ui/meteors";

const BlackHole = () => {
  return (
    <div id="5"
     
    
    className=" w-full h-screen relative  overflow-x-hidden  "
    >
      <div className="absolute z-10 mt-28 ">
      <Meteors number={15} ></Meteors>
      </div>
    <div  className=" w-full h-full  flex items-center">

       <video 
        muted  className=" -z-10 absolute object-cover w-full h-full">
        <source src="/blackhole.webm" />
      </video>
      
      <SparklesCore
        id="10"
        speed={5}
        background="transparent"
        minSize={1}
        maxSize={1.4}
        particleDensity={15}
        className="absolute w-full h-full   bg-black/60"
        particleColor="#FFFFFF"
      />
      <div className="absolute w-full flex justify-center z-10">
        <ContactMe></ContactMe>
      </div>
      
    </div>
    </div>
  );
};

export default BlackHole;
