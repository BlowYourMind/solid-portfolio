import EcommerceMain from "@/components/EcomerceProjects";
import ProjectsHeroSection from "@/components/ProjectsHeroSection";

const EcommercePage = () => {
  return (
    <div className="max-w-5xl mx-auto flex items-center justify-between my-10">
      <div className="flex gap-6 flex-col w-full">
        <ProjectsHeroSection />
        <EcommerceMain />
      </div>
    </div>
  );
};
export default EcommercePage;
