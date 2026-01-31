import { useState, useEffect, useCallback } from "react";
import { ArrowRight, Play, CheckCircle, Star, Users, Award, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
const heroSlides = [{
  id: 1,
  badge: "🎯 #1 Digital Marketing Institute in Surat",
  headline: "Transform Your Career with",
  highlight: "Digital Marketing Mastery",
  subheadline: "Join 3,000+ successful graduates who launched thriving careers in digital marketing. Get certified, get placed, get ahead.",
  image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
  cta: "Start Your Journey",
  ctaSecondary: "Watch Success Stories"
}, {
  id: 2,
  badge: "💼 100% Placement Assistance",
  headline: "From Beginner to",
  highlight: "Industry Expert",
  subheadline: "Master SEO, Google Ads, Social Media Marketing & more with hands-on projects and real-world campaigns.",
  image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
  cta: "Explore Courses",
  ctaSecondary: "Book Free Demo"
}, {
  id: 3,
  badge: "🏆 Industry-Recognized Certifications",
  headline: "Learn from",
  highlight: "Industry Experts",
  subheadline: "Our trainers bring 10+ years of real-world experience from top agencies and Fortune 500 companies.",
  image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
  cta: "Meet Our Trainers",
  ctaSecondary: "Download Syllabus"
}];
const stats = [{
  icon: Users,
  value: "3,000+",
  label: "Students Trained"
}, {
  icon: Award,
  value: "95%",
  label: "Placement Rate"
}, {
  icon: Star,
  value: "4.9/5",
  label: "Student Rating"
}, {
  icon: BookOpen,
  value: "20+",
  label: "Expert Courses"
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
  return <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      {heroSlides.map((s, index) => <div key={s.id} className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? "opacity-100" : "opacity-0"}`}>
          <img src={s.image} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/70" />
        </div>)}

      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-secondary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-primary-foreground">
            {/* Badge */}
            

            {/* Headline */}
            <h1 key={`headline-${currentSlide}`} className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fade-in-up">
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
                <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground shadow-glow animate-pulse-glow text-base px-8">
                  {slide.cta}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 text-base px-6">
                <Play className="mr-2 h-5 w-5" />
                {slide.ctaSecondary}
              </Button>
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

          {/* Right Content - Stats Card */}
          <div className="hidden lg:block">
            <div className="bg-background/10 backdrop-blur-xl rounded-3xl p-8 border border-primary-foreground/10 shadow-elevated">
              <h3 className="text-2xl font-bold text-primary-foreground mb-6 text-center">
                Why Students Choose Us
              </h3>
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => <div key={stat.label} className="text-center p-4 bg-primary-foreground/5 rounded-2xl hover:bg-primary-foreground/10 transition-colors" style={{
                animationDelay: `${index * 0.1}s`
              }}>
                    <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-secondary/20 flex items-center justify-center">
                      <stat.icon className="h-6 w-6 text-secondary" />
                    </div>
                    <div className="text-3xl font-bold text-primary-foreground mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-primary-foreground/70">
                      {stat.label}
                    </div>
                  </div>)}
              </div>

              {/* Quick Form */}
              <div className="mt-8 p-6 bg-background rounded-2xl">
                <h4 className="font-semibold text-foreground mb-4">Get Free Career Counseling</h4>
                <div className="space-y-3">
                  <input type="text" placeholder="Your Name" className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-foreground" />
                  <input type="tel" placeholder="Phone Number" className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-foreground" />
                  <Button className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                    Book Free Demo Class
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Slide Navigation */}
        <div className="flex justify-center gap-3 mt-12">
          {heroSlides.map((_, index) => <button key={index} onClick={() => goToSlide(index)} className={`relative h-2 rounded-full transition-all duration-300 overflow-hidden ${index === currentSlide ? "w-12 bg-secondary" : "w-8 bg-primary-foreground/30 hover:bg-primary-foreground/50"}`} aria-label={`Go to slide ${index + 1}`}>
              {index === currentSlide && <div className="absolute inset-0 bg-secondary/50 animate-[progress_6s_linear]" />}
            </button>)}
        </div>
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