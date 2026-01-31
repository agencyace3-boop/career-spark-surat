import { useState } from "react";
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
} from "lucide-react";

const modules = [
  {
    number: "01",
    title: "Digital Marketing & AI Fundamentals",
    description: "Discover how AI is revolutionizing marketing and learn to leverage AI tools to save time and boost results.",
    icon: Bot,
  },
  {
    number: "02",
    title: "Social Media Marketing & Management",
    description: "Master strategies to grow business pages on Facebook, Instagram, and LinkedIn with proven engagement tactics.",
    icon: Users,
  },
  {
    number: "03",
    title: "Search Engine Optimization (SEO) & SMO",
    description: "Rank higher on Google, increase visibility, and attract qualified organic traffic using up-to-date methods.",
    icon: TrendingUp,
  },
  {
    number: "04",
    title: "Google Ads & Keyword Research",
    description: "Create high-performing ad campaigns that maximize ROI with smart keyword planning techniques.",
    icon: Target,
  },
  {
    number: "05",
    title: "YouTube Marketing Mastery",
    description: "Build, grow, and monetize YouTube channels with effective content strategies and optimization techniques.",
    icon: Play,
  },
  {
    number: "06",
    title: "Email Marketing & Automation",
    description: "Design engaging email campaigns that convert and master AI-powered automation tools.",
    icon: Zap,
  },
  {
    number: "07",
    title: "Analytics & Performance Tracking",
    description: "Measure results, interpret data insights, and make data-driven decisions for continuous improvement.",
    icon: BookOpen,
  },
  {
    number: "08",
    title: "Launch Your Digital Agency",
    description: "Get a complete roadmap to build and launch your own digital marketing agency or freelancing business.",
    icon: Rocket,
  },
];

const benefits = [
  { icon: Video, title: "Live Interactive Classes", description: "Learn directly from Vikaas Parekh with real-time interaction" },
  { icon: Bot, title: "Hands-On AI Tools", description: "Practice with latest AI-powered marketing tools" },
  { icon: Target, title: "Step-by-Step Implementation", description: "Clear, actionable guidance for real-world scenarios" },
  { icon: Play, title: "Recording Access", description: "All classes recorded for learning at your own pace" },
  { icon: Headphones, title: "Personal Mentorship", description: "Individual attention and feedback on your work" },
  { icon: Award, title: "Certificate of Completion", description: "Professional certificate to boost your credibility" },
  { icon: MessageCircle, title: "Free Career Consultation", description: "Personalized guidance on your career path" },
  { icon: Rocket, title: "Agency Launch Guidance", description: "Support to start your own digital marketing agency" },
];

const targetAudience = [
  { icon: GraduationCap, title: "Students", description: "Start your digital career early and gain competitive advantage" },
  { icon: Briefcase, title: "Job Seekers", description: "Learn in-demand skills that companies are actively hiring for" },
  { icon: Target, title: "Freelancers", description: "Attract high-paying clients and build a sustainable business" },
  { icon: Users, title: "Homemakers", description: "Build your second income from home with flexible skills" },
  { icon: TrendingUp, title: "Business Owners", description: "Grow your business using powerful digital techniques" },
  { icon: BookOpen, title: "Teachers", description: "Leverage AI tools and promote educational services" },
];

const whyChoose = [
  { title: "Real-World Experience", description: "Learn from someone who has managed 500+ clients and ₹1 crore+ in ad campaigns" },
  { title: "Proven Track Record", description: "Guest Faculty at Auro University with 30+ years of marketing experience" },
  { title: "AI-Powered Curriculum", description: "Stay ahead with latest AI tools integrated throughout the course" },
  { title: "Complete Support System", description: "Continuous mentorship and guidance from enrollment to agency launch" },
  { title: "Income-Focused Training", description: "Every module designed to help you generate real income" },
  { title: "Practical Implementation", description: "Build real projects and campaigns you can showcase immediately" },
];

