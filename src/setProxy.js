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

module.exports = function (app) {
  app.use(
    "/user",
    createProxyMiddleware({
      target: "http://nagatourweb.shop:8081",
      changeOrigin: true,
    })
  );
};
