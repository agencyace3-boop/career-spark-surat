import { useState } from "react";
import { ChevronLeft, ChevronRight, Monitor } from "lucide-react";

const categories = [
  { name: "Digital Marketing Courses", count: 11 },
  { name: "Social Media Marketing", count: 6 },
  { name: "SEO (Search Engine Optimization)", count: 4 },
  { name: "Advertising & Paid Marketing", count: 6 },
  { name: "Content & Email Marketing", count: 3 },
  { name: "Analytics & Tracking", count: 1 },
  { name: "Website & E-commerce Development", count: 2 },
  { name: "Influence & Affiliate Marketing", count: 3 },
];

const CourseCategories = () => {
  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 4;

  const next = () => {
    setStartIndex((prev) => (prev + 1) % categories.length);
  };

  const prev = () => {
    setStartIndex((prev) => (prev - 1 + categories.length) % categories.length);
  };

  const getVisibleCategories = () => {
    const result = [];
    for (let i = 0; i < visibleCount; i++) {
      result.push(categories[(startIndex + i) % categories.length]);
    }
    return result;
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Course Categories
          </h2>
          <p className="text-lg text-muted-foreground">
            List of type of courses offered by Surat DMS.
          </p>
        </div>

        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={prev}
            className="absolute -left-4 md:left-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-border bg-background flex items-center justify-center text-foreground hover:bg-muted transition-colors z-10"
            aria-label="Previous"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={next}
            className="absolute -right-4 md:right-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground hover:bg-primary/90 transition-colors z-10"
            aria-label="Next"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          {/* Categories Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-8 md:px-16">
            {getVisibleCategories().map((category, index) => (
              <a
                key={`${category.name}-${index}`}
                href="#courses"
                className="group p-8 rounded-2xl bg-muted hover:bg-card hover:shadow-elevated transition-all duration-300 text-center"
              >
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-background flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Monitor className="h-10 w-10 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                  {category.name}
                </h3>
                <span className="text-sm text-muted-foreground">
                  ({category.count} courses)
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseCategories;
