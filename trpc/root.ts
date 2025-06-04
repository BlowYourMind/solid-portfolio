import { spotifyRouter } from "./routers/spotify";
import { createTRPCRouter } from "./trpc";

export const appRouter = createTRPCRouter({
  spotify: spotifyRouter,
});

export type AppRouter = typeof appRouter;
