import { CheckCircle, Award, Target, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const keypoints = [
  {
    icon: Award,
    title: "Industry-Certified Training",
    description: "Recognized certifications from Google, Meta, and HubSpot",
  },
  {
    icon: Target,
    title: "Practical Learning Approach",
    description: "Work on 15+ real projects with actual budgets",
  },
  {
    icon: Users,
    title: "Expert Mentorship",
    description: "Learn from professionals with 10+ years experience",
  },
];

const achievements = [
  "Google Partner Certified",
  "Meta Partner",
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <span className="inline-block bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-semibold mb-4">
              About Surat DMS
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Gujarat's Premier <span className="text-secondary">Digital Marketing</span> Training Institute
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Since 2014, Surat Digital Marketing School has been at the forefront of 
              digital marketing education in Gujarat. We've trained over 3,000 professionals 
              who now work at top companies across India and abroad.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Our mission is simple: provide practical, industry-relevant training that 
              transforms careers. We don't just teach theory—we ensure our students gain 
              real-world experience through live projects, internships, and hands-on campaigns.
            </p>

            {/* Key Points */}
            <div className="space-y-4 mb-8">
              {keypoints.map((point) => (
                <div key={point.title} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <point.icon className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{point.title}</h3>
                    <p className="text-sm text-muted-foreground">{point.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Achievements */}
            <div className="bg-muted p-6 rounded-2xl mb-8">
              <h4 className="font-semibold text-foreground mb-4">Our Certifications & Accreditations</h4>
              <div className="grid grid-cols-2 gap-3">
                {achievements.map((achievement) => (
                  <div key={achievement} className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                    <span className="text-sm text-foreground">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link to="/about">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Learn More About Us
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/5">
                  Schedule a Visit
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Content - Images */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden shadow-elevated">
                  <img
                    src="/images/about/training.jpg"
                    alt="Digital marketing training session"
                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-elevated">
                  <img
                    src="/images/about/campaigns.jpg"
                    alt="Students working on marketing campaigns"
                    className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="rounded-2xl overflow-hidden shadow-elevated">
                  <img
                    src="/images/courses/business-training.jpg"
                    alt="Expert mentor guiding students"
                    className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-elevated">
                  <img
                    src="/images/courses/agency-setup.jpg"
                    alt="Marketing strategy presentation"
                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-6 py-4 rounded-2xl shadow-elevated">
              <div className="text-center">
                <div className="text-3xl font-bold">10+</div>
                <div className="text-sm">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
