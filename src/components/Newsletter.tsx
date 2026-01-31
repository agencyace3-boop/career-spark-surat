import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const Newsletter = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Successfully Subscribed!",
      description: "You'll receive our latest updates and digital marketing tips.",
    });
    
    setEmail("");
    setIsSubmitting(false);
  };

  return (
    <section className="py-16 bg-primary relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-64 h-64 bg-secondary rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block bg-secondary/20 text-secondary px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Stay Updated
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Get Free Digital Marketing Tips
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8">
            Subscribe to our newsletter and receive weekly insights, industry trends, 
            and exclusive tips from our experts directly in your inbox.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter your email address"
              className="flex-1 px-6 py-4 rounded-xl border-0 bg-primary-foreground text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-secondary outline-none"
            />
            <Button
              type="submit"
              disabled={isSubmitting}
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8 py-4 rounded-xl whitespace-nowrap"
            >
              {isSubmitting ? (
                "Subscribing..."
              ) : (
                <>
                  Subscribe
                  <Send className="ml-2 h-5 w-5" />
                </>
              )}
            </Button>
          </form>

          <div className="flex flex-wrap justify-center gap-6 mt-8">
            {[
              "Weekly Expert Tips",
              "Industry Updates",
              "Exclusive Offers",
              "Career Guidance",
            ].map((benefit) => (
              <div key={benefit} className="flex items-center gap-2 text-primary-foreground/80">
                <CheckCircle className="h-4 w-4 text-secondary" />
                <span className="text-sm">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
