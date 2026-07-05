"use client";

import { ArrowRight } from "lucide-react";
import StackCard from "../StackCard";

const projects = [
  {
    id: 1,
    category: "Kora Kagaz · Sustainability",
    tag: "Service Design",
    title: (
      <>
        Making recycling
        <br />
        <em>a habit</em>, not a task
      </>
    ),
    desc: "Rewards-driven recycling app yang mengubah pemilahan sampah jadi streak harian, dengan credit nyata untuk drop-off nyata.",
    bg: "#F0C93B",
  },
  {
    id: 2,
    category: "Sprivy · Farm to Home",
    tag: "Design Project",
    title: (
      <>
        Bringing farm-fresh
        <br />
        food closer to home
      </>
    ),
    desc: "Marketplace farm-to-home yang membawa kepercayaan pasar lokal ke pengalaman belanja digital — sourcing transparan, porsi fleksibel, packaging yang dipikirkan.",
    bg: "#3E8E5B",
  },
  {
    id: 3,
    category: "Loopwear · Circular Fashion",
    tag: "Product Design",
    title: (
      <>
        Second-hand,
        <br />
        <em>first choice</em>
      </>
    ),
    desc: "Platform resale di mana kondisi, keaslian, dan cerita barang sama terlihatnya dengan harga — jadi barang preloved nggak terasa seperti kompromi.",
    bg: "#4A5FC1",
  },
];

const ProjectsCard = () => {
  return (
    <section id="projects" className="mt-4 px-4 sm:px-0">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3 font-mono text-[11px] sm:text-[12px] font-medium text-[#AD2C00] uppercase tracking-widest">
          <span className="block w-6 sm:w-8 h-px bg-[#AD2C00]" />
          04. Project
        </div>
        <a
          href="#"
          className="group font-mono text-[11px] sm:text-[12px] font-extrabold text-[#AD2C00] tracking-widest uppercase no-underline flex items-center gap-2"
        >
          View More
          <ArrowRight
            className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-200 ease-out group-hover:translate-x-1 group-active:translate-x-0"
          />
        </a>
      </div>

      <div>
        {projects.map((project, index) => (
          <StackCard
            key={project.id}
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