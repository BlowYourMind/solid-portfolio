"use client";
import { TECH_ICONS } from "@/config/links";
import { TechStackLink } from "@/interfaces/links";
import { ZapIcon } from "lucide-react";
import { motion } from "motion/react";
import { useTranslations } from "next-intl";

const StackBlock = () => {
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
        <ZapIcon className="size-[18px]" />
        <h2 className="text-sm">{t("about-me.tech_stack")}</h2>
      </div>
      <div className="grid grid-cols-6 gap-4 text-center">
        {TECH_ICONS.map((tech: TechStackLink, index: number) => (
          <div
            key={index}
            className="flex flex-col items-center group duration-500 ease-in-out"
            title={tech.name}
          >
            <tech.icon className="w-8 h-8 group-hover:scale-125 text-muted-foreground group-hover:text-foreground transition-all duration-300" />
            <span className="text-xs mt-1 group-hover:text-foreground text-muted-foreground transition-all duration-300 pointer-events-none">
              {tech.name}
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default StackBlock;
