
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
    description: `Engineered a robust backend, enhancing performance and reliability.
Implemented a fail-safe mechanism ensuring that if a transaction fails, any deducted amount is automatically refunded to the sender, reducing potential financial errors by 100%.
Achieved 99.9% data accuracy by securely managing user and account data, including safeguarding transactions.
Boosted user engagement with a responsive and interactive user experience.`,
href:"https://payment-application.vercel.app/",
projecttitle:"TransactEase",
bgurl:"/Paytm.png",
Techstack:["Mongodb", "Express", "React", "Node", "JavaScript", "Jwt", "TailwindCSS","Recoil"]


  },
  
];

