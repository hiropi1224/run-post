import { drizzle } from "drizzle-orm/neon-http";

// biome-ignore lint/style/noNonNullAssertion: TODO: t3envを入れる
export const db = drizzle(process.env.DATABASE_URL!);
