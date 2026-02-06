import { Link } from "react-router-dom";
import { Clock, Users, ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { courses } from "@/data/courses";

const displayCourses = courses.slice(0, 6);

const PopularCourses = () => {
  return (
    <section id="courses" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <span className="inline-block bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Popular Courses
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Master In-Demand <span className="text-secondary">Digital Skills</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Industry-recognized courses designed by experts with hands-on training.
            </p>
          </div>
          <Link to="/courses">
            <Button variant="outline" className="border-secondary text-secondary hover:bg-secondary/5">
              View All Courses <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayCourses.map((course) => (
            <Link
              key={course.slug}
              to={`/courses/${course.slug}`}
              className="group bg-card rounded-2xl border border-border/50 overflow-hidden shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative h-48 overflow-hidden">
                <img src={course.image} alt={course.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
                <span className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold ${
                  course.level === "beginner" ? "bg-accent text-accent-foreground" : course.level === "expert" ? "bg-secondary text-secondary-foreground" : "bg-primary text-primary-foreground"
                }`}>{course.level}</span>
                <div className="absolute bottom-4 left-4 flex items-center gap-1 bg-background/90 px-3 py-1 rounded-full">
                  <Star className="h-4 w-4 text-secondary fill-secondary" /><span className="text-sm font-semibold">4.9</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{course.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{course.description}</p>
                <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1"><Clock className="h-4 w-4" /><span>{course.duration}</span></div>
                  <div className="flex items-center gap-1"><Users className="h-4 w-4" /><span>{course.instructor}</span></div>
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <span className="text-sm font-medium">Learn More</span>
                  <ArrowRight className="h-5 w-5 text-secondary group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularCourses;
