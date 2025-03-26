"use client";
import ProjectCard from "./ProjectCard";
import { motion } from "motion/react";

interface ProjectData {
  name: string;
  links: string[];
}
const MainPageProjects = () => {
  const PROJECTS: ProjectData[] = [
    {
      name: "ecomerce",
      links: ["palami.casa", "buysellvouchers.com"],
    },
    {
      name: "i_gambling",
      links: ["palami.casa", "buysellvouchers.com"],
    },
    {
      name: "backend_related",
      links: ["palami.casa", "buysellvouchers.com"],
    },
  ];
  return (
    <div className="max-w-5xl w-full mx-auto flex flex-col gap-4">
      <h2 className="text-3xl font-bold text-center">Projects</h2>
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 0.6,
        }}
        className="grid grid-cols-3 gap-10 mt-6"
      >
        {PROJECTS.map((projectData: ProjectData, index: number) => (
          <ProjectCard projectDetails={projectData} key={index} />
        ))}
      </motion.div>
    </div>
  );
};
export default MainPageProjects;
