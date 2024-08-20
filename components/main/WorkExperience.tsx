import React from "react";
import { Meteors } from "../ui/meteors";
import { SparklesCore } from "../ui/Sparkles";
import Timeline from "../ui/Timeline";
import { Spotlight } from "../ui/SpotLight";

const WorkExperience = () => {
  return (
    <div id="12" className=" min-h-screen bg-black  relative overflow-x-hidden">
      <Meteors number={45} className="z-10 absolute "></Meteors>
      <Spotlight className=" absolute opacity-80"></Spotlight>
      {/* <SparklesCore
        id="12"
        speed={10}
        background="transparent"
        minSize={1}
        maxSize={1.4}
        particleDensity={30}
        className="absolute w-full h-full  bg-black/60 "
        particleColor="#FFFFFF"
      /> */}
      <div className="z-20 mx-auto 2xl:max-w-7xl h-full  bg-transparent  w-full  ">
        <div className="  w-full text-center text-3xl md:text-5xl 2xl:text-6xl bg-clip-text text-transparent bg-gradient-to-t from-neutral-700 to-white font-bold">
          Work Experience
        </div>
        <div className="px-2 md:px-12  overflow-y-scroll">
          <Timeline></Timeline>
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
