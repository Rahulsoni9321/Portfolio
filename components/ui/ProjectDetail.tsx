"use client"
import React from "react";
import ProjectContent from "./ProjectContent";
import PinCard from "./PinCard";
import { ProjectDetails } from "@/conifg";
import { Meteors } from "./meteors";
import {motion} from "framer-motion"
const ProjectDetail = () => {
  return (
    <div className=" w-full h-full flex flex-col gap-12 justify-around items-center">
        <Meteors number={40}></Meteors>

      {ProjectDetails.map((details) => {
          return (
            
            <div className="w-11/12  flex  gap-12 rounded-2xl  p-2   md:px-4">
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
    </div>
  );
};

export default ProjectDetail;
