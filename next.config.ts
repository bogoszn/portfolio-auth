import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  outputFileTracingIncludes: {
    "/**/*": ["./app/generated/prisma/**", "./prisma/**"],
  },
};

export default nextConfig;
