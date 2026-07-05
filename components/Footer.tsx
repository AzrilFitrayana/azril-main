const socialMediaLinks = [
  {
    name: 'github',
    url: 'https://github.com/AzrilFitrayana',
  },
  {
    name: 'linkedin',
    url: 'https://linkedin.com/in/azrilfitrayana',
  },
  {
    name: 'instagram',
    url: 'https://www.instagram.com/azrilfitrayana/',
  },
]

const Footer = () => {
  return (
    <footer className="border-t border-[#E2E2E2] bg-[#F9F9F9] px-16 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
      <span className="font-mono text-[12px] font-medium text-[#1A1C1C] tracking-widest uppercase">
        © 2026 created by Muhammad Azril Fitrayana
      </span>
      <div className="flex gap-8">
        {socialMediaLinks.map((media, index) => (
          <a
            key={index}
            href={media.url}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[12px] font-medium text-[#5F5E5E] no-underline uppercase hover:text-[#AD2C00] transition-colors"
          >
            {media.name}
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
