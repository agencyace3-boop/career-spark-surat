import googleLogo from "@/assets/tools/google.svg";
import metaLogo from "@/assets/tools/meta.svg";
import shopifyLogo from "@/assets/tools/shopify.svg";
import hubspotLogo from "@/assets/tools/hubspot.svg";
import mailchimpLogo from "@/assets/tools/mailchimp.svg";
import wordpressLogo from "@/assets/tools/wordpress.svg";
import canvaLogo from "@/assets/tools/canva.svg";
import semrushLogo from "@/assets/tools/semrush.svg";

const toolLogos = [
  { name: "Google", logo: googleLogo },
  { name: "Meta", logo: metaLogo },
  { name: "Shopify", logo: shopifyLogo },
  { name: "HubSpot", logo: hubspotLogo },
  { name: "Mailchimp", logo: mailchimpLogo },
  { name: "WordPress", logo: wordpressLogo },
  { name: "Canva", logo: canvaLogo },
  { name: "Semrush", logo: semrushLogo },
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
        
        <div className="flex animate-marquee gap-12 items-center px-20 will-change-transform">
          {[...toolLogos, ...toolLogos].map((tool, index) => (
            <div
              key={`${tool.name}-${index}`}
              className="flex-shrink-0 min-w-[140px] flex items-center justify-center transition-transform duration-300 hover:scale-[1.03]"
            >
              <div className="rounded-xl px-4 py-2 bg-background/60 ring-1 ring-border/40 shadow-sm backdrop-blur-sm flex items-center gap-3">
                <img
                  src={tool.logo}
                  alt={tool.name}
                  className="h-9 md:h-10 w-auto max-w-[120px] object-contain"
                  loading="lazy"
                />
                <span className="text-sm font-bold text-foreground whitespace-nowrap">{tool.name}</span>
              </div>
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
