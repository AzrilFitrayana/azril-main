"use client";

import { ArrowRight, ArrowUpRight } from "lucide-react";
import Image from "next/image";

const imgProject1 =
  "https://www.figma.com/api/mcp/asset/16df15bc-4351-418f-8d4b-d588e0018a67";
const imgProject2 =
  "https://www.figma.com/api/mcp/asset/085a0af9-fffe-4798-8ad8-0286c96760cb";

const projects = [
  {
    img: imgProject1,
    title: "SuperJob Recruiter",
    status: "STABLE",
    statusColor: "#831F00",
    desc: "Enterprise-grade AI matching platform for rapid talent acquisition.",
    tags: ["React", "Next.js", "Material UI", "TypeScript"],
  },
  {
    img: imgProject2,
    title: "Quantum Engine",
    status: "IN REVIEW",
    statusColor: "#474746",
    desc: "Next-gen asset rendering middleware for distributed web applications.",
    tags: ["Next.js", "Material UI", "TypeScript"],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="mt-4">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3 font-mono text-[12px] font-medium text-[#AD2C00] uppercase tracking-widest">
          <span className="block w-8 h-px bg-[#AD2C00]" />
          04. Project
        </div>
        <a
          href="#"
          className="group font-mono text-[12px] font-extrabold text-[#AD2C00] tracking-widest uppercase no-underline flex items-center gap-2"
        >
          View More
          <ArrowRight
            width={20}
            height={20}
            className="transition-transform duration-200 ease-out group-hover:translate-x-1 group-active:translate-x-0"
          />
        </a>
      </div>

      {/* Card */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((p) => (
          <div key={p.title} className="group project-card-solid overflow-hidden cursor-pointer hover:-translate-y-0.5 transition-all ease-in-out duration-200 active:translate-y-0">
            <div className="relative aspect-video bg-[#1A1C1C]">
              <Image src={p.img} alt={p.title} fill className="object-cover" />
              <span
                className="absolute top-4 right-4 text-white font-body text-[10px] font-bold uppercase px-3 py-1 rounded"
                style={{ background: p.statusColor }}
              >
                {p.status}
              </span>
            </div>
            <div className="p-6 mb-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-display text-[18px] font-normal text-[#1A1C1C]">
                  {p.title}
                </h3>
                <span className="text-sm text-[#5F5E5E] group-hover:text-[#831F00] group-hover:-translate-y-0.5 transition-all ease-in-out duration-200">
                  <ArrowUpRight width={24} height={24} />
                </span>
              </div>
              <p className="font-body text-[14px] text-[#5F5E5E] mb-3">
                {p.desc}
              </p>
              <div className="flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="chip">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
