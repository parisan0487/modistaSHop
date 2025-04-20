/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'mehdibagheridev.ir',
            },
        ],
    },
};

export default nextConfig;
