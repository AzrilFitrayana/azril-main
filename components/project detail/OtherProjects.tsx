import Link from "next/link";

const projects = [
  {
    title: "GenAdvance",
    category: "IT CONSULTING LANDING",
    href: "/projects/genadvance",
  },
  {
    title: "DealDulu",
    category: "LIVE ECOMMERCE APP",
    href: "/projects/dealdulu",
  },
];

export default function OtherProjects() {
  return (
    <section>
      <h2 className="section-title">Other Projects</h2>

      <div className="mt-4 grid grid-cols-1 lg:grid-cols-2 gap-4">
        {projects.map((project) => (
          <Link
            key={project.title}
            href={project.href}
            className="group flex items-center justify-between h-10 px-6 border border-neutral-200 bg-white transition-all duration-300 ease-out hover:border-[#831F00] hover:bg-neutral-100 hover:-translate-y-0.5 active:translate-0"
          >
            <span className="font-body font-bold text-[14px] text-black">
              {project.title}
            </span>
            <span className="font-mono text-[11px] uppercase tracking-widest text-neutral-400">
              {project.category}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
