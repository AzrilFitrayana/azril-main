import { ArrowRight } from "lucide-react";
import StackCard from "../StackCard";
import Link from "next/link";
import { projects } from "@/data/projects";

const ProjectsCard = () => {
  const highlightProjects = projects.filter((project) => project.slug === 'staffflow' || project.slug === 'dripalert')

  return (
    <section id="projects" className="mt-4 px-4 sm:px-0">
      <div className="sticky top-15 flex flex-wrap items-center justify-between gap-3">
        <h2
          className="flex items-center gap-3 font-mono text-[11px] sm:text-[12px] font-medium text-[#AD2C00] uppercase tracking-widest transition-opacity duration-300"
        >
          <span className="block w-6 sm:w-8 h-px bg-[#AD2C00]" />
          04. Project
        </h2>
        <Link
          href="/projects"
          className="group font-mono text-[11px] sm:text-[12px] font-extrabold text-[#AD2C00] tracking-widest uppercase no-underline flex items-center gap-2"
        >
          View More
          <ArrowRight
            className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-200 ease-out group-hover:translate-x-1 group-active:translate-x-0"
          />
        </Link>
      </div>

      <div>
        {highlightProjects.map((project, index) => (
          <StackCard
            key={index}
            project={project}
            index={index}
            total={projects.length}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsCard;