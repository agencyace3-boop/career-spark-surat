const toolLogos = [
  { name: "Google", color: "#4285F4", textColors: ["#4285F4", "#EA4335", "#FBBC05", "#34A853", "#4285F4", "#EA4335"] },
  { name: "SEMrush", color: "#FF642D" },
  { name: "Shopify", color: "#96BF48" },
  { name: "Mailchimp", color: "#FFE01B" },
  { name: "Meta", color: "#0081FB" },
  { name: "HubSpot", color: "#FF7A59" },
  { name: "Canva", color: "#00C4CC" },
  { name: "WordPress", color: "#21759B" },
  { name: "Hootsuite", color: "#143059" },
  { name: "Ahrefs", color: "#FF6A00" },
];

const ToolsMarquee = () => {
  return (
    <section className="py-10 bg-muted/50 overflow-hidden border-y border-border/50">
      <div className="container mx-auto px-4 mb-6">
        <p className="text-center text-sm text-muted-foreground">
          Master the tools used by industry professionals worldwide
        </p>
      </div>
      
      <div className="relative">
        <div className="flex animate-marquee gap-12 items-center">
          {[...toolLogos, ...toolLogos].map((tool, index) => (
            <div
              key={`${tool.name}-${index}`}
              className="flex-shrink-0 flex items-center justify-center px-4"
            >
              {tool.textColors ? (
                <span className="text-2xl font-bold tracking-tight flex">
                  {tool.name.split('').map((char, i) => (
                    <span key={i} style={{ color: tool.textColors[i % tool.textColors.length] }}>
                      {char}
                    </span>
                  ))}
                </span>
              ) : (
                <span 
                  className="text-2xl font-bold tracking-tight"
                  style={{ color: tool.color }}
                >
                  {tool.name}
                </span>
              )}
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
          animation: marquee 25s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default ToolsMarquee;
