"use client";

import { Download, Pause, Play, Mail } from "lucide-react";
import Image from "next/image";
import { motion } from "motion/react";
import { useRef, useEffect } from "react";
import Link from "next/link";

interface VinylRecordProps {
  isPlaying: boolean;
  onPlay: () => void;
  onPause: () => void;
}

const Hero = ({ isPlaying, onPlay, onPause }: VinylRecordProps) => {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play().catch(() => {});
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

  return (
    <section className="w-full sm:max-w-370 sm:mx-auto mt-5 px-4 2xl:px-0">
      <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-4 sm:gap-2 xl:gap-5">
        {/* Hero Card */}
        <div className="bg-[#AD2D01] px-6 py-8 sm:px-8 sm:py-10 md:px-9 md:py-10 flex items-center h-auto min-h-80 md:h-120 relative overflow-hidden shadow-bento border border-[#E2E2E2]">
          <div className="absolute top-3 left-3 lg:top-5 lg:left-5 xl:top-7 xl:left-7 sm w-3 h-3 rounded bg-white shadow-[0_0_20px_white]" />
          <div className="relative z-10">
            <h1 className="font-display font-extrabold text-[40px] leading-[0.95] sm:text-[56px] md:text-[70px] md:leading-18 text-white mb-4">
              <span className="block text-white">BUILDING SCALABLE</span>
              <span className="block text-[#FFDBD1]">WEB APPS,</span>
              <span className="block text-[#FFDBD1]">END-TO-END.</span>
            </h1>
            <p className="font-body text-[14px] leading-6 text-white/90 max-w-none md:max-w-130 mb-4">
              Solving problems at the intersection of technology and human
              behavior by building modern, scalable, and user-focused web
              applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-stretch sm:items-center mt-6">
              <Link
                href="https://drive.google.com/file/d/13EPdVyB3JRFH-ryl4F5L6oKE-9mIMbK1/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-[#831F00] text-white px-6 py-3 text-[12px] sm:text-[14px] font-medium font-display tracking-wider flex items-center justify-center gap-2 hover:-translate-y-0.5 active:translate-0 cursor-pointer transition-all"
              >
                <Download
                  strokeWidth={2.5}
                  width={18}
                  height={18}
                  className="align-middle"
                />
                <span className="leading-none">DOWNLOAD CV</span>
              </Link>
              <Link
                href="mailto:azrilfitrayana77@gmail.com"
                className="w-full sm:w-auto bg-[#F9F9F9] text-[#1A1C1C] px-6 py-3 text-[12px] sm:text-[14px] font-medium font-display tracking-wider no-underline border border-[#8E7069] flex items-center justify-center gap-2 hover:-translate-y-0.5 active:translate-0 cursor-pointer transition-all"
              >
                <Mail
                  strokeWidth={2.5}
                  width={18}
                  height={18}
                  className="align-middle"
                />
                <span className="leading-none">azrilfitrayana77@gmail.com</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Profile / Vinyl Card */}
        <div className="bg-[#F9F9F9] border border-[#E2E2E2] shadow-bento flex flex-col justify-center relative overflow-hidden max-h-none md:max-h-120">
          <div className="relative w-full h-70 sm:h-90 md:h-102.5">
            <motion.div
              animate={{ rotate: isPlaying ? 360 : 0 }}
              transition={{
                rotate: isPlaying
                  ? {
                      duration: 1.8,
                      repeat: Infinity,
                      ease: "linear",
                      repeatType: "loop",
                    }
                  : {
                      duration: 0,
                      ease: "linear",
                    },
              }}
              className="absolute top-0 -right-10"
            >
              <Image
                src="/home page/vinyl2.png"
                alt="Vinyl Record"
                width={400}
                height={400}
                quality={75}
                fetchPriority="high"
                className="block max-w-72.5 lg:max-w-80 xl:max-w-102.5 h-auto mx-auto"
                sizes="(min-width: 1280px) 410px, (min-width: 1024px) 320px, 290px"
              />
            </motion.div>
          </div>

          <motion.div
            className="absolute top-0 left-8 md:left-90 md:-top-6 lg:-left-19 lg:top-5 xl:top-2 xl:-left-6  cursor-pointer"
            style={{
              transformOrigin: "80% 20%",
              filter: "drop-shadow(0 4px 12px rgba(0,0,0,0.2))",
            }}
            animate={{
              rotate: isPlaying ? -10 : 0,
              y: isPlaying ? 0 : 2,
            }}
            transition={{
              duration: 0.7,
              ease: [0.4, 0, 0.2, 1],
              y: { duration: 0.25 },
            }}
            onClick={isPlaying ? onPause : onPlay}
          >
            <Image
              src="/home page/tonearm.png"
              alt="Tonearm"
              width={334}
              height={334}
              quality={75}
              className="block max-w-60 sm:max-w-70 xl:max-w-102.5 h-auto"
              sizes="(min-width: 1280px) 410px, (min-width: 640px) 280px, 240px"
            />
          </motion.div>

          {/* Now playing label */}
          <div className="absolute bottom-4 left-4 right-4 lg:bottom-12 xl:bottom-12 xl:left-6 xl:right-auto bg-[rgba(249,249,249,0.8)] backdrop-blur-[2px] border border-[#E2BFB6] rounded-2xl p-3 xl:p-3.5 w-auto xl:w-79 shadow-[0_1px_2px_rgba(0,0,0,0.05)]">
            <div className="flex items-center justify-between gap-2">
              <span className="font-mono text-[11px] font-medium text-[#1A1C1C] tracking-wide uppercase leading-tight">
                no more what if
              </span>
              <div className="flex gap-2 shrink-0">
                <button
                  onClick={onPlay}
                  className="w-7 h-7 rounded-full bg-[#831F00] border-none text-white flex items-center justify-center hover:-translate-y-0.5 active:translate-0 cursor-pointer transition-all"
                >
                  <Play strokeWidth={2.5} width={14} height={14} />
                </button>
                <button
                  onClick={onPause}
                  className="w-7 h-7 rounded-full bg-[#831F00] border-none text-white flex items-center justify-center hover:-translate-y-0.5 active:translate-0 cursor-pointer transition-all"
                >
                  <Pause strokeWidth={2.5} width={14} height={14} />
                </button>
              </div>
            </div>
            <div className="font-mono text-[10px] font-medium text-[#5A413A] tracking-widest uppercase mt-1.5">
              Lyn Inaizumi // {isPlaying ? "PLAYING" : "PAUSED"}
            </div>
          </div>

          <audio
            ref={audioRef}
            src="/music/No More What Ifs.mp3"
            preload="auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
