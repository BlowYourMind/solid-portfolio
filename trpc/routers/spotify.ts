import { TRPCError } from "@trpc/server";
import { createTRPCRouter, publicProcedure } from "../trpc";
import { getIp } from "@/utils/get-ip";
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

const CLIENT_ID = process.env.SPOTIFY_CLIENT_ID || "";
const CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET || "";
const REFRESH_TOKEN = process.env.SPOTIFY_REFRESH_TOKEN || "";

const BASIC = Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString("base64");
const NOW_PLAYING_ENDPOINT =
  "https://api.spotify.com/v1/me/player/currently-playing";
const TOKEN_ENDPOINT = "https://accounts.spotify.com/api/token";

// const redis = new Redis({
//   url: process.env.UPSTASH_REDIS_REST_URL || "",
//   token: process.env.UPSTASH_REDIS_REST_TOKEN || "",
// });

// const ratelimit = new Ratelimit({
//   redis,
//   limiter: Ratelimit.slidingWindow(10, "10 s"),
//   analytics: true,
// });

const getAccessToken = async () => {
  const response = await fetch(TOKEN_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Basic ${BASIC}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: REFRESH_TOKEN,
    }),
  });

  const data = await response.json();

  return data.access_token as string;
};

const getKey = (id: string) => `spotify:${id}`;

export const spotifyRouter = createTRPCRouter({
  get: publicProcedure.query(async ({ ctx }) => {
    // const ip = getIp(ctx.headers);

    // const { success } = await ratelimit.limit(getKey(ip));

    // if (!success) throw new TRPCError({ code: "TOO_MANY_REQUESTS" });

    try {
      const accessToken = await getAccessToken();

      const response = await fetch(NOW_PLAYING_ENDPOINT, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      if (response.status === 204) {
        return {
          isPlaying: false,
          songUrl: null,
          name: null,
          artist: null,
          albumImage: null,
        };
      }

      const song = await response.json();
      if (!song.item) {
        return {
          isPlaying: false,
          songUrl: null,
          name: null,
          artist: null,
          albumImage: null,
        };
      }
      console.dir(song, { depths: 0 });
      const albumImages = song.item.album?.images || [];
      const albumImage =
        albumImages.length > 0
          ? albumImages[1]?.url || albumImages[0]?.url
          : null;
      return {
        isPlaying: song.is_playing as boolean,
        songUrl: song.item.external_urls.spotify as string,
        name: song.item.name as string,
        artist: song.item.artists
          .map((artist: { name: string }) => artist.name)
          .join(", ") as string,
        albumImage: albumImage,
      };
    } catch (error) {
      console.error("Spotify API error:", error);

      return {
        isPlaying: false,
        songUrl: null,
        name: null,
        artist: null,
        albumImage: null,
      };
    }
  }),
});
