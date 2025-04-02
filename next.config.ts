import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    dynamicIO: true,
    ppr: true,
  },
  serverExternalPackages: ["twitter-api-v2"],
};

export default nextConfig;
