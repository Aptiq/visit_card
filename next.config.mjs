/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true, // Ceci permettra aux GIFs de fonctionner correctement
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
}

export default nextConfig
