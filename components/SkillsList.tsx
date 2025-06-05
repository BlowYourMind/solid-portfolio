import { Skill } from "@/interfaces/projects";

const SkillsList = ({ skill, t }: { skill: Skill; t: any }) => {
  return (
    <div className="card group">
      <div className="card__content">
        <div className="card__front">
          <div className="border border-border rounded-xl p-3 md:p-6 shadow-feature-card transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="text-primary mr-3">{skill.icon}</div>
              <h3 className="text-lg font-semibold text-card-foreground">
                {t(skill.category)}
              </h3>
            </div>
            <ul className="space-y-2">
              {skill.items.map((item: string, index: number) => (
                <li
                  key={index}
                  className="text-card-foreground text-sm flex items-center"
                >
                  <span className="text-accent mr-2">▸</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SkillsList;
