import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    name: "Rahul Mehta",
    role: "Student",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    quote: "Before joining Surat DMS, I struggled with creating effective marketing strategies for my startup. Their structured courses and practical approach have transformed how I manage campaigns.",
  },
  {
    name: "Neha Desai",
    role: "Student",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    quote: "The training I received at Surat DMS was exceptional. The courses were well-organized and comprehensive, covering every aspect of digital marketing.",
  },
  {
    name: "Amit Shah",
    role: "Student",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    quote: "Surat DMS helped me elevate my marketing knowledge and skills. The instructors are approachable, knowledgeable, and always ready to assist. The course structure is practical.",
  },
  {
    name: "Ramesh Sharma",
    role: "Student",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    quote: "Amazing design, easy to customize and a design quality superlative account on its cloud platform for the optimized performance. Best investment in my career!",
  },
  {
    name: "Arpita Bansal",
    role: "Student",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    quote: "The hands-on training at Surat DMS gave me the practical knowledge I needed to excel in my digital marketing career. The instructors were experienced and helpful.",
  },
  {
    name: "Sneha Patel",
    role: "Student",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    quote: "Surat DMS has been a game-changer for me. Their advanced digital marketing course equipped me with skills I couldn't have learned anywhere else.",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What People Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Here's what our students and professionals have to say about their learning experience at Surat Digital Marketing School. From practical training to career advancement, read about how our courses helped them succeed in the digital marketing world.
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

export default Testimonials;
