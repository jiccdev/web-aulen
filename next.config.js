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
        // destination: 'https://accionpanal.com/:path*',
        destination: 'https://aulenpropiedades.cl/:path*',
        permanent: true,
      },
    ];
  },
  headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Access-Control-Allow-Origin',
            value: '*',
          },
        ],
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: '/:path*',
        // destination: 'https://accionpanal.com/:path*',
        destination: 'https://aulenpropiedades.cl/:path*',
      },
    ];
  },
};

module.exports = nextConfig;
