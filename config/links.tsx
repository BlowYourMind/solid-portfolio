import { HeaderLinks, SocialLinks, TechStackLinks } from "@/interfaces/links";
import {
  SITE_LINKEDIN_URL,
  SITE_GITHUB_URL,
  SITE_INSTAGRAM_URL,
  SITE_TELEGRAM_URL,
  SITE_SPOTIFY_URL,
} from "@/lib/constants";
import {
  SiAngular,
  SiCrowdin,
  SiCss,
  SiDocker,
  SiFigma,
  SiGithub,
  SiGitlab,
  SiHtml5,
  SiInstagram,
  SiJavascript,
  SiJira,
  SiKeystone,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiPixiv,
  SiReact,
  SiShadcnui,
  SiShopify,
  SiSpotify,
  SiStrapi,
  SiTailwindcss,
  SiTelegram,
  SiTypescript,
  SiX,
  SiYoutube,
} from "@icons-pack/react-simple-icons";
import {
  FlameIcon,
  MessageCircleIcon,
  MonitorIcon,
  UserCircleIcon,
} from "lucide-react";
import { Linkedin } from "lucide-react";

export const HEADER_LINKS: HeaderLinks = [
  {
    icon: <UserCircleIcon className="size-3.5" />,
    href: "/about",
    key: "about",
  },
  {
    icon: <FlameIcon className="size-3.5" />,
    href: "/projects",
    key: "projects",
  },
  {
    icon: <MessageCircleIcon className="size-3.5" />,
    href: "/reviews",
    key: "reviews",
  },
  {
    icon: <MonitorIcon className="size-3.5" />,
    href: "/contact",
    key: "contact",
  },
];

export const SOCIAL_LINKS: SocialLinks = [
  {
    href: SITE_GITHUB_URL,
    title: "GitHub",
    icon: SiGithub,
  },
  {
    href: SITE_LINKEDIN_URL,
    title: "Linkedin",
    icon: Linkedin,
  },
  {
    href: SITE_INSTAGRAM_URL,
    title: "Instagram",
    icon: SiInstagram,
  },
  {
    href: SITE_TELEGRAM_URL,
    title: "Telegram",
    icon: SiTelegram,
  },
  {
    href: SITE_SPOTIFY_URL,
    title: "Spotify",
    icon: SiSpotify,
  },
];

export const TECH_ICONS: TechStackLinks = [
  { name: "javascript", icon: SiJavascript },
  { name: "typescript", icon: SiTypescript },
  { name: "HTML", icon: SiHtml5 },
  { name: "css", icon: SiCss },
  { name: "Keystone JS", icon: SiKeystone },
  { name: "Shadcn UI", icon: SiShadcnui },
  { name: "crowdin", icon: SiCrowdin },
  { name: "Next.JS", icon: SiNextdotjs },
  { name: "React", icon: SiReact },
  { name: "Angular", icon: SiAngular },
  { name: "Strapi", icon: SiStrapi },
  { name: "Gitlab", icon: SiGitlab },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "typescript", icon: SiTypescript },
  { name: "Figma", icon: SiFigma },
  { name: "Docker", icon: SiDocker },
  { name: "node.js", icon: SiNodedotjs },
  { name: "pixi.js", icon: SiPixiv },
  { name: "nest.js", icon: SiNestjs },
  { name: "shopify", icon: SiShopify },
];
