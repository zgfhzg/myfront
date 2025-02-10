/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    async rewrites() {
        return [
            {
                source: "/:path*",
                destination: "http://localhost/:path*",
            }
        ]
    }
};

export default nextConfig;
