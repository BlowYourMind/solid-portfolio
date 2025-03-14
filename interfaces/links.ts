import { ReactNode } from "react";

export interface HeaderLink {
  icon: ReactNode; // Use ReactNode instead of a specific icon type
  href: string;
  key: string;
}

export type HeaderLinks = Array<HeaderLink>;

