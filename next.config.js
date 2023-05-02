/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  async rewrites() {
    return [
      {
        source: '/propiedades/:id/:statusId/:companyId',
        destination:
          '/propiedades/[id]?statusId=:statusId&companyId=:companyId',
      },
    ];
  },

  // async redirects() {
  //   return [
  //     {
  //       source: '/:path*',
  //       destination: 'https://aulenpropiedades.cl/:path*',
  //       permanent: true,
  //     },
  //   ];
  // },
  // headers() {
  //   return [
  //     {
  //       source: '/:path*',
  //       headers: [
  //         {
  //           key: 'Access-Control-Allow-Origin',
  //           value: '*',
  //         },
  //       ],
  //     },
  //   ];
  // },
  // async rewrites() {
  //   return [
  //     {
  //       source: '/:path*',
  //       destination: 'https://aulenpropiedades.cl/:path*',
  //     },
  //   ];
  // },
};

module.exports = nextConfig;
