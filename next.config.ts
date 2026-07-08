import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
      },
    ],
  },

  experimental: {
    optimizePackageImports: [
      'lucide-react',
      '@react-three/drei',
    ],
  },

  transpilePackages: ['three'],
}

export default nextConfig