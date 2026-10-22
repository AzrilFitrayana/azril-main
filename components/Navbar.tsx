"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";



const Navbar = () => {
  const [time, setTime] = useState("");
  const [showNavbar, setShowNavbar] = useState(true);
  const [activeSection, setActiveSection] = useState('')
  const lastScrollY = useRef(0)
  const pathname = usePathname();

  // Hide show navbar when scroll down and show when scroll up
  useEffect(() => {
    //function
    const handleScroll = () => {
      const currentY = window.scrollY;

      // console.log(
      //   "SEBELUM UPDATE:",
      //   currentY,
      //   lastScrollY.current
      // );

      // console.log(
      //   "Apakah scroll turun?",
      //   currentY > lastScrollY.current
      // );

      if (currentY > lastScrollY.current) {
        setShowNavbar(false); // scroll kebawah
      } else {
        setShowNavbar(true); // scroll keatas
      }

      lastScrollY.current = currentY;

      // console.log(
      //   "SETELAH UPDATE:",
      //   currentY,
      //   lastScrollY.current
      // );
    };

    // add event listener
    window.addEventListener(
      "scroll",
      handleScroll
    );

    // cleanup event listener
    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, []);


  // Timezone: WIB Asia/Jakarta
  useEffect(() => {
    const update = () => {
      const t = new Date().toLocaleTimeString("id-ID", {
        hour: "2-digit",
        minute: "2-digit",
        timeZone: "Asia/Jakarta",
      });
      setTime(t);
    };
    update();
    const id = setInterval(update, 30000);
    return () => clearInterval(id);
  }, []);


  // Deteksi section aktif
  useEffect(() => {
    if (pathname !== "/") return;

    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {

          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }

        });
      },
      {
        rootMargin: "-45% 0px -45% 0px",
        threshold: 0,
      }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };

  }, [pathname]);

  return (
    <nav
      className={`hidden md:flex py-5 px-4 2xl:px-0 fixed top-0 left-0 right-0 z-50 font-jetbrains text-[12px] font-medium tracking-wider bg-[#F9F9F9] shadow-sm transition-transform duration-300 ${showNavbar ? 'translate-y-0' : '-translate-y-full'}`}
    >
      <div className="container w-full flex items-center justify-between mx-auto">
        <span className="font-jetbrains text-[12px] font-medium tracking-wider text-[#AD2C00] border-2 border-[#AD2C00] px-4 py-2">
          {time} WIB
        </span>


        <ul className="flex items-center gap-6 gap-x-11 font-jetbrains text-[12px] font-medium tracking-wider uppercase text-[#5F5E5E]">
          <li>
            <Link href={pathname === "/" ? "#about" : "/#about"} className={pathname === "/" && activeSection === "about" ? 'text-[#AD2C00] font-extrabold' : 'text-[#5F5E5E]'}>About</Link>
          </li>
          <li>
            <Link
              href={pathname === "/" ? "#projects" : "/#projects"}
              className={
                pathname.startsWith("/projects") ||
                  (pathname === "/" && activeSection === "projects")
                  ? "text-[#AD2C00] font-extrabold"
                  : "text-[#5F5E5E]"
              }
            >
              Projects
            </Link>
          </li>
          <li>
            <Link href={
              pathname === "/" ? "#contactsocial" : "/#contactsocial"}
              className={pathname === "/" && activeSection === "contactsocial" ? 'text-[#AD2C00] font-extrabold' : 'text-[#5F5E5E]'}>Contact & Social</Link>
          </li>
          <li>
            <Link
              href="https://drive.google.com/file/d/13EPdVyB3JRFH-ryl4F5L6oKE-9mIMbK1/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="font-jetbrains text-[12px] font-medium tracking-wider uppercase px-4 py-2 text-white bg-[#AD2C00] hover:-translate-y-0.5 active:translate-0 cursor-pointer transition-all"
            >
              Resume
            </Link>
          </li>
        </ul>

      </div>
    </nav>
  );
};

export default Navbar;
