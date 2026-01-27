import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Digital Marketing Executive",
    company: "Tech Solutions Pvt Ltd",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    quote: "After completing the Digital Marketing course at Surat DMS, I landed my first job within 2 weeks. The practical training made all the difference!",
  },
  {
    name: "Rajesh Patel",
    role: "Business Owner",
    company: "Patel Textiles",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    quote: "My business sales doubled after implementing the strategies I learned. The ROI on this course was incredible!",
  },
  {
    name: "Anjali Mehta",
    role: "Freelance Marketer",
    company: "Self-Employed",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    quote: "I started freelancing after completing the course and now earn more than my previous corporate job. Best decision ever!",
  },
  {
    name: "Vikram Singh",
    role: "SEO Specialist",
    company: "Global Marketing Agency",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    quote: "The SEO training was top-notch. I'm now handling SEO for multiple international clients thanks to Surat DMS.",
  },
];

const SuccessStories = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Success Stories
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hear from our students and business clients who transformed their careers
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-card rounded-2xl shadow-elevated p-8 md:p-12">
            <Quote className="absolute top-6 left-6 h-12 w-12 text-secondary/20" />
            
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover border-4 border-secondary/20"
                />
              </div>
              
              <div className="text-center md:text-left">
                <p className="text-lg md:text-xl text-foreground mb-6 italic leading-relaxed">
                  "{testimonials[currentIndex].quote}"
                </p>
                <div>
                  <h4 className="text-lg font-bold text-foreground">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-secondary font-medium">
                    {testimonials[currentIndex].role}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonials[currentIndex].company}
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-center gap-4 mt-8">
              <Button
                variant="outline"
                size="icon"
                onClick={prev}
                className="rounded-full"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              <div className="flex items-center gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? "w-6 bg-secondary"
                        : "bg-muted-foreground/30"
                    }`}
                  />
                ))}
              </div>
              <Button
                variant="outline"
                size="icon"
                onClick={next}
                className="rounded-full"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
