import { useState, useEffect, useRef } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
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
  ArrowRight,
  Gift,
  Shield,
  Monitor,
  MapPin,
  Settings,
  BarChart3,
  Megaphone,
  Image,
  MousePointer,
  LineChart,
} from "lucide-react";

// Import mentor image and tool logos
import mentorImage from "@/assets/mentor-vikaas.png";
import googleLogo from "@/assets/tools/google.svg";
import metaLogo from "@/assets/tools/meta.svg";
import shopifyLogo from "@/assets/tools/shopify.svg";
import hubspotLogo from "@/assets/tools/hubspot.svg";
import mailchimpLogo from "@/assets/tools/mailchimp.svg";
import wordpressLogo from "@/assets/tools/wordpress.svg";
import canvaLogo from "@/assets/tools/canva.svg";
import semrushLogo from "@/assets/tools/semrush.svg";

// Tools that students will master
const toolsList = [
  { name: "Meta Ads", logo: metaLogo },
  { name: "Google", logo: googleLogo },
  { name: "Canva", logo: canvaLogo },
  { name: "Semrush", logo: semrushLogo },
  { name: "HubSpot", logo: hubspotLogo },
  { name: "Mailchimp", logo: mailchimpLogo },
  { name: "WordPress", logo: wordpressLogo },
  { name: "Shopify", logo: shopifyLogo },
];

// 12-Day Course Schedule based on Meta Ads + GMB Course
const courseSchedule = [
  {
    day: "DAY 1",
    title: "Digital Marketing & Meta Ecosystem Overview",
    topics: [
      "Introduction to Digital Marketing (Practical View)",
      "Facebook, Instagram & Meta Business Suite overview",
      "Understanding paid vs organic marketing",
      "Business Manager vs Personal Account",
    ],
    icon: Globe,
    color: "from-blue-500 to-cyan-500",
  },
  {
    day: "DAY 2",
    title: "Facebook Business Manager Setup",
    topics: [
      "Business Manager creation (Step-by-step)",
      "Page & Ad Account setup",
      "Payment methods & access control",
      "Security & business verification",
    ],
    icon: Settings,
    color: "from-indigo-500 to-blue-500",
  },
  {
    day: "DAY 3",
    title: "Facebook & Instagram Page Optimization",
    topics: [
      "Professional Page setup",
      "Bio, CTA & branding strategy",
      "Content structure for engagement",
      "Page health & quality score",
    ],
    icon: Star,
    color: "from-pink-500 to-rose-500",
  },
  {
    day: "DAY 4",
    title: "Understanding Meta Ads Fundamentals",
    topics: [
      "Campaign objectives (Awareness, Traffic, Leads, Sales)",
      "Ad structure: Campaign → Ad Set → Ad",
      "Budgeting & bidding concepts",
      "Learning phase explained simply",
    ],
    icon: Target,
    color: "from-orange-500 to-amber-500",
  },
  {
    day: "DAY 5",
    title: "Audience Targeting Masterclass",
    topics: [
      "Core audience vs Custom audience",
      "Lookalike audience strategy",
      "Interest & behavior targeting",
      "Retargeting concepts (real examples)",
    ],
    icon: Users,
    color: "from-green-500 to-emerald-500",
  },
  {
    day: "DAY 6",
    title: "Creative Strategy for High-Converting Ads",
    topics: [
      "Ad copywriting formulas",
      "Image vs Video ads",
      "Reels & Story ads strategy",
      "Creative mistakes to avoid",
    ],
    icon: Image,
    color: "from-purple-500 to-violet-500",
  },
  {
    day: "DAY 7",
    title: "Lead Generation Ads (Practical)",
    topics: [
      "Lead form setup (Instant forms)",
      "CRM & WhatsApp integration ideas",
      "Lead quality improvement techniques",
      "Follow-up strategy",
    ],
    icon: MousePointer,
    color: "from-teal-500 to-cyan-500",
  },
  {
    day: "DAY 8",
    title: "Sales & Conversion Ads",
    topics: [
      "Website conversion ads",
      "Pixel basics (easy explanation)",
      "Catalogue & product ads",
      "Scaling winning campaigns",
    ],
    icon: TrendingUp,
    color: "from-red-500 to-pink-500",
  },
  {
    day: "DAY 9",
    title: "Ads Optimization & Performance Analysis",
    topics: [
      "Reading Ads Manager reports",
      "CTR, CPC, CPM, ROAS explained",
      "A/B testing basics",
      "Budget scaling methods",
    ],
    icon: BarChart3,
    color: "from-yellow-500 to-orange-500",
  },
  {
    day: "DAY 10",
    title: "Google My Business (GMB) Setup",
    topics: [
      "GMB account creation & verification",
      "Business profile optimization",
      "Categories, services & keywords",
      "Local SEO basics",
    ],
    icon: MapPin,
    color: "from-blue-500 to-indigo-500",
  },
  {
    day: "DAY 11",
    title: "GMB Growth & Local Lead Strategy",
    topics: [
      "Posting strategy on GMB",
      "Reviews & reputation management",
      "Map ranking improvement techniques",
      "Combining GMB with Meta Ads",
    ],
    icon: LineChart,
    color: "from-emerald-500 to-teal-500",
  },
  {
    day: "DAY 12",
    title: "Case Studies, Strategy & Career Guidance",
    topics: [
      "Live campaign case studies",
      "Budget planning for clients",
      "Freelancing & agency roadmap",
      "Q&A + Final Assessment",
    ],
    icon: Rocket,
    color: "from-violet-500 to-purple-500",
  },
];

