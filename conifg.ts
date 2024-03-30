


interface ProjectDetailstype {
  title: string;
  description: string;
  href:string;
  projecttitle:string;
  bgurl:string,
  Techstack:string[]
}

export const ProjectDetails: ProjectDetailstype[] = [
  {
    title: "OpenUp",
    description: ` Backend operations were managed through serverless architecture
        using Cloudflare Workers, Hono, TypeScript, JWT authentication,
        and Zod for schema validation. • Database operations were
        streamlined using PostgreSQL, Prisma ORM, and database pooling
        methodology with Prisma Accelerate. • On the frontend, react was
        utilized for infinite scrolling and Tailwind CSS with Daisy UI
        for responsive design • Optimized backend performance and
        database communication through modern technologies. Tech`,
        href:"https://openup-ten.vercel.app/",
        projecttitle:"OpenUp",
        bgurl:"/Openup.png",
        Techstack:["Postgres", "CloudFlare Workers", "React", "Hono", "TypeScript", "Prisma", "npm", "jwt", "zod","Daisy UI"]
  },
  {
    title: "HarmonyHub",
    description: `Cutting-edge dummy money transfer app. In this project, I utilized Node.js and Express.js for a resilient backend, incorporating JWT for secure authentication.
user and account data are stored securely in MongoDB with Mongoose ODM, and transactions are safeguarded with DB sessions.
implemented React.js with React Router DOM for a dynamic and secure user experience. The sleek and responsive UI design is achieved through Tailwind CSS.`,
href:"https://payment-application.vercel.app/",
projecttitle:"HarmonyHub",
bgurl:"",
Techstack:["Mongodb", "Express", "React", "Node","Socket.io", "JavaScript", "Jwt", "TailwindCSS","Recoil","Daisy UI"]

  },
  {
    title: "Portfolio",
    description: `Cutting-edge dummy money transfer app. In this project, I utilized Node.js and Express.js for a resilient backend, incorporating JWT for secure authentication.
user and account data are stored securely in MongoDB with Mongoose ODM, and transactions are safeguarded with DB sessions.
implemented React.js with React Router DOM for a dynamic and secure user experience. The sleek and responsive UI design is achieved through Tailwind CSS.`,
href:"https://payment-application.vercel.app/",
projecttitle:"Portfolio",
bgurl:"/Portfolio.png",
Techstack:["Nextjs","React","TypeScript","Tailwind","Framer Motion","Acernity UI","Emailjs"]

  },
  {
    title: "TransactEase",
    description: `Cutting-edge dummy money transfer app. In this project, I utilized Node.js and Express.js for a resilient backend, incorporating JWT for secure authentication.
user and account data are stored securely in MongoDB with Mongoose ODM, and transactions are safeguarded with DB sessions.
implemented React.js with React Router DOM for a dynamic and secure user experience. The sleek and responsive UI design is achieved through Tailwind CSS.`,
href:"https://payment-application.vercel.app/",
projecttitle:"TransactEase",
bgurl:"/Paytm.png",
Techstack:["Mongodb", "Express", "React", "Node", "JavaScript", "Jwt", "TailwindCSS","Recoil"]


  },
];

