// components/NavbarMobile.tsx

"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";

const NavbarMobile = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [time, setTime] = useState("");
    const pathname = usePathname();

    const closeMenu = () => {
        setIsOpen(false);
    };

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

    return (
        <nav className="fixed top-0 left-0 z-50 md:hidden w-full bg-[#F9F9F9] shadow-sm">
            <div className="flex justify-between items-center h-16 px-4">
                <span className="font-jetbrains text-[12px] font-medium tracking-wider text-[#AD2C00] border-2 border-[#AD2C00] px-4 py-2">
                    {time} WIB
                </span>

                <button
                    onClick={() => setIsOpen((prev) => !prev)}
                    className="flex justify-center items-center border-2 border-[#AD2C00] text-[#AD2C00] h-9 w-9"
                >
                    {isOpen ? (<X size={20} />) : (<Menu size={20} />)}
                </button>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.ul
                        initial={{ y: -20, opacity: 0, }}
                        animate={{ y: 0, opacity: 1, }}
                        exit={{ y: -20, opacity: 0, }}
                        className="flex flex-col gap-6 p-6 bg-[#F9F9F9] font-jetbrains uppercase text-sm shadow-md">
                        <li>
                            <Link onClick={closeMenu} href={pathname === "/" ? "#about" : "/#about"} className="text-[#5F5E5E]">
                                About
                            </Link>
                        </li>

                        <li>
                            <Link onClick={closeMenu} href={pathname === "/" ? "#projects" : "/#projects"} className={pathname.startsWith("/projects") ? "text-[#AD2C00] font-bold" : "text-[#5F5E5E]"}>
                                Projects
                            </Link>
                        </li>

                        <li>
                            <Link onClick={closeMenu} href={pathname === "/" ? "#contactsocial" : "/#contactsocial"} className="text-[#5F5E5E]">
                                Contact & Social
                            </Link>
                        </li>

                        <li>
                            <Link onClick={closeMenu} href="https://drive.google.com/file/d/13EPdVyB3JRFH-ryl4F5L6oKE-9mIMbK1/view?usp=sharing" target="_blank" className="w-full inline-block bg-[#AD2C00]  text-white px-5 py-3">
                                Resume
                            </Link>
                        </li>
                    </motion.ul>
                )}
            </AnimatePresence>
        </nav>
    );
};


export default NavbarMobile;