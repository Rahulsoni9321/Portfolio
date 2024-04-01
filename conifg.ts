
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
    description: ` Backend operations were managed through serverless architecture
        using Cloudflare Workers, Hono, TypeScript, JWT authentication,
        and Zod for schema validation. Database operations were
        streamlined using PostgreSQL, Prisma ORM, and database pooling
        methodology with Prisma Accelerate. On the frontend, react was
        utilized for infinite scrolling and Tailwind CSS with Daisy UI
        for responsive design. Optimized backend performance and
        database communication through modern technologies.`,
        href:"https://openup-ten.vercel.app/",
        projecttitle:"OpenUp",
        bgurl:"/Openup.png",
        Techstack:["Postgres", "CloudFlare Workers", "React", "Hono", "TypeScript", "Prisma", "npm", "jwt", "zod","Daisy UI"]
  },
  
  {
    id:2,
    title: "Portfolio",
    description: `Led the development of a dynamic portfolio website using Next.js, TypeScript, Tailwind CSS, Framer Motion, Acerternity UI, and EmailJS. This project showcases a blend of cutting-edge technologies to deliver a visually stunning and interactive user experience. Features include seamless navigation, smooth animations, and a functional contact form powered by EmailJS.`,
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
Techstack:["Mongodb", "Express", "React", "Node","Socket.io", "JavaScript", "Jwt", "TailwindCSS","Recoil","Daisy UI"]

  },
];

