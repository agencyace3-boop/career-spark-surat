import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Award, Users, BookOpen, Target, CheckCircle, Linkedin, Twitter, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
const milestones = [{
  year: "2019",
  title: "Founded",
  description: "Surat Digital Marketing School was established with a vision to provide practical digital marketing education"
}, {
  year: "2020",
  title: "500+ Students",
  description: "Crossed the milestone of training 500 students in digital marketing"
}, {
  year: "2021",
  title: "Google Partner",
  description: "Became an official Google Partner certified training institute"
}, {
  year: "2022",
  title: "Online Launch",
  description: "Launched comprehensive online training programs"
}, {
  year: "2023",
  title: "2000+ Alumni",
  description: "Our alumni network grew to 2000+ professionals across India"
}, {
  year: "2024",
  title: "Industry Leader",
  description: "Recognized as the leading digital marketing institute in Gujarat"
}];
const values = [{
  icon: Target,
  title: "Practical Learning",
  description: "We believe in learning by doing. Every course includes real projects with actual budgets."
}, {
  icon: Users,
  title: "Student Success",
  description: "Our success is measured by your success. We're committed to your career growth."
}, {
  icon: Award,
  title: "Industry Excellence",
  description: "We maintain the highest standards in curriculum and teaching quality."
}, {
  icon: BookOpen,
  title: "Continuous Learning",
  description: "Digital marketing evolves rapidly. We keep our curriculum updated with latest trends."
}];
const team = [{
  name: "Vikaas Parekh",
  role: "Founder & Lead Trainer",
  image: "/images/team/vikaas.jpg",
  description: "10+ years of experience in digital marketing. Trained 3000+ professionals. Google & Meta certified expert.",
  linkedin: "#",
  twitter: "#"
}, {
  name: "Riya Sharma",
  role: "SEO Specialist & Trainer",
  image: "/images/team/riya.jpg",
  description: "SEO expert with experience in ranking 500+ websites. Specializes in technical SEO and content strategy.",
  linkedin: "#",
  twitter: "#"
}, {
  name: "Amit Patel",
  role: "PPC & Analytics Expert",
  image: "/images/testimonials/amit.jpg",
  description: "Google Ads certified with ₹50Cr+ managed ad spend. Expert in conversion optimization and data analytics.",
  linkedin: "#",
  twitter: "#"
}, {
  name: "Priya Desai",
  role: "Social Media Strategist",
  image: "/images/team/priya.jpg",
  description: "Social media expert who has managed campaigns for 200+ brands. Meta Blueprint certified professional.",
  linkedin: "#",
  twitter: "#"
}];
const certifications = ["Google Partner Certified", "Meta Partner"];
const About = () => {
  return <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-20 bg-primary overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 right-10 w-64 h-64 bg-secondary rounded-full blur-3xl" />
            <div className="absolute bottom-10 left-10 w-96 h-96 bg-accent rounded-full blur-3xl" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block bg-secondary/20 text-secondary px-4 py-2 rounded-full text-sm font-semibold mb-4">
                About Surat DMS
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
                Empowering Careers Through <span className="text-secondary">Digital Excellence</span>
              </h1>
              <p className="text-lg text-primary-foreground/80">
                Since 2014, Surat Digital Marketing School has been Gujarat's premier destination 
                for practical digital marketing education. We don't just teach—we transform careers.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  Our Story
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  From Vision to <span className="text-secondary">Reality</span>
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Surat Digital Marketing School was founded in 2019 by Vikaas Parekh, a digital marketing veteran 
                  who saw a gap between theoretical education and practical industry needs. 
                </p>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  What started as a small training center in Surat has grown into Gujarat's 
                  most trusted digital marketing institute. With over 2,000 successful alumni, 
                  95% placement rate, and partnerships with leading companies, we've proven 
                  that practical education creates real results.
                </p>

                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="bg-muted p-6 rounded-2xl">
                    <h3 className="text-xl font-bold text-foreground mb-2">Our Mission</h3>
                    <p className="text-sm text-muted-foreground">
                      To provide affordable, practical digital marketing education that transforms 
                      careers and empowers businesses.
                    </p>
                  </div>
                  <div className="bg-muted p-6 rounded-2xl">
                    <h3 className="text-xl font-bold text-foreground mb-2">Our Vision</h3>
                    <p className="text-sm text-muted-foreground">
                      To become India's most trusted digital marketing training institute with 
                      global recognition.
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <img src="/images/about/students-1.jpg" alt="Students learning" className="rounded-2xl shadow-elevated" />
                    <img src="/images/about/classroom.jpg" alt="Classroom session" className="rounded-2xl shadow-elevated" />
                  </div>
                  <div className="space-y-4 pt-8">
                    <img src="/images/hero-bg.jpg" alt="Team collaboration" className="rounded-2xl shadow-elevated" />
                    <img src="/images/why-choose.jpg" alt="Training session" className="rounded-2xl shadow-elevated" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <span className="inline-block bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-semibold mb-4">
                Our Values
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                What We Stand For
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => <div key={value.title} className="bg-card p-8 rounded-2xl shadow-card hover:shadow-elevated transition-all hover:-translate-y-1 text-center">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>)}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
                Our Journey
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Milestones That Define Us
              </h2>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="relative">
                {/* Timeline Line - hidden on mobile */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary via-secondary to-accent" />
                
                {/* Mobile Timeline Line */}
                <div className="md:hidden absolute left-4 top-0 h-full w-1 bg-gradient-to-b from-primary via-secondary to-accent" />
                
                {milestones.map((milestone, index) => (
                  <div 
                    key={milestone.year} 
                    className={`relative flex items-center mb-8 md:mb-12 ${index % 2 === 0 ? "md:justify-start" : "md:justify-end"} justify-start`}
                  >
                    {/* Mobile layout */}
                    <div className="md:hidden pl-12 w-full">
                      <div className="bg-card p-4 rounded-2xl shadow-card border border-border/50">
                        <span className="inline-block bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-bold mb-2">
                          {milestone.year}
                        </span>
                        <h3 className="text-lg font-bold text-foreground mb-2">{milestone.title}</h3>
                        <p className="text-sm text-muted-foreground">{milestone.description}</p>
                      </div>
                    </div>
                    
                    {/* Desktop layout */}
                    <div className={`hidden md:block w-5/12 ${index % 2 === 0 ? "text-right pr-8" : "text-left pl-8"}`}>
                      <div className="bg-card p-6 rounded-2xl shadow-card border border-border/50">
                        <span className="inline-block bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-bold mb-2">
                          {milestone.year}
                        </span>
                        <h3 className="text-lg font-bold text-foreground mb-2">{milestone.title}</h3>
                        <p className="text-sm text-muted-foreground">{milestone.description}</p>
                      </div>
                    </div>
                    
                    {/* Center Dot - Desktop */}
                    <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-secondary border-4 border-background" />
                    
                    {/* Left Dot - Mobile */}
                    <div className="md:hidden absolute left-2 transform w-4 h-4 rounded-full bg-secondary border-4 border-background" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-20 bg-muted">
          
        </section>

        {/* Certifications */}
        <section className="py-20 bg-primary">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
                Our Certifications & Partnerships
              </h2>
            </div>
            <div className="flex flex-wrap justify-center gap-6">
              {certifications.map(cert => <div key={cert} className="bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 px-6 py-4 rounded-xl">
                  <span className="text-primary-foreground font-medium">{cert}</span>
                </div>)}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Ready to Start Your Journey?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Join our next batch and transform your career with practical digital marketing skills.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/courses">
                  <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                    Explore Courses
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/5">
                    Book Free Demo
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>;
};
export default About;