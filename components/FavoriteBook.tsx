"use client";
import { LucideBook } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { FAVORITE_BOOKS } from "@/config/links";
import { motion } from "motion/react";
const FavoriteBook = () => {
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
      className="shadow-feature-card flex col-span-1 sm:col-span-2 md:col-span-1 flex-col gap-6 rounded-xl p-4 w-full lg:p-6"
    >
      <div className="flex items-center gap-2">
        <LucideBook className="size-[18px]" />
        <h2 className="text-sm">{t("about-me.favorite_books")}</h2>
      </div>
      {FAVORITE_BOOKS.map((book) => (
        <div key={book.name} className="flex items-start gap-3">
          <Image
            className="rounded-sm"
            src={book.img}
            alt="favorite_book"
            width={40}
            height={60}
          ></Image>
          <div className="flex flex-col">
            <span className="font-bold ">{book.name}</span>
            <span className="text-xs">{book.author}</span>
          </div>
        </div>
      ))}
    </motion.div>
  );
};
export default FavoriteBook;
