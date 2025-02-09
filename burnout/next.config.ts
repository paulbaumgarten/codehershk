import type { NextConfig } from "next";

// CHANGE ON PROPER DEPLOY
const nextConfig = {
  reactStrictMode: true,
  images: {
      unoptimized: false, 
    },
  assetPrefix: '',
  basePath: '',
  output: 'export'
};

export default nextConfig;
