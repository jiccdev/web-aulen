/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        destination: 'https://accionpanal.com/:path*',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
