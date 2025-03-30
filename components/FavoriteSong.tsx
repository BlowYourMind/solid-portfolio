import { LucideMusic } from "lucide-react";
import { useTranslations } from "next-intl";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { FAVORITE_SONGS } from "@/config/links";
interface FavoriteSong {
  url: string;
  name: string;
  author: string;
  img: StaticImageData;
}
const FavoriteSong = () => {
  const t = useTranslations("HomePage");
  return (
    <div className="shadow-feature-card flex flex-col gap-6 rounded-xl p-4 w-full lg:p-6">
      <div className="flex items-center gap-2">
        <LucideMusic className="size-[18px]" />
        <h2 className="text-sm">{t("about-me.favorite_songs")}</h2>
      </div>
      {FAVORITE_SONGS.map((song) => (
        <div key={song.name} className="flex items-start gap-3">
          <Image
            className="rounded-sm"
            src={song.img}
            alt="favorite_song"
            width={60}
            height={60}
          ></Image>
          <div className="flex flex-col">
            <Link
              href={song.href}
              className="font-bold hover:underline"
              target="_blank"
            >
              {song.name}
            </Link>
            <span className="text-xs">{song.author}</span>
          </div>
        </div>
      ))}
    </div>
  );
};
export default FavoriteSong;
