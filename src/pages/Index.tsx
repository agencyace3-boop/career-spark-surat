import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ToolsMarquee from "@/components/ToolsMarquee";
import CourseCategories from "@/components/CourseCategories";
import PopularCourses from "@/components/PopularCourses";
import Testimonials from "@/components/Testimonials";
import FeaturesGrid from "@/components/FeaturesGrid";
import AboutSection from "@/components/AboutSection";
import CareerCTA from "@/components/CareerCTA";
import WhyChooseSection from "@/components/WhyChooseSection";
import BusinessServices from "@/components/BusinessServices";
import ResourcesNews from "@/components/ResourcesNews";
import FAQ from "@/components/FAQ";
import JoinCTA from "@/components/JoinCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <ToolsMarquee />
        <CourseCategories />
        <PopularCourses />
        <Testimonials />
        <FeaturesGrid />
        <AboutSection />
        <CareerCTA />
        <WhyChooseSection />
        <BusinessServices />
        <ResourcesNews />
        <FAQ />
        <JoinCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
