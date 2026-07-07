"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

interface StackCardProps {
  project: {
    id: number;
    category: string;
    tag: string;
    title: React.ReactNode;
    desc: string;
    bg: string;
    stack: string[];
    img: string;
  };
  index: number;
  total: number;
}

const StackCard = ({ project, index, total }: StackCardProps) => {
  const ref = useRef(null);
  void total;

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.92]);
  const y = useTransform(scrollYProgress, [0, 1], [0, -24]);

  return (
    <div
      ref={ref}
      className="sticky top-25 py-4"
      style={{ zIndex: index + 1 }}
    >
      <motion.div
        // href="#"
        className="mx-auto w-full overflow-hidden bg-white shadow-[0_0_8px_rgba(0,0,0,0.08)] grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-12 p-4 sm:p-6 md:p-4"
        style={{
          scale,
          y,
        }}
      >
        {/* Content */}
        <div className="relative p-4 sm:p-6 pb-16 sm:pb-20 md:pb-16 order-2 md:order-1">

          {/* Meta */}
          <div className="flex flex-wrap justify-between gap-x-4 gap-y-1 font-mono text-[10px] font-medium text-[#8a8a8a] uppercase tracking-wider mb-6 md:mb-9">
            <span>{project.category}</span>
            <span>{project.tag}</span>
          </div>

          {/* Text */}
          <div className="flex flex-col gap-4 md:gap-6 w-full justify-center mt-0 sm:mt-20 ">
            <h2 className="font-display font-bold text-[28px] sm:text-[36px] lg:text-[40px] xl:text-[50px] leading-[1.15]">
              {project.title}
            </h2>

            <p className="text-[#8a8a8a] text-[10px] sm:text-[12px] xl:text-[14px] max-w-full md:max-w-95 leading-[1.6] md:leading-[1.7]">
              {project.desc}
            </p>
          </div>

          {/* Stack */}
          <div className="absolute flex flex-wrap gap-2 md:gap-6 w-[calc(100%-2rem)] sm:w-[calc(100%-3rem)] items-center bottom-4 sm:bottom-6 md:bottom-4">
            {project.stack?.map((item, i) => (
              <span key={i} className="chip">
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Preview */}
        <div
          className="order-1 md:order-2 relative overflow-hidden min-h-55 sm:min-h-75 md:min-h-105"
          style={{ backgroundColor: project.bg }}
        >
          <Image
            src={project.img}
            alt={typeof project.title === "string" ? project.title : `Project ${project.id}`}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover object-center"
            priority={index < 2}
          />
          {/* <span className="absolute right-4 bottom-2 font-display font-bold text-[60px] lg:text-[110px] leading-none text-white/25 select-none">
            {String(project.id).padStart(2, "0")}
          </span> */}
        </div>
      </motion.div>
    </div>
  );
};

export default StackCard;