import {
  Search,
  Share2,
  Target,
  Globe,
  Palette,
  MessageSquare,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const services = [
  {
    icon: Search,
    title: "SEO & Google Ranking",
    description: "Get found on Google and drive organic traffic to your business",
  },
  {
    icon: Share2,
    title: "Social Media Growth",
    description: "Build your brand presence and engage with your audience",
  },
  {
    icon: Target,
    title: "Ads & Lead Generation",
    description: "Run profitable ad campaigns that bring quality leads",
  },
  {
    icon: Globe,
    title: "Website Development",
    description: "Professional websites that convert visitors into customers",
  },
  {
    icon: Palette,
    title: "Branding & Design",
    description: "Create a memorable brand identity that stands out",
  },
  {
    icon: MessageSquare,
    title: "WhatsApp & SMS Marketing",
    description: "Reach your customers directly with personalized messaging",
  },
];

const ForBusiness = () => {
  return (
    <section id="business" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-semibold mb-4">
            For Businesses
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Grow Your Business with Our Digital Marketing Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From startups to established businesses, we help you scale online with proven strategies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className="group border-0 shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 bg-card"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader className="pb-2">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <service.icon className="h-7 w-7 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button
            size="lg"
            className="bg-secondary hover:bg-secondary/90 text-secondary-foreground"
          >
            Get Free Strategy Call
            <ArrowRight className="h-5 w-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ForBusiness;
