/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },

  // rewrites() {
  //   return [
  //     {
  //       source: '/soy-inversionista/unidades-nuevas',
  //       destination: '/soy-inversionista/unidades-nuevas#estacionamientos',
  //     },
  //   ];
  // },
};

module.exports = nextConfig;
