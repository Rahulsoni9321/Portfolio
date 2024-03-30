"use client"
import React from "react";
import ProjectContent from "./ProjectContent";
import PinCard from "./PinCard";
import { ProjectDetails } from "@/conifg";

const ProjectDetail = () => {
  return (
    <div className=" w-full h-full flex flex-col gap-12 justify-around items-center">

      {ProjectDetails.map((details) => {
          return (
            
            <div key={details.id} className="w-11/12  flex justify-center md:gap-16">
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
