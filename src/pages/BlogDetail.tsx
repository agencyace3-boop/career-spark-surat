import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getBlogBySlug, blogs } from "@/data/blogs";
import { Calendar, ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const BlogDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const blog = getBlogBySlug(slug || "");

  if (!blog) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-3xl font-bold text-foreground mb-4">Blog Not Found</h1>
          <p className="text-muted-foreground mb-8">The blog post you're looking for doesn't exist.</p>
          <Link to="/blog">
            <Button>Back to Blog</Button>
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  // Get other blogs for quick links (excluding current)
  const otherBlogs = blogs.filter(b => b.id !== blog.id);

  // Simple markdown-like rendering
  const renderContent = (content: string) => {
    return content.split('\n\n').map((paragraph, index) => {
      // Headings
      if (paragraph.startsWith('## ')) {
        return (
          <h2 key={index} className="text-2xl font-bold text-foreground mt-8 mb-4">
            {paragraph.replace('## ', '')}
          </h2>
        );
      }
      if (paragraph.startsWith('### ')) {
        return (
          <h3 key={index} className="text-xl font-semibold text-foreground mt-6 mb-3">
            {paragraph.replace('### ', '')}
          </h3>
        );
      }
      // Lists
      if (paragraph.startsWith('- ')) {
        const items = paragraph.split('\n').filter(line => line.startsWith('- '));
        return (
          <ul key={index} className="list-disc list-inside space-y-2 text-muted-foreground mb-4 ml-4">
            {items.map((item, i) => (
              <li key={i}>{item.replace('- ', '')}</li>
            ))}
          </ul>
        );
      }
      // Bold text handling
      if (paragraph.includes('**')) {
        const parts = paragraph.split(/(\*\*[^**]+\*\*)/g);
        return (
          <p key={index} className="text-muted-foreground leading-relaxed mb-4">
            {parts.map((part, i) => {
              if (part.startsWith('**') && part.endsWith('**')) {
                return <strong key={i} className="text-foreground font-semibold">{part.slice(2, -2)}</strong>;
              }
              return part;
            })}
          </p>
        );
      }
      // Regular paragraphs
      return (
        <p key={index} className="text-muted-foreground leading-relaxed mb-4">
          {paragraph}
        </p>
      );
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero */}
        <section className="relative py-16 bg-primary overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 right-10 w-64 h-64 bg-secondary rounded-full blur-3xl" />
            <div className="absolute bottom-10 left-10 w-96 h-96 bg-accent rounded-full blur-3xl" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <Link to="/blog" className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground mb-6 transition-colors">
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </Link>
            <span className="inline-block bg-secondary/20 text-secondary px-4 py-2 rounded-full text-sm font-semibold mb-4">
              {blog.category}
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4 max-w-4xl">
              {blog.title}
            </h1>
            <div className="flex items-center gap-2 text-primary-foreground/80">
              <Calendar className="h-4 w-4" />
              <span>{blog.date}</span>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <article className="lg:col-span-2">
                <img 
                  src={blog.image} 
                  alt={blog.title}
                  className="w-full h-64 md:h-96 object-cover rounded-3xl mb-8 shadow-elevated"
                />
                <div className="prose prose-lg max-w-none">
                  {renderContent(blog.content)}
                </div>

                {/* Share & Navigation */}
                <div className="mt-12 pt-8 border-t border-border">
                  <Link to="/blog">
                    <Button variant="outline" className="border-primary text-primary hover:bg-primary/5">
                      <ArrowLeft className="h-4 w-4 mr-2" />
                      Back to All Articles
                    </Button>
                  </Link>
                </div>
              </article>

              {/* Sidebar - Quick Links */}
              <aside className="lg:col-span-1">
                <div className="sticky top-32">
                  {/* Quick Links */}
                  <div className="bg-card p-6 rounded-3xl shadow-card border border-border/50 mb-6">
                    <h3 className="text-lg font-bold text-foreground mb-4">Quick Links</h3>
                    <nav className="space-y-2">
                      <Link to="/" className="block text-muted-foreground hover:text-primary transition-colors py-2 border-b border-border/50">
                        Home
                      </Link>
                      <Link to="/courses" className="block text-muted-foreground hover:text-primary transition-colors py-2 border-b border-border/50">
                        All Courses
                      </Link>
                      <Link to="/online-course" className="block text-muted-foreground hover:text-primary transition-colors py-2 border-b border-border/50">
                        Online Course
                      </Link>
                      <Link to="/about" className="block text-muted-foreground hover:text-primary transition-colors py-2 border-b border-border/50">
                        About Us
                      </Link>
                      <Link to="/contact" className="block text-muted-foreground hover:text-primary transition-colors py-2">
                        Contact
                      </Link>
                    </nav>
                  </div>

                  {/* Other Articles */}
                  <div className="bg-card p-6 rounded-3xl shadow-card border border-border/50">
                    <h3 className="text-lg font-bold text-foreground mb-4">More Articles</h3>
                    <div className="space-y-4">
                      {otherBlogs.slice(0, 4).map((otherBlog) => (
                        <Link 
                          key={otherBlog.id} 
                          to={`/blog/${otherBlog.slug}`}
                          className="block group"
                        >
                          <div className="flex gap-3">
                            <img 
                              src={otherBlog.image} 
                              alt={otherBlog.title}
                              className="w-16 h-16 object-cover rounded-lg flex-shrink-0"
                            />
                            <div>
                              <h4 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                                {otherBlog.title}
                              </h4>
                              <span className="text-xs text-muted-foreground">{otherBlog.date}</span>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="bg-primary p-6 rounded-3xl mt-6 text-center">
                    <h3 className="text-lg font-bold text-primary-foreground mb-2">Ready to Learn?</h3>
                    <p className="text-sm text-primary-foreground/80 mb-4">Join our next digital marketing batch</p>
                    <Link to="/online-course">
                      <Button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground w-full">
                        Enroll Now
                      </Button>
                    </Link>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default BlogDetail;
