import { useState, useEffect, useCallback } from "react";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
const heroSlides = [{
  id: 1,
  headline: "Transform Your Career with",
  highlight: "Digital Marketing Mastery",
  subheadline: "Join 3,000+ successful graduates who launched thriving careers in digital marketing. Get certified, get placed, get ahead.",
  image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
}, {
  id: 2,
  headline: "From Beginner to",
  highlight: "Industry Expert",
  subheadline: "Master SEO, Google Ads, Social Media Marketing & more with hands-on projects and real-world campaigns.",
  image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
}, {
  id: 3,
  headline: "Learn from",
  highlight: "Industry Experts",
  subheadline: "Our trainers bring 10+ years of real-world experience from top agencies and Fortune 500 companies.",
  image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
}];
const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const goToSlide = useCallback((index: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide(index);
    setTimeout(() => setIsAnimating(false), 600);
  }, [isAnimating]);
  useEffect(() => {
    const interval = setInterval(() => {
      goToSlide((currentSlide + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [currentSlide, goToSlide]);
  const slide = heroSlides[currentSlide];
  return <section className="relative min-h-[70vh] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      {heroSlides.map((s, index) => <div key={s.id} className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? "opacity-100" : "opacity-0"}`}>
          <img src={s.image} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/70" />
        </div>)}

      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-secondary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          {/* Headline */}
          <h1 key={`headline-${currentSlide}`} className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-primary-foreground animate-fade-in-up">
            {slide.headline}
            <br />
            <span className="text-secondary">{slide.highlight}</span>
          </h1>

          {/* Subheadline */}
          <p key={`sub-${currentSlide}`} className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-xl animate-fade-in-up" style={{
          animationDelay: "0.2s"
        }}>
            {slide.subheadline}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 mb-10 animate-fade-in-up" style={{
          animationDelay: "0.4s"
        }}>
            <Link to="/courses">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground shadow-glow text-base px-8">
                Explore Courses
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center gap-6 animate-fade-in-up" style={{
          animationDelay: "0.6s"
        }}>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-accent" />
              <span className="text-sm text-primary-foreground/80">Certified Courses</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-accent" />
              <span className="text-sm text-primary-foreground/80">Placement Support</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-accent" />
              <span className="text-sm text-primary-foreground/80">Industry Projects</span>
            </div>
          </div>
        </div>

        {/* Slide Navigation */}
        
      </div>

      <style>{`
        @keyframes progress {
          from { transform: scaleX(0); transform-origin: left; }
          to { transform: scaleX(1); transform-origin: left; }
        }
      `}</style>
    </section>;
};
export default Hero;