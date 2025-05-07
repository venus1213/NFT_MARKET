/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: config => {
      config.externals.push('pino-pretty', 'lokijs', 'encoding')
      return config
    },
    images: {
      domains: ['assets.coingecko.com', 'arweave.net'],
    },
  }

module.exports = nextConfig
