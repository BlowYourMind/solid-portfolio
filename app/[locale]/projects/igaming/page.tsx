import ProjectDescriptionCard from "@/components/ProjectDescriptionCard";
import SkillsList from "@/components/SkillsList";
import { IGAMING_PROJECTS, IGAMING_SKILLS } from "@/config/projects";
import { Code } from "lucide-react";
import { useTranslations } from "next-intl";

const IgamingPage = () => {
  const t = useTranslations("Igaming");
  return (
    <div className="min-h-screen text-foreground p-2 md:p-6 mt-20">
      <div className="max-w-8xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-sans text-start font-bold text-foreground mb-4">
            {t("hero_title")}
          </h1>
          <p className="text-base text-start text-muted-foreground mb-8">
            {t("hero_subtext")}
          </p>
        </div>
        <div className="mb-16">
          <div className="grid md:grid-cols-1 gap-8">
            {IGAMING_PROJECTS.map((project, index) => (
              <ProjectDescriptionCard t={t} key={index} project={project} />
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-sans font-bold text-foreground mb-8 flex items-center">
            <Code className="w-8 h-8 mr-3 text-chart-3" />
            {t("tehnical_expertise")}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {IGAMING_SKILLS.map((skill, index) => (
              <SkillsList t={t} skill={skill} key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default IgamingPage;
