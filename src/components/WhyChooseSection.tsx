import { CheckCircle, Award, Users, Briefcase, BookOpen, Target, Clock, Headphones } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const reasons = [
  {
    icon: Award,
    title: "Industry-Recognized Certifications",
    description: "Get certified with credentials that employers trust. Our certifications are recognized by top companies across India.",
  },
  {
    icon: Briefcase,
    title: "100% Placement Assistance",
    description: "Our dedicated placement cell connects you with leading digital marketing agencies and companies for guaranteed opportunities.",
  },
  {
    icon: Target,
    title: "Hands-On Practical Training",
    description: "Work on 15+ live projects with real budgets. Learn by doing, not just watching. Build a portfolio that impresses employers.",
  },
  {
    icon: Users,
    title: "Learn from Industry Experts",
    description: "Our trainers have 10+ years of experience working with Fortune 500 companies and leading digital agencies.",
  },
  {
    icon: Clock,
    title: "Flexible Learning Options",
    description: "Choose from weekday, weekend, or online batches. Learn at your own pace with lifetime access to course materials.",
  },
  {
    icon: Headphones,
    title: "Lifetime Support & Updates",
    description: "Get continuous support even after course completion. Stay updated with industry trends through our alumni network.",
  },
];

const highlights = [
  "10+ Years of Training Excellence",
  "3,000+ Successful Career Transformations",
  "95% Placement Success Rate",
  "20+ Comprehensive Courses",
  "Real-Time Project Experience",
  "Industry Expert Faculty",
];

const WhyChooseSection = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Why <span className="text-secondary">Surat Digital Marketing School</span> is Your Best Choice
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We don't just teach digital marketing—we transform careers. Here's what makes us the 
            most trusted digital marketing institute in Surat.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Content - Reasons Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {reasons.map((reason, index) => (
              <div
                key={reason.title}
                className="group p-6 bg-background rounded-2xl shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <reason.icon className="h-7 w-7 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {reason.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>

          {/* Right Content - Image & Highlights */}
          <div className="space-y-8">
            <div className="relative rounded-3xl overflow-hidden shadow-elevated">
              <img
                src="/images/why-choose.jpg"
                alt="Students learning digital marketing at Surat Digital Marketing School"
                className="w-full h-[350px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-xl font-bold text-primary-foreground mb-2">
                  Join the Best Digital Marketing Training in Surat
                </p>
                <p className="text-primary-foreground/80">
                  Transform your career with practical, industry-focused training
                </p>
              </div>
            </div>

            {/* Highlights List */}
            <div className="bg-background p-8 rounded-2xl shadow-card">
              <h3 className="text-xl font-bold text-foreground mb-6">
                Our Key Differentiators
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {highlights.map((highlight) => (
                  <div key={highlight} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-accent flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="h-3 w-3 text-accent-foreground" />
                    </div>
                    <span className="text-sm font-medium text-foreground">{highlight}</span>
                  </div>
                ))}
              </div>
              <Link to="/contact" className="block mt-6">
                <Button className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                  Talk to Our Counselor
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
