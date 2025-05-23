"use client";
import mainPhoto from "@/public/mainPhoto.png";
import mainPhotoBack from "@/public/mainPhotoBack.png";
import { motion } from "motion/react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useState } from "react";
import CurverdArrow from "./svg/CurvedArrow";

const AboutHeroSection = () => {
  const t = useTranslations("About");
  const [isHovered, setIsHovered] = useState(false);

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
        <div className="flex gap-4">
          <p className="text-muted-foreground">{t("hero_brief_desc")}</p>
        </div>
      </div>
      <div className="relative mx-auto w-full h-full max-w-[400px]">
        <div
          className="relative overflow-hidden rounded-lg min-w-[250px] min-h-[250px] w-full h-full cursor-pointer"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <motion.div
            animate={{
              opacity: isHovered ? 0 : 1,
            }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
            }}
            className="absolute inset-0"
          >
            <Image
              className="w-full h-full object-cover"
              width={250}
              height={250}
              src={mainPhoto}
              alt="myself"
            />
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: isHovered ? 1 : 0,
            }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
            }}
            className="absolute inset-0"
          >
            <Image
              className="w-full h-full object-cover"
              width={250}
              height={250}
              src={mainPhotoBack}
              alt="myself - back view"
            />
          </motion.div>
        </div>

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
