import { GraduationCap, Lightbulb, Megaphone } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: GraduationCap,
    title: "Courses",
    description: "Master digital marketing with our comprehensive training programs. From SEO to Social Media, learn skills that get you hired.",
    link: "/courses",
    image: "/images/services/students.jpg",
  },
  {
    icon: Lightbulb,
    title: "Consultancy",
    description: "Expert digital marketing consultation for your business. Strategy, audits, and actionable insights to grow your brand online.",
    link: "/contact",
    image: "/images/services/business.jpg",
  },
  {
    icon: Megaphone,
    title: "Branding",
    description: "Build a powerful brand identity. Logo design, brand strategy, and complete digital presence management for businesses.",
    link: "/contact",
    image: "/images/courses/entrepreneur.jpg",
  },
];

const ServiceCards = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
            What We Offer
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our <span className="text-secondary">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive solutions for individuals and businesses looking to excel in digital marketing
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <Link
              key={service.title}
              to={service.link}
              className="group relative bg-card rounded-3xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-500 hover:-translate-y-2"
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-primary/40 group-hover:from-primary/95 group-hover:via-primary/90 transition-all duration-500" />
              </div>

              {/* Content */}
              <div className="relative p-8 h-72 flex flex-col justify-end">
                <div className="w-14 h-14 rounded-2xl bg-secondary/20 backdrop-blur-sm flex items-center justify-center mb-4 group-hover:bg-secondary group-hover:scale-110 transition-all duration-300">
                  <service.icon className="h-7 w-7 text-secondary group-hover:text-secondary-foreground transition-colors" />
                </div>
                <h3 className="text-2xl font-bold text-primary-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-primary-foreground/80 text-sm line-clamp-2 group-hover:line-clamp-none transition-all">
                  {service.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCards;
