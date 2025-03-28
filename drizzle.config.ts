/* eslint-disable node/prefer-global/process */
import dotenv from "dotenv";
import { defineConfig } from "drizzle-kit";
import { env } from "~/env";

dotenv.config({
  path: ".env.local",
});

export default defineConfig({
  out: "./drizzle",
  schema: "./db/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: env.DATABASE_URL,
  },
});
