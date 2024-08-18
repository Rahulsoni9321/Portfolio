
export const NEXT_PUBLIC_SERVICE_ID="service_iobuoih";
export const  NEXT_PUBLIC_TEMPLATE_ID="template_7s6ocno";
export const NEXT_PUBLIC_PUBLIC_KEY="H0uSpMacNAFhSdszk"

interface ProjectDetailstype {
  id:number;
  title: string;
  description: string;
  href:string;
  projecttitle:string;
  bgurl:string,
  Techstack:string[]
}

export const ProjectDetails: ProjectDetailstype[] = [
  {
    id:1,
    title: "OpenUp",
    description: ` Developed an engaging user experience with seamless infinite scrolling, intuitive pagination, and smooth content transitions, enabling users to effortlessly share and explore unlimited content.
Optimized backend performance and database communication, resulting in faster load times and a highly responsive platform, enhancing overall user satisfaction.
Delivered a scalable, user-centric platform that supports a growing community, fostering open discussions and idea-sharing with a focus on usability and accessibility.`,
        href:"https://openup-ten.vercel.app/",
        projecttitle:"OpenUp",
        bgurl:"/Openup.png",
        Techstack:["Postgres", "CloudFlare Worker", "React", "Hono", "TypeScript", "Prisma", "zod","DaisyUI"]
  },
  
  {
    id:2,
    title: "Portfolio",
    description: `Showcased personal achievements through a visually stunning and interactive portfolio, highlighting expertise in creating engaging user experiences.
Demonstrated deep proficiency in React by blending multiple components into a cohesive, dynamic presentation, reflecting advanced skills and innovative problem-solving.
Enhanced user engagement with seamless navigation, smooth animations, and an integrated contact system, effectively communicating professional capabilities.`,
href:"https://rahul-soni.vercel.app/",
projecttitle:"Portfolio",
bgurl:"/Portfolio.png",
Techstack:["Nextjs","TypeScript","Tailwind","Framer Motion","Acerternity UI","Emailjs"]

  },
  {
    id:3,
    title: "TransactEase",
    description: `Cutting-edge dummy money transfer app. In this project, I utilized Node.js and Express.js for a resilient backend, incorporating JWT for secure authentication.
user and account data are stored securely in MongoDB with Mongoose ODM, and transactions are safeguarded with DB sessions.
implemented React.js with React Router DOM for a dynamic and secure user experience. The sleek and responsive UI design is achieved through Tailwind CSS.`,
href:"https://payment-application.vercel.app/",
projecttitle:"TransactEase",
bgurl:"/Paytm.png",
Techstack:["Mongodb", "Express", "React", "Node", "JavaScript", "Jwt", "TailwindCSS","Recoil"]


  },
  {
    id:4,
    title: "HarmonyHub",
    description: `Led the development of a real-time chat application using MongoDB, Express, React, Node.js, Socket.io, Zod, and JWT authentication. Orchestrated the implementation of features enabling instantaneous messaging, supported by responsive design (TailwindCSS, Daisy UI), and efficient state management (Recoil). This ensured cohesive integration of technologies, optimal performance, and a user-centric experience.`,
href:"https://github.com/Rahulsoni9321/HarmonyHub",
projecttitle:"HarmonyHub",
bgurl:"/HarmonyHub.jpg",
Techstack:["Mongodb", "Express", "React", "Node","Socket", "JavaScript", "Tailwind","Recoil","DaisyUI"]

  },
];

