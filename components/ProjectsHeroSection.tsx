import { useTranslations } from "next-intl";

const ProjectsHeroSection = () => {
  const t = useTranslations("Projects");
  return (
    <div className="w-full flex flex-col pb-15 gap-6">
      <h1 className="text-5xl text-center md:text-start md:text-6xl font-bold leading-tight mb-4">
        {t("hero_title")}
      </h1>
      <p className="text-base text-center md:text-start text-muted-foreground mb-8">
        {t("hero_subtext")}
      </p>
    </div>
  );
};
export default ProjectsHeroSection;
