"use client";

import { AnimatePresence, motion } from "motion/react";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

const FRAMEWORKS = [
  {
    key: "Angular",
    className:
      "bg-clip-text text-center text-transparent bg-linear-to-r from-[#ff1835] to-[#ffc900]",
  },
  {
    key: "Next JS",
    className:
      "bg-clip-text text-center text-transparent bg-linear-to-r from-[#0077ff] to-[#00e7df]",
  },
  {
    key: "React",
    className:
      "bg-clip-text text-center text-transparent bg-linear-to-r from-[#7f00de] to-[#ff007f]",
  },
  {
    key: "Vue",
    className:
      "bg-clip-text text-center text-transparent bg-linear-to-r from-[#41b883] to-[#34495e]",
  },
] as const;

const SPEED = 5;

const variants = {
  enter: {
    y: 100,
    opacity: 0,
  },
  center: {
    y: 0,
    opacity: 1,
  },
  exit: {
    y: -100,
    opacity: 0,
  },
};

const MainPageBannerAnimatedText = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const t = useTranslations("HomePage");

  useEffect(() => {
    const timer = setInterval(
      () => setCurrentIndex((prev) => (prev + 1) % FRAMEWORKS.length),
      SPEED * 1000
    );

    return () => clearInterval(timer);
  }, []);

  const textItem = FRAMEWORKS[currentIndex];
  if (!textItem) return null;

  return (
    <div className="my-16 space-y-6">
      <div className="flex justify-between gap-8">
        <div className="flex flex-col gap-4">
          <h1 className="flex flex-col flex-wrap gap-2 text-xl font-bold sm:text-3xl">
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ ease: "easeOut" }}
            >
              {t("title-top")}
            </motion.div>
            <motion.div
              initial={{ x: 30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ ease: "easeOut" }}
              className="flex gap-2"
            >
              <motion.div
                layout
                key="title-middle-left"
                className="leading-[30px] sm:leading-[45px]"
              >
                {t("title-middle")}
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ x: 30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ ease: "easeOut" }}
              className="flex items-center gap-2"
            >
              <motion.div
                initial={{ x: 40, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ ease: "easeOut" }}
              >
                {t("title-bottom")}
              </motion.div>
              <div className="relative overflow-hidden">
                <AnimatePresence mode="popLayout">
                  <motion.div
                    key={currentIndex}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    layout
                    transition={{
                      type: "tween",
                      duration: 0.3,
                    }}
                    className="inline-flex items-center justify-center leading-[30px] sm:leading-[45px]"
                  >
                    <span className={textItem.className}>{textItem.key}</span>
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>
          </h1>
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ ease: "easeOut" }}
            className="text-muted-foreground text-sm"
          >
            {t("location-timezone")}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default MainPageBannerAnimatedText;
