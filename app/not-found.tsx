import Link from 'next/link'
import React from 'react'

const NotFound = () => {
    return (
        <main className="flex-1 flex items-center justify-center px-6 min-h-[calc(100dvh-20rem)]">
            <div className="max-w-120 text-center">
                <p
                    className={`font-mono text-[88px] leading-none font-bold text-[#AD2C00] mb-5`}
                >
                    404
                </p>

                <p className="font-mono text-xs font-semibold tracking-wide uppercase text-[#454545] mb-3">
                    Page not found
                </p>

                <h1
                    className={`font-mono text-2xl font-semibold leading-snug mb-3.5`}
                >
                    This page went off the record.
                </h1>

                <p className="text-sm leading-relaxed text-[#454545] mb-10">
                    It may have been moved, renamed, or never existed in the first place.
                </p>

                <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
                    <Link
                        href="/"
                        className="inline-flex items-center justify-center min-h-11 px-5.5 rounded-md bg-[#AD2C00] hover:bg-[#8F2400] text-white text-sm font-semibold transition-colors"
                    >
                        Back to home
                    </Link>
                    <Link
                        href="/projects"
                        className="inline-flex items-center justify-center min-h-11 px-5.5 rounded-md border border-[#E4E2DC] text-[#454545] hover:border-[#AD2C00] hover:text-[#AD2C00] text-sm font-semibold transition-colors"
                    >
                        View all projects
                    </Link>
                </div>

                <div className="w-full h-px bg-[#E4E2DC] mb-6" />

                <nav aria-label="Quick links" className="flex justify-center gap-5 flex-wrap">
                    <a
                        href="#about"
                        className="text-xs font-medium text-[#454545] hover:text-[#AD2C00] transition-colors"
                    >
                        About
                    </a>
                    <a
                        href="#contact"
                        className="text-xs font-medium text-[#454545] hover:text-[#AD2C00] transition-colors"
                    >
                        Contact &amp; Social
                    </a>
                    <a
                        href="#"
                        className="text-xs font-medium text-[#454545] hover:text-[#AD2C00] transition-colors"
                    >
                        Resume
                    </a>
                </nav>
            </div>
        </main>
    )
}

export default NotFound
