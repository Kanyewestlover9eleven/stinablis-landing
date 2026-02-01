import type { NextConfig } from "next";

const nextConfig = {
  output: 'export', // 👈 enables static export
  distDir: 'out',   // default is 'out'
};

export default nextConfig;
