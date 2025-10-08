import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  compiler: {
    // Add source maps for better debugging
    removeConsole: false,
  },
  // Enable strict mode for better error catching
  reactStrictMode: true,
  // Turbopack-compatible configuration
  turbopack: {
    // Turbopack-specific configuration if needed
  },
};

export default nextConfig;
