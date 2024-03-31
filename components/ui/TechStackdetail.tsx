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
import { SiSocketdotio } from "react-icons/si";

export interface Generictype{
    id:number,
    children:ReactNode,
    name:string
}

export const Programming:Generictype[]=[{
  id:1,
 children:<SiTypescript className="text-3xl  font-normal text-cyan-500"></SiTypescript>,
 name:'TypeScript'
},{
  id:2,
  children:<IoLogoJavascript className="text-3xl  font-normal text-yellow-400 bg-black"></IoLogoJavascript>,
  name:'JavaScript'
 },{
  id:3,
  children:<TbBrandCpp className="text-3xl  font-normal bg-blue-700 text-white"></TbBrandCpp>,
  name:'C++'
 },{
  id:4,
  children:<FaPython className="text-3xl  font-normal text-black"></FaPython>,
  name:'Python'
 },]

export const Tools:Generictype[]=[{
  id:5,
  children:<FaGithub  className="text-3xl  font-normal text-black"></FaGithub>,
  name:"Github"
},{
  id:6,
  children:<FaGitAlt  className="text-3xl  font-normal bg-orange-500"></FaGitAlt>,
  name:"Git"
},{
  id:7,
  children:<FaDocker  className="text-3xl  font-normal text-cyan-600"></FaDocker>,
  name:"Docker"
},{
  id:8,
  children:<SiSocketdotio  className="text-3xl  font-normal text-black "></SiSocketdotio>,
  name:"Socket.io"
},
{
  id:9,
  children:<TbBrandVscode  className="text-3xl  font-normal text-cyan-400"></TbBrandVscode>,
  name:"VsCode"
},{
  id:10,
  children:<RiNpmjsFill  className="text-3xl  font-normal text-red-600"></RiNpmjsFill>,
  name:"Npm"
},{
  id:11,
  children:<SiTurborepo  className="text-3xl  font-normal text-black"></SiTurborepo>,
  name:"Turborepo"
},{
  id:12,
  children:<IoLogoVercel  className="text-3xl  font-normal text-black"></IoLogoVercel>,
  name:"Vercel"
},{
  id:13,
  children:<SiPostman  className="text-3xl  font-normal text-orange-500"></SiPostman>,
  name:"Postman"
},]

export  const Database:Generictype[]=[{
  id:14,
    children:<BiLogoPostgresql  className="text-3xl  font-normal text-blue-800"></BiLogoPostgresql>,
    name:"Postgres"
  },{
    id:15,
    children:<SiMongodb  className="text-3xl  font-normal text-green-800"></SiMongodb>,
    name:"Mongodb"
  },{
    id: 16,
    children:<GrMysql  className="text-3xl  font-normal text-blue-600/70"></GrMysql>,
    name:"MySql"
  },{
    id:17,
    children:<SiPrisma  className="text-3xl  font-normal text-blue-900"></SiPrisma>,
    name:"Prisma"
  },]
  
  export const Frontend:Generictype[]=[{
    id:18,
       children:<TbBrandNextjs className="text-3xl bg-black rounded-full  text-white "></TbBrandNextjs>,
       name:"Next.js"
  },{
    id:19,
    children:<FaReact className="text-3xl  font-normal text-cyan-500"></FaReact>,
    name:"React"
  },{
    id:20,
    children:<SiRecoil className="text-3xl  font-normal text-white bg-blue-400"></SiRecoil>,
    name:"Recoil"
  },{
    id:21,
    children:<SiTailwindcss className="text-3xl  font-normal text-cyan-500 "></SiTailwindcss>,
    name:"Tailwind"
  },{
    id:22,
    children:<TbBrandFramerMotion className="text-3xl  font-normal text-violet-600 "></TbBrandFramerMotion>,
    name:"Framer Motion"
  },]
  
  export const Backend:Generictype[]=[{
    id:23,
    children:<FaNode className="text-3xl  font-normal text-green-600"></FaNode>,
    name:"Node"
  },{
    id:24,
    children:<FaCloudflare className="text-3xl  font-normal text-orange-400"></FaCloudflare>,
    name:"CloudFlare"
  },{
    id:25,
    children:<SiExpress className="text-3xl  font-normal text-black"></SiExpress>,
    name:"Express"
  },{
    id:26,
    children:<AiFillFire className="text-3xl  font-normal text-orange-500"></AiFillFire>,
    name:"Hono"
  },]