import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // Enable strict mode for better error catching
  reactStrictMode: true,
  
  // Turbopack-compatible configuration
  experimental: {
    // Only include Turbopack-compatible options
    turbo: {
      // Turbopack-specific configurations can go here if needed
    },
  },
  
  compiler: {
    // Add source maps for better debugging (Turbopack compatible)
    removeConsole: false,
  },
};

export default nextConfig;
