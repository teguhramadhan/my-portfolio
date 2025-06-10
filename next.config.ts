/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["cjrqukpnqzzkyehykxos.supabase.co"], // tambahkan domain Supabase kamu di sini
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
