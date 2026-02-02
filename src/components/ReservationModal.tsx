import { useState } from "react";
import { X, GraduationCap, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
  courseName?: string;
}

const ReservationModal = ({ isOpen, onClose, courseName = "Digital Marketing Course" }: ReservationModalProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Create WhatsApp message
    const phoneNumber = "919924707478";
    const whatsappMessage = `Hi! I'm interested in enrolling for *${courseName}*

*Name:* ${formData.name}
*Phone:* ${formData.phone}
*Email:* ${formData.email}
${formData.message ? `*Message:* ${formData.message}` : ""}

Please share more details about the course.`;

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    toast({
      title: "Redirecting to WhatsApp!",
      description: "Complete your enrollment by chatting with us.",
    });

    setFormData({ name: "", phone: "", email: "", message: "" });
    setIsSubmitting(false);
    onClose();

    // Redirect to WhatsApp
    window.open(whatsappUrl, "_blank");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
            <GraduationCap className="h-8 w-8 text-secondary" />
          </div>
          <h2 className="text-2xl font-bold text-primary-foreground mb-2">
            Reserve Your Spot
          </h2>
          <p className="text-primary-foreground/80 text-sm">
            {courseName}
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
              placeholder="Your Full Name *"
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
              placeholder="Phone Number *"
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
              placeholder="Email Address *"
              className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-foreground"
            />
          </div>
          <div>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Any specific questions? (Optional)"
              rows={3}
              className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-foreground resize-none"
            />
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground py-6 text-lg font-semibold"
          >
            {isSubmitting ? "Submitting..." : "Continue on WhatsApp"}
          </Button>

          {/* Benefits */}
          <div className="pt-4 space-y-2">
            {[
              "Get instant response on WhatsApp",
              "Discuss course details with our team",
              "Learn about payment options & EMI",
            ].map((benefit) => (
              <div key={benefit} className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle className="h-4 w-4 text-secondary" />
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </form>
      </div>
    </div>
  );
};

export default ReservationModal;
