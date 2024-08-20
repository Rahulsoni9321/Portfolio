import React, { Fragment } from "react";
import EventCard from "./EventCard";

const Timeline = () => {
  return (
    <div className="mx-auto flex flex-col items-center gap-2 w-full  py-12">
      <Circle></Circle>
      {Experience.map((details, index) => {
        return (
          <Fragment key={index} >
            {" "}
            <div className="grid grid-cols-[1fr_auto_1fr] gap-x-1 md:gap-x-2 items-center mx-auto py-1 md:py-3">
              {details.direction == "right" ? (
                <>
                  <EventCard
                    Duration={details.Duration}
                    Description={details.Description}
                    Designation={details.Designation}
                    CompanyName={details.CompanyName}
                  ></EventCard>
                </>
              ) : (
                <div></div>
              )}
              <Pillar></Pillar>
              {details.direction == "left" ? (
                <>
                  <EventCard
                    Duration={details.Duration}
                    Description={details.Description}
                    Designation={details.Designation}
                    CompanyName={details.CompanyName}
                  ></EventCard>
                </>
              ) : (
                <div></div>
              )}
            </div>
            <Circle></Circle>
          </Fragment>
        );
      })}
    </div>
  );
};

const Experience = [
  {
    CompanyName: "JourneyHub",
    Designation: "Full Stack Developer",
    Duration: "April 2024 - Present",
    Description: ["Independently developed the initial product for an early-stage startup, managing both backend and frontend development.", "Led the integration of various travel-related APIs, ensuring seamless functionality.","Actively contributed to product strategy and enhancement through detailed analysis and integration planning."],
    direction: "left",
  },{
    CompanyName: "Freelance",
    Designation: "Web3 Frontend Developer",
    Duration: "May 2024 - May 2024",
    Description: ["Contributed as a Frontend Developer for a dApp, playing a pivotal role in creating the product's frontend."," Developed a seamless single-page application and successfully integrated a feature allowing users to connect their wallets."," Focused on leveraging Web3 technologies to align with the company’s innovative objectives."],
    direction: "right",
  }
];
const Circle = () => {
  return <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-white "></div>;
};

const Pillar = () => {
  return <div className="h-full w-[1px] md:w-[2px] rounded-full bg-gray-400"></div>;
};

export default Timeline;
