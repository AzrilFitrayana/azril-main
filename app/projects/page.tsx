"use client";

import { motion, useScroll } from "motion/react"
import Projects from "@/components/projects/Projects";
import ProjectsFilter from "@/components/projects/ProjectsFilter";

interface ProjectsProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default function PageProjectList({}: ProjectsProps) {
    const { scrollYProgress } = useScroll()

    return (
        <section className="min-h-screen bg-[#F9F9F9]">
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
                {/* <ProjectsFilter /> */}
                <Projects />
            </div>
        </section>
    );
}
