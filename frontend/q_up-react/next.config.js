const withStyledComponents = require("styled-components");

module.exports = {
  reactStrictMode: true,

  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "http://localhost:8080/:path*", // 기존 프록시 대상
      },
      {
        source: "/pstogether/:path*",
        destination: "http://localhost:8080/pstogether/:path*", // 새로운 프록시 대상
      },
    ];
  },

  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.plugins.push(
        new webpack.DefinePlugin({
          "process.env.NEXT_DISABLE_SSR": JSON.stringify(process.env.NEXT_DISABLE_SSR),
        })
    );

    return config;
  },
};
