"use client";
import Link from "next/link";
import { Logo } from "./Logo";
import ThemeToggle from "./ToggleButton";
import { useTranslations } from "next-intl";
import Navbar from "./Navbar";
import { motion } from "motion/react";

export default function Header() {
  const t = useTranslations("HomePage");

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
      <ThemeToggle />
    </motion.header>
  );
}
