import { Clock, BarChart3, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";

const courses = [
  {
    title: "Agency Setup Training",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    duration: "30 Day",
    level: "Expert",
    instructor: "Vikaas Parekh",
  },
  {
    title: "Website Development Course",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    duration: "30 Day",
    level: "Expert",
    instructor: "Vikaas Parekh",
  },
  {
    title: "Advance SEO Strategy",
    image: "https://images.unsplash.com/photo-1571721795195-a2ca2d3370a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    duration: "30 Day",
    level: "Expert",
    instructor: "Vikaas Parekh",
  },
  {
    title: "Pay Per Click (PPC)",
    image: "https://images.unsplash.com/photo-1553028826-f4804a6dba3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    duration: "30 Day",
    level: "Intermediate",
    instructor: "Vikaas Parekh",
  },
  {
    title: "Search Engine Optimization (SEO)",
    image: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    duration: "30 Day",
    level: "Intermediate",
    instructor: "Vikaas Parekh",
  },
  {
    title: "E-commerce Solutions",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    duration: "30 Day",
    level: "Intermediate",
    instructor: "Vikaas Parekh",
  },
  {
    title: "Facebook Pixel",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    duration: "30 Day",
    level: "Intermediate",
    instructor: "Vikaas Parekh",
  },
  {
    title: "LinkedIn Marketing",
    image: "https://images.unsplash.com/photo-1611944212129-29977ae1398c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    duration: "30 Day",
    level: "Intermediate",
    instructor: "Vikaas Parekh",
  },
];

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
          {courses.map((course, index) => (
            <Card
              key={course.title}
              className="group overflow-hidden border-0 shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 bg-card"
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
                    <span>{course.level}</span>
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
          ))}
        </div>

        <div className="text-center mt-10">
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            Browse All Courses
            <ArrowRight className="h-5 w-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PopularCourses;
