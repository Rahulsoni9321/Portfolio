import React from "react";

const EventCard = ({
  CompanyName,
  Duration,
  Designation,
  Description,
}: any) => {
  return (
    <div className="flex flex-col px-6 py-2 gap-2 ">
      <div className="text-[12px] md:text-[22px]  font-medium text-white">{CompanyName}</div>
      <div className="text-[13px] md:text-2xl font-thin text-white">{Designation}</div>
      <div className="text-[9px] md:text-[14px] font-[300] text-gray-200">{Duration}</div>
      <div className="flex flex-col gap-1">
        {Description.map((points: string,index:number) => {
          return (
            <div key={index} className="text-[8px] md:text-sm font-normal leading-tight text-gray-100">
              &#xb7; {points}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default EventCard;
