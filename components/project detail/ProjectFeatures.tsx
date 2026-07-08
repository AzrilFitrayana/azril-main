import { CheckCircle2 } from "lucide-react";

interface FeaturesProps {
  features?: string[];
}

const FeatureCard = ({ feature, index }: { feature: string; index: number }) => {
  const number = String(index + 1).padStart(2, "0");

  return (
    <div className="group bg-white border border-[#E4E2DC] rounded-sm p-6 hover:border-[#AD2C00] transition-all duration-300">
      <div className="flex gap-4">
        <div className="shrink-0 size-9 rounded-full bg-[#F4E3DC] flex items-center justify-center">
          <CheckCircle2 size={18} className="text-[#AD2C00]" />
        </div>

        <div>
          <span className="block font-mono text-xs text-neutral-400 mb-3">{number}</span>
          <p className="body-text leading-relaxed">{feature}</p>
        </div>
      </div>
    </div>
  );
};

const ProjectFeatures = ({ features }: FeaturesProps) => {
  return (
    <section className="space-y-8" id="features">
      <div>
        <div>
          <h2 className="section-title">Key Features</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {features?.map((feature, index) => (
            <FeatureCard key={`${feature}-${index}`} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectFeatures;
