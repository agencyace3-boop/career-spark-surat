import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const JoinCTA = () => {
  return (
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <h2 className="text-2xl md:text-3xl font-bold text-secondary-foreground text-center md:text-left">
            Join Best Digital Marketing Institute In Surat
          </h2>
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground whitespace-nowrap"
          >
            Reserve Your Spot!
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default JoinCTA;
