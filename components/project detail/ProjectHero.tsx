import Image from "next/image";

function Info({ label, value, border }: { label: string; value: string; border?: boolean }) {
    return (
        <div className={border ? "border-l border-[#E2E2E2] pl-2" : ""}>
            <p className="font-mono font-medium tracking-widest text-[10px] text-neutral-400">
                {label}
            </p>
            <h4 className="text-2xl font-bold font-display tracking-wide">{value}</h4>
        </div>
    );
}

export default function ProjectHero() {
    return (
        <section className="max-w-6xl mx-auto px-6 pt-10">
            <div className="bg-white border border-[#E2E2E2] shadow-bento overflow-hidden grid md:grid-cols-2">
                <div className="relative min-h-65 sm:min-h-105 lg:min-h-full">
                    <Image
                        src="/project/Group 1.jpg"
                        alt="SuperJob Recruiter"
                        fill
                        priority
                        className="object-cover"
                    />
                </div>

                <div className="flex flex-col justify-center px-6 py-6 xl:py-12 sm:px-10 sm:py-16 lg:px-20">
                    <div className="flex items-center gap-3 mb-2 xl:mb-6">
                        <span className="size-3 rounded-full bg-[#AD2C00]" />
                        <span className="font-mono tracking-[0.25em] text-xs uppercase text-[12px] lg:text-[14px] text-neutral-400">
                            Case Study
                        </span>
                    </div>

                    <h1 className="text-[36px] sm:text-[48px] lg:text-[60px] xl:text-[64px] font-black tracking-wide leading-10 sm:leading-16 mb-4 xl:mb-6">
                        Super Job
                        Recruiter
                    </h1>

                    <p className="text-[14px] lg:text-[16px] leading-[1.8] text-neutral-400 max-w-xl mb-8">
                        Streamlining the hiring process for modern recruitment teams with an
                        automated, high-performance ecosystem.
                    </p>

                    <div className="border-t border-[#E2E2E2] mb-4" />

                    <div className="flex justify-between">
                        <Info label="SHIPPED" value="2026" />
                        <Info label="ROLE" value="Frontend" border />
                        <Info label="DURATION" value="1 Month" border />
                    </div>
                </div>
            </div>
        </section>
    );
}
