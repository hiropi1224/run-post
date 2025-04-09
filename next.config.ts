import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    dynamicIO: true,
    ppr: true,
    useCache: true,
  },
  // NOTE: https://github.com/PLhery/node-twitter-api-v2/issues/531#issuecomment-2494411697
  serverExternalPackages: ["twitter-api-v2"],
};

export default nextConfig;
