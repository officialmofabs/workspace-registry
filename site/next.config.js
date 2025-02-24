/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'officialmofabs Registry',
    description: 'The official store for my workspace builds.',
    icon: '/img/logo.svg',
    listUrl: 'hhttps://github.com/officialmofabs/workspaces-registry',
    contactUrl: 'https://github.com/officialmofabs/support',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
