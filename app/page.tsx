"use client";

import { useState } from "react";
import { motion, useScroll } from "motion/react"

import Hero from "@/components/homepage/Hero";
import TechTicker from "@/components/homepage/TechTicker";
import About from "@/components/homepage/About";
import Experience from "@/components/homepage/Experience";
import TechStack from "@/components/homepage/TechStack";
import Contact from "@/components/homepage/Contact";
import ProjectsCard from "@/components/homepage/ProjectsCard";

export default function Home() {
  const [isPlaying, setIsPlaying] = useState(false)
  const { scrollYProgress } = useScroll()

  const handlePlay = () => {
    setIsPlaying(true)
  }

  const handlePause = () => {
    setIsPlaying(false);
  };

  return (
    <div className="min-h-screen bg-[#F9F9F9]">
      <motion.div id="scroll-indicator"
        style={{
          scaleX: scrollYProgress,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: 4,
          originX: 0,
          zIndex: 100,
          backgroundColor: "red",
        }} />

      <Hero isPlaying={isPlaying} onPlay={handlePlay} onPause={handlePause} />
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