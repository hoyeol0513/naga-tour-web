const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",

    createProxyMiddleware({
      target: "http://nagatourweb.shop:8081",
      changeOrigin: true,
    })
  );
};
