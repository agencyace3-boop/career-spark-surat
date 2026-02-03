import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const BusinessServices = () => {
  return (
    <section id="business" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content - Image */}
          <div className="relative order-2 lg:order-1">
            <div className="rounded-2xl overflow-hidden shadow-elevated">
              <img
                src="/images/business-services.jpg"
                alt="Business consulting and digital strategy"
                className="w-full h-[450px] object-cover"
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="order-1 lg:order-2">
            <span className="inline-block bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Our Services For
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Businesses
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              From building your online presence to driving targeted traffic and boosting conversions, we provide a full suite of digital marketing services tailored to your business needs. Let us help you grow, reach more customers, and achieve your business goals.
            </p>

            <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
              Our Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessServices;
