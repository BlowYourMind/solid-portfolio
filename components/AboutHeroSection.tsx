"use client";
import mainPhoto from "@/public/mainPhoto.png";
// import mainPhotoBack from "@/public/mainPhotoBack.png";

import { motion } from "motion/react";
import { useTranslations } from "next-intl";
import Image from "next/image";
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
      className="shadow-feature-card flex rounded-xl flex-col md:flex-row gap-6 p-4 lg:p-6"
    >
      <div className="flex-col flex gap-6 ">
        <div className="flex items-center gap-2">
          <h2 className="text-2xl font-bold text-foreground">
            {t("hero_title")}
          </h2>
        </div>
        <div className="flex  gap-4">
          <p className="text-sm">{t("hero_brief_desc")}</p>
        </div>
      </div>

      <Image
        className="rounded-lg"
        width={250}
        height={250}
        src={mainPhoto}
        alt="myself"
      ></Image>
    </motion.div>
  );
};
export default AboutHeroSection;
