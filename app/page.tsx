import Hero from "@/components/homepage/Hero";
import TechTicker from "@/components/homepage/TechTicker";
import About from "@/components/homepage/About";
import Experience from "@/components/homepage/Experience";
import TechStack from "@/components/homepage/TechStack";
import Contact from "@/components/homepage/Contact";
import ProjectsCard from "@/components/homepage/ProjectsCard";

export default function PageHome() {
  return (
    <div className="min-h-screen bg-[#F9F9F9]">
      <Hero />
      <div className="w-full sm:max-w-370 sm:mx-auto px-4 2xl:px-0">
        <div className="pb-10">
          <TechTicker />
          <About />
          <Experience />
          <TechStack />
          <ProjectsCard />
          <Contact />
        </div>
      </div>
    </div>
  );
}