import { HeaderLinks } from "@/interfaces/links";
import {
  FlameIcon,
  MessageCircleIcon,
  MonitorIcon,
  UserCircleIcon,
} from "lucide-react";

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
