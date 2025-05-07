import AboutHeroSection from "@/components/AboutHeroSection";
import AboutRoadMap from "@/components/AboutRoadMap";

const AboutPage = () => {
  return (
    <div className="max-w-5xl mx-auto flex items-center justify-between my-10">
      <div className="flex gap-6 flex-col">
        <AboutHeroSection />
        <AboutRoadMap />
      </div>
    </div>
  );
};

export default AboutPage;
