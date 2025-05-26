import React from "react";
import { Code } from "lucide-react";
import { useTranslations } from "next-intl";
import ProjectDescriptionCard from "./ProjectDescriptionCard";
import SkillsList from "./SkillsList";
import { ECOMMERCE_PROJECTS, ECOMMERCE_SKILLS } from "@/config/projects";

const EcommerceMain = () => {
  const t = useTranslations("Ecommerce");
  return (
    <div className="min-h-screen text-foreground p-2 md:p-6 mt-20">
      <div className="max-w-8xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-sans text-start font-bold text-foreground mb-4">
            {t("ecommerce_projects_title")}
          </h1>
        </div>
        <div className="mb-16">
          <div className="grid md:grid-cols-1 gap-8">
            {ECOMMERCE_PROJECTS.map((project, index) => (
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
            {ECOMMERCE_SKILLS.map((skill, index) => (
              <SkillsList t={t} skill={skill} key={index} />
            ))}
          </div>
        </div>
        <div className="text-center border border-border rounded-xl p-4 md:p-8 shadow-feature-card">
          <h2 className="text-2xl font-sans font-bold text-foreground mb-4">
            {t("proven_impact")}
          </h2>
          <p className="text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            {t("proven_impact_desc")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default EcommerceMain;
