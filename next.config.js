const withPWA = require("next-pwa");

const isProd = process.env.NODE_ENV === "production";

module.exports = withPWA({
  assetPrefix: isProd ? "/gh-pages/" : "",
  pwa: {
    dest: "public",
  },
});
