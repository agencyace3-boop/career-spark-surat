import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, GraduationCap, Lightbulb, Palette } from "lucide-react";
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
    icon: GraduationCap,
    title: "Courses",
    description: "Master digital marketing with our industry-focused training programs",
    href: "#courses",
  },
  {
    icon: Lightbulb,
    title: "Consultancy",
    description: "Get expert guidance to grow your business online",
    href: "#business",
  },
  {
    icon: Palette,
    title: "Branding",
    description: "Build a memorable brand identity that stands out",
    href: "#business",
  },
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Auto-play carousel
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % banners.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + banners.length) % banners.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const goToSlide = (index: number) => {
    if (isAnimating || index === currentIndex) return;
    setIsAnimating(true);
    setCurrentIndex(index);
    setTimeout(() => setIsAnimating(false), 500);
  };

  return (
    <section className="bg-background">
      {/* Banner Carousel */}
      <div className="relative w-full h-[400px] md:h-[500px] lg:h-[550px] overflow-hidden">
        {/* Slides */}
        {banners.map((banner, index) => (
          <div
            key={banner.id}
            className={`absolute inset-0 transition-all duration-500 ease-in-out ${
              index === currentIndex
                ? "opacity-100 translate-x-0"
                : index < currentIndex
                ? "opacity-0 -translate-x-full"
                : "opacity-0 translate-x-full"
            }`}
          >
            {/* Background Image */}
            <div className="absolute inset-0">
              <img
                src={banner.image}
                alt={banner.headline}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/40" />
            </div>

            {/* Content */}
            <div className="relative h-full container mx-auto px-4 flex items-center">
              <div className="max-w-2xl text-primary-foreground">
                <h1
                  className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight transition-all duration-500 delay-100 ${
                    index === currentIndex
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4"
                  }`}
                >
                  {banner.headline}
                </h1>
                <p
                  className={`text-lg md:text-xl text-primary-foreground/90 mb-8 transition-all duration-500 delay-200 ${
                    index === currentIndex
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4"
                  }`}
                >
                  {banner.subheadline}
                </p>
                <Button
                  size="lg"
                  className={`bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8 py-6 text-lg font-semibold transition-all duration-500 delay-300 ${
                    index === currentIndex
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4"
                  }`}
                >
                  {banner.cta}
                </Button>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-background/20 backdrop-blur-sm flex items-center justify-center text-primary-foreground hover:bg-background/40 transition-colors z-10"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-background/20 backdrop-blur-sm flex items-center justify-center text-primary-foreground hover:bg-background/40 transition-colors z-10"
          aria-label="Next slide"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        {/* Dots Indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {banners.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "w-8 bg-secondary"
                  : "w-2 bg-primary-foreground/50 hover:bg-primary-foreground/70"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Progress Bar */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-primary-foreground/20">
          <div
            className="h-full bg-secondary transition-all duration-[5000ms] ease-linear"
            style={{
              width: "100%",
              transform: `scaleX(${isAnimating ? 0 : 1})`,
              transformOrigin: "left",
            }}
            key={currentIndex}
          />
        </div>
      </div>

      {/* Service Cards */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-6">
          {serviceCards.map((service, index) => (
            <a
              key={service.title}
              href={service.href}
              className="group relative overflow-hidden rounded-xl bg-secondary p-8 text-secondary-foreground shadow-elevated hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Background Pattern */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl transform translate-x-8 -translate-y-8 group-hover:scale-150 transition-transform duration-500" />
              
              <div className="relative">
                <div className="w-16 h-16 rounded-xl bg-primary/20 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary/30 transition-all duration-300">
                  <service.icon className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-secondary-foreground/80">{service.description}</p>
              </div>

              {/* Arrow Indicator */}
              <div className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ChevronRight className="h-5 w-5" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
