import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const faqs = [
  {
    question: "What is the duration of the digital marketing course?",
    answer: "Our courses range from 15 days to 45 days depending on the program. The comprehensive Advanced Digital Marketing course is 45 days, while specialized courses like Facebook Chatbot or YouTube Marketing are 15 days. We offer flexible batch timings including weekday and weekend options.",
  },
  {
    question: "Do you provide placement assistance after course completion?",
    answer: "Yes! We provide 100% placement assistance to all our students. Our dedicated placement cell works with 200+ hiring partners including digital agencies, startups, and established companies. We also help students with resume building, interview preparation, and internship opportunities.",
  },
  {
    question: "Can I take the course online or is it only in-person?",
    answer: "We offer both online and in-person training options. Our online courses include live interactive sessions, recorded lectures for revision, and the same practical projects as our classroom training. You can choose the format that suits your schedule best.",
  },
  {
    question: "What certifications will I receive after completing the course?",
    answer: "Upon successful completion, you'll receive our industry-recognized Surat DMS certification. Additionally, we prepare you for and help you obtain certifications from Google (Google Ads, Analytics), Meta (Blueprint), HubSpot, and other industry platforms at no extra cost.",
  },
  {
    question: "Do you offer discounts for students or groups?",
    answer: "Yes, we offer special discounts for students (up to 20% off with valid student ID), group enrollments (3+ people), and early bird registrations. We also have EMI options and scholarship programs for deserving candidates. Contact us to learn about current offers.",
  },
  {
    question: "What are the prerequisites to join your courses?",
    answer: "There are no strict prerequisites for most of our courses. Basic computer knowledge and internet familiarity are helpful. Our beginner-friendly courses start from scratch, while advanced courses are suitable for those with some marketing background. We'll help you choose the right course during counseling.",
  },
  {
    question: "Do you provide hands-on training with real projects?",
    answer: "Absolutely! Practical training is our core strength. Every course includes 15+ live projects where you'll work on real campaigns with actual budgets. You'll manage Google Ads campaigns, run social media marketing, perform SEO audits, and more—building a portfolio you can show employers.",
  },
  {
    question: "What makes Surat DMS different from other institutes?",
    answer: "Our differentiators include: 10+ years of industry experience, trainers from Fortune 500 companies, 95% placement rate, live project experience with real budgets, lifetime access to course materials, post-course support through our alumni network, and affordable pricing with EMI options.",
  },
];

const FAQ = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Got Questions?
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Frequently Asked <span className="text-secondary">Questions</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Find answers to common questions about our courses, placement, and training methodology.
            </p>
          </div>

          {/* Accordion */}
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card rounded-2xl border border-border/50 px-6 shadow-card"
              >
                <AccordionTrigger className="text-left text-base md:text-lg font-semibold hover:text-primary py-6 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* CTA */}
          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              Still have questions? We're here to help!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact">
                <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                  Talk to Counselor
                </Button>
              </Link>
              <a href="tel:+919924707478">
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/5">
                  Call +91 99247 07478
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
