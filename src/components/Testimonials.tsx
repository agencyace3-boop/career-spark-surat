import { useState } from "react";
import { Star, Quote, ChevronLeft, ChevronRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "Digital Marketing Manager",
    company: "TechCorp India",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    rating: 5,
    text: "Surat DMS completely transformed my career. Within 3 months of completing the course, I landed a job at a top tech company with a 150% salary increase. The hands-on training and placement support were exceptional!",
    course: "Advanced Digital Marketing",
    placedAt: "TechCorp India",
  },
  {
    id: 2,
    name: "Rahul Patel",
    role: "SEO Specialist",
    company: "Digital First Agency",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    rating: 5,
    text: "The SEO training at Surat DMS is unmatched. I learned advanced techniques that helped me rank websites on page 1 of Google. The trainers share real strategies that actually work in today's competitive market.",
    course: "Advanced SEO Strategy",
    placedAt: "Digital First Agency",
  },
  {
    id: 3,
    name: "Sneha Desai",
    role: "Social Media Manager",
    company: "Brand Solutions",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    rating: 5,
    text: "I was a complete beginner when I joined Surat DMS. The structured curriculum and patient trainers helped me master social media marketing. Now I manage campaigns for national brands!",
    course: "Social Media Marketing",
    placedAt: "Brand Solutions",
  },
  {
    id: 4,
    name: "Amit Joshi",
    role: "PPC Specialist",
    company: "AdTech Solutions",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    rating: 5,
    text: "The Google Ads training was incredibly practical. We managed real campaigns with actual budgets. This experience gave me the confidence to handle large advertising budgets for clients.",
    course: "Pay Per Click (PPC)",
    placedAt: "AdTech Solutions",
  },
  {
    id: 5,
    name: "Meera Shah",
    role: "Freelance Consultant",
    company: "Self-Employed",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    rating: 5,
    text: "Thanks to Surat DMS, I now run my own digital marketing consultancy. The agency setup training and business skills I learned here were invaluable. I earn 3x more than my previous job!",
    course: "Agency Setup Training",
    placedAt: "Own Agency",
  },
  {
    id: 6,
    name: "Vikram Rana",
    role: "E-commerce Manager",
    company: "ShopEasy India",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    rating: 5,
    text: "The e-commerce solutions course helped me understand the complete online selling ecosystem. From SEO to paid ads to conversion optimization—everything was covered in depth.",
    course: "E-commerce Solutions",
    placedAt: "ShopEasy India",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 3 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev >= testimonials.length - 3 ? 0 : prev + 1));
  };

  const visibleTestimonials = testimonials.slice(currentIndex, currentIndex + 3);

  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Success Stories
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Hear from Our <span className="text-secondary">Successful</span> Alumni
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Join thousands of students who transformed their careers with Surat DMS. 
            Read their inspiring journeys and success stories.
          </p>
        </div>

        {/* Featured Video Testimonial */}
        <div className="mb-16">
          <div className="relative rounded-3xl overflow-hidden shadow-elevated max-w-4xl mx-auto">
            <img
              src="https://images.unsplash.com/photo-1560439514-4e9645039924?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
              alt="Student success story video testimonial"
              className="w-full h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/50 to-transparent" />
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="w-20 h-20 rounded-full bg-secondary flex items-center justify-center shadow-glow hover:scale-110 transition-transform">
                <Play className="h-8 w-8 text-secondary-foreground ml-1" fill="currentColor" />
              </button>
            </div>
            <div className="absolute bottom-8 left-8 right-8">
              <p className="text-2xl font-bold text-primary-foreground mb-2">
                "Surat DMS Changed My Life"
              </p>
              <p className="text-primary-foreground/80">
                Watch how Priya went from fresher to Digital Marketing Manager in just 6 months
              </p>
            </div>
          </div>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative">
          <div className="grid md:grid-cols-3 gap-6">
            {visibleTestimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-card p-8 rounded-2xl shadow-card hover:shadow-elevated transition-all duration-300 border border-border/50"
              >
                {/* Quote Icon */}
                <Quote className="h-10 w-10 text-secondary/20 mb-4" />

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-secondary fill-secondary" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>

                {/* Course Badge */}
                <div className="mb-6">
                  <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium">
                    {testimonial.course}
                  </span>
                </div>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-secondary"
                  />
                  <div>
                    <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    <p className="text-xs text-secondary font-medium">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-4 mt-10">
            <button
              onClick={goToPrevious}
              className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors"
              aria-label="Previous testimonials"
            >
              <ChevronLeft className="h-6 w-6 text-foreground" />
            </button>
            <div className="flex gap-2">
              {Array.from({ length: Math.ceil(testimonials.length / 3) }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i * 3)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    Math.floor(currentIndex / 3) === i ? "bg-secondary" : "bg-muted-foreground/30"
                  }`}
                  aria-label={`Go to page ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={goToNext}
              className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors"
              aria-label="Next testimonials"
            >
              <ChevronRight className="h-6 w-6 text-foreground" />
            </button>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
            View All Success Stories
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
