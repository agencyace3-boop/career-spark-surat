import { BookOpen, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const resources = [
  {
    title: "Digital Marketing Basics",
    description: "Start your journey with fundamentals of digital marketing",
    lessons: "10 Lessons",
  },
  {
    title: "SEO Complete Guide",
    description: "Learn how to rank your website on Google",
    lessons: "8 Lessons",
  },
  {
    title: "Instagram Growth Tips",
    description: "Master Instagram marketing for your brand",
    lessons: "6 Lessons",
  },
  {
    title: "Google Ads Fundamentals",
    description: "Get started with paid advertising on Google",
    lessons: "7 Lessons",
  },
];

const FreeResources = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Free Learning Hub
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Start Learning for Free
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Access our free resources and get a taste of what Surat DMS has to
              offer. No registration required.
            </p>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90"
            >
              Start Learning Free
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
          </div>

          {/* Right Content - Resource Cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {resources.map((resource, index) => (
              <div
                key={resource.title}
                className="group p-6 rounded-xl bg-card shadow-card hover:shadow-elevated transition-all duration-300 cursor-pointer hover:-translate-y-1"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4 group-hover:bg-secondary transition-colors">
                  <BookOpen className="h-6 w-6 text-secondary group-hover:text-secondary-foreground transition-colors" />
                </div>
                <h3 className="font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {resource.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  {resource.description}
                </p>
                <span className="text-xs font-medium text-secondary">
                  {resource.lessons}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FreeResources;
