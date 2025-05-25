import { useTranslations } from "next-intl";
import ProjectCard from "./ProjectCard";
import { motion } from "motion/react";

interface ProjectData {
  name: string;
  link: string;
}
const MainPageProjects = () => {
  const t = useTranslations("HomePage");
  const PROJECTS: ProjectData[] = [
    {
      name: "ecommerce",
      link: "/projects/ecommerce",
    },
    {
      name: "i_gambling",
      link: "/projects/ecommerce",
    },
    {
      name: "backend_related",
      link: "/projects/ecommerce",
    },
  ];
  return (
    <div className="max-w-5xl w-full mx-auto flex flex-col gap-4">
      <motion.div
        initial={{ x: 20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ ease: "easeOut" }}
        className="text-3xl font-bold text-center"
      >
        {t("layout.projects")}
      </motion.div>
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
        className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-6"
      >
        {PROJECTS.map((projectData: ProjectData, index: number) => (
          <ProjectCard projectDetails={projectData} key={index} />
        ))}
      </motion.div>
    </div>
  );
};
export default MainPageProjects;
