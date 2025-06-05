"use client";

import { MenuIcon } from "lucide-react";

import { HEADER_LINKS } from "@/config/links";
import Link from "next/link";
import { useTranslations } from "next-intl";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";

const MobileNav = () => {
  const t = useTranslations("HomePage");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          className="flex size-9 items-center justify-center focus-visible:ring-0 focus:outline-none focus:ring-0 p-0 md:hidden"
          aria-label={t("layout.toggle-menu")}
          variant="ghost"
        >
          <MenuIcon className="size-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" sideOffset={20} className="min-w-40">
        {HEADER_LINKS.map((link) => (
          <DropdownMenuItem key={link.key} asChild>
            <Link href={link.href} className="flex items-center gap-4">
              {link.icon}
              <div>{t(`layout.${link.key}`)}</div>
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default MobileNav;
