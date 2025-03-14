import { HeaderLinks } from "@/interfaces/links";
import {
  BarChartIcon,
  FlameIcon,
  MessageCircleIcon,
  MonitorIcon,
  PencilIcon,
  UserCircleIcon,
} from "lucide-react";

export const HEADER_LINKS: HeaderLinks = [
  {
    icon: <MessageCircleIcon className="size-3.5" />,
    href: "/reviews",
    key: "reviews",
  },
  {
    icon: <FlameIcon className="size-3.5" />,
    href: "/projects",
    key: "projects",
  },
  {
    icon: <UserCircleIcon className="size-3.5" />,
    href: "/about",
    key: "about",
  },
  {
    icon: <MonitorIcon className="size-3.5" />,
    href: "/contact",
    key: "contact",
  },
];
