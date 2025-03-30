import {
  FavoriteBooks,
  FavoriteSongs,
  HeaderLinks,
  SocialLinks,
  TechStackLinks,
} from "@/interfaces/links";
import {
  SITE_LINKEDIN_URL,
  SITE_GITHUB_URL,
  SITE_INSTAGRAM_URL,
  SITE_TELEGRAM_URL,
  SITE_SPOTIFY_URL,
  FAVORITE_SONG_1,
  FAVORITE_SONG_2,
  FAVORITE_SONG_3,
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
} from "@icons-pack/react-simple-icons";
import {
  FlameIcon,
  MessageCircleIcon,
  MonitorIcon,
  UserCircleIcon,
} from "lucide-react";
import { Linkedin } from "lucide-react";
import favSongLogo1 from "@/public/favorite-song-album.jpeg";
import favSongLogo2 from "@/public/star-shopping.jpeg";
import favSongLogo3 from "@/public/boogie-wonderland.jpeg";
import favBookLogo1 from "@/public/dune-img.jpg";
import favBookLogo2 from "@/public/hitchhicker-guide.jpeg";
import favBookLogo3 from "@/public/fahrenheit-451.webp";

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

export const FAVORITE_SONGS: FavoriteSongs = [
  {
    href: FAVORITE_SONG_1,
    name: "Idea 22",
    author: "Gibran Alcocer",
    img: favSongLogo1,
  },
  {
    href: FAVORITE_SONG_2,
    name: "Star Shopping",
    author: "Lil Peep",
    img: favSongLogo2,
  },
  {
    href: FAVORITE_SONG_3,
    name: "Boogie Wonderland",
    author: "Earth, Wind & Fire",
    img: favSongLogo3,
  },
];

export const FAVORITE_BOOKS: FavoriteBooks = [
  {
    name: "Dune",
    author: "Gerbert Frank",
    img: favBookLogo1,
  },
  {
    name: "Hitchhiker’s Guide to the galaxy",
    author: "Douglas Adams",
    img: favBookLogo2,
  },
  {
    name: "451 fahrenheit",
    author: "Ray Bradbury",
    img: favBookLogo3,
  },
];
