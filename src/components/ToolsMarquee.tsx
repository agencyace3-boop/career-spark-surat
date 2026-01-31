const toolLogos = [
  { 
    name: "Google", 
    logo: "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
  },
  { 
    name: "Meta", 
    logo: "https://img.icons8.com/color/480/meta.png"
  },
  { 
    name: "Shopify", 
    logo: "https://img.icons8.com/color/480/shopify.png"
  },
  { 
    name: "HubSpot", 
    logo: "https://img.icons8.com/color/480/hubspot.png"
  },
  { 
    name: "Mailchimp", 
    logo: "https://img.icons8.com/color/480/mailchimp.png"
  },
  { 
    name: "WordPress", 
    logo: "https://img.icons8.com/color/480/wordpress.png"
  },
  { 
    name: "Canva", 
    logo: "https://img.icons8.com/color/480/canva.png"
  },
  { 
    name: "Semrush", 
    logo: "https://img.icons8.com/color/480/semrush.png"
  },
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
        {/* Gradient masks for smooth fade */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-muted/50 to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-muted/50 to-transparent z-10" />
        
        <div className="flex animate-marquee gap-16 items-center">
          {[...toolLogos, ...toolLogos].map((tool, index) => (
            <div
              key={`${tool.name}-${index}`}
              className="flex-shrink-0 h-10 min-w-[120px] flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity duration-300"
            >
              <img
                src={tool.logo}
                alt={tool.name}
                className="h-full max-w-[140px] object-contain"
                loading="lazy"
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
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default ToolsMarquee;
