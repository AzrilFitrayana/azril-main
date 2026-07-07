"use client";

import { useState } from "react";
import { motion, useScroll } from "motion/react"

import Hero from "@/components/homepage/Hero";
import TechTicker from "@/components/homepage/TechTicker";
import About from "@/components/homepage/About";
import Experience from "@/components/homepage/Experience";
import TechStack from "@/components/homepage/TechStack";
import Contact from "@/components/homepage/Contact";
import Footer from "@/components/Footer";
import ProjectsCard from "@/components/homepage/ProjectsCard";

export default function Home() {
    const { scrollYProgress } = useScroll()

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

            <div className="w-full sm:max-w-370 sm:mx-auto px-4 2xl:px-0 pb-10">
                
            </div>
            <Footer />
        </div>
    );
}
