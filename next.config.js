/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  poweredByHeader: false,           // https://nextjs.org/docs/api-reference/next.config.js/disabling-x-powered-by
  generateBuildId: async () => {    // https://nextjs.org/docs/api-reference/next.config.js/configuring-the-build-id
    return process.env.NEXT_PUBLIC_BUILD_ID || "development"
  },
}

module.exports = nextConfig
