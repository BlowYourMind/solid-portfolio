"use client";
import { motion } from "motion/react";
import { Logo } from "./Logo";
import MainPageBannerAnimatedText from "./MainPageBannerAnimatedText";
const MainPageBanner = () => {
  return (
    <div className="max-w-5xl mx-auto flex items-center justify-between my-10">
      <MainPageBannerAnimatedText />
      <div className="bg-background/80 relative p-3 rounded-full flex-center">
        <motion.div
          className="relative hidden size-18 md:flex "
          initial={{
            scale: 0,
          }}
          animate={{
            scale: 1,
          }}
          transition={{
            duration: 0.3,
          }}
        >
          <Logo width={80} height={80} className={"fill-current"} />
          <div className="dark:block hidden animate-pulse-opacity bg-linear-to-tl absolute inset-0 -z-10 from-purple-700 to-orange-700 blur-2xl"></div>
          <div className="dark:hidden animate-pulse-opacity bg-linear-to-tl absolute inset-0 -z-10 from-white to-yellow-700 blur-2xl"></div>
        </motion.div>
      </div>
    </div>
  );
};

export default MainPageBanner;
