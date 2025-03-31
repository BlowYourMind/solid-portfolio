import { FOOTER_LINKS } from "@/config/links";
import { useTranslations } from "next-intl";
import Link from "next/link";
import NowPlaying from "./Now-playing";

export default function Footer() {
  const t = useTranslations("HomePage");
  return (
    <footer className="mt-20 bg-background/30 shadow-xs relative mx-auto mb-6 flex w-full max-w-5xl flex-col rounded-2xl p-8 saturate-100 backdrop-blur-[10px]">
      <div className="mt-12 grid grid-cols-2 sm:grid-cols-3">
        {FOOTER_LINKS.map((list) => (
          <div
            key={list.id}
            className="mb-10 flex flex-col items-start gap-4 pr-4"
          >
            {list.links.map((link) => {
              const { href, key } = link;

              return (
                <Link
                  key={href}
                  href={href}
                  className="text-muted-foreground hover:text-foreground flex w-fit items-center gap-3 transition-colors"
                >
                  {t(`layout.${key}`)}
                </Link>
              );
            })}
          </div>
        ))}
        <NowPlaying />
      </div>
      <span className="text-muted-foreground text-center">
        © 2025 Maksims Nikitins
      </span>
    </footer>
  );
}
