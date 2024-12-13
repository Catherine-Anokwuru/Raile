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
  //       destination: "https://movie-app-server-4bhs.onrender.com/auth/:path*",
  //     },
  //     {
  //       source: "/:userId/:path*",
  //       destination: "https://movie-app-server-4bhs.onrender.com/:userId/:path*",
  //     },
  //   ];
  // },
};

export default nextConfig;
