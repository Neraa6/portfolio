/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Optimasi gambar untuk portfolio
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  // Opsional: aktifkan jika pakai Turbopack
  experimental: {
    turbo: {},
  },
 
};

module.exports = nextConfig;