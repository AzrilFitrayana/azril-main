"use client";

import Image from "next/image";
import Link from "next/link";

import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";

const imgProject2 =
  "https://www.figma.com/api/mcp/asset/085a0af9-fffe-4798-8ad8-0286c96760cb";

const Projects = () => {
  return (
    <section id="projects" className="mt-4">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3 font-mono text-[24px] font-extrabold uppercase tracking-wider">
          All Project
        </div>
      </div>

      {/* Card */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {projects.map((p, index) => (
          <Link href={`/projects/${p.slug}`} key={index} className="group project-card-solid overflow-hidden cursor-pointer hover:-translate-y-0.5 transition-all ease-in-out duration-200 active:translate-y-0">
            <div className="relative aspect-video bg-[#1A1C1C]">
              <Image src={p.img} alt={p.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 70vw" />
              <span
                className="absolute top-4 right-4 text-white font-body text-[10px] font-bold uppercase px-3 py-1 rounded"
                style={{ background: p.statusColor }}
              >
                {p.status}
              </span>
            </div>
            <div className="p-6 mb-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-display text-[24px] tracking-wide font-bold text-[#1A1C1C]">
                  {p.title}
                </h3>
                <span className="text-sm text-[#5F5E5E] group-hover:text-[#831F00] group-hover:-translate-y-0.5 transition-all ease-in-out duration-200">
                  <ArrowUpRight width={24} height={24} />
                </span>
              </div>
              <div className="flex flex-wrap gap-2 mt-10">
                {p.stack.map((t) => (
                  <span key={t} className="chip">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Projects;
