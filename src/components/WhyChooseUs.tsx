import {
  BookOpen,
  Video,
  Target,
  Briefcase,
  Building,
  Wallet,
} from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "Industry-Focused Curriculum",
    description: "Learn what employers actually need, not outdated theory",
  },
  {
    icon: Video,
    title: "Live Expert Trainers",
    description: "Learn from industry professionals with real experience",
  },
  {
    icon: Target,
    title: "100% Practical Training",
    description: "Hands-on projects and real-world case studies",
  },
  {
    icon: Briefcase,
    title: "Internship & Placement Support",
    description: "Get placed in top companies with our career assistance",
  },
  {
    icon: Building,
    title: "Business Growth Programs",
    description: "Special programs to help businesses scale online",
  },
  {
    icon: Wallet,
    title: "Affordable & Flexible Fees",
    description: "Quality education at prices that work for you",
  },
];

const WhyChooseUs = () => {
  return (
    <section id="about" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Why Choose <span className="text-primary">Surat</span>
              <span className="text-secondary">DMS</span>?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              We're not just another training institute. We're a career
              transformation platform that focuses on real skills, real projects,
              and real results.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className="flex gap-4 group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center group-hover:bg-secondary group-hover:scale-110 transition-all duration-300">
                    <feature.icon className="h-6 w-6 text-secondary group-hover:text-secondary-foreground transition-colors" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative hidden lg:block">
            <div className="relative rounded-2xl overflow-hidden shadow-elevated">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Team collaboration"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
