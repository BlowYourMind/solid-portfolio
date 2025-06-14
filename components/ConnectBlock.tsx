"use client";
import { LinkIcon } from "lucide-react";

import { SOCIAL_LINKS } from "@/config/links";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { motion } from "motion/react";

const Connect = () => {
  const t = useTranslations("HomePage");

  return (
    <motion.div
      initial={{
        scale: 0,
      }}
      animate={{
        scale: 1,
      }}
      transition={{
        duration: 0.3,
      }}
      className="shadow-feature-card flex flex-col gap-6 rounded-xl p-4 lg:p-6"
    >
      <div className="flex items-center gap-2">
        <LinkIcon className="size-[18px]" />
        <h2 className="text-sm">{t("about-me.connect")}</h2>
      </div>
      <div className="flex flex-col gap-4 px-2">
        {SOCIAL_LINKS.map((link) => {
          const { href, title, icon } = link;

          const Icon = icon;

          return (
            <Link
              key={href}
              href={href}
              className="text-muted-foreground hover:text-foreground flex w-fit items-center gap-3 transition-colors"
            >
              <Icon className="size-[18px]" />
              <h3>{title}</h3>
            </Link>
          );
        })}
      </div>
    </motion.div>
  );
};

export default Connect;
