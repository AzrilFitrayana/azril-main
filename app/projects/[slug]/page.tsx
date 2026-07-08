'use client'

import ProjectDetail from "@/components/project detail/ProjectDetail"
import { projects } from "@/data/projects"
import { motion, useScroll } from "motion/react"
import { notFound } from "next/navigation";
import { use } from 'react'


export default function PageProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
    const { scrollYProgress } = useScroll()
    const { slug } = use(params)

    console.log('slug', slug)
    const project = projects.find((item) => item.slug === slug)

    if (!project) return notFound()

    return (
        <main className="min-h-screen bg-[#F9F9F9] text-[#1A1A1A]">
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

            <ProjectDetail project={project} />
        </main>
    );
}
