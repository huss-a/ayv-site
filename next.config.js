const withImages = require("next-images");
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
module.exports = withImages({
  future: {
    webpack5: true,
  },
  webpack: (config, options) => {
    config.resolve.plugins.push(new TsconfigPathsPlugin())
    return config;
  },
  reactStrictMode: true,
  env: {
    BASE_URL: process.env.BASE_URL,
  }
});
