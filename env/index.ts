import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    DATABASE_URL: z.string().url(),
    STRAVA_ENDPOINT: z.string().url(),
    STRAVA_CLIENT_ID: z.string().min(1),
    STRAVA_CLIENT_SECRET: z.string().min(1),
    STRAVA_REFRESH_TOKEN: z.string().min(1),
    STRAVA_ACTIVITIES_ENDPOINT: z.string().url(),
  },

  experimental__runtimeEnv: process.env,
});
