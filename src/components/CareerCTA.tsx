import { Button } from "@/components/ui/button";

const stats = [
  { value: "9.5/10", label: "Average course satisfaction score" },
  { value: "99%", label: "Course completion rate across all programs" },
  { value: "3000+", label: "Successful students worldwide" },
];

const CareerCTA = () => {
  return (
    <section className="py-20 bg-primary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-secondary rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Grow Your Career Today with Expert-Led Digital Marketing Courses
          </h2>
          <p className="text-lg text-primary-foreground/80 max-w-3xl mx-auto mb-8">
            Unlock your potential with industry-leading courses designed to enhance your digital marketing skills. Learn from experts, work on real-world projects, and advance your career.
          </p>
          <Button
            size="lg"
            className="bg-secondary hover:bg-secondary/90 text-secondary-foreground"
          >
            Contact Us
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-secondary mb-2">
                {stat.value}
              </div>
              <p className="text-primary-foreground/80">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CareerCTA;
