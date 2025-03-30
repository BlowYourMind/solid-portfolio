import { IconType } from "@icons-pack/react-simple-icons";
import { StaticImageData } from "next/image";
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

export interface FavoriteSong {
  href: string;
  name: string;
  author: string;
  img: StaticImageData;
}
export type FavoriteSongs = Array<FavoriteSong>;

export interface FavoriteBook {
  name: string;
  author: string;
  img: StaticImageData;
}
export type FavoriteBooks = Array<FavoriteBook>;
