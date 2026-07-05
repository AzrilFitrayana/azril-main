"use client";

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
    <section
      ref={ref}
      // Mobile: grid jadi 1 kolom -> konten (teks + gambar) jauh lebih
      // tinggi dari 50vh, jadi section perlu ruang sticky lebih besar
      // supaya isinya nggak kepotong / numpuk terlalu cepat.
      className="sticky top-0 flex sm:mb-10 sm:mt-4 py-8 md:py-0"
      style={{ zIndex: index + 1 }}
    >
      <motion.div
        // href="#"
        className="mx-auto w-full grid grid-cols-1 md:grid-cols-2 p-4 gap-6 sm:gap-8 md:gap-12.5 bg-white shadow-bento"
        style={{
          scale,
          y,
        }}
      >
        <div className="p-4 sm:p-6 order-2 md:order-1">
          <div className="flex flex-wrap justify-between gap-x-4 gap-y-1 font-mono text-[10px] sm:text-[11px] font-medium text-[#8a8a8a] uppercase tracking-wider mb-6 md:mb-9">
            <span>{project.category}</span>
            <span>{project.tag}</span>
          </div>
          <div className="flex flex-col gap-4 md:gap-6 w-full justify-center mt-0 sm:mt-20">
            <h2 className="font-display font-bold text-[28px] sm:text-[36px] md:text-[50px] leading-[1.15]">
              {project.title}
            </h2>
            <p className="text-[#8a8a8a] text-[13px] sm:text-[14px] max-w-full md:max-w-95 leading-[1.6] md:leading-[1.7]">
              {project.desc}
            </p>
          </div>
        </div>

        <div
          className="order-1 md:order-2 min-h-55 sm:min-h-75 md:min-h-105"
          style={{ background: project.bg }}
        />
      </motion.div>
    </section>
  );
};

export default StackCard;