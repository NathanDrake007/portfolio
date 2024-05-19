/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "epebetruqhyhtzplfglc.supabase.co",
        pathname: "/storage/v1/object/public/Images/**",
      },
    ],
  },
};

export default nextConfig;
