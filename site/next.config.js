/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'Mo's workspace',
    description: 'The official store for my workspace builds.',
    icon: '/img/logo.svg',
    listUrl: 'https://github.com/officialmofabs/workspace-registry',
    contactUrl: 'https://github.com/officialmofabs/support',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
