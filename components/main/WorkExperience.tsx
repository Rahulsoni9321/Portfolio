"use client"

import React, { useState } from "react";
import { Meteors } from "../ui/meteors";
import { Spotlight } from "../ui/SpotLight";
import { Timeline } from "../ui/Timeline";
import CompanyCard from "../ui/CompanyCard";
import { WorkExperienceDetails } from "@/conifg";
import { BiBriefcase } from "react-icons/bi";

const WorkExperience = () => {

  const [hoverId, setHoverId] = useState<number | null>(null);

  const onMouseEnter = (id: number) => {
    setHoverId(id)
  }
  const onMouseLeave = () => {
    setHoverId(null)
  }

  return (
    <div id="3" className="  bg-black relative min-h-screen overflow-hidden">
      <Meteors number={45} className=" absolute"></Meteors>
      <Spotlight className=" absolute opacity-80"></Spotlight>
      <div className="z-20  mx-auto 2xl:max-w-7xl h-full  bg-transparent  w-full  ">
        <div className="  w-full text-center text-3xl md:text-5xl 2xl:text-6xl bg-clip-text text-transparent bg-gradient-to-t from-neutral-700 to-white font-bold">
          Work Experience
        </div>
        <div className="flex justify-center mt-8 items-center max-w-56 mx-auto space-x-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full text-sm font-medium text-gray-700 mb-6">
            <BiBriefcase className="w-4 h-4" />
            <span>Professional Journey</span>
          </div>
       
          <Timeline data={WorkExperienceDetails.map((details) => {
            return {
              title: details.title,
              content: <CompanyCard onMouseEnter={()=>onMouseEnter(details.id)} onMouseLeave={onMouseLeave} hoverId={hoverId} companyId={details.id} companyDetails={details.companyMetaData}></CompanyCard>
            }
          })}></Timeline>
      </div>
    </div>
  );
};






export default WorkExperience;
