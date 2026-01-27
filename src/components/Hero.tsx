import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const banners = [
  {
    id: 1,
    headline: "Become Job-Ready with Digital Marketing",
    subheadline: "Practical courses, real projects & expert-led training for students",
    cta: "Explore Courses",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
  },
  {
    id: 2,
    headline: "Grow Your Business 10x with Digital",
    subheadline: "Complete digital marketing services for businesses in Surat & across India",
    cta: "Get Free Consultation",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
  },
  {
    id: 3,
    headline: "Learn from Industry Experts",
    subheadline: "Live training sessions with professionals who have real-world experience",
    cta: "Start Learning",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
  },
  {
    id: 4,
    headline: "100% Placement Assistance",
    subheadline: "Get placed in top companies with our dedicated career support team",
    cta: "Join Now",
    image: "https://images.unsplash.com/photo-1553835973-dec43bfddbeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
  },
];

const serviceCards = [
  {
    title: "Courses",
    description: "Master digital marketing with our industry-focused training programs designed for career growth",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    href: "#courses",
    stats: "15+ Courses",
  },
  {
    title: "Consultancy",
    description: "Get expert guidance and strategies to scale your business online with proven methods",
    image: "https://images.unsplash.com/photo-1553028826-f4804a6dba3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    href: "#business",
    stats: "500+ Clients",
  },
  {
    title: "Branding",
    description: "Build a memorable brand identity that stands out and connects with your audience",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    href: "#business",
    stats: "200+ Brands",
  },
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % banners.length);
    setProgress(0);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + banners.length) % banners.length);
    setProgress(0);
  }, []);

  const goToSlide = (index: number) => {
    if (index === currentIndex) return;
    setCurrentIndex(index);
    setProgress(0);
  };

  // Auto-play with progress
  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          return 0;
        }
        return prev + 2;
      });
    }, 100);

    return () => clearInterval(progressInterval);
  }, []);

  // Change slide when progress reaches 100
  useEffect(() => {
    if (progress >= 100) {
      nextSlide();
    }
  }, [progress, nextSlide]);

  return (
    <section className="bg-background">
      {/* Banner Carousel */}
      <div className="relative w-full h-[400px] md:h-[500px] lg:h-[550px] overflow-hidden">
        {/* Slides */}
        {banners.map((banner, index) => (
          <div
            key={banner.id}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            {/* Background Image */}
            <div className="absolute inset-0">
              <img
                src={banner.image}
                alt={banner.headline}
                className={`w-full h-full object-cover transition-transform duration-[5000ms] ease-linear ${
                  index === currentIndex ? "scale-110" : "scale-100"
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/50" />
            </div>

            {/* Content */}
            <div className="relative h-full container mx-auto px-4 flex items-center">
              <div className="max-w-2xl text-primary-foreground">
                <h1
                  className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight transition-all duration-700 ${
                    index === currentIndex
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: index === currentIndex ? "200ms" : "0ms" }}
                >
                  {banner.headline}
                </h1>
                <p
                  className={`text-lg md:text-xl text-primary-foreground/90 mb-8 transition-all duration-700 ${
                    index === currentIndex
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: index === currentIndex ? "400ms" : "0ms" }}
                >
                  {banner.subheadline}
                </p>
                <div
                  className={`transition-all duration-700 ${
                    index === currentIndex
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: index === currentIndex ? "600ms" : "0ms" }}
                >
                  <Button
                    size="lg"
                    className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
                  >
                    {banner.cta}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-background/20 backdrop-blur-sm flex items-center justify-center text-primary-foreground hover:bg-background/40 transition-all z-20 hover:scale-110"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-background/20 backdrop-blur-sm flex items-center justify-center text-primary-foreground hover:bg-background/40 transition-all z-20 hover:scale-110"
          aria-label="Next slide"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        {/* Dots Indicator with Progress */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
          {banners.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className="relative h-2 rounded-full overflow-hidden bg-primary-foreground/30 transition-all duration-300"
              style={{ width: index === currentIndex ? "48px" : "12px" }}
              aria-label={`Go to slide ${index + 1}`}
            >
              {index === currentIndex && (
                <div
                  className="absolute inset-y-0 left-0 bg-secondary rounded-full transition-all duration-100"
                  style={{ width: `${progress}%` }}
                />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Service Cards */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          {serviceCards.map((service, index) => (
            <a
              key={service.title}
              href={service.href}
              className="group relative overflow-hidden rounded-2xl shadow-card hover:shadow-elevated transition-all duration-500 hover:-translate-y-3 bg-card"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent" />
                
                {/* Stats Badge */}
                <div className="absolute top-4 right-4 bg-secondary text-secondary-foreground text-sm font-bold px-4 py-2 rounded-full shadow-lg">
                  {service.stats}
                </div>

                {/* Title on Image */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground">
                    {service.title}
                  </h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="flex items-center text-secondary font-semibold group-hover:gap-3 gap-2 transition-all duration-300">
                  <span>Learn More</span>
                  <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </div>

              {/* Bottom Accent Line */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
