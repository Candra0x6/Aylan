import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    // Improve compatibility across different operating systems
    esmExternals: 'loose',
  },
  compiler: {
    // Add source maps for better debugging
    removeConsole: false,
  },
  // Add webpack configuration for better cross-platform compatibility
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // Fix for macOS specific issues
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
      };

      // Add better error handling for undefined objects
      config.optimization = {
        ...config.optimization,
        providedExports: false,
        usedExports: false,
      };
    }
    
    return config;
  },
  // Enable strict mode for better error catching
  reactStrictMode: true,
  // Add better error reporting
  onDemandEntries: {
    // period (in ms) where the server will keep pages in the buffer
    maxInactiveAge: 25 * 1000,
    // number of pages that should be kept simultaneously without being disposed
    pagesBufferLength: 2,
  },
};

export default nextConfig;
