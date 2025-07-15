import { companyDetailsType } from "./types/companyDetails";

export const NEXT_PUBLIC_SERVICE_ID = "service_iobuoih";
export const NEXT_PUBLIC_TEMPLATE_ID = "template_7s6ocno";
export const NEXT_PUBLIC_PUBLIC_KEY = "H0uSpMacNAFhSdszk";

interface ProjectDetailstype {
  id: number;
  title: string;
  description: string[];
  href: string;
  projecttitle: string;
  bgurl: string;
  Techstack: string[];
}

export const ProjectDetails: ProjectDetailstype[] = [
  {
    id: 1,
    title: "Summr-ai",
    description: [
      `Developed a SaaS platform using the T3 stack and tRPC, enabling users to manage GitHub projects by
integrating Octokit for commit polling and Gemini API for summarization.`,
      `Implemented AI-driven summarization for repository files and folders, with vector embeddings stored in
PostgreSQL for advanced query resolution.`,
      `Integrated Assembly API for accurate audio meeting summaries and chapter generation.`,
      `Built a credit-based payment system with Stripe for scalable monetization.`,
      `Delivered a robust, AI-powered solution showcasing expertise in full-stack development and cuttingedge technologies.`
    ],
    href: "https://summr-ai.vercel.app/dashboard",
    projecttitle: "Summr-ai",
    bgurl: '/Summr-ai.png',
    Techstack: [
      "Next.js 15",
      "Tailwind",
      "Postgres",
      "TRPC",
      "Gemini API",
      "Assembly API",
      "Stripe"
    ]
  },
  {
    id: 2,
    title: "HarmonyHub",
    description: [
      `Built a real-time chat app with Socket.IO, enabling live user tracking and messaging.`,
      `Secured authentication using JWT for safe and efficient access.`,
      `Implemented debounced dynamic search, optimizing performance and user experience.`,
      `Designed a responsive React frontend, ensuring smooth navigation across devices.`
    ],
    href: "https://harmony-hub-nine.vercel.app/",
    projecttitle: "HarmonyHub",
    bgurl: "/HarmonyHub.jpg",
    Techstack: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Socket.io"
    ]
  },
  {

    id: 3,
    title: "OpenUp",
    description: [
      ` Developed an engaging user experience with seamless infinite scrolling, intuitive pagination, and smooth content transitions, enabling users to effortlessly share and explore unlimited content.`,
      `Optimized backend performance and database communication, resulting in faster load times and a highly responsive platform, enhancing overall user satisfaction.`,
      `Delivered a scalable, user-centric platform that supports a growing community, fostering open discussions and idea-sharing with a focus on usability and accessibility.`,
    ],
    href: "https://openup-ten.vercel.app/",
    projecttitle: "OpenUp",
    bgurl: "/Openup.png",
    Techstack: [
      "Postgres",
      "CloudFlare Worker",
      "React",
      "Hono",
      "TypeScript",
      "Prisma",
      "DaisyUI",
    ],
  },

  {
    id: 4,
    title: "Portfolio",
    description: [
      `Showcased personal achievements through a visually stunning and interactive portfolio, highlighting expertise in creating engaging user experiences.`,
      `Demonstrated deep proficiency in React by blending multiple components into a cohesive, dynamic presentation, reflecting advanced skills and innovative problem-solving.`,
      `Enhanced user engagement with seamless navigation, smooth animations, and an integrated contact system, effectively communicating professional capabilities.`,
    ],
    href: "https://rahul-soni.vercel.app/",
    projecttitle: "Portfolio",
    bgurl: "/Portfolio.png",
    Techstack: [
      "Nextjs",
      "TypeScript",
      "Tailwind",
      "Framer Motion",
      "Acerternity UI",
      "Emailjs",
    ],
  },
];

