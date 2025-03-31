"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import Image from "next/image";
import { api } from "@/trpc/react";
import { SiSpotify } from "@icons-pack/react-simple-icons";

const NowPlaying = () => {
  const { status, data } = api.spotify.get.useQuery(undefined, {
    staleTime: 1000 * 60,
  });
  const t = useTranslations("HomePage");

  const isPlaying = status === "success" && data.isPlaying && data.songUrl;
  const notListening =
    status === "success" && (!data.isPlaying || !data.songUrl);

  return (
    <div className="flex items-start flex-col gap-4">
      <div className="flex gap-2 items-center text-muted-foreground">
        <span>{t("layout.now-playing.currently_playing")}</span>
        <SiSpotify size={20}></SiSpotify>
      </div>

      <div className="inline-flex w-full items-center justify-center gap-2 text-sm md:justify-start">
        {isPlaying && data.albumImage && (
          <Image
            src={data.albumImage}
            alt={`Album cover for ${data.name}`}
            width={60}
            height={60}
            className="rounded-md"
          />
        )}
        <div>
          {status === "pending" ? (
            <div className="flex items-center gap-2">
              <div className="h-[60px] w-[60px] rounded-md bg-muted animate-pulse"></div>
              <div className="flex flex-col gap-2">
                <div className="h-4 w-32 rounded-md bg-muted animate-pulse"></div>
                <div className="h-3 w-20 rounded-md bg-muted animate-pulse"></div>
              </div>
            </div>
          ) : null}
          {status === "error" ? t("layout.now-playing.error") : null}
          {isPlaying ? (
            <div className="flex flex-col">
              <Link
                href={data.songUrl}
                className="font-bold hover:underline"
                target="_blank"
              >
                {data.name}
              </Link>
              <span className="text-xs">{data.artist}</span>
            </div>
          ) : null}
          {notListening ? t("layout.now-playing.not-listening") : null}
        </div>
      </div>
    </div>
  );
};

export default NowPlaying;
