import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const keypoints = [
  "Online and In-Person Classes",
  "Real-Time Practical Curriculum",
  "Access to Professional Mentors",
  "Money-back guarantee",
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              <span className="text-secondary">Boost</span> Your Digital Marketing Expertise with us.
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              We are most affordable and experienced training center in Surat. Here are some Keypoints which makes us dynamic.
            </p>

            <ul className="space-y-4 mb-8">
              {keypoints.map((point) => (
                <li key={point} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="h-4 w-4 text-secondary-foreground" />
                  </div>
                  <span className="font-medium text-foreground">{point}</span>
                </li>
              ))}
            </ul>

            <Button size="lg" className="bg-primary hover:bg-primary/90">
              About Us
            </Button>
          </div>

          {/* Right Content - Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-elevated">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Student learning digital marketing"
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
