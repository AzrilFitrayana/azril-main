import {
  Braces,
  Database,
  DraftingCompass,
  LayoutPanelLeft,
} from "lucide-react";

const frontend = [
  "React.js",
  "Next.js",
  "Tailwind CSS",
  "TypeScript",
  "Bootstrap",
  "Material UI",
];
const backend = [
  "Node.js",
  "Express.js",
  "Laravel",
  "PostgreSQL",
  "RESTful APIs",
];
const tools = ["Git", "GitHub", "Figma", "Postman", "Claude"];
const database = ["PostgreSQL", "MongoDB", "MySQL"];

const TechStack = () => {
  return (
    <section id="techstack" className="mt-4">
      <h2 className="flex items-center gap-3 font-mono text-[12px] font-medium text-[#AD2C00] uppercase tracking-widest">
        <span className="block w-8 h-px bg-[#AD2C00]" />
        03. Tech Stack
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        {[
          {
            label: "Frontend",
            icon: <LayoutPanelLeft strokeWidth={2.5} width={24} height={24} />,
            tags: frontend,
            desc: "Where user experience comes to life.",
          },
          {
            label: "Backend",
            icon: <Braces strokeWidth={2.5} width={24} height={24} />,
            tags: backend,
            desc: "Powering applications behind the scenes.",
          },
          {
            label: "Database & API",
            icon: <Database strokeWidth={2.5} width={24} height={24} />,
            tags: database,
            desc: "Keeping data structured and accessible.",
          },
          {
            label: "Tools",
            icon: <DraftingCompass strokeWidth={2.5} width={24} height={24} />,
            tags: tools,
            desc: "The toolkit behind every project.",
          },
        ].map(({ label, icon, tags, desc }) => (
          <div key={label} className="bento-card-solid ">
            <div className="flex flex-col gap-1 mb-6">
              <div className="flex items-center gap-3">
                <span className="text-[#831F00]">{icon}</span>
                <span className="font-display text-[20px] text-[#1A1C1C]">
                  {label}
                </span>
              </div>
              <p className="text-[12px] text-[#595959]">{desc}</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {tags.map((t) => (
                <span key={t} className="chip">
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
