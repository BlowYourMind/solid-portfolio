import { IconType } from "@icons-pack/react-simple-icons";
import { ReactNode } from "react";

export interface HeaderLink {
  icon: ReactNode; // Use ReactNode instead of a specific icon type
  href: string;
  key: string;
}

export type HeaderLinks = Array<HeaderLink>;

export interface SocialLink {
  href: string;
  title: string;
  icon: IconType;
}
export type SocialLinks = Array<SocialLink>;

export interface TechStackLink {
  name: string;
  icon: IconType;
}

export type TechStackLinks = Array<TechStackLink>;
