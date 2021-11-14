const {createProxyMiddleware} = require("http-proxy-middleware");

module.exports = function (app) {
    app.use(
        createProxyMiddleware("/api", {
            target: "http://3.145.53.234:8001",
            changeOrigin: true,
        })

    );
};