export const MiniProjectDetails = [
  {
    title: "TransactEase",
    description: [
      `Engineered a robust backend, enhancing performance and reliability.`,
      `Implemented a fail-safe mechanism ensuring that if a transaction fails, any deducted amount is automatically refunded to the sender, reducing potential financial errors by 100%.`,
    ],
    url: "https://payment-application.vercel.app/"
  },
  {
    title: "Youtube Clone",
    description: [
      "Utilized React and Tailwind CSS to create a visually appealing YouTube-like interface.",
      " Implemented dynamic routing with React Router for seamless navigation between pages.",
      " This project demonstrates proficiency in React, Tailwind CSS, and React Router.",
    ],
    url: "https://github.com/Rahulsoni9321/Youtube-clone",
  },
  {
    title: "Dukaan-UI-clone",
    description: ["Dashboard of Dukaan web application made using React and Tailwind.", " Built a clean UI with multiple reusable components."
    ],
    url: "https://dukaan-fe-five.vercel.app/"
  },
  {
    title: "Qid-clone",
    description: ["Built a multi page website static website leveraging react-router-dom for dynamic routes.", " Cloned the website in a pixel perfect way.  "
    ],
    url: "https://qid-clone-xi.vercel.app"
  },

];

export const AboutMeSection = [
  `Dynamic and results-driven professional with expertise in
                full-stack development, software engineering, and proficient in
                data structures and algorithms.`,
  `Equipped with the ability to architect and develop
                production-level applications, coupled with a strong aptitude
                for problem-solving.`,
  `I am committed to leveraging my comprehensive skill set
                to excel in the tech field and contribute significantly to
                innovative projects.`,
  `I am eager to immerse myself in the business aspects of
                application development while continuously expanding my
                knowledge in emerging technologies such as AI and Web 3.0.`,
  ` Seeking a challenging role where I can apply my diverse
                skill set and dedication to drive tangible business outcomes.`
]

interface WorkExperienceDetailsType {
  id: number,
  title: string,
  companyMetaData: companyDetailsType
}

export const WorkExperienceDetails: WorkExperienceDetailsType[] = [
  {
    id: 0,
    title: 'Feb 2025 - Present',
    companyMetaData: {
      duration: 'Feb 2025 - Present',
      description: [`∗ Architected a scalable microservices-based OTT platform with five domain-driven services integrated via an API
 Gateway, featuring centralized route auth, access control, and request logging using Morgan.`,
        `∗ Built a secure, efficient content ingestion pipeline leveraging S3 multipart uploads (dropping CPU load to 23%),
 pre-signed URLs, and AWS MediaConvert for bitrate-optimized adaptive streaming, served via CloudFront.`,
        `∗ Crafted a fine-grained RBAC-based admin panel enabling management of categories, plans, rewards, and
 notifications.`,
        `∗ Implemented robust platform features including OTP rate-limiting, atomic in-app coin disbursements, and a rule-based notification engine for dynamic engagement`],
      technologies: ['Node', 'React', 'MongoDB', 'Express', 'Gen-AI', 'Nextjs'],
      logo: '/alpha_1686119274.jpeg',
      location: 'Mumbai, India',
      role: 'Full Stack Developer',
      achievements: ['sdf', 'sdfsd'],
      name: 'AlphawareNext Technologies.'
    }

  },
  {
    id: 1,
    title: 'April 2024 - June 2025',
    companyMetaData: {
      duration: 'April 2024 - June 2025',
      description: [`∗ Integrated Gemini API to generate AI-powered city overviews and trip summaries from user itineraries.`,
        `∗ Built key product modules including a Reels-style vertical video scroll for travel content and an analytics
 dashboard to track user engagement on itineraries.`,
        `∗ Implemented Redis-based OTP auth and caching, customized third-party whitelabels via advanced CSS overrides,
 and sourced compatible external APIs through in-depth documentation analysis.`],
      technologies: ['Node', 'React', 'PostgreSQL', 'Express', 'Prisma', 'Gen-AI','AWS','Docker'],
      logo: '/Journeyhub_Logo.png',
      location: 'Remote, India',
      role: 'Full Stack Developer',
      achievements: ['sdf', 'sdfsd'],
      name: 'JourneyHub.'
    }
  }
]
