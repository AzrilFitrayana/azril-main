"use client";

import {
  BriefcaseBusiness,
  CircleCheckBig,
  Code2,
  Languages,
  MapPinned,
  SquareTerminal,
  UserRound,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const stats = [
  {
    icon: <MapPinned width="20" height="20" />,
    label: "LOCATION",
    value: "Tasikmalaya, Indonesia",
  },
  {
    icon: <BriefcaseBusiness width="20" height="20" />,
    label: "STATUS",
    value: "Open to Work",
  },
  {
    icon: <Languages width="20" height="20" />,
    label: "LANGUAGES",
    value: "Indonesian (Native)\nEnglish (Intermediate)",
  },
  {
    icon: <SquareTerminal width="20" height="20" />,
    label: "FOCUS",
    value: "React • Next.js • Node.js",
  },
];

const doing = [
  "Build responsive web applications",
  "Develop modern user interfaces",
  "Integrate REST APIs and backend services",
  "Write clean and maintainable code",
  "Optimize performance and user experience",
];

const About = () => {
  return (
    <section id="about">
      <div className="flex items-center gap-3 font-mono text-[12px] font-medium text-[#AD2C00] uppercase tracking-widest">
        <span className="block w-8 h-px bg-[#AD2C00]" />
        01. About
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-[1fr_320px_320px] gap-4 mt-3">
        {/* Bio Card */}
        <div className="bento-card-solid flex flex-col sm:flex-row gap-6">
          {/* Profile image */}
          <div className="group relative w-full sm:w-48 lg:w-52 xl:w-60 shrink-0 rounded-[20px] border-2 border-[#E2BFB6] overflow-hidden shadow-[0_1px_2px_rgba(0,0,0,0.05)] lg:h-70 xl:h-85 aspect-square sm:aspect-auto">
            <Image
              src="/home page/ProfilePic.png"
              alt="Muhammad Azril Fitrayana"
              width={220}
              height={220}
              className="w-full h-full object-cover object-top transition-transform duration-600 ease-in-out group-hover:scale-104"
            />

            <div className="group absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-black/80 via-black/30 to-transparent pointer-events-none" />
            <div className="absolute inset-x-0 bottom-0 px-4 pb-7 lg:pb-4">
              <h3 className="text-white font-display font-bold text-[16px] lg:text-[14px] xl:text-[16px] leading-tight">Muhammad Azril Fitrayana</h3>
              <p className="text-white/70 text-[12px] mt-0.5">Fullstack Developer</p>
            </div>
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-2">
              <UserRound
                strokeWidth={2.5}
                width="24"
                height="24"
                className="text-[#831F00]"
              />
              <span className="font-display text-[20px] text-[#1A1C1C]">
                About Me
              </span>
            </div>
            <div className="lg:h-47.5 xl:h-55 flex justify-between flex-col">
              <div>
                <h3 className="font-display text-[22px] sm:text-[26px] font-medium text-[#1A1C1C] mb-1">
                  Muhammad Azril Fitrayana
                </h3>
                <p className="font-mono text-[12px] font-medium text-[#831F00] tracking-widest uppercase mb-4">
                  Fullstack Developer
                </p>
              </div>

              <p className="font-body text-[14px] leading-relaxed text-justify text-[#8a8a8a] max-w-prose">
                Full-stack developer from Indonesia with an eye for clean design. Informatics Engineering grad from <Link href="https://stmik-dci.ac.id/" target="_blank"
                  rel="noopener noreferrer" className="font-bold underline text-[#5a5959]">STMIK DCI</Link>. Building responsive web experiences with React, Next.js, Node.js, and modern JavaScript. From crafting interfaces to designing APIs and databases — I enjoy owning the whole development process. Code lives on <Link href="https://github.com/AzrilFitrayana" target="_blank"
                    rel="noopener noreferrer" className="font-bold underline text-[#5a5959]">GitHub</Link>. About a year into development, still curious, learning, and improving every day.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:contents gap-4">
          {/* Stats Card */}
          <div className="bento-card-solid w-full xl:w-80 flex flex-col">
            {stats.map((item, i, arr) => (
              <div key={i}>
                <div className="flex gap-3 items-start">
                  <span className="text-sm mt-0.5 shrink-0 text-[#831F00]">
                    {item.icon}
                  </span>
                  <div>
                    <div className="font-mono text-[10px] font-medium text-[#5A413A] tracking-widest uppercase mb-1">
                      {item.label}
                    </div>
                    <div className="font-body text-[14px] text-[#1A1C1C] leading-6 whitespace-pre-line">
                      {item.value}
                    </div>
                  </div>
                </div>
                {i < arr.length - 1 && (
                  <div className="h-px bg-[#E2BFB6] opacity-50 my-4" />
                )}
              </div>
            ))}
          </div>

          {/* What I Do Card */}
          <div className="bento-card-solid w-full xl:w-80">
            <div className="flex items-center gap-3 mb-6">
              <Code2
                strokeWidth={2.5}
                width="20"
                height="20"
                className="text-[#831F00]"
              />
              <span className="font-display text-[20px] text-[#1A1C1C]">
                What I Do
              </span>
            </div>
            <ul className="flex flex-col gap-4">
              {doing.map((item, i) => (
                <li key={i} className="flex gap-4 items-start">
                  <span className="text-[#AD2C00] text-[10px] mt-0.5 shrink-0">
                    <CircleCheckBig width="16" height="16" />
                  </span>
                  <span className="font-body text-[14px] text-[#5F5E5E] leading-5">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
