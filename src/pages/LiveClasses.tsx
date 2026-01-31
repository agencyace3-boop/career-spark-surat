import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import {
  Play,
  CheckCircle,
  Star,
  Users,
  Award,
  BookOpen,
  Target,
  Briefcase,
  GraduationCap,
  Zap,
  TrendingUp,
  Bot,
  ArrowRight,
  Clock,
  Video,
} from "lucide-react";
import { Link } from "react-router-dom";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Digital Marketing Manager",
    followers: "Placed at TechCorp",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    text: "Thank you Vikaas sir for the systematic approach in training. My freelance business has grown 10x because of the skills I learned here.",
  },
  {
    name: "Rahul Patel",
    role: "SEO Specialist",
    followers: "Earning ₹1L+/month",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    text: "I really need to thank Surat DMS for guiding me. I was clueless about SEO and now I manage campaigns for 15+ clients.",
  },
  {
    name: "Sneha Desai",
    role: "Social Media Manager",
    followers: "Running Own Agency",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    text: "Thanks to Surat DMS for showing the right path. I started my agency within 2 months of completing the course.",
  },
];

const learningPoints = [
  { icon: Bot, title: "AI Mastery for Marketing", description: "Use AI tools daily. Build systems that automate and scale content." },
  { icon: Target, title: "SEO That Actually Ranks", description: "Learn keyword research, on-page SEO, and link building strategies." },
  { icon: TrendingUp, title: "Google Ads Mastery", description: "Create high-ROI campaigns with smart bidding and targeting." },
  { icon: Users, title: "Social Media Growth", description: "Build engaged audiences on Instagram, Facebook & LinkedIn." },
  { icon: Zap, title: "Email Marketing & Automation", description: "Design converting campaigns with AI-powered automation." },
  { icon: Briefcase, title: "Launch Your Agency", description: "Complete roadmap to start your own digital marketing business." },
];

const bonuses = [
  { title: "30 Days LIVE Training Sessions", value: "₹19,999" },
  { title: "AI Marketing Tools Masterclass", value: "₹4,999" },
  { title: "Digital Marketing Toolkit + Templates", value: "₹2,999" },
  { title: "Resume Building & Interview Prep", value: "₹1,999" },
  { title: "1-on-1 Career Counseling Session", value: "₹2,999" },
  { title: "Lifetime Access to Recordings", value: "₹4,999" },
];

const painPoints = [
  "Do you want to learn Digital Marketing but have NO IDEA where to start?",
  "Are you posting content on social media but haven't seen any business growth?",
  "Are you confused about which skills to learn and how to monetize them?",
  "Do you want to switch careers but don't know which path leads to high income?",
  "Are you looking to start freelancing or your own agency but need proper guidance?",
  "Do you want to use AI tools but don't know how to leverage them for marketing?",
];

