export interface Project {
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

export type Projects = Array<Project>;

export interface Skill {
  category: string;
  items: string[];
  icon: React.ReactNode;
}

export type Skills = Array<Skill>;
