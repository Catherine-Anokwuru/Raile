import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "image.tmdb.org",
        port: "",
      },
      {
        protocol: "https",
        hostname: "api.themoviedb.org",
        port: "",
      },
    ],
  },
  // async rewrites() {
  //   return [
  //     {
  //       source: "/auth/:path*",
  //       destination: "http://localhost:5000/auth/:path*",
  //     },
  //     {
  //       source: "/:userId/:path*",
  //       destination: "http://localhost:5000/:userId/:path*",
  //     },
  //   ];
  // },
};

export default nextConfig;