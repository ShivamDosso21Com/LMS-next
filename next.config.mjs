import dotenv from 'dotenv';

dotenv.config();

/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    LINK: process.env.LINK,
  },
};

export default nextConfig;