const LiveClasses = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

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
        <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-primary">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 right-10 w-96 h-96 bg-secondary rounded-full blur-3xl" />
            <div className="absolute bottom-10 left-10 w-64 h-64 bg-accent rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto px-4 relative z-10 py-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="text-primary-foreground">
                <div className="inline-flex items-center gap-2 bg-secondary/20 backdrop-blur-sm border border-secondary/30 rounded-full px-4 py-2 mb-6">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-destructive opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-destructive"></span>
                  </span>
                  <span className="text-sm font-medium">Live Online Classes Starting Soon!</span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                  Unlock High-Income
                  <br />
                  <span className="text-secondary">Digital Marketing with AI</span>
                </h1>

                <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-xl leading-relaxed">
                  Transform your career in just <strong>30 days</strong>. Master SEO, Google Ads, Social Media Marketing & AI tools 
                  under the mentorship of <strong>Vikaas Parekh</strong> — 30+ years of marketing excellence.
                </p>

                {/* Price Badge */}
                <div className="inline-flex items-center gap-4 bg-secondary/20 backdrop-blur-sm border border-secondary/30 rounded-2xl p-4 mb-8">
                  <div>
                    <span className="text-sm text-primary-foreground/70 line-through">₹9,999</span>
                    <div className="text-4xl font-bold text-secondary">₹2,999</div>
                  </div>
                  <div className="h-12 w-px bg-primary-foreground/20" />
                  <div className="text-left">
                    <div className="text-sm text-primary-foreground/70">Limited Time Offer</div>
                    <div className="font-semibold">70% OFF</div>
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-6 mb-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-secondary">30+</div>
                    <div className="text-sm text-primary-foreground/70">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-secondary">500+</div>
                    <div className="text-sm text-primary-foreground/70">Clients Managed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-secondary">₹1Cr+</div>
                    <div className="text-sm text-primary-foreground/70">Ad Spend Managed</div>
                  </div>
                </div>

                {/* Trust Points */}
                <div className="flex flex-wrap gap-4">
                  {["Live Zoom Sessions", "Recording Access", "Certificate Included"].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-accent" />
                      <span className="text-sm text-primary-foreground/80">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Content - Registration Form */}
              <div className="bg-background rounded-3xl p-8 shadow-elevated">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-semibold mb-4">
                    <Calendar className="h-4 w-4" />
                    30-Day Live Program
                  </div>
                  <h2 className="text-2xl font-bold text-foreground mb-2">
                    Register for Live Classes
                  </h2>
                  <p className="text-muted-foreground">
                    Limited seats available. Secure your spot now!
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your Full Name"
                      className="w-full px-4 py-4 rounded-xl border border-border bg-muted focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-foreground"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="Phone Number"
                      className="w-full px-4 py-4 rounded-xl border border-border bg-muted focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-foreground"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="Email Address"
                      className="w-full px-4 py-4 rounded-xl border border-border bg-muted focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-foreground"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground py-6 text-lg font-semibold shadow-glow"
                  >
                    {isSubmitting ? "Registering..." : "Enroll Now — ₹2,999 Only"}
                  </Button>

                  <p className="text-center text-sm text-muted-foreground">
                    By registering, you agree to our terms. Our team will call you.
                  </p>
                </form>

                {/* Urgency */}
                <div className="mt-6 p-4 bg-destructive/10 rounded-xl border border-destructive/20 text-center">
                  <p className="text-sm font-medium text-destructive">
                    ⚡ Only 50 seats per batch — 32 already filled!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mentor Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="aspect-square max-w-md mx-auto rounded-3xl overflow-hidden shadow-elevated">
                  <img
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                    alt="Vikaas Parekh - Founder & Mentor"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-secondary text-secondary-foreground p-6 rounded-2xl shadow-elevated">
                  <div className="text-3xl font-bold">30+</div>
                  <div className="text-sm">Years Experience</div>
                </div>
              </div>

              <div>
                <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  Meet Your Mentor
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Vikaas Parekh
                </h2>
                <p className="text-xl text-secondary font-semibold mb-6">
                  Founder - Surat Digital Marketing School
                </p>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  With over <strong>30 years of rich experience</strong> spanning Finance, Real Estate, and Event Management, 
                  Vikaas Parekh brings unparalleled expertise to digital marketing education. As the founder of a leading 
                  digital marketing firm, he has successfully managed <strong>500+ client portfolios</strong> and orchestrated 
                  ad campaigns worth over <strong>₹1 crore</strong>, consistently delivering exceptional ROI.
                </p>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Currently serving as <strong>Guest Faculty at Auro University, Surat</strong>, Vikaas combines academic insight 
                  with real-world strategy. His hands-on teaching approach and commitment to student success make him 
                  a trusted mentor for aspiring marketers across India.
                </p>

                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: "Clients Managed", value: "500+" },
                    { label: "Ad Spend Managed", value: "₹1Cr+" },
                    { label: "Guest Faculty", value: "Auro University" },
                    { label: "Success Rate", value: "95%" },
                  ].map((stat) => (
                    <div key={stat.label} className="bg-muted p-4 rounded-xl">
                      <div className="text-2xl font-bold text-primary">{stat.value}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Who Should Join */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
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
                  className="bg-card p-6 rounded-2xl shadow-card hover:shadow-elevated transition-all hover:-translate-y-1"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <item.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Curriculum */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
                Comprehensive Curriculum
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                8 Power-Packed Modules
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Every module is designed for hands-on experience with AI tools integrated throughout to maximize efficiency.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {modules.map((module) => (
                <div
                  key={module.number}
                  className="group bg-card p-6 rounded-2xl border border-border/50 hover:border-primary/30 hover:shadow-elevated transition-all"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-4xl font-bold text-primary/20">{module.number}</span>
                    <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center group-hover:bg-secondary group-hover:scale-110 transition-all">
                      <module.icon className="h-6 w-6 text-secondary group-hover:text-secondary-foreground" />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{module.title}</h3>
                  <p className="text-sm text-muted-foreground">{module.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What You'll Receive */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Complete Learning Package
              </h2>
              <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
                Everything you need to succeed in your digital marketing journey
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit) => (
                <div
                  key={benefit.title}
                  className="bg-primary-foreground/10 backdrop-blur-sm p-6 rounded-2xl border border-primary-foreground/10 hover:bg-primary-foreground/15 transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center mb-4">
                    <benefit.icon className="h-6 w-6 text-secondary" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{benefit.title}</h3>
                  <p className="text-sm text-primary-foreground/70">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose This Course */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
                Why Choose Us
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                What Makes This Course Different
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {whyChoose.map((item, index) => (
                <div key={item.title} className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="h-5 w-5 text-secondary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Course Details */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Course Details & Schedule
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-12">
                <div className="bg-card p-8 rounded-2xl shadow-card border border-border/50">
                  <Clock className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-xl font-bold text-foreground mb-2">Duration</h3>
                  <p className="text-muted-foreground">
                    <strong>30 days</strong> of intensive, practical training designed to take you from beginner to confident practitioner
                  </p>
                </div>
                <div className="bg-card p-8 rounded-2xl shadow-card border border-border/50">
                  <Calendar className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-xl font-bold text-foreground mb-2">Schedule</h3>
                  <p className="text-muted-foreground">
                    <strong>3 Days per Week</strong> with flexible timing for working professionals and students
                  </p>
                </div>
                <div className="bg-card p-8 rounded-2xl shadow-card border border-border/50">
                  <Video className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-xl font-bold text-foreground mb-2">Platform</h3>
                  <p className="text-muted-foreground">
                    <strong>Live Zoom Sessions</strong> with interactive features, screen sharing, and real-time collaboration
                  </p>
                </div>
                <div className="bg-card p-8 rounded-2xl shadow-card border border-border/50">
                  <Globe className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-xl font-bold text-foreground mb-2">Language</h3>
                  <p className="text-muted-foreground">
                    <strong>English & Hindi</strong> explained in easy-to-understand terms, perfect for all learners
                  </p>
                </div>
              </div>

              {/* Flexible Learning */}
              <div className="bg-gradient-to-r from-primary to-primary/80 p-8 md:p-12 rounded-3xl text-primary-foreground">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  100% Flexible, Online Learning
                </h3>
                <p className="text-primary-foreground/90 mb-6 max-w-2xl">
                  Learn from anywhere in India or the world. All you need is an internet connection and the desire to grow. 
                  Our interactive Zoom sessions bring the classroom to you.
                </p>
                <div className="grid md:grid-cols-4 gap-4">
                  {[
                    { icon: Globe, text: "Join from Anywhere" },
                    { icon: MessageCircle, text: "Interactive Sessions" },
                    { icon: Play, text: "Recorded Classes" },
                    { icon: Headphones, text: "Live Doubt Solving" },
                  ].map((item) => (
                    <div key={item.text} className="flex items-center gap-2">
                      <item.icon className="h-5 w-5 text-secondary" />
                      <span className="text-sm">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-foreground mb-6">
                Start Your Digital Journey Today
              </h2>
              <p className="text-xl text-secondary-foreground/80 mb-8">
                Don't just scroll through social media—learn how to grow on it! Transform your digital knowledge into real, sustainable income.
              </p>

              <div className="bg-background p-8 rounded-3xl shadow-elevated max-w-md mx-auto">
                <div className="text-center mb-6">
                  <span className="text-sm text-muted-foreground line-through">₹9,999</span>
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
                    className="w-full px-4 py-3 rounded-xl border border-border bg-muted focus:ring-2 focus:ring-primary outline-none text-foreground"
                  />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="Phone Number"
                    className="w-full px-4 py-3 rounded-xl border border-border bg-muted focus:ring-2 focus:ring-primary outline-none text-foreground"
                  />
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-6 text-lg"
                  >
                    {isSubmitting ? "Processing..." : "Enroll Now — Limited Seats!"}
                  </Button>
                </form>

                <p className="text-center text-sm text-muted-foreground mt-4">
                  ⚡ Limited Seats Available — Secure your spot today!
                </p>
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
