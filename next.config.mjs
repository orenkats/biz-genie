// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    OPENAI_API_KEY: process.env.OPENAI_API_KEY,
  },
  reactStrictMode: false, // Disable React Strict Mode
};

export default nextConfig;
