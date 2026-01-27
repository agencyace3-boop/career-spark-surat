const toolLogos = [
  { name: "ChatGPT", src: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg" },
  { name: "Google Analytics", src: "https://www.gstatic.com/analytics-suite/header/suite/v2/ic_analytics.svg" },
  { name: "SEMrush", src: "https://cdn.semrush.com/static/index/semrush-logo.svg" },
  { name: "Shopify", src: "https://cdn.shopify.com/s/files/1/0070/7032/files/shopify_logo_whitebg.png" },
  { name: "Adobe Creative Cloud", src: "https://upload.wikimedia.org/wikipedia/commons/a/ac/Creative_Cloud.svg" },
  { name: "WordPress", src: "https://s.w.org/style/images/about/WordPress-logotype-wmark.png" },
  { name: "Mailchimp", src: "https://upload.wikimedia.org/wikipedia/commons/b/b6/Mailchimp_Logo.svg" },
];

const ToolsMarquee = () => {
  return (
    <section className="py-12 bg-muted overflow-hidden">
      <div className="container mx-auto px-4 mb-8">
        <p className="text-center text-muted-foreground">
          We are experts and provide exposure to the most advanced and widely used tools recommended by industry professionals.
        </p>
      </div>
      
      <div className="relative">
        <div className="flex animate-marquee gap-16 items-center">
          {[...toolLogos, ...toolLogos].map((tool, index) => (
            <div
              key={`${tool.name}-${index}`}
              className="flex-shrink-0 h-12 w-32 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
            >
              <img
                src={tool.src}
                alt={tool.name}
                className="h-full w-full object-contain"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.parentElement!.innerHTML = `<span class="text-lg font-bold text-muted-foreground">${tool.name}</span>`;
                }}
              />
            </div>
          ))}
        </div>
      </div>
      
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default ToolsMarquee;
