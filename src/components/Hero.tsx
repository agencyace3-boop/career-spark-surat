import { Star, Users, Building2, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const trustBadges = [
  { icon: Star, label: "4.9/5 Rated", value: "4.9/5" },
  { icon: Users, label: "3000+ Students", value: "3000+" },
  { icon: Building2, label: "500+ Businesses Served", value: "500+" },
];

const features = [
  "Live Expert-Led Training",
  "100% Practical Learning",
  "Placement Assistance",
];

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-muted via-background to-background">
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Become{" "}
                <span className="text-primary">Job-Ready</span> or{" "}
                <span className="text-secondary">Grow Your Business</span> with
                Digital Marketing
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-xl">
                Practical Courses, Real Projects & Expert-Led Training for
                Students and Businesses in Surat & Across India
              </p>
            </div>

            {/* Feature List */}
            <ul className="space-y-3">
              {features.map((feature) => (
                <li key={feature} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-secondary flex-shrink-0" />
                  <span className="text-foreground font-medium">{feature}</span>
                </li>
              ))}
            </ul>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-semibold shadow-elevated"
              >
                Explore Courses
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-6 text-lg font-semibold"
              >
                Free Consultation
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-6 pt-4">
              {trustBadges.map((badge) => (
                <div
                  key={badge.label}
                  className="flex items-center gap-2 bg-card rounded-lg px-4 py-3 shadow-card"
                >
                  <badge.icon className="h-5 w-5 text-secondary" />
                  <div>
                    <div className="text-sm font-bold text-foreground">
                      {badge.value}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {badge.label.split(" ").slice(1).join(" ")}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative hidden lg:block animate-slide-in-right">
            <div className="relative rounded-2xl overflow-hidden shadow-elevated">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Digital Marketing Training"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
            {/* Floating Stats Card */}
            <div className="absolute -bottom-6 -left-6 bg-card rounded-xl p-6 shadow-elevated animate-scale-in">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
                  <Users className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground">99%</div>
                  <div className="text-sm text-muted-foreground">
                    Completion Rate
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-secondary/5 to-transparent pointer-events-none" />
    </section>
  );
};

export default Hero;
