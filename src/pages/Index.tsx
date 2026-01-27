import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeaturedPrograms from "@/components/FeaturedPrograms";
import LearningCategories from "@/components/LearningCategories";
import WhyChooseUs from "@/components/WhyChooseUs";
import ImpactNumbers from "@/components/ImpactNumbers";
import SuccessStories from "@/components/SuccessStories";
import ForBusiness from "@/components/ForBusiness";
import FreeResources from "@/components/FreeResources";
import Blog from "@/components/Blog";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <FeaturedPrograms />
        <LearningCategories />
        <WhyChooseUs />
        <ImpactNumbers />
        <SuccessStories />
        <ForBusiness />
        <FreeResources />
        <Blog />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