const bonusItems = [
  { title: "12 LIVE Training Sessions (90 mins each)", value: "₹14,999" },
  { title: "Access to Recorded Sessions", value: "₹4,999" },
  { title: "Practical Assignments After Every Session", value: "₹2,999" },
  { title: "Final Project - Real-World Campaign", value: "₹3,999" },
  { title: "Dedicated Q&A and Community Support", value: "₹2,999" },
  { title: "Industry-Recognized Certificate", value: "₹2,999" },
];

const totalValue = 32994;

const targetAudience = [
  { icon: Briefcase, title: "Small Business Owners", description: "Grow your online presence and generate leads with targeted ads", image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
  { icon: TrendingUp, title: "Marketing Professionals", description: "Seeking Meta certification and advanced advertising skills", image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
  { icon: Target, title: "Freelancers", description: "Expand your service offerings and attract high-paying clients", image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
  { icon: GraduationCap, title: "Students & Career Switchers", description: "Target social media marketing roles with practical skills", image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
];

const whyChoose = [
  { icon: Award, title: "Real-World Experience", description: "Learn from someone who has managed 500+ clients and ₹1 crore+ in ad campaigns" },
  { icon: GraduationCap, title: "Proven Track Record", description: "Guest Faculty at Auro University with 30+ years of marketing experience" },
  { icon: Megaphone, title: "Meta-Certified Curriculum", description: "Industry-aligned curriculum based on Meta's official marketing principles" },
  { icon: Headphones, title: "Complete Support System", description: "Continuous mentorship, Q&A sessions, and community support" },
  { icon: TrendingUp, title: "Income-Focused Training", description: "Learn to run profitable Facebook & Instagram ad campaigns" },
  { icon: Rocket, title: "Practical Implementation", description: "Work on live projects and real-world campaign strategies" },
];

const courseDeliverables = [
  { icon: Award, title: "Certificate of Completion", description: "Industry-recognized certification" },
  { icon: BookOpen, title: "Practical Campaign Knowledge", description: "Real hands-on experience" },
  { icon: BarChart3, title: "Live Ad Strategy Experience", description: "Work on actual campaigns" },
  { icon: Users, title: "Mentorship by Vikaas Parekh", description: "Personal guidance from expert" },
];

const RAZORPAY_LINK = "https://rzp.io/rzp/IAVCWNAq";

// Batch start date: 21st Feb 2025
const BATCH_START_DATE = new Date("2025-02-21T10:00:00+05:30");

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

// Countdown Timer Component
const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = BATCH_START_DATE.getTime() - now.getTime();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex items-center justify-center gap-2 md:gap-4">
      {[
        { value: timeLeft.days, label: "Days" },
        { value: timeLeft.hours, label: "Hours" },
        { value: timeLeft.minutes, label: "Mins" },
        { value: timeLeft.seconds, label: "Secs" },
      ].map((item, index) => (
        <div key={item.label} className="flex flex-col items-center">
          <div className="bg-secondary text-secondary-foreground font-bold text-xl md:text-3xl px-3 md:px-4 py-2 md:py-3 rounded-lg min-w-[50px] md:min-w-[70px] text-center shadow-lg">
            {String(item.value).padStart(2, "0")}
          </div>
          <span className="text-xs md:text-sm font-medium text-white mt-1">{item.label}</span>
        </div>
      ))}
    </div>
  );
};

const LiveClasses = () => {
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

  const handleEnrollNow = () => {
    window.open(RAZORPAY_LINK, "_blank");
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
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/98 to-background/90" />
          </div>

          {/* Floating Elements */}
          <div className="absolute top-20 right-20 w-72 h-72 bg-secondary/20 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-40 left-10 w-48 h-48 bg-accent/20 rounded-full blur-3xl" />

          <div className="container mx-auto px-4 relative z-10 py-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="text-foreground">
                <div className="inline-flex items-center gap-2 bg-secondary/20 backdrop-blur-sm border border-secondary/30 rounded-full px-5 py-2.5 mb-8 animate-fade-in">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-secondary"></span>
                  </span>
                  <span className="text-sm font-bold text-secondary">Fresh Batch Starting 21st February!</span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fade-in-up text-white drop-shadow-lg">
                  Facebook & Instagram
                  <br />
                  <span className="text-secondary drop-shadow-md">(Meta Ads)</span>
                  <br />
                  <span className="text-secondary drop-shadow-md">+ GMB Certification</span>
                </h1>

                <p className="text-lg md:text-xl text-white mb-8 max-w-xl leading-relaxed animate-fade-in-up font-medium drop-shadow-md" style={{ animationDelay: "0.2s" }}>
                  Master Meta Ads & Google My Business in <strong className="text-secondary font-bold">1 Month</strong>. 
                  12 Live Sessions under the mentorship of <strong className="text-secondary font-bold">Vikaas Parekh</strong>.
                </p>

                {/* Countdown Timer */}
                <div className="mb-8 animate-fade-in-up" style={{ animationDelay: "0.25s" }}>
                  <p className="text-sm font-bold text-secondary mb-3 text-center lg:text-left">⏰ Batch Starts In:</p>
                  <CountdownTimer />
                </div>

                {/* Course Highlights */}
                <div className="flex flex-wrap gap-4 mb-8 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
                  {[
                    { icon: Clock, text: "1 Month Duration" },
                    { icon: Video, text: "12 Live Sessions" },
                    { icon: Calendar, text: "90 Min Each" },
                  ].map((item) => (
                    <div key={item.text} className="flex items-center gap-2 bg-card border border-secondary/30 px-4 py-2.5 rounded-full shadow-md">
                      <item.icon className="h-4 w-4 text-secondary" />
                      <span className="text-sm font-bold text-white">{item.text}</span>
                    </div>
                  ))}
                </div>

                {/* Stats Row */}
                <div ref={statsRef} className="grid grid-cols-3 gap-6 mb-8 bg-card/90 backdrop-blur-sm rounded-2xl p-5 border border-secondary/30">
                  {[
                    { value: 30, suffix: "+", label: "Years Experience" },
                    { value: 500, suffix: "+", label: "Clients Managed" },
                    { value: 1, suffix: "Cr+", label: "Ad Spend Managed" },
                  ].map((stat, i) => (
                    <div key={stat.label} className="text-center animate-fade-in-up" style={{ animationDelay: `${0.4 + i * 0.1}s` }}>
                      <div className="text-3xl font-bold text-secondary drop-shadow-md">
                        {stat.value === 1 ? "₹" : ""}<AnimatedCounter target={stat.value} suffix={stat.suffix} inView={statsInView} />
                      </div>
                      <div className="text-sm text-white font-medium">{stat.label}</div>
                    </div>
                  ))}
                </div>

                {/* Trust Points */}
                <div className="flex flex-wrap gap-4 animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
                  {[
                    { icon: Monitor, text: "Live on Zoom" },
                    { icon: Play, text: "Recording Access" },
                    { icon: Award, text: "Certificate Included" },
                  ].map((item) => (
                    <div key={item.text} className="flex items-center gap-2 bg-secondary/20 border border-secondary/30 px-4 py-2.5 rounded-full">
                      <item.icon className="h-4 w-4 text-secondary" />
                      <span className="text-sm font-bold text-white">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Content - Enroll Card */}
              <div className="relative animate-scale-in">
                <div className="bg-card rounded-3xl p-8 shadow-elevated border border-secondary/30 relative overflow-hidden">
                  {/* Urgency Badge */}
                  <div className="absolute top-0 right-0 bg-secondary text-secondary-foreground px-4 py-2 rounded-bl-2xl font-bold text-sm flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary-foreground opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary-foreground"></span>
                    </span>
                    Only {seatsLeft} Seats Left!
                  </div>

                  <div className="text-center mb-6 pt-4">
                    <h2 className="text-2xl font-bold text-foreground mb-2">
                      Enroll Now
                    </h2>
                    <p className="text-muted-foreground text-sm font-medium">
                      Secure your seat in the next batch
                    </p>
                  </div>

                  {/* Batch Timing */}
                  <div className="bg-primary/10 border border-primary/30 rounded-xl p-4 mb-6">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <Calendar className="h-5 w-5 text-secondary" />
                      <span className="font-bold text-foreground">Batch Starts: 21st February 2025</span>
                    </div>
                    <p className="text-center text-sm text-muted-foreground font-medium">
                      ⏰ Timings: 8:00 PM - 9:30 PM (IST) | Mon-Fri
                    </p>
                  </div>

                  {/* Price Display */}
                  <div className="text-center mb-6 p-4 bg-background/50 rounded-xl border border-secondary/40">
                    <div className="flex items-center justify-center gap-3 mb-1">
                      <span className="text-lg text-muted-foreground line-through">₹5,999</span>
                      <span className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-bold">50% OFF</span>
                    </div>
                    <div className="text-5xl font-bold text-secondary">₹2,999</div>
                    <p className="text-sm text-muted-foreground mt-1 font-medium">One-time payment • Lifetime access to recordings</p>
                  </div>

                  {/* Enroll Button - Links to Razorpay */}
                  <Button
                    onClick={handleEnrollNow}
                    className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground py-6 text-lg font-bold rounded-xl shadow-glow transition-all hover:scale-[1.02] mb-4"
                  >
                    Enroll Now - Pay ₹2,999 →
                  </Button>

                  {/* Bottom Features */}
                  <div className="flex justify-center gap-6 mt-4 pt-4 border-t border-border">
                    {[
                      { icon: Clock, text: "1 Month" },
                      { icon: Monitor, text: "LIVE on Zoom" },
                      { icon: Award, text: "Certificate" },
                    ].map((item) => (
                      <div key={item.text} className="flex items-center gap-2 text-muted-foreground text-sm font-medium">
                        <item.icon className="h-4 w-4 text-secondary" />
                        <span>{item.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Master These Tools Section */}
        <section className="py-16 bg-muted border-y border-border">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                Master These <span className="text-secondary">Industry Tools</span>
              </h2>
              <p className="text-muted-foreground font-medium">
                Learn to use the same tools that professionals use worldwide
              </p>
            </div>

            <div className="grid grid-cols-4 md:grid-cols-8 gap-6">
              {toolsList.map((tool) => (
                <div key={tool.name} className="flex flex-col items-center gap-3 group">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-card rounded-2xl border border-border p-3 flex items-center justify-center shadow-card group-hover:shadow-elevated group-hover:border-secondary/50 group-hover:scale-105 transition-all">
                    <img src={tool.logo} alt={tool.name} className="w-10 h-10 md:w-12 md:h-12 object-contain" />
                  </div>
                  <span className="text-xs md:text-sm font-bold text-foreground text-center">{tool.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Course Objective Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <span className="inline-block bg-secondary/20 text-secondary px-4 py-2 rounded-full text-sm font-bold mb-4">
                Course Objective
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                What You'll <span className="text-secondary">Learn & Achieve</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-medium">
                This course is designed to help students, business owners, freelancers, and job seekers master Meta advertising and local SEO.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: TrendingUp, title: "Run Profitable Ads", description: "Master Facebook & Instagram ad campaigns that generate real results" },
                { icon: Target, title: "Generate Leads & Sales", description: "Create campaigns that drive conversions and brand visibility" },
                { icon: MapPin, title: "Optimize GMB", description: "Leverage Google My Business for local growth and visibility" },
                { icon: Rocket, title: "Real-World Strategies", description: "Learn techniques used in managing 500+ client portfolios" },
              ].map((item) => (
                <div key={item.title} className="bg-card p-6 rounded-2xl border border-border hover:border-secondary/50 transition-all group">
                  <div className="w-14 h-14 rounded-2xl bg-secondary/20 flex items-center justify-center mb-4 group-hover:bg-secondary transition-colors">
                    <item.icon className="h-7 w-7 text-secondary group-hover:text-secondary-foreground transition-colors" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm font-medium">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Everything You'll Get Section */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                Here's <span className="text-secondary">EVERYTHING</span> You'll Get
              </h2>
              <p className="text-lg text-muted-foreground font-medium">
                When You Join This Program Today!
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
              {/* Bonus Items List */}
              <div className="space-y-4">
                {bonusItems.map((item, index) => (
                  <div
                    key={item.title}
                    className="flex items-center justify-between p-5 bg-card rounded-xl border border-border hover:border-secondary/50 hover:shadow-card transition-all group"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center group-hover:bg-secondary group-hover:scale-110 transition-all">
                        <CheckCircle className="h-5 w-5 text-secondary group-hover:text-secondary-foreground" />
                      </div>
                      <span className="font-bold text-foreground">{item.title}</span>
                    </div>
                    <span className="text-muted-foreground font-bold">({item.value} Value)</span>
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
                <div className="bg-card rounded-3xl p-8 shadow-elevated border border-secondary/30 relative overflow-hidden">
                  {/* Urgency Badge */}
                  <div className="absolute top-4 right-4 bg-secondary text-secondary-foreground px-4 py-2 rounded-full font-bold text-sm flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary-foreground opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary-foreground"></span>
                    </span>
                    Only {seatsLeft} Seats Left!
                  </div>

                  <div className="text-center mb-6 pt-6">
                    <h3 className="text-2xl font-bold text-foreground mb-2">Enroll Now</h3>
                    <p className="text-muted-foreground text-sm font-medium">Pay securely via Razorpay</p>
                  </div>

                  <div className="text-center mb-6">
                    <div className="flex items-center justify-center gap-3 mb-1">
                      <span className="text-lg text-muted-foreground line-through">₹5,999</span>
                      <span className="bg-secondary/20 text-secondary px-3 py-1 rounded-full text-sm font-bold">50% OFF</span>
                    </div>
                    <div className="text-5xl font-bold text-secondary">₹2,999</div>
                  </div>

                  <Button
                    onClick={handleEnrollNow}
                    className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground py-6 text-lg font-bold rounded-xl shadow-glow mb-4"
                  >
                    Enroll Now - Pay ₹2,999 →
                  </Button>

                  <div className="flex justify-center gap-6 mt-4 pt-4 border-t border-border">
                    {[
                      { icon: Clock, text: "1 Month" },
                      { icon: Monitor, text: "LIVE on Zoom" },
                      { icon: Award, text: "Certificate" },
                    ].map((item) => (
                      <div key={item.text} className="flex items-center gap-2 text-muted-foreground text-sm font-medium">
                        <item.icon className="h-4 w-4 text-secondary" />
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
        <section className="py-20 bg-background overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary via-secondary to-accent rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity" />
                <div className="relative aspect-[4/5] max-w-md mx-auto rounded-3xl overflow-hidden shadow-elevated">
                  <img
                    src={mentorImage}
                    alt="Vikaas Parekh - Founder & Mentor"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="text-white font-bold text-xl drop-shadow-lg">Vikaas Parekh</div>
                    <div className="text-white/90 font-medium drop-shadow-md">Founder & Lead Mentor</div>
                  </div>
                </div>
                {/* Experience Badge */}
                <div className="absolute -bottom-4 -right-4 lg:right-0 bg-secondary text-secondary-foreground p-5 rounded-2xl shadow-elevated">
                  <div className="text-3xl font-bold">30+</div>
                  <div className="text-sm font-medium">Years Experience</div>
                </div>
              </div>

              <div>
                <span className="inline-block bg-secondary/20 text-secondary px-4 py-2 rounded-full text-sm font-bold mb-6">
                  Meet Your Mentor
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                  Vikaas Parekh
                </h2>
                <p className="text-xl text-secondary font-bold mb-6">
                  Founder - Surat Digital Marketing School
                </p>
                <p className="text-foreground mb-6 leading-relaxed text-lg font-medium">
                  With over <strong className="text-secondary">30 years of rich experience</strong> spanning Finance, Real Estate, and Event Management, 
                  Vikaas Parekh brings unparalleled expertise to digital marketing education.
                </p>
                <p className="text-muted-foreground mb-8 leading-relaxed font-medium">
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
                    <div key={stat.label} className="bg-card p-5 rounded-xl shadow-card border border-border group hover:border-secondary/30 transition-all">
                      <stat.icon className="h-6 w-6 text-secondary mb-2" />
                      <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                      <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
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
            <div className="text-center mb-14">
              <span className="inline-block bg-secondary/20 text-secondary px-4 py-2 rounded-full text-sm font-bold mb-4">
                Who Should Enroll?
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                This Course Is Perfect For
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-medium">
                Whether you're a beginner or looking to enhance your skills, this program provides the practical knowledge you need.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {targetAudience.map((item, index) => (
                <div
                  key={item.title}
                  className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-all hover:-translate-y-2 border border-border"
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
                      <div className="w-10 h-10 rounded-lg bg-secondary/20 flex items-center justify-center group-hover:bg-secondary transition-colors">
                        <item.icon className="h-5 w-5 text-secondary group-hover:text-secondary-foreground transition-colors" />
                      </div>
                      <h3 className="text-lg font-bold text-foreground">{item.title}</h3>
                    </div>
                    <p className="text-muted-foreground text-sm font-medium">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 12-Day Course Schedule */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-14">
              <span className="inline-block bg-secondary/20 text-secondary px-4 py-2 rounded-full text-sm font-bold mb-4">
                Comprehensive Curriculum
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                12-Day Detailed Course Schedule
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-medium">
                Each session is 90 minutes of intensive, hands-on learning with practical assignments.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {courseSchedule.map((module, index) => (
                <div
                  key={module.day}
                  className="group relative bg-card p-6 rounded-2xl border border-border hover:border-secondary/50 hover:shadow-elevated transition-all overflow-hidden"
                >
                  {/* Gradient Background on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${module.color} opacity-0 group-hover:opacity-5 transition-opacity`} />
                  
                  <div className="relative">
                    <div className="flex items-start justify-between mb-4">
                      <span className="text-xs font-bold text-secondary bg-secondary/20 px-3 py-1 rounded-full">{module.day}</span>
                      <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${module.color} flex items-center justify-center shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-all`}>
                        <module.icon className="h-5 w-5 text-white" />
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-secondary transition-colors">{module.title}</h3>
                    <ul className="space-y-2">
                      {module.topics.map((topic, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground font-medium">
                          <CheckCircle className="h-4 w-4 text-secondary flex-shrink-0 mt-0.5" />
                          <span>{topic}</span>
                        </li>
                      ))}
                    </ul>
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
                Why Choose This Meta-Certified Course?
              </h2>
              <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto font-medium">
                Industry-aligned curriculum based on Meta's official social media marketing principles
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
                    <p className="text-sm text-primary-foreground/70 leading-relaxed font-medium">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Course Deliverables */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-14">
                <span className="inline-block bg-secondary/20 text-secondary px-4 py-2 rounded-full text-sm font-bold mb-4">
                  Course Deliverables
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  What You'll Walk Away With
                </h2>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                {courseDeliverables.map((item) => (
                  <div key={item.title} className="bg-card p-6 rounded-2xl shadow-card border border-border text-center group hover:border-secondary/30 hover:shadow-elevated transition-all">
                    <div className="w-14 h-14 mx-auto rounded-2xl bg-secondary/20 flex items-center justify-center mb-4 group-hover:bg-secondary group-hover:scale-110 transition-all">
                      <item.icon className="h-7 w-7 text-secondary group-hover:text-secondary-foreground transition-colors" />
                    </div>
                    <div className="text-lg font-bold text-foreground mb-1">{item.title}</div>
                    <div className="text-sm text-muted-foreground font-medium">{item.description}</div>
                  </div>
                ))}
              </div>

              {/* Course Format Banner */}
              <div className="relative rounded-3xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                  alt="Online learning"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/80" />
                <div className="absolute inset-0 flex items-center">
                  <div className="container mx-auto px-8">
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3 drop-shadow-md">
                      Course Format & Delivery
                    </h3>
                    <p className="text-foreground mb-6 max-w-xl font-medium drop-shadow-sm">
                      12 live interactive sessions via Zoom, each 90 minutes. Learn from anywhere in India.
                    </p>
                    <div className="flex flex-wrap gap-4">
                      {[
                        { icon: Video, text: "Live Zoom Sessions" },
                        { icon: MessageCircle, text: "Q&A Support" },
                        { icon: Play, text: "Recorded Access" },
                        { icon: Headphones, text: "Community Support" },
                      ].map((item) => (
                        <div key={item.text} className="flex items-center gap-2 bg-secondary/30 backdrop-blur-sm px-4 py-2 rounded-full border border-secondary/50">
                          <item.icon className="h-4 w-4 text-secondary" />
                          <span className="text-sm text-white font-bold">{item.text}</span>
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
        <section className="py-20 bg-gradient-to-br from-primary via-primary to-primary/90 relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-10 left-10 w-64 h-64 bg-secondary rounded-full blur-3xl" />
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
                Start Your Digital Marketing Journey Today
              </h2>
              <p className="text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto font-medium">
                Master Facebook & Instagram (Meta Ads) + Google My Business. Transform your skills into real, sustainable income.
              </p>

              <div className="bg-card p-8 md:p-10 rounded-3xl shadow-elevated max-w-lg mx-auto border border-secondary/30">
                <div className="text-center mb-6">
                  <div className="flex items-center justify-center gap-3 mb-2">
                    <span className="text-lg text-muted-foreground line-through">₹5,999</span>
                    <span className="bg-secondary/20 text-secondary px-3 py-1 rounded-full text-sm font-bold">50% OFF</span>
                  </div>
                  <div className="text-5xl font-bold text-secondary">₹2,999</div>
                  <p className="text-muted-foreground mt-2 font-medium">One-time payment • Lifetime access to recordings</p>
                </div>

                <Button
                  onClick={handleEnrollNow}
                  className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground py-6 text-lg font-bold rounded-xl shadow-glow transition-all hover:scale-[1.02] mb-4"
                >
                  Enroll Now — Pay ₹2,999 →
                </Button>

                <div className="flex items-center justify-center gap-2 mt-4 text-muted-foreground">
                  <Shield className="h-5 w-5" />
                  <span className="text-sm font-medium">Secure payment via Razorpay • Instant access</span>
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
