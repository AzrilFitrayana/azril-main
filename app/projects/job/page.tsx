import ProjectHero from "@/components/project detail/ProjectHero";
import ProjectGallery from "@/components/project detail/ProjectGallery";
import ProjectSidebar from "@/components/project detail/ProjectSidebar";
import ProjectLinks from "@/components/project detail/ProjectLinks";
import ProjectResults from "@/components/project detail/ProjectResults";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function ProjectDetail() {
    return (
        <main className="min-h-screen bg-[#F9F9F9] text-[#1A1A1A]">
            {/* Back */}
            <div className="max-w-6xl mx-auto px-6 pt-10">
                <Link
                    href="/projects"
                    className="group font-mono text-[11px] sm:text-[12px] font-extrabold text-neutral-400 tracking-widest uppercase no-underline flex items-center gap-2"
                >
                    <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-200 ease-out group-hover:-translate-x-1 group-active:translate-x-0" />
                    All Projects
                </Link>
            </div>

            {/* Hero */}
            <ProjectHero />

            <section className="max-w-6xl mx-auto px-6 py-20 grid grid-cols-[200px_1fr] gap-12 max-lg:grid-cols-1">
                <ProjectSidebar />

                <div className="flex flex-col gap-6">
                    <section id="overview">
                        <h2 className="section-title">Overview</h2>
                        <p className="body-text">
                            SuperJob Recruiter was designed to bridge the gap between high-volume talent sourcing and meaningful human evaluation.
                        </p>
                    </section>

                    <section id="problem">
                        <h2 className="section-title">The problem</h2>
                        <p className="body-text">
                            Modern recruitment teams are drowning in manual tasks. The goal was creating a faster hiring workflow.
                        </p>

                        {/* <blockquote
                            className="
                mt-10 border-l-4 border-[#AD2C00] bg-white p-8
                rounded-r-xl font-serif italic text-xl
              "
                        >
                            The biggest challenge wasnt finding candidates, but managing the
                            noise.
                        </blockquote> */}
                    </section>

                    <section id="solution">
                        <h2 className="section-title">Solution</h2>
                        {/* <div className="grid md:grid-cols-2 gap-8">
                            <div className="solution-card">
                                <span>01</span>
                                <h3>Unified dashboard</h3>
                                <p>Manage jobs, candidates, and analytics in one place.</p>
                            </div>

                            <div className="solution-card">
                                <span>02</span>
                                <h3>Smart tracking</h3>
                                <p>Kanban based recruitment workflow.</p>
                            </div>
                        </div> */}
                        <p className="body-text">
                            Modern recruitment teams are drowning in manual tasks. The goal was
                            creating a faster hiring workflow.
                        </p>
                    </section>

                    {/* Result */}
                    <ProjectResults />

                    {/* Gallery */}
                    <ProjectGallery />

                    {/* Link Reference */}
                    <ProjectLinks />
                </div>
            </section>s
        </main>
    );
}
