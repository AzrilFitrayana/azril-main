import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const links = [
  { title: "Github Repository", url: "https://github.com" },
  { title: "Live Website", url: "#" },
  { title: "Company", url: "#" },
];

export default function ProjectLinks() {
  return (
    <section id="references">
      <h2 className="section-title">References</h2>

      <div className="flex flex-col gap-2 items-start">
        {links.map((item) => (
          <Link key={item.title} target="_blank"
            rel="noopener noreferrer" href={item.url} className="flex items-center gap-1 font-body text-[16px] leading-loose font-bold tracking-wide underline underline-offset-4">{item.title} <ArrowUpRight width={18} height={18} /></Link>

          // <a
          // key={item.title}
          // href={item.url}
          // className="bg-white border rounded-xl p-6 hover:border-[#AD2C00] hover:-translate-y-2 transition"
          // >
          //   <p className="text-xs uppercase text-neutral-400">{item.title}</p>
          //   <h3 className="font-serif text-2xl mt-5">Visit →</h3>
          // </a>
        ))}
      </div>
    </section>
  );
}
