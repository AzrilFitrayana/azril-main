"use client";

import { useEffect, useState } from "react";

interface MenuProps {
  id: string;
  label: string;
};


export default function ProjectSidebar({ menus, stack }: { menus: MenuProps[], stack: string[] }) {
  const [active, setActive] = useState(menus[0]?.id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-45% 0px -45% 0px",
        threshold: 0,
      }
    );

    menus.forEach((menu) => {
      const section = document.getElementById(menu.id);
      if (section) {
        observer.observe(section);
      }
    });

    return () => observer.disconnect();
  }, [menus]);

  return (
    <aside className="sticky top-28 h-fit max-lg:hidden">
      {/* Tech Stack */}
      <p className="font-mono font-bold text-xs uppercase text-neutral-400 mb-5">
        Technical Stack
      </p>

      <div className="flex flex-wrap gap-4 mb-14">
        {stack.map((item, index) => (
          <span
            key={index}
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
                ${active === menu.id
                  ? "text-[#AD2C00] font-semibold"
                  : "text-neutral-400"
                }
              `}
            >
              <span
                className={`
                  h-0.75 rounded-full transition-all
                  ${active === menu.id
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
