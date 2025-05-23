"use client";

import { motion } from "motion/react";
import { useTranslations } from "next-intl";

const AboutRoadMap = () => {
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
            {t("life_path")}
          </h2>
        </div>
        <div className="flex  gap-4">
          <p className=" text-muted-foreground">
            {t("life_path_desc_1")}
            <br />
            <br />
            {t("life_path_desc_2")}
            <br />
            <br />
            {t("life_path_desc_3")}
            <br />
            <br />
            {t("life_path_desc_4")}
          </p>
        </div>
      </div>
    </motion.div>
  );
};
export default AboutRoadMap;
