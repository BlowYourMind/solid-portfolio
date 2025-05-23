"use client";
import mainPhoto from "@/public/mainPhoto.png";

import { motion } from "motion/react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import CurverdArrow from "./svg/CurvedArrow";
const AboutHeroSection = () => {
  const t = useTranslations("About");
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: 0.3,
      }}
      className="shadow-feature-card flex rounded-xl flex-col md:flex-row pb-15 md:p-6 gap-6 p-4 lg:p-6"
    >
      <div className="flex-col flex gap-6">
        <div className="flex items-center gap-2">
          <h2 className="text-2xl font-bold text-foreground">
            {t("hero_title")}
          </h2>
        </div>
        <div className="flex  gap-4">
          <p className=" text-muted-foreground">{t("hero_brief_desc")}</p>
        </div>
      </div>
      <div className="relative mx-auto w-full h-full max-w-[400px]">
        <Image
          className="rounded-lg min-w-[250px] min-h-[250px] w-full h-full object-cover"
          width={250}
          height={250}
          src={mainPhoto}
          alt="myself"
        ></Image>
        <motion.div
          initial={{
            opacity: 0,
            scale: 0,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.6,
            type: "spring",
            bounce: 0.4,
            delay: 0.2,
          }}
          className="flex gap-4 items-end absolute left-0 md:-left-56 -bottom-10 md:bottom-0"
        >
          <p className="text-sm text-muted-foreground">{t("me_in_poland")}</p>
          <CurverdArrow className="w-8 h-8" />
        </motion.div>
      </div>
    </motion.div>
  );
};
export default AboutHeroSection;
