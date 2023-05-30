/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
	images: {remotePatterns: [
      {
        protocol: 'https',
        hostname: 'multimedia.infojobs.net',
        port: '',
 
      },
      {
        protocol:"https",
        hostname:"components.infojobs.com",
        port:""
      }
    ]},
}

module.exports = nextConfig
