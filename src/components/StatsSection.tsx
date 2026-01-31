import { useState, useEffect, useRef } from "react";
import { Users, Award, BookOpen, Briefcase, GraduationCap, TrendingUp } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: 3000,
    suffix: "+",
    label: "Students Trained",
    description: "Successfully trained professionals",
  },
  {
    icon: Award,
    value: 95,
    suffix: "%",
    label: "Placement Rate",
    description: "Students placed in top companies",
  },
  {
    icon: GraduationCap,
    value: 10,
    suffix: "+",
    label: "Years Experience",
    description: "Industry-leading expertise",
  },
  {
    icon: BookOpen,
    value: 20,
    suffix: "+",
    label: "Expert Courses",
    description: "Comprehensive curriculum",
  },
  {
    icon: Briefcase,
    value: 500,
    suffix: "+",
    label: "Business Clients",
    description: "Companies trust our services",
  },
  {
    icon: TrendingUp,
    value: 4.9,
    suffix: "/5",
    label: "Student Rating",
    description: "Average course satisfaction",
  },
];

const AnimatedCounter = ({ value, suffix, inView }: { value: number; suffix: string; inView: boolean }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    const duration = 2000;
    const steps = 60;
    const stepValue = value / steps;
    const stepTime = duration / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += stepValue;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [value, inView]);

  return (
    <span>
      {value % 1 !== 0 ? count.toFixed(1) : count}
      {suffix}
    </span>
  );
};

const StatsSection = () => {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 bg-primary relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-secondary rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-secondary rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Our Track Record of <span className="text-secondary">Excellence</span>
          </h2>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Numbers that reflect our commitment to transforming careers and empowering businesses
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`text-center p-6 bg-primary-foreground/5 rounded-2xl border border-primary-foreground/10 hover:bg-primary-foreground/10 transition-all duration-300 hover:scale-105 ${
                inView ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-secondary/20 flex items-center justify-center">
                <stat.icon className="h-7 w-7 text-secondary" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-primary-foreground mb-1">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} inView={inView} />
              </div>
              <div className="text-sm font-medium text-primary-foreground mb-1">
                {stat.label}
              </div>
              <div className="text-xs text-primary-foreground/60">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
