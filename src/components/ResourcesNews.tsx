import { ArrowRight, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const blogs = [
  {
    title: "Digital Marketing Expert Surat",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    date: "July 15, 2025",
    category: "Blog",
  },
  {
    title: "10 marketing trends that you should be prepared for in 2022",
    image: "https://images.unsplash.com/photo-1553835973-dec43bfddbeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    date: "July 28, 2022",
    category: "Marketing",
  },
  {
    title: "How to design a simple, yet unique and memorable brand identity",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    date: "July 28, 2022",
    category: "Branding",
  },
  {
    title: "Increasing engagement with Instagram and Facebook",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    date: "July 28, 2022",
    category: "Social Media",
  },
];

const ResourcesNews = () => {
  return (
    <section id="blog" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Resources & News
            </h2>
            <p className="text-lg text-muted-foreground">
              Latest insights and updates from digital marketing world.
            </p>
          </div>
          <Button variant="outline" className="mt-4 md:mt-0">
            Browse Blog
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {blogs.map((blog, index) => (
            <Card
              key={blog.title}
              className="group overflow-hidden border-0 shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 bg-card"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <span className="absolute top-3 left-3 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">
                  {blog.category}
                </span>
              </div>
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <Calendar className="h-4 w-4" />
                  <span>{blog.date}</span>
                </div>
                <h3 className="text-base font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                  {blog.title}
                </h3>
              </CardHeader>
              <CardContent>
                <Button
                  variant="link"
                  className="p-0 text-secondary hover:text-secondary/80"
                >
                  Read More
                  <ArrowRight className="h-4 w-4 ml-1" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResourcesNews;
