import {
  Code,
  Users,
  TrendingUp,
  Layers,
  ShoppingCart,
  Wrench,
} from "lucide-react";

export const ECOMMERCE_PROJECTS = [
  {
    name: "Palami.com",
    role: "palami_role",
    company: "palami_company",
    period: "palami_period",
    status: "palami_status",
    description: "palami_desc",
    achievements: ["achievement_palami_1", "achievement_palami_2"],
    technologies: ["Shopify", "Liquid", "JavaScript", "CSS3", "HTML5"],
    link: "https://palami.com/",
    impact: "High",
  },
  {
    name: "BuySellVouchers.com",
    role: "buysellvouchers_role",
    company: "buysellvouchers_company",
    period: "buysellvouchers_period",
    status: "buysellvouchers_status",
    description: "buysellvouchers_desc",
    achievements: [
      "achievement_bsv_1",
      "achievement_bsv_3",
      "achievement_bsv_4",
      "achievement_bsv_5",
    ],
    technologies: [
      "Next.js 15",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Strapi CMS",
      "Docker",
    ],
    link: "https://www.buysellvouchers.com/",
    impact: "High",
  },
];

export const ECOMMERCE_SKILLS = [
  {
    category: "skill_frontend_technologies",
    items: [
      "Next.js 15",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "JavaScript ES6+",
      "CI/CD Pipelines",
    ],
    icon: <Code className="w-5 h-5" />,
  },
  {
    category: "skill_ecommerce_platforms",
    items: ["Shopify", "Custom E-commerce Solutions", "B2B Platforms"],
    icon: <ShoppingCart className="w-5 h-5" />,
  },
  {
    category: "skill_performance_seo",
    items: [
      "Server-Side Rendering",
      "Core Web Vitals Optimization",
      "SEO Enhancement",
      "Performance Auditing",
    ],
    icon: <TrendingUp className="w-5 h-5" />,
  },
];
