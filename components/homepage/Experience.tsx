"use client";

import { Download, History } from "lucide-react";

const items = [
  {
    period: "FEB 2026",
    company: "Solvera Global Teknologi",
    role: "Frontend Developer (OJT)",
    desc: "Building and enhancing Batch Management features with Next.js, reusable components, and REST API integration.",
  },
  {
    period: "FEB — JUN 2024",
    company: "PT Mahir Techno",
    role: "MSIB Studi Independent",
    desc: "Laravel Capstone: Built an employee management system from scratch.",
  },
  {
    period: "AUG — OCT 2024",
    company: "CV. Lestari Multi Kreasi",
    role: "Frontend Developer Intern",
    desc: "Built responsive hotel booking interfaces with Bootstrap and CodeIgniter integration.",
  },
  {
    period: "2021 — 2025",
    company: "STMIK DCI",
    role: "Bachelors in Informatics Engineering",
    desc: "Focus on React.js learning initiatives within the community.",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="mt-4">
      <div className="flex items-center gap-3 font-mono text-[12px] font-medium text-[#AD2C00] uppercase tracking-widest">
        <span className="block w-8 h-px bg-[#AD2C00]" />
        02. Experience
      </div>
      <div className="bento-card-solid mt-4 p-10 grid grid-cols-1 md:grid-cols-[320px_1fr] gap-10">
        {/* Left */}
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-3">
            <History
              strokeWidth={2.5}
              width="24"
              height="24"
              className="text-[#831F00]"
            />
            <span className="font-display text-[20px] text-[#1A1C1C]">
              Career Journey
            </span>
          </div>
          <p className="font-body text-[14px] text-[#5F5E5E] leading-6">
            A trajectory focused on growth, continuous learning, and
            contributing to impactful digital solutions across various tech
            sectors.
          </p>
          <a
            href="https://drive.google.com/file/d/13EPdVyB3JRFH-ryl4F5L6oKE-9mIMbK1/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-[#831F00] bg-transparent text-[#831F00] px-6 py-2 rounded-2xl font-mono text-[14px] font-medium flex items-center justify-center gap-2 hover:bg-[#831F00] hover:text-white hover:-translate-y-0.5 active:translate-0 cursor-pointer transition-all ease-in-out w-full"
          >
            <Download width="16" height="16" /> Download Full CV
          </a>
        </div>

        {/* Right: Timeline */}
        <div className="relative">
          {/* <div className="absolute left-4 top-2 bottom-2 w-px bg-[#E2BFB6]" />
          <div className="absolute right-119 top-2 bottom-2 w-px bg-[#E2BFB6]" /> */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {items.map((item, i) => (
              <div key={i} className="pl-10 relative group">
                <div
                  className={`absolute left-3 top-0.5 w-3 h-3 rounded-full shrink-0 duration-200 bg-[#666666] group-hover:bg-[#831F00] transition-all ease-in-out`}
                />

                <div
                  className={`font-mono text-[10px] font-medium uppercase tracking-wide mb-1 duration-200  group-hover:text-[#831F00] transition-all ease-in-out`}
                >
                  {item.period}
                </div>
                <div className="font-body text-[18px] font-bold text-[#1A1C1C] group-hover:text-[#831F00] transition-all ease-in-out mb-1">
                  {item.company}
                </div>
                <div className="font-body text-[14px] text-[#5F5E5E] mb-2">
                  {item.role}
                </div>
                <div
                  className={`font-body text-[14px] text-[#5F5E5E] leading-5`}
                >
                  {item.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
