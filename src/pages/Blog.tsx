import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { blogs } from "@/data/blogs";
import { Calendar, ArrowRight } from "lucide-react";

const Blog = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-20 bg-primary overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 right-10 w-64 h-64 bg-secondary rounded-full blur-3xl" />
            <div className="absolute bottom-10 left-10 w-96 h-96 bg-accent rounded-full blur-3xl" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block bg-secondary/20 text-secondary px-4 py-2 rounded-full text-sm font-semibold mb-4">
                Resources & News
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
                Digital Marketing <span className="text-secondary">Blog</span>
              </h1>
              <p className="text-lg text-primary-foreground/80">
                Stay updated with the latest trends, tips, and strategies in digital marketing. 
                Learn from industry experts and grow your skills.
              </p>
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="py-8 bg-muted border-b border-border">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-4">
              <span className="text-muted-foreground font-medium">Quick Links:</span>
              <Link to="/" className="text-primary hover:text-primary/80 font-medium transition-colors">
                Home
              </Link>
              <span className="text-border">|</span>
              <Link to="/courses" className="text-primary hover:text-primary/80 font-medium transition-colors">
                All Courses
              </Link>
              <span className="text-border">|</span>
              <Link to="/online-course" className="text-primary hover:text-primary/80 font-medium transition-colors">
                Online Course
              </Link>
              <span className="text-border">|</span>
              <Link to="/about" className="text-primary hover:text-primary/80 font-medium transition-colors">
                About Us
              </Link>
              <span className="text-border">|</span>
              <Link to="/contact" className="text-primary hover:text-primary/80 font-medium transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogs.map((blog) => (
                <article 
                  key={blog.id} 
                  className="bg-card rounded-3xl overflow-hidden shadow-card hover:shadow-elevated transition-all hover:-translate-y-1 group"
                >
                  <Link to={`/blog/${blog.slug}`}>
                    <div className="relative overflow-hidden">
                      <img 
                        src={blog.image} 
                        alt={blog.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <span className="absolute top-4 left-4 bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-xs font-semibold">
                        {blog.category}
                      </span>
                    </div>
                  </Link>
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
                      <Calendar className="h-4 w-4" />
                      <span>{blog.date}</span>
                    </div>
                    <Link to={`/blog/${blog.slug}`}>
                      <h3 className="text-xl font-bold text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                        {blog.title}
                      </h3>
                    </Link>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                      {blog.excerpt}
                    </p>
                    <Link 
                      to={`/blog/${blog.slug}`}
                      className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
                    >
                      Read More <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
