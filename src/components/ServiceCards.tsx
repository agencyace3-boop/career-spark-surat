import { ArrowRight, BookOpen, TrendingUp, Palette } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const services = [
  {
    icon: BookOpen,
    title: "Courses",
    description: "Master digital marketing with our expert-led courses. From SEO to Social Media, get certified and job-ready.",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    link: "/courses",
    buttonText: "Explore Courses",
    stats: "20+ Courses",
  },
  {
    icon: TrendingUp,
    title: "Consultancy",
    description: "Strategic digital marketing consulting for businesses. Boost your online presence and ROI with our experts.",
    image: "https://images.unsplash.com/photo-1553028826-f4804a6dba3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    link: "/contact",
    buttonText: "Get Consultation",
    stats: "500+ Clients",
  },
  {
    icon: Palette,
    title: "Branding",
    description: "Build a powerful brand identity. Logo design, brand strategy, and complete visual identity solutions.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    link: "/contact",
    buttonText: "Start Branding",
    stats: "200+ Brands",
  },
];

const ServiceCards = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What We <span className="text-secondary">Offer</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive digital marketing solutions for individuals and businesses
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative bg-card rounded-3xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-500 hover:-translate-y-2 border border-border/50"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/40 to-transparent" />
                
                {/* Icon */}
                <div className="absolute top-4 left-4 w-12 h-12 rounded-xl bg-secondary flex items-center justify-center">
                  <service.icon className="h-6 w-6 text-secondary-foreground" />
                </div>

                {/* Stats Badge */}
                <div className="absolute bottom-4 right-4 bg-background/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-sm font-semibold text-foreground">{service.stats}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                <Link to={service.link}>
                  <Button className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground group/btn">
                    {service.buttonText}
                    <ArrowRight className="ml-2 h-5 w-5 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCards;
