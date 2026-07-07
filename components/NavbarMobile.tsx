'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'

const NavbarMobile = () => {
    const [isOpen, setIsOpen] = useState(false)
    // const pathname = usePathname()

    // const currentPath = pathname.split('/')[1]

    return (
        <nav className="fixed top-0 left-0 z-50 md:hidden flex justify-end items-center w-full h-16 pr-4">
            <button
                onClick={() => setIsOpen((prev) => !prev)}
                className="flex justify-center items-center bg-white border dark:border-[#831F00] h-8 w-8"
            >
                {isOpen ? <X /> : <Menu />}
            </button>


            <ul
                className={`
                    absolute top-16 left-0 
                    flex flex-col gap-4 
                    p-8 w-full 
                    bg-zinc-50 dark:bg-[#831F00] 
                    text-primary dark:text-white 
                    transition-all duration-500
                    ${isOpen ? 'translate-y-0' : '-translate-y-96'}
                `}
            >
                <li
                >
                    <Link
                        onClick={() => setIsOpen(false)}
                        href="#about"
                        className={`text-lg `}
                    >
                        About
                    </Link>
                </li>


                <li

                >
                    <Link
                        onClick={() => setIsOpen(false)}
                        href="#projects"
                        className={`text-lg `}
                    >
                        Projects
                    </Link>
                </li>


                <li
                >
                    <Link
                        onClick={() => setIsOpen(false)}
                        href="#contactsocial"
                        className={`text-lg `}
                    >
                        Contact & Socials
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavbarMobile