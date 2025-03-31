import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";
const nextConfig: NextConfig = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
  images: {
    domains: ["i.scdn.co"],
  },
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
