/** @type {import('next').NextConfig} */
const nextConfig = {
 async headers() {
      return [
        {
          // matching all API routes
          // https://vercel.com/guides/how-to-enable-cors
          source: "/api/:path*",
          headers: [
            { key: "Access-Control-Allow-Credentials", value: "true" },
            { key: "Access-Control-Allow-Origin", value: "*" },
            {
              key: "Access-Control-Allow-Methods",
              value: "GET,OPTIONS,PATCH,DELETE,POST,PUT",
            },
            {
              key: "Access-Control-Allow-Headers",
              value:
                "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
            },
          ],
        },
      ];
    },
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
