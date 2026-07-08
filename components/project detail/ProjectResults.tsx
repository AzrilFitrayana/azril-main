import { ProjectResultProps } from "@/types/types";

export default function ProjectResults({ results }: { results: ProjectResultProps[] }) {
  return (
    <section id="results">
      <h2 className="section-title">Key Results</h2>

      <div>
        {results.map((item) => (
          <div
            key={item.title}
            className="flex items-center gap-10 py-10 border-b first:border-t max-md:flex-col max-md:items-start"
          >
            <h3 className="font-serif text-6xl text-[#AD2C00] min-w-40">
              {item.number}
            </h3>

            <div className="flex-1">
              <h4 className="font-semibold text-lg mb-2">{item.title}</h4>
              <p className="text-neutral-600 leading-relaxed max-w-md">
                {item.desc}
              </p>
            </div>

            <div className="w-36 h-2 rounded-full bg-neutral-200 overflow-hidden max-md:hidden">
              <div
                style={{ width: `${item.progress}%` }}
                className="h-full rounded-full bg-[#AD2C00]"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
