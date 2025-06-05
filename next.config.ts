import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";
const nextConfig: NextConfig = {
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true, // TODO remove this in production
  },
  plugins: {
    "@tailwindcss/postcss": {},
  },
  images: {
    domains: ["i.scdn.co", "bsvbucket.s3.eu-north-1.amazonaws.com"],
  },
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
