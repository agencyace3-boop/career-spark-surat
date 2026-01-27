import { Link } from "react-router-dom";
import { Clock, BarChart3, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { courses } from "@/data/courses";

// Display first 8 courses on homepage
const displayCourses = courses.slice(0, 8);

const getLevelColor = (level: string) => {
  switch (level) {
    case "beginner":
      return "text-green-600";
    case "intermediate":
      return "text-yellow-600";
    case "expert":
      return "text-red-600";
    default:
      return "text-muted-foreground";
  }
};

const PopularCourses = () => {
  return (
    <section id="courses" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Most Popular Courses
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our most popular course available for both online and offline (Surat).
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayCourses.map((course, index) => (
            <Link key={course.id} to={`/courses/${course.slug}`}>
              <Card
                className="group overflow-hidden border-0 shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 bg-card h-full"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <CardHeader className="pb-2">
                  <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                    {course.title}
                  </h3>
                </CardHeader>
                <CardContent className="pb-4">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <BarChart3 className="h-4 w-4" />
                      <span className={`capitalize ${getLevelColor(course.level)}`}>{course.level}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="pt-0 border-t border-border">
                  <div className="flex items-center gap-2 w-full pt-4">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-xs font-bold text-primary">VP</span>
                    </div>
                    <span className="text-sm text-muted-foreground">{course.instructor}</span>
                    <span className="ml-auto text-sm font-bold text-secondary">Free</span>
                  </div>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link to="/courses">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Browse All Courses
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PopularCourses;
