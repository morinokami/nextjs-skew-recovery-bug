import type { NextConfig } from "next";

import { deploymentId } from "./deploymentId";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  deploymentId,
};

export default nextConfig;
