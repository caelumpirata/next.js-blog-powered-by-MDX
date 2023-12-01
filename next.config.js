/** @type {import('next').NextConfig} */
const withMDX = require('@next/mdx')()

const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],

}

module.exports = withMDX(nextConfig)


 






// module.exports = {
//   images: {
//     remotePatterns: [
//       {
//         protocol: 'https',
//         hostname: 'ghost.caelumpirata.com',
//         port: '',
//         pathname: '/content/images/**',
//       },
//     ],
//   },nextConfig
// }