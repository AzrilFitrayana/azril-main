import Link from "next/link";

import ProjectHero from "@/components/project detail/ProjectHero";
import ProjectGallery from "@/components/project detail/ProjectGallery";
import ProjectSidebar from "@/components/project detail/ProjectSidebar";
import ProjectLinks from "@/components/project detail/ProjectLinks";
import ProjectResults from "@/components/project detail/ProjectResults";
import ProjectFeatures from "@/components/project detail/ProjectFeatures";
import OtherProjects from "@/components/project detail/OtherProjects";

import { ArrowLeft } from "lucide-react";
import { Project } from "@/types/types";
import ProjectContribution from "./ProjectContribution";

const ProjectDetail = ({ project }: { project: Project }) => {

    const menus = [
        {
            id: "overview",
            label: "Overview",
            show: true
        },
        {
            id: "problem",
            label: "Problem",
            show: !!project.problem
        },
        {
            id: "solution",
            label: "Solution",
            show: !!project.solution
        },
        {
            id: "features",
            label: "Features",
            show:
                !!project.features?.length
        },
        {
            id: "contribution",
            label: "Contribution",
            show:
                !!project.contribution
        },
        {
            id: "results",
            label: "Results",
            show:
                !!project.results?.length
        },
        {
            id: "gallery",
            label: "Gallery",
            show:
                !!project.gallery?.length
        }
    ].filter(item => item.show);

    return (
        <>
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
            <ProjectHero
                img={project.img}
                status={project.status}
                statusColor={project.statusColor}
                title={project.title}
                category={project.category}
                description={project.description}
                role={project.role}
                duration={project.duration}
                year={project.year}
            />

            <section className="max-w-6xl mx-auto px-6 py-20 grid grid-cols-[200px_1fr] gap-12 max-lg:grid-cols-1">
                <ProjectSidebar menus={menus} stack={project.stack} />

                <div className="flex flex-col gap-20">
                    <section id="overview">
                        <h2 className="section-title">Overview</h2>
                        <p className="body-text">
                            {project.overview}
                        </p>
                    </section>

                    {project.problem && (
                        <section id="problem">
                            <h2 className="section-title">Problem</h2>
                            <p className="body-text">
                                {project.problem}
                            </p>

                            {/* <blockquote
                            className="mt-4 shadow-sm border-l-4 border-[#AD2C00] bg-white p-8 rounded-r-xl font-serif italic text-xl"
                            >
                            The biggest challenge wasnt finding candidates, but managing the
                            noise.
                            </blockquote> */}
                        </section>
                    )}

                    {project.solution && (
                        <section id="solution">
                            <h2 className="section-title">Solution</h2>
                            <p className="body-text">
                                {project.solution}
                            </p>
                        </section>
                    )}

                    {/* Features */}
                    {project.features && project.features.length > 0 && (
                        <ProjectFeatures features={project.features} />
                    )}

                    {/* Contribution */}
                    {project.contribution && (
                        <ProjectContribution contribution={project.contribution} />
                    )}

                    {/* Result */}
                    {project.results && (
                        <ProjectResults results={project.results} />
                    )}

                    {/* Gallery */}
                    {project.gallery && (
                        <ProjectGallery images={project.gallery} />
                    )}

                    {/* Link Reference */}
                    {project.links && (
                        <ProjectLinks links={project.links} />
                    )}

                    {/* Other Projects */}
                    <OtherProjects />
                </div>
            </section>
        </>
    )
}
export default ProjectDetail
