"use client";

import { HEADER_LINKS } from "@/config/links";
import { usePathname } from "@/i18n/navigation";
import { HeaderLink } from "@/interfaces/links";
import { cn } from "@/utils/cn";
import { useTranslations } from "next-intl";
import Link from "next/link";

const Navbar = () => {
  const pathname = usePathname();
  const t = useTranslations("HomePage");

  return (
    <nav className="hidden md:block">
      <ul className="flex gap-2">
        {HEADER_LINKS.map((link: HeaderLink) => {
          const isActive = link.href === pathname;

          return (
            <li
              key={link.key}
              className="relative flex h-[60px] items-center justify-center"
            >
              <Link
                className={cn(
                  "rounded-sm px-3 py-2 text-sm font-medium transition-colors",
                  {
                    "text-muted-foreground hover:text-foreground": !isActive,
                    "text-foreground": isActive,
                  }
                )}
                href={link.href}
              >
                {t(`layout.${link.key}`)}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
