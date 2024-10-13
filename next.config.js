/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "standalone",
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'firebasestorage.googleapis.com',
            },
              {
                protocol: 'https',
                hostname: 'images.ctfassets.net',
            },

        ],
    },
    async redirects() {
        return [
            {
                source: '/',
                destination: '/zlobek',
                permanent: true,
            }
        ]
    }
}

module.exports = nextConfig
