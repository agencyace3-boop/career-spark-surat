import { ArrowRight, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const blogs = [
  {
    title: "How to Get a Digital Marketing Job in 2025",
    excerpt: "Complete guide to landing your first digital marketing role with practical tips and strategies.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    date: "Jan 15, 2025",
    category: "Career",
  },
  {
    title: "How Businesses Can Grow Online in Surat",
    excerpt: "Local strategies for Surat businesses to establish and grow their online presence.",
    image: "https://images.unsplash.com/photo-1553835973-dec43bfddbeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    date: "Jan 10, 2025",
    category: "Business",
  },
  {
    title: "Case Study: 10x Growth for Local Restaurant",
    excerpt: "How we helped a Surat restaurant increase their orders by 10x using digital marketing.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    date: "Jan 5, 2025",
    category: "Case Study",
  },
];

const Blog = () => {
  return (
    <section id="blog" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Knowledge Hub
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stay updated with the latest digital marketing trends and insights
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
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
                <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                  {blog.title}
                </h3>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {blog.excerpt}
                </p>
                <Button
                  variant="link"
                  className="p-0 mt-4 text-secondary hover:text-secondary/80"
                >
                  Read More
                  <ArrowRight className="h-4 w-4 ml-1" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" size="lg">
            View All Articles
            <ArrowRight className="h-5 w-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
