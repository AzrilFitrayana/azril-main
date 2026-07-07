"use client";

import { useState } from "react";
import { motion, useScroll } from "motion/react"
import Projects from "@/components/Projects";



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
                <Projects />
            </div>
        </div>
    );
}
