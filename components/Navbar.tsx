"use client";

import { useState, useEffect } from "react";

const Navbar = () => {
  const [time, setTime] = useState("");

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

  return (
    <div className="hidden md:flex justify-between items-center 2xl:container mx-auto py-5 px-4 2xl:px-0 font-jetbrains text-[12px] font-medium tracking-wider sticky top-0 z-50 bg-[#F9F9F9]">
      <span className="text-[#AD2C00] border-2 border-[#AD2C00] px-4 py-2">
        {time} WIB
      </span>

      <ul className="flex items-center gap-6 gap-x-11 text-[#5F5E5E]">
        <li>ABOUT</li>
        <li>PROJECT</li>
        <li>CONTACT & SOCIAL</li>
        <li>
          <button className="px-4 py-2 text-white bg-[#AD2C00] hover:-translate-y-0.5 active:translate-0 cursor-pointer transition-all">
            RESUME
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
