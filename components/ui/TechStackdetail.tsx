import { FaReact } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";

import { SiTailwindcss } from "react-icons/si";
import { FaCloudflare } from "react-icons/fa";
import { FaNode } from "react-icons/fa6";
import { SiExpress } from "react-icons/si";
import { SiRecoil } from "react-icons/si";
import { AiFillFire } from "react-icons/ai";
import { SiMongodb } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { GrMysql } from "react-icons/gr";
import { SiPrisma } from "react-icons/si";
import { FaGithub } from "react-icons/fa6";
import { FaDocker } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { TbBrandVscode } from "react-icons/tb";
import { RiNpmjsFill } from "react-icons/ri";
import { SiTurborepo } from "react-icons/si";
import { IoLogoVercel } from "react-icons/io5";
import { ReactNode } from "react";
import { TbBrandFramerMotion } from "react-icons/tb";
import { SiTypescript } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { FaPython } from "react-icons/fa";
import { TbBrandCpp } from "react-icons/tb";
import { SiPostman } from "react-icons/si";

interface Generictype{
    children:ReactNode,
    name:string
}

export const Programming:Generictype[]=[{
 children:<SiTypescript className="text-3xl  font-normal text-cyan-500"></SiTypescript>,
 name:'TypeScript'
},{
  children:<IoLogoJavascript className="text-3xl  font-normal text-yellow-400 bg-black"></IoLogoJavascript>,
  name:'JavaScript'
 },{
  children:<TbBrandCpp className="text-3xl  font-normal bg-blue-700"></TbBrandCpp>,
  name:'C++'
 },{
  children:<FaPython className="text-3xl  font-normal text-black"></FaPython>,
  name:'Python'
 },]

export const Tools:Generictype[]=[{
  children:<FaGithub  className="text-3xl  font-normal text-black"></FaGithub>,
  name:"Github"
},{
  children:<FaDocker  className="text-3xl  font-normal text-cyan-600"></FaDocker>,
  name:"Docker"
},{
  children:<FaGitAlt  className="text-3xl  font-normal bg-orange-500"></FaGitAlt>,
  name:"Git"
},{
  children:<TbBrandVscode  className="text-3xl  font-normal text-cyan-500"></TbBrandVscode>,
  name:"VsCode"
},{
  children:<RiNpmjsFill  className="text-3xl  font-normal text-red-600"></RiNpmjsFill>,
  name:"Npm"
},{
  children:<SiTurborepo  className="text-3xl  font-normal text-black"></SiTurborepo>,
  name:"Turborepo"
},{
  children:<IoLogoVercel  className="text-3xl  font-normal text-black"></IoLogoVercel>,
  name:"Vercel"
},{
  children:<SiPostman  className="text-3xl  font-normal text-orange-500"></SiPostman>,
  name:"Postman"
},]

export  const Database:Generictype[]=[{
    children:<BiLogoPostgresql  className="text-3xl  font-normal text-blue-800"></BiLogoPostgresql>,
    name:"Postgres"
  },{
    children:<SiMongodb  className="text-3xl  font-normal text-green-800"></SiMongodb>,
    name:"Mongodb"
  },{
    children:<GrMysql  className="text-3xl  font-normal text-blue-600/70"></GrMysql>,
    name:"MySql"
  },{
    children:<SiPrisma  className="text-3xl  font-normal text-blue-900"></SiPrisma>,
    name:"Prisma"
  },]
  
  export const Frontend:Generictype[]=[{
       children:<TbBrandNextjs className="text-3xl bg-black rounded-full  text-white "></TbBrandNextjs>,
       name:"Next.js"
  },{
    children:<FaReact className="text-3xl  font-normal text-cyan-500"></FaReact>,
    name:"React"
  },{
    children:<SiRecoil className="text-3xl  font-normal text-white bg-blue-400"></SiRecoil>,
    name:"Recoil"
  },{
    children:<SiTailwindcss className="text-3xl  font-normal text-cyan-500 "></SiTailwindcss>,
    name:"Tailwind"
  },{
    children:<TbBrandFramerMotion className="text-3xl  font-normal text-violet-600 "></TbBrandFramerMotion>,
    name:"Framer Motion"
  },]
  
  export const Backend:Generictype[]=[{
    children:<FaNode className="text-3xl  font-normal text-green-600"></FaNode>,
    name:"Node"
  },{
    children:<FaCloudflare className="text-3xl  font-normal text-orange-400"></FaCloudflare>,
    name:"CloudFlare"
  },{
    children:<SiExpress className="text-3xl  font-normal text-black"></SiExpress>,
    name:"Express"
  },{
    children:<AiFillFire className="text-3xl  font-normal text-orange-500"></AiFillFire>,
    name:"Hono"
  },]