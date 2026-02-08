import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const contactInfo = [{
  icon: MapPin,
  title: "Visit Our Campus",
  details: ["Green signature, 142, opp. THE LEGEND", "nr. Prime shoppers, Vesu", "Surat, Gujarat 395007"]
}, {
  icon: Phone,
  title: "Call Us",
  details: ["+91 95588 66993"]
}, {
  icon: Mail,
  title: "Email Us",
  details: ["Vikasparekh@live.com"]
}, {
  icon: Clock,
  title: "Working Hours",
  details: ["Monday - Saturday", "10:00 AM - 7:00 PM", "Sunday: Closed"]
}];
const courses = ["Advanced Digital Marketing", "SEO Strategy", "Social Media Marketing", "Google Ads (PPC)", "E-commerce Solutions", "Agency Setup Training", "Website Development", "Other"];

const Contact = () => {
  const {
    toast
  } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { data, error } = await supabase.functions.invoke('send-form-notification', {
        body: {
          formType: 'contact',
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          course: formData.course || undefined,
          message: formData.message || undefined,
        },
      });

      if (error) throw error;

      toast({
        title: "Message Sent Successfully!",
        description: "Our team will contact you within 24 hours."
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        course: "",
        message: ""
      });
    } catch (error) {
      console.error('Error sending form:', error);
      toast({
        title: "Failed to send message",
        description: "Please try again or contact us directly via phone.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
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
                Get In Touch
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
                Let's Start Your <span className="text-secondary">Digital Journey</span>
              </h1>
              <p className="text-lg text-primary-foreground/80">
                Have questions about our courses? Want to book a free demo class? 
                We're here to help you take the first step towards a successful digital marketing career.
              </p>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Consultancy Card */}
              <div className="bg-card p-8 rounded-3xl shadow-elevated border border-border/50 hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">Digital Marketing Consultancy</h3>
                <p className="text-muted-foreground mb-4">
                  Get expert guidance to grow your business online. Our consultancy services include:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                    <span>Complete Digital Strategy Planning</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                    <span>Social Media Marketing Audits</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                    <span>SEO & Google Ads Optimization</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                    <span>E-commerce Growth Solutions</span>
                  </li>
                </ul>
              </div>

              {/* Branding Card */}
              <div className="bg-card p-8 rounded-3xl shadow-elevated border border-border/50 hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-secondary/10 rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">Branding & Creative Services</h3>
                <p className="text-muted-foreground mb-4">
                  Build a powerful brand identity that stands out. Our branding services include:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                    <span>Logo & Visual Identity Design</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                    <span>Social Media Creatives & Templates</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                    <span>Marketing Collateral Design</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                    <span>Brand Guidelines & Strategy</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>


        {/* Contact Form & Map */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-card p-8 md:p-10 rounded-3xl shadow-elevated border border-border/50">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                  Send Us a Message
                </h2>
                <p className="text-muted-foreground mb-8">
                  Fill out the form below and our counselor will get back to you within 24 hours.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Full Name *
                      </label>
                      <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-foreground" placeholder="Your full name" />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email Address *
                      </label>
                      <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-foreground" placeholder="your@email.com" />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                        Phone Number *
                      </label>
                      <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-foreground" placeholder="+91 XXXXX XXXXX" />
                    </div>
                    <div>
                      <label htmlFor="course" className="block text-sm font-medium text-foreground mb-2">
                        Course Interest
                      </label>
                      <select id="course" name="course" value={formData.course} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-foreground">
                        <option value="">Select a course</option>
                        {courses.map(course => <option key={course} value={course}>
                            {course}
                          </option>)}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Your Message
                    </label>
                    <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={4} className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-foreground resize-none" placeholder="Tell us about your learning goals or any questions you have..." />
                  </div>

                  <Button type="submit" disabled={isSubmitting} className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground py-6 text-base">
                    {isSubmitting ? <>Sending...</> : <>
                        Send Message
                        <Send className="ml-2 h-5 w-5" />
                      </>}
                  </Button>
                </form>

                {/* Quick Actions */}
                <div className="mt-8 pt-8 border-t border-border">
                  <p className="text-sm text-muted-foreground mb-4">Or reach us directly:</p>
                  <div className="flex flex-wrap gap-4">
                    <a href="tel:+919558866993" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors">
                      <Phone className="h-4 w-4" />
                      Call Now
                    </a>
                    <a href="mailto:Vikasparekh@live.com" className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-4 py-2 rounded-lg text-sm font-medium hover:bg-secondary/90 transition-colors">
                      <Mail className="h-4 w-4" />
                      Email Us
                    </a>
                  </div>
                </div>
              </div>

              {/* Map & Additional Info */}
              <div className="space-y-8">
                {/* Google Map */}
                <div className="rounded-3xl overflow-hidden shadow-elevated h-[400px]">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.0!2d72.7931!3d21.1544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04db8db8a3c31%3A0x8c6e5d3c6c5b5a5a!2sGreen%20Signature%2C%20Vesu%2C%20Surat%2C%20Gujarat%20395007!5e0!3m2!1sen!2sin!4v1" width="100%" height="100%" style={{
                  border: 0
                }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Surat Digital Marketing School Location" />
                </div>

                {/* Why Contact Us */}
                <div className="bg-card p-8 rounded-3xl shadow-card border border-border/50">
                  <h3 className="text-xl font-bold text-foreground mb-6">Why Contact Us?</h3>
                  <ul className="space-y-4">
                    {["Get personalized course recommendations", "Schedule a free demo class", "Learn about scholarship opportunities", "Discuss career counseling options", "Inquire about corporate training"].map(item => <li key={item} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>)}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>;
};
export default Contact;