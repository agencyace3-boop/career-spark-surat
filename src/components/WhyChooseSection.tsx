import { BookOpen, Target, Briefcase } from "lucide-react";

const reasons = [
  {
    icon: BookOpen,
    title: "Industry-Focused Curriculum",
    description: "Designed to meet the current industry standards.",
  },
  {
    icon: Target,
    title: "Practical Learning",
    description: "Learn with real-life projects and case studies.",
  },
  {
    icon: Briefcase,
    title: "Job Assistance",
    description: "Get help in landing your dream job in digital marketing.",
  },
];

const WhyChooseSection = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Why Choose Surat Digital Marketing School?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Learn about what makes us different and Here are some key points.
            </p>

            <div className="space-y-6">
              {reasons.map((reason, index) => (
                <div
                  key={reason.title}
                  className="flex gap-4 group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center group-hover:bg-secondary group-hover:scale-110 transition-all duration-300">
                    <reason.icon className="h-7 w-7 text-secondary group-hover:text-secondary-foreground transition-colors" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-1">
                      {reason.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {reason.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-elevated">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Team collaboration"
                className="w-full h-[450px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
