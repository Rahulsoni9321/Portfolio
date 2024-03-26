
import Navigationbar from "@/components/main/Navbar"
import ProjectSection from "@/components/main/ProjectSection";
import AboutMe from "@/components/main/AboutMe";
import BlackHole from "@/components/main/BlackHole";
import Hero from "@/components/main/Hero";

export default function Home() {
 
  return (
    <div className=" flex flex-col w-full ">
      <Navigationbar></Navigationbar>
      <Hero></Hero>
     <AboutMe></AboutMe>
      <ProjectSection></ProjectSection>
     <BlackHole></BlackHole>
    </div>
  );
}
