"use client";

const LinkedInIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const GitHubIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
);

const MailIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const Contact = () => {
  return (
    <section id="contactsocial" className="mt-4">
      <div className="flex items-center gap-3 font-mono text-[12px] font-medium text-[#AD2C00] uppercase tracking-widest mb-4">
        <span className="block w-8 h-px bg-[#AD2C00]" />
        05. Contact
      </div>

      <div className="bg-[#1A1C1C] rounded-[20px] overflow-hidden">
        <div className="grid grid-cols-1 sm:grid-cols-[1fr_auto]">
          {/* Left — letter body */}
          <div className="flex flex-col gap-7 p-7 sm:p-10">
            <div>
              <p className="font-mono text-[10px] font-medium text-[#C4C5C6] tracking-[0.18em] uppercase mb-3">
                From · Tasikmalaya, ID · GMT+7
              </p>
              <h2 className="font-display text-[28px] sm:text-[40px] font-medium text-white leading-[1.15]">
                Got a build in mind?
                <br />
                <span className="text-[#FFDBD1]">Drop a line.</span>
              </h2>
            </div>

            <p className="font-body text-[14px] text-[#B0ADAB] leading-7 max-w-sm">
              Open to freelance projects, collaborative experiments, and
              full-time opportunities. I read every message and reply within a
              day or two.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href="mailto:azrilfitrayana77@gmail.com"
                className="inline-flex items-center gap-2 bg-[#831F00] hover:bg-[#AD2C00] text-white font-mono text-[12px] font-medium tracking-widest uppercase px-5 py-3 rounded-xl hover:-translate-y-0.5 active:translate-0 cursor-pointer transition-all no-underline"
              >
                <MailIcon />
                Send email
              </a>
              <a
                href="https://linkedin.com/in/azrilfitrayana"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="w-11 h-11 rounded-xl border border-[#3D3F3F] hover:border-[#8A6A62] text-[#9A9B9C] hover:text-[#FFDBD1] flex items-center justify-center hover:-translate-y-0.5 active:translate-0 cursor-pointer transition-all no-underline"
              >
                <LinkedInIcon />
              </a>
              <a
                href="https://github.com/AzrilFitrayana"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="w-11 h-11 rounded-xl border border-[#3D3F3F] hover:border-[#8A6A62] text-[#9A9B9C] hover:text-[#FFDBD1] flex items-center justify-center hover:-translate-y-0.5 active:translate-0 cursor-pointer transition-all no-underline"
              >
                <GitHubIcon />
              </a>
            </div>
          </div>

          {/* Right — postcard panel */}
          <div className="flex flex-row sm:flex-col w-full sm:w-52 border-t sm:border-t-0 sm:border-l border-[#4A4C4C]">
            {/* Stamp */}
            <div className="flex-1 sm:flex-none flex items-start justify-center p-6">
              <div className="w-16 h-20 border border-[#831F00] rounded-sm flex flex-col items-center justify-center gap-1 px-2">
                <span className="text-[#b92d02] text-2xl leading-none">▶</span>
                <span className="font-mono text-[8px] font-medium text-[#ffffff] tracking-widest uppercase text-center leading-4">
                  Open
                  <br />
                  to work
                </span>
              </div>
            </div>

            {/* Postmark */}
            <div className="hidden sm:flex justify-center px-6 pb-4">
              <div className="w-20 h-20 rounded-full border border-[#4A4C4C] flex flex-col items-center justify-center gap-0.5">
                <span className="font-mono text-[8px] font-medium text-[#C4C5C6] tracking-wider uppercase">
                  Azril
                </span>
                <span className="font-mono text-[16px] font-extrabold text-[#b92d02] tracking-wider">
                  &#39;26
                </span>
                <span className="font-mono text-[8px] text-[#C4C5C6] tracking-wider uppercase">
                  ID · Web
                </span>
              </div>
            </div>

            {/* To block */}
            <div className="flex-1 sm:flex-none border-l sm:border-l-0 sm:border-t border-[#4A4C4C] p-6">
              <p className="font-mono text-[10px] font-medium text-[#7A7B7C] tracking-[0.15em] uppercase mb-1">
                To ▶
              </p>
              <p className="font-mono text-[12px] text-[#C4C5C6] leading-[1.7]">
                You,
                <br />
                Anywhere with
                <br />a brief.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
