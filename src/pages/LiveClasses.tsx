import { useState, useEffect, useRef } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import {
  Play,
  CheckCircle,
  Clock,
  Users,
  Award,
  BookOpen,
  Target,
  Briefcase,
  GraduationCap,
  Video,
  Headphones,
  FileText,
  Rocket,
  Calendar,
  Globe,
  MessageCircle,
  Star,
  Zap,
  TrendingUp,
  Bot,
  ArrowRight,
  Gift,
  Shield,
  Monitor,
} from "lucide-react";

const modules = [
  {
    number: "01",
    title: "Digital Marketing & AI Fundamentals",
    description: "Discover how AI is revolutionizing marketing and learn to leverage AI tools to save time and boost results.",
    icon: Bot,
    color: "from-blue-500 to-cyan-500",
  },
  {
    number: "02",
    title: "Social Media Marketing & Management",
    description: "Master strategies to grow business pages on Facebook, Instagram, and LinkedIn with proven engagement tactics.",
    icon: Users,
    color: "from-pink-500 to-rose-500",
  },
  {
    number: "03",
    title: "Search Engine Optimization (SEO)",
    description: "Rank higher on Google, increase visibility, and attract qualified organic traffic using up-to-date methods.",
    icon: TrendingUp,
    color: "from-green-500 to-emerald-500",
  },
  {
    number: "04",
    title: "Google Ads & Keyword Research",
    description: "Create high-performing ad campaigns that maximize ROI with smart keyword planning techniques.",
    icon: Target,
    color: "from-orange-500 to-amber-500",
  },
  {
    number: "05",
    title: "YouTube Marketing Mastery",
    description: "Build, grow, and monetize YouTube channels with effective content strategies and optimization techniques.",
    icon: Play,
    color: "from-red-500 to-pink-500",
  },
  {
    number: "06",
    title: "Email Marketing & Automation",
    description: "Design engaging email campaigns that convert and master AI-powered automation tools.",
    icon: Zap,
    color: "from-purple-500 to-violet-500",
  },
  {
    number: "07",
    title: "Analytics & Performance Tracking",
    description: "Measure results, interpret data insights, and make data-driven decisions for continuous improvement.",
    icon: BookOpen,
    color: "from-teal-500 to-cyan-500",
  },
  {
    number: "08",
    title: "Launch Your Digital Agency",
    description: "Get a complete roadmap to build and launch your own digital marketing agency or freelancing business.",
    icon: Rocket,
    color: "from-indigo-500 to-blue-500",
  },
];

const bonusItems = [
  { title: "30 Days LIVE Training Sessions", value: "₹19,999" },
  { title: "AI Marketing Tools Masterclass", value: "₹4,999" },
  { title: "Digital Marketing Toolkit + Templates", value: "₹2,999" },
  { title: "Resume Building & Interview Prep", value: "₹1,999" },
  { title: "1-on-1 Career Counseling Session", value: "₹2,999" },
  { title: "Lifetime Access to Recordings", value: "₹4,999" },
];

const totalValue = 37994;

