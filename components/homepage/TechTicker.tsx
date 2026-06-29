"use client";

const TechTicker = () => {
  const techs = [
    "REACT.JS",
    "NEXT.JS",
    "TYPESCRIPT",
    "JAVASCRIPT",
    "TAILWIND CSS",
    "NODE.JS",
    "EXPRESS.JS",
    "PHP",
    "LARAVEL",
    "MYSQL",
    "MONGODB",
    "POSTGRESQL",
  ];
  const doubled = [...techs, ...techs];

  return (
    <>
      <style>{`
        @keyframes ticker {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .ticker-inner { display: flex; gap: 48px; animation: ticker 28s linear infinite; width: max-content; }
        `}</style>
        {/* .ticker-inner:hover { animation-play-state: paused; } */}
      <div className="bg-white border-t border-b border-[#E2E2E2] py-4.25 overflow-hidden my-4">
        <div className="ticker-inner">
          {doubled.map((t, i) => (
            <span
              key={i}
              className="font-mono text-[14px] font-medium text-[#5F5E5E] uppercase whitespace-nowrap"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </>
  );
};

export default TechTicker;
