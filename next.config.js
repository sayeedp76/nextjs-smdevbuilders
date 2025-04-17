/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    unoptimized: true,
    domains: ['picsum.photos'],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(jpg|jpeg|png|gif|webp)$/i,
      type: 'asset/resource',
    });
    return config;
  },
}

module.exports = nextConfig 