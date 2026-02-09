import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack: (config, { dev }) => {
    if (dev) {
      config.watchOptions = {
        ...config.watchOptions,
        ignored: ["**/ref/**", "**/public/assets/**"],
      }
    }
    return config
  },
};

export default nextConfig;
