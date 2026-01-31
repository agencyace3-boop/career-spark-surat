import { useState } from "react";
import { X, Play, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const courses = [
  "Advanced Digital Marketing",
  "SEO Strategy",
  "Social Media Marketing",
  "Google Ads (PPC)",
  "E-commerce Solutions",
  "Agency Setup Training",
  "Website Development",
];

const DemoModal = ({ isOpen, onClose }: DemoModalProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    course: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast({
      title: "Demo Class Booked!",
      description: "Our team will call you within 2 hours to confirm your slot.",
    });
    
    setFormData({ name: "", phone: "", email: "", course: "" });
    setIsSubmitting(false);
    onClose();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-foreground/60 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-card rounded-3xl shadow-elevated max-w-md w-full animate-scale-in overflow-hidden">
        {/* Header */}
        <div className="relative bg-primary p-6 text-center">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-primary-foreground/10 flex items-center justify-center text-primary-foreground hover:bg-primary-foreground/20 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-secondary/20 flex items-center justify-center">
            <Play className="h-8 w-8 text-secondary" fill="currentColor" />
          </div>
          <h2 className="text-2xl font-bold text-primary-foreground mb-2">
            Book Your Free Demo Class
          </h2>
          <p className="text-primary-foreground/80 text-sm">
            Experience our training methodology before you enroll
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your Full Name"
              className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-foreground"
            />
          </div>
          <div>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              placeholder="Phone Number"
              className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-foreground"
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Email Address"
              className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-foreground"
            />
          </div>
          <div>
            <select
              name="course"
              value={formData.course}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-foreground"
            >
              <option value="">Select Course Interest</option>
              {courses.map((course) => (
                <option key={course} value={course}>
                  {course}
                </option>
              ))}
            </select>
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground py-6"
          >
            {isSubmitting ? "Booking..." : "Book Free Demo Class"}
          </Button>

          {/* Benefits */}
          <div className="pt-4 space-y-2">
            {[
              "No credit card required",
              "Get personalized career counseling",
              "Learn about scholarship options",
            ].map((benefit) => (
              <div key={benefit} className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle className="h-4 w-4 text-accent" />
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </form>
      </div>
    </div>
  );
};

export default DemoModal;
