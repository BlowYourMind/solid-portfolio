export interface EcommerceProject {
  name: string;
  role: string;
  company: string;
  period: string;
  status: string;
  description: string;
  achievements: string[];
  technologies: string[];
  link: string;
  impact: string;
}

export type EcommerceProjects = Array<EcommerceProject>;

export interface EcommerceSkill {
  category: string;
  items: string[];
  icon: React.ReactNode;
}

export type EcommerceSkills = Array<EcommerceSkill>;
