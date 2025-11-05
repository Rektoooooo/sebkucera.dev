/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/minecraft-server',
  output: 'export',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
