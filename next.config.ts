import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/garygaspar-site",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