const LiveClasses = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: "", phone: "", email: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    toast({
      title: "Registration Successful! 🎉",
      description: "Our team will contact you within 24 hours with joining details.",
    });
    setFormData({ name: "", phone: "", email: "" });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const scrollToForm = () => {
    document.getElementById("register-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Top Announcement Bar */}
      <div className="bg-secondary text-secondary-foreground py-3 text-center">
        <p className="text-sm md:text-base font-medium">
          Ready to Launch Your High-Income Digital Marketing Career...? 🚀
        </p>
      </div>

      {/* Hero Section */}
      <section className="relative bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-secondary rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 py-12 md:py-16 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4 leading-tight">
              The Future of Marketing = <span className="underline decoration-secondary decoration-4">AI + Digital Skills</span>
            </h1>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-secondary mb-6">
              Master AI-Powered Digital Marketing to 10x Your Income & Career Opportunities
            </h2>
            <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto">
              ( Whether you're a student, job seeker, or entrepreneur - this 30-day LIVE program will equip you with practical skills and a proven system for digital success )
            </p>

            {/* Video Placeholder */}
            <div className="relative max-w-3xl mx-auto mb-8 rounded-2xl overflow-hidden shadow-elevated">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                alt="Live Training Preview"
                className="w-full aspect-video object-cover"
              />
              <div className="absolute inset-0 bg-primary/40 flex items-center justify-center">
                <button className="w-20 h-20 rounded-full bg-secondary flex items-center justify-center shadow-glow hover:scale-110 transition-transform">
                  <Play className="h-8 w-8 text-secondary-foreground ml-1" fill="currentColor" />
                </button>
              </div>
            </div>

            <p className="text-primary-foreground/80 mb-6">
              Learn directly from <strong className="text-secondary">Vikaas Parekh</strong> — 30+ years experience, 500+ clients managed, ₹1Cr+ ad campaigns handled
            </p>

            <Button
              onClick={scrollToForm}
              size="lg"
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground text-lg px-10 py-6 shadow-glow animate-pulse-glow"
            >
              I Want to Enroll at Offer Price
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Strip */}
      <section className="py-12 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div key={t.name} className="flex gap-4">
                <img src={t.image} alt={t.name} className="w-16 h-16 rounded-full object-cover border-2 border-secondary flex-shrink-0" />
                <div>
                  <p className="text-muted-foreground text-sm italic mb-2">"{t.text}"</p>
                  <p className="font-semibold text-foreground">{t.name}, <span className="text-secondary">{t.followers}</span></p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What You'll Learn */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What You'll Learn in the <span className="text-secondary">30-Day LIVE Program</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {learningPoints.map((item) => (
              <div key={item.title} className="bg-card p-6 rounded-2xl border border-border/50 hover:border-primary/30 transition-all hover:shadow-card">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground text-center mb-8">
              Check All Questions Where Your Answer is <span className="text-secondary">YES!</span>
            </h2>
            <div className="space-y-4">
              {painPoints.map((point, i) => (
                <label key={i} className="flex items-start gap-4 bg-primary-foreground/10 backdrop-blur-sm p-4 rounded-xl cursor-pointer hover:bg-primary-foreground/15 transition-colors">
                  <input type="checkbox" className="w-5 h-5 mt-1 accent-secondary" />
                  <span className="text-primary-foreground">{point}</span>
                </label>
              ))}
            </div>
            <p className="text-center text-primary-foreground/80 mt-8 text-lg">
              If your answer for any of the above was <strong className="text-secondary">YES</strong>, then I invite you to join this program and <strong>transform your career forever</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Bonuses Section */}
      <section className="py-16 bg-background" id="register-form">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
              Here's <span className="text-secondary">EVERYTHING</span> You'll Get
            </h2>
            <p className="text-muted-foreground">When You Join This Program Today!</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto items-start">
            {/* Bonuses List */}
            <div className="space-y-4">
              {bonuses.map((bonus) => (
                <div key={bonus.title} className="flex items-center justify-between bg-muted p-4 rounded-xl">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                    <span className="font-medium text-foreground">{bonus.title}</span>
                  </div>
                  <span className="text-muted-foreground text-sm">({bonus.value} Value)</span>
                </div>
              ))}
              
              <div className="bg-secondary/10 border border-secondary/30 p-6 rounded-2xl mt-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-foreground">Total Value:</span>
                  <span className="text-xl font-bold text-muted-foreground line-through">₹37,994</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-foreground">Today Just:</span>
                  <span className="text-4xl font-bold text-secondary">₹2,999</span>
                </div>
                <p className="text-center text-destructive font-semibold mt-4">
                  ⚡ Price Increasing After This Batch!
                </p>
              </div>
            </div>

            {/* Registration Form */}
            <div className="bg-card p-8 rounded-3xl shadow-elevated border border-border/50">
              <div className="text-center mb-6">
                <div className="inline-flex items-center gap-2 bg-destructive/10 text-destructive px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-destructive opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-destructive"></span>
                  </span>
                  Only 18 Seats Left!
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">Register Now</h3>
                <p className="text-muted-foreground text-sm">Secure your seat before price increases</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your Full Name"
                  className="w-full px-4 py-4 rounded-xl border border-border bg-muted focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-foreground"
                />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="WhatsApp Number"
                  className="w-full px-4 py-4 rounded-xl border border-border bg-muted focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-foreground"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Email Address"
                  className="w-full px-4 py-4 rounded-xl border border-border bg-muted focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-foreground"
                />

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground py-6 text-lg font-bold shadow-glow"
                >
                  {isSubmitting ? "Processing..." : "Join at ₹2,999 Only →"}
                </Button>

                <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>30 Days</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Video className="h-4 w-4" />
                    <span>LIVE on Zoom</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Award className="h-4 w-4" />
                    <span>Certificate</span>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Mentor Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Vikaas Parekh"
                className="rounded-3xl shadow-elevated w-full max-w-md mx-auto"
              />
              <div className="absolute -bottom-4 -right-4 bg-secondary text-secondary-foreground p-4 rounded-xl shadow-elevated">
                <div className="text-2xl font-bold">30+</div>
                <div className="text-xs">Years Exp</div>
              </div>
            </div>
            <div>
              <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
                Your Mentor
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Vikaas Parekh</h2>
              <p className="text-secondary font-semibold mb-4">Founder - Surat Digital Marketing School</p>
              <p className="text-muted-foreground mb-6">
                With <strong>30+ years of experience</strong> in Finance, Real Estate, and Digital Marketing, Vikaas has managed 
                <strong> 500+ client portfolios</strong> and ad campaigns worth <strong>₹1 Crore+</strong>. Currently Guest Faculty at 
                <strong> Auro University, Surat</strong>.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Clients", value: "500+" },
                  { label: "Ad Spend", value: "₹1Cr+" },
                  { label: "Experience", value: "30+ Yrs" },
                  { label: "Success Rate", value: "95%" },
                ].map((s) => (
                  <div key={s.label} className="bg-card p-4 rounded-xl text-center">
                    <div className="text-2xl font-bold text-primary">{s.value}</div>
                    <div className="text-sm text-muted-foreground">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky Bottom CTA */}
      <div className="fixed bottom-0 left-0 right-0 bg-primary/95 backdrop-blur-sm border-t border-primary-foreground/10 py-3 px-4 z-50">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-primary-foreground text-sm md:text-base text-center md:text-left">
            Next Batch Starting Soon! <span className="text-secondary font-semibold">Limited Seats Available.</span>
          </p>
          <Button onClick={scrollToForm} className="bg-secondary hover:bg-secondary/90 text-secondary-foreground whitespace-nowrap">
            Enroll Now — ₹2,999
          </Button>
        </div>
      </div>

      {/* Footer spacing for sticky bar */}
      <div className="h-20" />

      {/* Simple Footer */}
      <footer className="bg-foreground text-background py-8">
        <div className="container mx-auto px-4 text-center">
          <Link to="/" className="text-2xl font-bold mb-4 inline-block">
            Surat<span className="text-secondary">DMS</span>
          </Link>
          <p className="text-background/60 text-sm">
            © {new Date().getFullYear()} Surat Digital Marketing School. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default LiveClasses;
