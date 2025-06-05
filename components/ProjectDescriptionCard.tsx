import { Project } from "@/interfaces/projects";
import { ExternalLink, Zap } from "lucide-react";
import { useTranslations } from "next-intl";

const ProductDescriptionCard = ({
  project,
  t,
}: {
  project: Project;
  t: any;
}) => {
  return (
    <div className="card group">
      <div className="card__content">
        <div className="card__front">
          <div className=" border border-border rounded-xl p-4 md:p-8 shadow-feature-card transition-all duration-300">
            <div className="flex flex-col lg:flex-row lg:items-start gap-6">
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-4 mb-4">
                  <h3 className="text-2xl font-sans font-bold text-card-foreground">
                    {project.name}
                  </h3>
                  <span className="px-3 py-1 rounded-full text-sm font-medium bg-primary text-primary-foreground">
                    {t(project.status)}
                  </span>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4 ml-1" />
                    </a>
                  )}
                </div>

                <div className="flex flex-wrap gap-4 mb-4 text-sm text-muted-foreground">
                  <span className="font-semibold text-primary">
                    {t(project.role)}
                  </span>
                  <span>•</span>
                  <span>{t(project.company)}</span>
                  <span>•</span>
                  <span>{t(project.period)}</span>
                </div>

                <p className="text-card-foreground mb-6 leading-relaxed">
                  {t(project.description)}
                </p>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-card-foreground mb-3 flex items-center">
                    <Zap className="w-5 h-5 mr-2 text-chart-2" />
                    {t("key_achivements")}
                  </h4>
                  <ul className="space-y-2">
                    {project.achievements.map(
                      (achievement: string, index: number) => (
                        <li
                          key={index}
                          className="text-card-foreground flex items-start"
                        >
                          <span className="text-chart-1 mr-2 mt-1">•</span>
                          {t(achievement)}
                        </li>
                      )
                    )}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech: string, index: number) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm border border-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductDescriptionCard;
