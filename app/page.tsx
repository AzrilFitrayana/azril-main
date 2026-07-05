"use client";

import Hero from "@/components/homepage/Hero";
import TechTicker from "@/components/homepage/TechTicker";
import About from "@/components/homepage/About";
import Experience from "@/components/homepage/Experience";
import TechStack from "@/components/homepage/TechStack";
import Projects from "@/components/homepage/Projects";
import Contact from "@/components/homepage/Contact";
import Footer from "@/components/Footer";
import { useState } from "react";
import ProjectsCard from "@/components/homepage/ProjectsCard";

export default function Home() {
  const [isPlaying, setIsPlaying] = useState(false)

  const handlePlay = () => {
    setIsPlaying(true)
  }

  const handlePause = () => {
    setIsPlaying(false);
  };

  return (
    <div className="min-h-screen bg-[#F9F9F9]">
      <Hero isPlaying={isPlaying} onPlay={handlePlay} onPause={handlePause} />
      <div className="w-full sm:max-w-370 sm:mx-auto px-4 sm:px-0">
        <TechTicker />
        <div className="pb-10">
          <About />
          <Experience />
          <TechStack />
          {/* <Projects /> */}
          <ProjectsCard />
          <Contact />
        </div>
      </div>
      <Footer />
    </div>
  );
}
