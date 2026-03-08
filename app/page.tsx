import Navigationbar from "@/components/main/Navbar";
import ProjectSection from "@/components/main/ProjectSection";
import AboutMe from "@/components/main/AboutMe";
import BlackHole from "@/components/main/BlackHole";
import Hero from "@/components/main/Hero";
import Skills from "@/components/main/Skills";
import WorkExperience from "@/components/main/WorkExperience";
import SectionDots from "@/components/ui/SectionDots";
import StickyBMC from "@/components/ui/StickyBMC";

export default function Home() {
  return (
    <div className="flex flex-col w-full font-inter">
      <Navigationbar />
      <SectionDots />
      <StickyBMC />
      <Hero />
      <WorkExperience />
      <ProjectSection />
      <Skills />
      <AboutMe />
      <BlackHole />
    </div>
  );
}
