"use client";

import { useEffect, useState } from "react";

const menus = [
  { id: "overview", label: "Overview" },
  { id: "problem", label: "Problem" },
  { id: "solution", label: "Solution" },
  { id: "results", label: "Results" },
  { id: "gallery", label: "Gallery" },
];

export default function ProjectSidebar() {
  const [active, setActive] = useState("overview");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -60% 0px" }
    );

    menus.forEach((menu) => {
      const section = document.getElementById(menu.id);
      if (section) {
        observer.observe(section);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <aside className="sticky top-28 h-fit max-lg:hidden">
      {/* Tech Stack */}
      <p className="font-mono font-bold text-xs uppercase text-neutral-400 mb-5">
        Technical Stack
      </p>

      <div className="flex flex-wrap gap-4 mb-14">
        {["Next.js", "TypeScript", "MongoDB"].map((item) => (
          <span
            key={item}
            className="chip shadow-sm"
          >
            {item}
          </span>
        ))}
      </div>

      {/* Navigation */}
      <ul className="space-y-4">
        {menus.map((menu) => (
          <li key={menu.id}>
            <a
              href={`#${menu.id}`}
              className={`
                flex items-center gap-2 text-[14px] transition
                ${
                  active === menu.id
                    ? "text-[#AD2C00] font-semibold"
                    : "text-neutral-400"
                }
              `}
            >
              <span
                className={`
                  h-0.75 rounded-full transition-all
                  ${
                    active === menu.id
                      ? "w-8 bg-[#AD2C00]"
                      : "w-5 bg-neutral-300"
                  }
                `}
              />
              {menu.label}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
}
