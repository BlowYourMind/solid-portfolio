import { useTranslations } from "next-intl";
import { ArrowRight } from "lucide-react";

interface ProjectDetails {
  name: string;
  links: string[];
}
const ProjectCard = ({
  projectDetails,
}: {
  projectDetails: ProjectDetails;
}) => {
  const t = useTranslations("ProjectCard");
  return (
    <div className="shadow-feature-card relative flex h-60 flex-col gap-4 overflow-hidden rounded-xl p-4 lg:p-6">
      <h3 className="text-xl font-bold">{t(projectDetails.name)}</h3>
      <span>{t(`${projectDetails.name}_description`)}</span>
      <button className="flex absolute cursor-pointer hover:bg-accent lg:right-6 px-2 py-1 rounded-sm bottom-4 right-4 lg:bottom-6 items-center gap-1 text-primary">
        <span className="text-sm text-base text-foreground">
          {t("read_more")}
        </span>
        <ArrowRight className="size-4" />
      </button>
    </div>
  );
};
export default ProjectCard;