const targetAudience = [
  { icon: GraduationCap, title: "Students", description: "Start your digital career early and gain competitive advantage", image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
  { icon: Briefcase, title: "Job Seekers", description: "Learn in-demand skills that companies are actively hiring for", image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
  { icon: Target, title: "Freelancers", description: "Attract high-paying clients and build a sustainable business", image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
  { icon: Users, title: "Homemakers", description: "Build your second income from home with flexible skills", image: "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
  { icon: TrendingUp, title: "Business Owners", description: "Grow your business using powerful digital techniques", image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
  { icon: BookOpen, title: "Teachers", description: "Leverage AI tools and promote educational services", image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
];

const whyChoose = [
  { icon: Award, title: "Real-World Experience", description: "Learn from someone who has managed 500+ clients and ₹1 crore+ in ad campaigns" },
  { icon: GraduationCap, title: "Proven Track Record", description: "Guest Faculty at Auro University with 30+ years of marketing experience" },
  { icon: Bot, title: "AI-Powered Curriculum", description: "Stay ahead with latest AI tools integrated throughout the course" },
  { icon: Headphones, title: "Complete Support System", description: "Continuous mentorship and guidance from enrollment to agency launch" },
  { icon: TrendingUp, title: "Income-Focused Training", description: "Every module designed to help you generate real income" },
  { icon: Rocket, title: "Practical Implementation", description: "Build real projects and campaigns you can showcase immediately" },
];

const AnimatedCounter = ({ target, suffix = "", inView }: { target: number; suffix?: string; inView: boolean }) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    if (!inView) return;
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    
    return () => clearInterval(timer);
  }, [target, inView]);
  
  return <>{count.toLocaleString()}{suffix}</>;
};

const LiveClasses = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: "", phone: "", email: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [seatsLeft, setSeatsLeft] = useState(18);
  const [statsInView, setStatsInView] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStatsInView(true); },
      { threshold: 0.3 }
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    toast({
      title: "Registration Successful! 🎉",
      description: "Our team will contact you within 24 hours with the joining details.",
    });
    setFormData({ name: "", phone: "", email: "" });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
              alt=""
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/90 to-primary/80" />
          </div>

          {/* Floating Elements */}
          <div className="absolute top-20 right-20 w-72 h-72 bg-secondary/20 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-40 left-10 w-48 h-48 bg-accent/20 rounded-full blur-3xl" />

          <div className="container mx-auto px-4 relative z-10 py-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="text-primary-foreground">
                <div className="inline-flex items-center gap-2 bg-secondary/20 backdrop-blur-sm border border-secondary/30 rounded-full px-5 py-2.5 mb-8 animate-fade-in">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-secondary"></span>
                  </span>
                  <span className="text-sm font-semibold">Live Online Classes Starting Soon!</span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fade-in-up">
                  Unlock High-Income
                  <br />
                  <span className="text-secondary">Digital Marketing</span>
                  <br />
                  <span className="text-secondary">with AI</span>
                </h1>

                <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-xl leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                  Transform your career in just <strong className="text-secondary">30 days</strong>. Master SEO, Google Ads, Social Media & AI tools 
                  under the mentorship of <strong className="text-secondary">Vikaas Parekh</strong>.
                </p>

                {/* Price Badge */}
                <div className="inline-flex items-center gap-6 bg-background/10 backdrop-blur-md border border-primary-foreground/20 rounded-2xl p-5 mb-8 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
                  <div>
                    <span className="text-sm text-primary-foreground/60 line-through">₹9,999</span>
                    <div className="text-4xl font-bold text-secondary">₹2,999</div>
                  </div>
                  <div className="h-14 w-px bg-primary-foreground/20" />
                  <div className="text-left">
                    <div className="text-xs text-primary-foreground/60 uppercase tracking-wide">Limited Offer</div>
                    <div className="text-2xl font-bold text-secondary">70% OFF</div>
                  </div>
                </div>

                {/* Stats Row */}
                <div ref={statsRef} className="grid grid-cols-3 gap-6 mb-8">
                  {[
                    { value: 30, suffix: "+", label: "Years Experience" },
                    { value: 500, suffix: "+", label: "Clients Managed" },
                    { value: 1, suffix: "Cr+", label: "Ad Spend Managed" },
                  ].map((stat, i) => (
                    <div key={stat.label} className="text-center animate-fade-in-up" style={{ animationDelay: `${0.4 + i * 0.1}s` }}>
                      <div className="text-3xl font-bold text-secondary">
                        {stat.value === 1 ? "₹" : ""}<AnimatedCounter target={stat.value} suffix={stat.suffix} inView={statsInView} />
                      </div>
                      <div className="text-xs text-primary-foreground/70">{stat.label}</div>
                    </div>
                  ))}
                </div>

                {/* Trust Points */}
                <div className="flex flex-wrap gap-4 animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
                  {[
                    { icon: Video, text: "Live Zoom Sessions" },
                    { icon: Play, text: "Recording Access" },
                    { icon: Award, text: "Certificate Included" },
                  ].map((item) => (
                    <div key={item.text} className="flex items-center gap-2 bg-primary-foreground/10 px-4 py-2 rounded-full">
                      <item.icon className="h-4 w-4 text-secondary" />
                      <span className="text-sm">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Content - Registration Form */}
              <div className="relative animate-scale-in">
                <div className="bg-background rounded-3xl p-8 shadow-elevated relative overflow-hidden">
                  {/* Urgency Badge */}
                  <div className="absolute top-0 right-0 bg-secondary text-secondary-foreground px-4 py-2 rounded-bl-2xl font-semibold text-sm flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary-foreground opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary-foreground"></span>
                    </span>
                    Only {seatsLeft} Seats Left!
                  </div>

                  <div className="text-center mb-6 pt-4">
                    <h2 className="text-2xl font-bold text-foreground mb-2">
                      Register Now
                    </h2>
                    <p className="text-muted-foreground text-sm">
                      Secure your seat before price increases
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your Full Name"
                      className="w-full px-4 py-4 rounded-xl border border-border bg-muted/50 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-foreground placeholder:text-muted-foreground"
                    />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="WhatsApp Number"
                      className="w-full px-4 py-4 rounded-xl border border-border bg-muted/50 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-foreground placeholder:text-muted-foreground"
                    />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="Email Address"
                      className="w-full px-4 py-4 rounded-xl border border-border bg-muted/50 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-foreground placeholder:text-muted-foreground"
                    />

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground py-6 text-lg font-bold rounded-xl shadow-glow transition-all hover:scale-[1.02]"
                    >
                      {isSubmitting ? "Registering..." : "Join at ₹2,999 Only →"}
                    </Button>
                  </form>

                  {/* Bottom Features */}
                  <div className="flex justify-center gap-6 mt-6 pt-4 border-t border-border">
                    {[
                      { icon: Clock, text: "30 Days" },
                      { icon: Monitor, text: "LIVE on Zoom" },
                      { icon: Award, text: "Certificate" },
                    ].map((item) => (
                      <div key={item.text} className="flex items-center gap-2 text-muted-foreground text-sm">
                        <item.icon className="h-4 w-4" />
                        <span>{item.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Everything You'll Get Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                Here's <span className="text-secondary">EVERYTHING</span> You'll Get
              </h2>
              <p className="text-lg text-muted-foreground">
                When You Join This Program Today!
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
              {/* Bonus Items List */}
              <div className="space-y-4">
                {bonusItems.map((item, index) => (
                  <div
                    key={item.title}
                    className="flex items-center justify-between p-5 bg-card rounded-xl border border-border/50 hover:border-accent/50 hover:shadow-card transition-all group"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center group-hover:bg-accent group-hover:scale-110 transition-all">
                        <CheckCircle className="h-5 w-5 text-accent group-hover:text-accent-foreground" />
                      </div>
                      <span className="font-medium text-foreground">{item.title}</span>
                    </div>
                    <span className="text-muted-foreground font-medium">({item.value} Value)</span>
                  </div>
                ))}

                {/* Total Value Bar */}
                <div className="bg-secondary/10 border-2 border-secondary/30 rounded-xl p-5 mt-6">
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-foreground">Total Value:</span>
                    <span className="text-3xl font-bold text-secondary">₹{totalValue.toLocaleString()}</span>
                  </div>
                </div>
              </div>

              {/* Registration Card */}
              <div className="sticky top-24">
                <div className="bg-card rounded-3xl p-8 shadow-elevated border border-border/50 relative overflow-hidden">
                  {/* Urgency Badge */}
                  <div className="absolute top-4 right-4 bg-secondary text-secondary-foreground px-4 py-2 rounded-full font-semibold text-sm flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary-foreground opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary-foreground"></span>
                    </span>
                    Only {seatsLeft} Seats Left!
                  </div>

                  <div className="text-center mb-6 pt-6">
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
                      className="w-full px-4 py-4 rounded-xl border border-border bg-muted/50 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-foreground"
                    />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="WhatsApp Number"
                      className="w-full px-4 py-4 rounded-xl border border-border bg-muted/50 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-foreground"
                    />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="Email Address"
                      className="w-full px-4 py-4 rounded-xl border border-border bg-muted/50 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-foreground"
                    />

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground py-6 text-lg font-bold rounded-xl"
                    >
                      {isSubmitting ? "Registering..." : "Join at ₹2,999 Only →"}
                    </Button>
                  </form>

                  <div className="flex justify-center gap-6 mt-6 pt-4 border-t border-border">
                    {[
                      { icon: Clock, text: "30 Days" },
                      { icon: Monitor, text: "LIVE on Zoom" },
                      { icon: Award, text: "Certificate" },
                    ].map((item) => (
                      <div key={item.text} className="flex items-center gap-2 text-muted-foreground text-sm">
                        <item.icon className="h-4 w-4" />
                        <span>{item.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mentor Section */}
        <section className="py-20 bg-muted overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary via-secondary to-accent rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity" />
                <div className="relative aspect-[4/5] max-w-md mx-auto rounded-3xl overflow-hidden shadow-elevated">
                  <img
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                    alt="Vikaas Parekh - Founder & Mentor"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="text-primary-foreground font-bold text-xl">Vikaas Parekh</div>
                    <div className="text-primary-foreground/80">Founder & Lead Mentor</div>
                  </div>
                </div>
                {/* Experience Badge */}
                <div className="absolute -bottom-4 -right-4 lg:right-0 bg-secondary text-secondary-foreground p-5 rounded-2xl shadow-elevated">
                  <div className="text-3xl font-bold">30+</div>
                  <div className="text-sm">Years Experience</div>
                </div>
              </div>

              <div>
                <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
                  Meet Your Mentor
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                  Vikaas Parekh
                </h2>
                <p className="text-xl text-secondary font-semibold mb-6">
                  Founder - Surat Digital Marketing School
                </p>
                <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
                  With over <strong className="text-foreground">30 years of rich experience</strong> spanning Finance, Real Estate, and Event Management, 
                  Vikaas Parekh brings unparalleled expertise to digital marketing education.
                </p>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  As the founder of a leading digital marketing firm, he has successfully managed <strong className="text-foreground">500+ client portfolios</strong> and orchestrated 
                  ad campaigns worth over <strong className="text-foreground">₹1 crore</strong>. Currently serving as <strong className="text-foreground">Guest Faculty at Auro University, Surat</strong>.
                </p>

                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: Users, label: "Clients Managed", value: "500+" },
                    { icon: TrendingUp, label: "Ad Spend Managed", value: "₹1Cr+" },
                    { icon: GraduationCap, label: "Guest Faculty", value: "Auro University" },
                    { icon: Award, label: "Success Rate", value: "95%" },
                  ].map((stat) => (
                    <div key={stat.label} className="bg-background p-5 rounded-xl shadow-card border border-border/50 group hover:border-primary/30 transition-all">
                      <stat.icon className="h-6 w-6 text-secondary mb-2" />
                      <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Who Should Join */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-14">
              <span className="inline-block bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-semibold mb-4">
                Who Is This For?
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Transform Your Career with AI-Powered Digital Marketing
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Whether you're a beginner or looking to enhance your skills, this program provides the practical knowledge you need.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {targetAudience.map((item, index) => (
                <div
                  key={item.title}
                  className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-all hover:-translate-y-2"
                >
                  <div className="h-40 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                        <item.icon className="h-5 w-5 text-primary group-hover:text-primary-foreground transition-colors" />
                      </div>
                      <h3 className="text-xl font-bold text-foreground">{item.title}</h3>
                    </div>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Curriculum */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <div className="text-center mb-14">
              <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
                Comprehensive Curriculum
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                8 Power-Packed Modules
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Every module is designed for hands-on experience with AI tools integrated throughout.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {modules.map((module, index) => (
                <div
                  key={module.number}
                  className="group relative bg-card p-6 rounded-2xl border border-border/50 hover:border-transparent hover:shadow-elevated transition-all overflow-hidden"
                >
                  {/* Gradient Background on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${module.color} opacity-0 group-hover:opacity-5 transition-opacity`} />
                  
                  <div className="relative">
                    <div className="flex items-start justify-between mb-4">
                      <span className="text-5xl font-bold text-muted/30 group-hover:text-primary/20 transition-colors">{module.number}</span>
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${module.color} flex items-center justify-center shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-all`}>
                        <module.icon className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{module.title}</h3>
                    <p className="text-sm text-muted-foreground">{module.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Section */}
        <section className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-secondary rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                What Makes This Course Different
              </h2>
              <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
                Real-world experience meets cutting-edge AI technology
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {whyChoose.map((item, index) => (
                <div key={item.title} className="flex gap-5 group">
                  <div className="w-14 h-14 rounded-2xl bg-secondary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-secondary transition-colors">
                    <item.icon className="h-7 w-7 text-secondary group-hover:text-secondary-foreground transition-colors" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                    <p className="text-sm text-primary-foreground/70 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Course Details */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-14">
                <span className="inline-block bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  Program Details
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  Course Details & Schedule
                </h2>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                {[
                  { icon: Clock, title: "Duration", value: "30 Days", desc: "Intensive practical training" },
                  { icon: Calendar, title: "Schedule", value: "3 Days/Week", desc: "Flexible timing options" },
                  { icon: Video, title: "Platform", value: "Live Zoom", desc: "Interactive sessions" },
                  { icon: Globe, title: "Language", value: "Hindi & English", desc: "Easy to understand" },
                ].map((item) => (
                  <div key={item.title} className="bg-card p-6 rounded-2xl shadow-card border border-border/50 text-center group hover:border-primary/30 hover:shadow-elevated transition-all">
                    <div className="w-14 h-14 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all">
                      <item.icon className="h-7 w-7 text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <div className="text-2xl font-bold text-foreground mb-1">{item.value}</div>
                    <div className="text-sm font-medium text-foreground mb-1">{item.title}</div>
                    <div className="text-xs text-muted-foreground">{item.desc}</div>
                  </div>
                ))}
              </div>

              {/* Flexible Learning Banner */}
              <div className="relative rounded-3xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                  alt="Online learning"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-primary/80" />
                <div className="absolute inset-0 flex items-center">
                  <div className="container mx-auto px-8">
                    <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-3">
                      100% Flexible, Online Learning
                    </h3>
                    <p className="text-primary-foreground/80 mb-6 max-w-xl">
                      Learn from anywhere in India. All you need is an internet connection and the desire to grow.
                    </p>
                    <div className="flex flex-wrap gap-4">
                      {[
                        { icon: Globe, text: "Join from Anywhere" },
                        { icon: MessageCircle, text: "Interactive Sessions" },
                        { icon: Play, text: "Recorded Classes" },
                        { icon: Headphones, text: "Live Doubt Solving" },
                      ].map((item) => (
                        <div key={item.text} className="flex items-center gap-2 bg-primary-foreground/10 px-4 py-2 rounded-full">
                          <item.icon className="h-4 w-4 text-secondary" />
                          <span className="text-sm text-primary-foreground">{item.text}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-gradient-to-br from-secondary via-secondary to-secondary/90 relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-10 left-10 w-64 h-64 bg-primary rounded-full blur-3xl" />
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-foreground mb-6">
                Start Your Digital Journey Today
              </h2>
              <p className="text-xl text-secondary-foreground/80 mb-10 max-w-2xl mx-auto">
                Don't just scroll through social media—learn how to grow on it! Transform your digital knowledge into real, sustainable income.
              </p>

              <div className="bg-background p-8 md:p-10 rounded-3xl shadow-elevated max-w-lg mx-auto">
                <div className="text-center mb-6">
                  <div className="flex items-center justify-center gap-3 mb-2">
                    <span className="text-lg text-muted-foreground line-through">₹9,999</span>
                    <span className="bg-secondary/10 text-secondary px-3 py-1 rounded-full text-sm font-semibold">70% OFF</span>
                  </div>
                  <div className="text-5xl font-bold text-primary">₹2,999</div>
                  <p className="text-muted-foreground mt-2">One-time payment • Lifetime access to recordings</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your Name"
                    className="w-full px-4 py-4 rounded-xl border border-border bg-muted/50 focus:ring-2 focus:ring-primary outline-none text-foreground"
                  />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="WhatsApp Number"
                    className="w-full px-4 py-4 rounded-xl border border-border bg-muted/50 focus:ring-2 focus:ring-primary outline-none text-foreground"
                  />
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-6 text-lg font-bold rounded-xl transition-all hover:scale-[1.02]"
                  >
                    {isSubmitting ? "Processing..." : "Enroll Now — Limited Seats!"}
                  </Button>
                </form>

                <div className="flex items-center justify-center gap-2 mt-6 text-muted-foreground">
                  <Shield className="h-5 w-5" />
                  <span className="text-sm">Secure payment • Instant access</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default LiveClasses;
