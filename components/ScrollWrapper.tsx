"use client";

import { ReactLenis } from 'lenis/react'

const ScrollWrapper = ({ children }: { children: React.ReactNode }) => {
    return (
        <ReactLenis root>
            {children}
        </ReactLenis>
    )
}

export default ScrollWrapper