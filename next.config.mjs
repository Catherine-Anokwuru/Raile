const nextConfig = {
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
  //       destination: "https://latin-adoree-raile-d2418ca2.koyeb.app/auth/:path*",
  //     },
  //     {
  //       source: "/:userId/:path*",
  //       destination: "https://latin-adoree-raile-d2418ca2.koyeb.app/:userId/:path*",
  //     },
  //   ];
  // },
};

export default nextConfig;
