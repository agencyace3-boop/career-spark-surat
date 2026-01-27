import {
  TrendingUp,
  Search,
  Share2,
  MonitorPlay,
  Globe,
  Palette,
  ShoppingCart,
  Sparkles,
} from "lucide-react";

const categories = [
  { icon: TrendingUp, label: "Digital Marketing", color: "bg-primary/10 text-primary" },
  { icon: Search, label: "SEO", color: "bg-secondary/10 text-secondary" },
  { icon: Share2, label: "Social Media", color: "bg-primary/10 text-primary" },
  { icon: MonitorPlay, label: "Google Ads", color: "bg-secondary/10 text-secondary" },
  { icon: Globe, label: "Website & Funnels", color: "bg-primary/10 text-primary" },
  { icon: Palette, label: "Graphic Design", color: "bg-secondary/10 text-secondary" },
  { icon: ShoppingCart, label: "E-commerce", color: "bg-primary/10 text-primary" },
  { icon: Sparkles, label: "AI Tools for Marketing", color: "bg-secondary/10 text-secondary" },
];

const LearningCategories = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Explore Learning Categories
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Master the skills that matter in today's digital world
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <div
              key={category.label}
              className="group flex flex-col items-center p-6 rounded-xl bg-card shadow-card hover:shadow-elevated transition-all duration-300 cursor-pointer hover:-translate-y-1"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div
                className={`w-16 h-16 rounded-full ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                <category.icon className="h-8 w-8" />
              </div>
              <h3 className="text-sm md:text-base font-semibold text-foreground text-center group-hover:text-primary transition-colors">
                {category.label}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LearningCategories;
