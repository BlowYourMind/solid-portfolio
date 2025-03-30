import { LucideBook } from "lucide-react";
import { useTranslations } from "next-intl";
import favBookLogo from "@/public/dune-img.jpg";
import Image from "next/image";
import { FAVORITE_BOOKS } from "@/config/links";
const FavoriteBook = () => {
  const t = useTranslations("HomePage");
  return (
    <div className="shadow-feature-card flex flex-col gap-6 rounded-xl p-4 w-full lg:p-6">
      <div className="flex items-center gap-2">
        <LucideBook className="size-[18px]" />
        <h2 className="text-sm">{t("about-me.favorite_books")}</h2>
      </div>
      {FAVORITE_BOOKS.map((book) => (
        <div key={book.name} className="flex items-start gap-3">
          <Image
            className="rounded-lg"
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
    </div>
  );
};
export default FavoriteBook;
