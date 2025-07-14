import React from "react";
import { Meteors } from "../ui/meteors";
import { SparklesCore } from "../ui/Sparkles";
import { Spotlight } from "../ui/SpotLight";
import { Timeline } from "../ui/Timeline";

const WorkExperience = () => {
  return (
    <div id="3" className="  bg-black relative min-h-screen overflow-hidden">
      <Meteors number={45} className=" absolute"></Meteors>
      <Spotlight className=" absolute opacity-80"></Spotlight>
      <div className="z-20  mx-auto 2xl:max-w-7xl h-full  bg-transparent  w-full  ">
        <div className="  w-full text-center text-3xl md:text-5xl 2xl:text-6xl bg-clip-text text-transparent bg-gradient-to-t from-neutral-700 to-white font-bold">
          Work Experience
        </div>
        <div className="px-2 md:px-12 ">
          <Timeline data={[{
            title: "Feb 2025 - Present", content: (
              <div className="flex flex-col items-start">
                <h2>Al</h2>
              </div>
            )
          }]}></Timeline>
        </div>
      </div>
    </div>
  );
};






export default WorkExperience;
