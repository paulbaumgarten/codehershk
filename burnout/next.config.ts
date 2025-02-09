import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';
// CHANGE ON PROPER DEPLOY
const nextConfig = {
  reactStrictMode: true,
  images: {
      unoptimized: true, 
    },
  assetPrefix: isProd ? '/codehershk/' : '',
  basePath: isProd ? '/codehershk' : '',
  output: 'export'
};

export default nextConfig;
