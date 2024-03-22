import { PinContainer } from "@/components/ui/3d-pins";
import { AuroraBackground } from "@/components/ui/Hero";
import { SparklesCore } from "@/components/ui/Sparkles";

export default function Home() {
  return (
    <div className=" flex flex-col w-full  overflow-y-auto">
      <div className=" flex  items-center justify-center w-full h-screen ">
        <div className="relative w-full ">
          <AuroraBackground className="h-screen w-full bg-black " />
        </div>
        <SparklesCore
          background="transparent"
          minSize={1}
          maxSize={2.4}
          particleDensity={40}
          className="absolute w-full h-full bg-black/50"
          particleColor="#FFFFFF"
        />
        <div className="absolute text-center  text-white text-5xl md:text-9xl font-bold">
          <div className="md:text-5xl">Rahul Soni</div>
          <hr className="my-4 w-96"></hr>
          <div className=" text-xl font-normal">Full Stack Developer</div>
        </div>
      </div>
      <div className="w-full relative flex h-screen  items-center bg-[#0d0617] overflow-x-auto">
        <div className="absolute w-full h-1/2 gap-12 flex items-center">
          <PinContainer
          href={"https://openup-ten.vercel.app/"}
          title="Open Up"
           
            className="w-1/4 h-3/4 rounded-xl bg-white shadow-xl  shadow-black"
          >
 
          <div className="w-1/4 h-3/4 rounded-xl bg-white shadow-xl  shadow-black"></div>
          </PinContainer>
          <div  className="w-1/4 h-3/4 rounded-xl bg-white shadow-xl  shadow-black"></div>
          <div className="w-1/4 h-3/4 rounded-xl bg-white shadow-xl  shadow-black"></div>
        </div>
      </div>

      <div className=" w-full h-screen flex items-center justify-center ">
        <video muted autoPlay loop className=" object-cover w-full h-full">
          <source src="/blackhole.webm" />
        </video>
      </div>
    </div>
  );
}
