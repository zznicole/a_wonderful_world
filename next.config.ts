import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      new URL(
        "https://images.axios.com/d47ZQ5Z6MY97Ges3kgB4UOPsq2s=/0x396:5656x3577/1366x768/2025/07/15/1752546964079.jpg"
      ),
    ],
  },
};

export default nextConfig;
