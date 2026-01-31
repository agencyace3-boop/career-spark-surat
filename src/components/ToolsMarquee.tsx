const toolLogos = [
  { 
    name: "Google", 
    logo: "https://www.gstatic.com/images/branding/googlelogo/svg/googlelogo_clr_74x24px.svg"
  },
  { 
    name: "Meta", 
    logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg"
  },
  { 
    name: "Shopify", 
    logo: "https://cdn.shopify.com/shopifycloud/brochure/assets/brand-assets/shopify-logo-primary-logo-456baa801ee66a0a435671082365958316831c9960c480451dd0330bcdae304f.svg"
  },
  { 
    name: "HubSpot", 
    logo: "https://www.hubspot.com/hubfs/HubSpot_Logos/HubSpot-Inversed-Favicon.png"
  },
  { 
    name: "Mailchimp", 
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Mailchimp_Logo-Horizontal_Black.svg/512px-Mailchimp_Logo-Horizontal_Black.svg.png"
  },
  { 
    name: "WordPress", 
    logo: "https://s.w.org/style/images/about/WordPress-logotype-standard.png"
  },
  { 
    name: "Canva", 
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Canva_icon_2021.svg"
  },
  { 
    name: "Semrush", 
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Semrush_Logo.svg/512px-Semrush_Logo.svg.png"
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
