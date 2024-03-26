import React from "react";
import { PinContainer } from "../ui/3d-pins";
import { SparklesCore } from "../ui/Sparkles";
import { Meteors } from "../ui/meteors";
import PinCard from "../ui/PinCard";
import ProjectContent from "./ProjectContent";

const ProjectSection = () => {
  return (
    <div id="3" className="w-full h-screen relative flex flex-col items-center bg-black overflow-y-auto ">
        <div className="  text-center text-3xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 font-bold">
          PROJECTS
        </div>
        {/* <Meteors className="h-1/12" number={4}></Meteors> */}
        {/* <SparklesCore
          id="3"
          speed={23}
          background="transparent"
          minSize={1}
          maxSize={1.4}
          particleDensity={40}
          className="absolute w-full h-full  bg-black/50"
          particleColor="#FFFFFF"
        /> */}
        <div className="absolute w-full h-full flex flex-col justify-around items-center">


          <div className="w-11/12  flex  gap-12 rounded-2xl  p-2   md:px-4">
            <div className="flex-grow flex gap-4 flex-col h-full pt-4 md:px-4  text-white hover:shadow-lg hover:shadow-white/30 hover:border hover:border-1 hover:border-gray-300 hover:bg-black transform transition duration-200 hover:text-white hover:scale-105 rounded-xl delay-0.6 ">
              {/* <Meteors className="h-1/12" number={4}></Meteors> */}
              <ProjectContent
                title="OpenUp"
                description=" Backend operations were managed through serverless architecture
                using Cloudflare Workers, Hono, TypeScript, JWT authentication,
                and Zod for schema validation. • Database operations were
                streamlined using PostgreSQL, Prisma ORM, and database pooling
                methodology with Prisma Accelerate. • On the frontend, react was
                utilized for infinite scrolling and Tailwind CSS with Daisy UI
                for responsive design • Optimized backend performance and
                database communication through modern technologies. Tech"
              ></ProjectContent>
            </div>

            <PinCard title="OpenUp" children="OpenUp"></PinCard>
          </div>


          <div className="w-11/12  flex  gap-12 rounded-2xl  p-2  md:px-4">
            <PinCard title="TransactEase" children="TransactEase"></PinCard>
            <div className="flex-grow flex gap-4 flex-col h-full pt-4 md:px-4  text-white hover:shadow-lg hover:shadow-white/30 hover:border hover:border-1 hover:border-gray-300 hover:bg-black transform transition duration-200 hover:text-white hover:scale-105 rounded-xl delay-0.6 ">
              <ProjectContent
                title="TransactEase"
                description=" Cutting-edge dummy money transfer app. In this project, I utilized Node.js and Express.js for a resilient backend, incorporating JWT for secure authentication.
•
user and account data are stored securely in MongoDB with Mongoose ODM, and transactions are safeguarded with DB sessions.
•
implemented React.js with React Router DOM for a dynamic and secure user experience. The sleek and responsive UI design is achieved through Tailwind CSS."
              ></ProjectContent>
            </div>
          </div>


        </div>
      </div>
   
  );
};

export default ProjectSection;
