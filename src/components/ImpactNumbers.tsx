import { useEffect, useState, useRef } from "react";

const stats = [
  { value: 3000, suffix: "+", label: "Students Trained" },
  { value: 99, suffix: "%", label: "Completion Rate" },
  { value: 9.5, suffix: "/10", label: "Student Satisfaction" },
  { value: 500, suffix: "+", label: "Business Clients" },
];

const useCountUp = (end: number, duration: number = 2000, start: boolean = false) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startTime: number | null = null;
    const animate = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      setCount(Math.floor(progress * end * 10) / 10);
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [end, duration, start]);

  return count;
};

const StatItem = ({ value, suffix, label, index }: { value: number; suffix: string; label: string; index: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const count = useCountUp(value, 2000, isVisible);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="text-center p-8 rounded-xl bg-card shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
        {Number.isInteger(value) ? Math.floor(count) : count.toFixed(1)}
        <span className="text-secondary">{suffix}</span>
      </div>
      <div className="text-muted-foreground font-medium">{label}</div>
    </div>
  );
};

const ImpactNumbers = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Impact in Numbers
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real results that speak for themselves
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <StatItem key={stat.label} {...stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactNumbers;
