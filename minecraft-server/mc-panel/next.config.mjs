const basePath = '/minecraft-server';

/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath,
  output: 'export',
  images: {
    unoptimized: true,
  },
  env: {
    // Next only applies basePath to its own router. Code that navigates with
    // window.location has to prepend it manually, so expose it to the client.
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
