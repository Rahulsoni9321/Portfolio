"use client"
import React from "react";
import ProjectContent from "./ProjectContent";
import PinCard from "./PinCard";
import { ProjectDetails } from "@/conifg";

const ProjectDetail = () => {
  return (
    <div className=" w-11/12 2xl:max-w-7xl h-full flex flex-col gap-8 justify-around items-center">

      {ProjectDetails.map((details) => {
          return (
            
            <div key={details.id} className="w-full hidden  md:flex justify-center md:gap-24">
            <ProjectContent
              title={details.title}
              description={details.description}
              Techstack={details.Techstack}
            ></ProjectContent>
            <a href={details.href} target="_blank">
              {" "}
              <PinCard
                title={details.projecttitle}
                bgurl={details.bgurl}
              ></PinCard>
            </a>
          </div>
        );
      })}
      {ProjectDetails.map((details) => {
          return (
            
            <div key={details.id} className="w-full relative md:hidden gap-4 py-8 px-2 flex flex-col items-center my-8  border-white/20 hover:border-white/60 hover:text-white text-sky-200 border-2 rounded-lg border-sky-200 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_1px_#08f,0_0_15px_#08f]">
              <div className="absolute -m-16 text-4xl text-black   font-extrabold font-outline-2 ">0{details.id}</div>
               <a href={details.href} target="_blank">
              {" "}
              <PinCard
                title={details.projecttitle}
                bgurl={details.bgurl}
              ></PinCard>
            </a>
            <ProjectContent
              title={details.title}
              description={details.description}
              Techstack={details.Techstack}
            ></ProjectContent>
           
          </div>
        );
      })}
    </div>
  );
};

export default ProjectDetail;
