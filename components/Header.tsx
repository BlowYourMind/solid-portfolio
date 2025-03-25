"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { motion } from "motion/react";

import { Logo } from "./Logo";
import ThemeToggle from "./ToggleButton";
import Navbar from "./Navbar";
import LanguageSwitcher from "./LanguageSwitcher";
import AnimationsToggle from "./AnimationsToggle";

export default function Header() {
  const t = useTranslations("HomePage");
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const changeBackground = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    document.addEventListener("scroll", changeBackground);

    return () => document.removeEventListener("scroll", changeBackground);
  }, []);
  return (
    <motion.header
      className="bg-background/30 shadow-xs fixed inset-x-0 top-4 z-40 mx-auto flex h-[60px] max-w-5xl items-center justify-between rounded-2xl px-8 saturate-100 backdrop-blur-[10px] transition-colors"
      initial={{
        y: -100,
      }}
      animate={{
        y: 0,
      }}
      transition={{
        duration: 0.3,
      }}
    >
      <div className="flex items-center">
        <Link
          href="/"
          className="flex items-center justify-center gap-1"
          aria-label={t("home_button")}
        >
          <Logo
            width={70}
            height={70}
            className={"fill-current relative top-1"}
          />
        </Link>
      </div>
      <Navbar />
      <div className="flex items-center gap-2">
        <AnimationsToggle />
        <ThemeToggle />
        <LanguageSwitcher />
      </div>
    </motion.header>
  );
}
