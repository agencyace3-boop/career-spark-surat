import { Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";

const programs = [
  {
    title: "Digital Marketing Master Program",
    description: "Complete digital marketing training from basics to advanced strategies",
    duration: "3 Months",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    popular: true,
  },
  {
    title: "SEO & Performance Marketing",
    description: "Master search engine optimization and performance-based marketing",
    duration: "30 Days",
    image: "https://images.unsplash.com/photo-1571721795195-a2ca2d3370a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    popular: false,
  },
  {
    title: "Google Ads & Meta Ads",
    description: "Learn paid advertising on Google and Meta platforms",
    duration: "30 Days",
    image: "https://images.unsplash.com/photo-1553835973-dec43bfddbeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    popular: false,
  },
  {
    title: "Website & E-Commerce Growth",
    description: "Build and grow successful online stores and websites",
    duration: "30 Days",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    popular: false,
  },
];

const FeaturedPrograms = () => {
  return (
    <section id="courses" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Most Popular Programs
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Industry-focused courses designed to make you job-ready or help grow your business
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((program, index) => (
            <Card
              key={program.title}
              className="group overflow-hidden border-0 shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 bg-card"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {program.popular && (
                  <span className="absolute top-3 left-3 bg-secondary text-secondary-foreground text-xs font-bold px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                )}
              </div>
              <CardHeader className="pb-2">
                <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                  {program.title}
                </h3>
              </CardHeader>
              <CardContent className="pb-4">
                <p className="text-sm text-muted-foreground mb-4">
                  {program.description}
                </p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span>Duration: {program.duration}</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button
                  variant="outline"
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-colors"
                >
                  View Program
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            View All Courses
            <ArrowRight className="h-5 w-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPrograms;
