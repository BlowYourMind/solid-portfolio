"use client";
import MainPageProjects from "@/components/MainPageProjects";
import ProjectsHeroSection from "@/components/ProjectsHeroSection";

const ProjectsPage = () => {
  return (
    <div className="max-w-5xl mx-auto flex items-center justify-between my-10">
      <div className="flex gap-6 flex-col w-full">
        <ProjectsHeroSection />
        <MainPageProjects />
      </div>
    </div>
  );
};

export default ProjectsPage;
