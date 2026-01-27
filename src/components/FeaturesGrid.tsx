import { BookOpen, Video, Award, Clock } from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "Digital Marketing Courses",
    description: "Learn SEO, Google Ads, Social Media Marketing, and more.",
  },
  {
    icon: Video,
    title: "Hands-On Training",
    description: "Get practical insights and work on live projects.",
  },
  {
    icon: Award,
    title: "Expert-Led Classes",
    description: "Learn from certified industry professionals.",
  },
  {
    icon: Clock,
    title: "Flexible Learning",
    description: "Study online, anytime, and from anywhere.",
  },
];

const FeaturesGrid = () => {
  return (
    <section className="py-16 bg-primary">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="text-center text-primary-foreground"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary-foreground/10 flex items-center justify-center">
                <feature.icon className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-primary-foreground/80">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;
