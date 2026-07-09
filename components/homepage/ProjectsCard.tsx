"use client";

import { ArrowRight } from "lucide-react";
import StackCard from "../StackCard";
import { useRef, useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import Link from "next/link";
import { projects } from "@/data/projects";

const ProjectsCard = () => {
  const titleRef = useRef(null);
  const [headingHidden, setHeadingHidden] = useState(false);
  const HIDE_THRESHOLD = 0.6;

  const { scrollYProgress } = useScroll({
    target: titleRef,
    offset: ["start start", "end start"],
  });

  // Sembunyikan heading saat scroll melebihi threshold
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setHeadingHidden(v > HIDE_THRESHOLD);
  });

  const highlightProjects = projects.filter((project) => project.slug === 'staffflow' || project.slug === 'dripalert')

  return (
    <section ref={titleRef} id="projects" className="mt-4 px-4 sm:px-0">
      <div className="sticky top-15 flex flex-wrap items-center justify-between gap-3">
        <motion.div
          className="flex items-center gap-3 font-mono text-[11px] sm:text-[12px] font-medium text-[#AD2C00] uppercase tracking-widest transition-opacity duration-300"
          style={{ opacity: headingHidden ? 0 : 1 }}
        >
          <span className="block w-6 sm:w-8 h-px bg-[#AD2C00]" />
          04. Project
        </motion.div>
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