const {createProxyMiddleware} = require("http-proxy-middleware");

module.exports = function (app) {
    app.use(
        createProxyMiddleware("/api", {
            target: "http://3.15.186.30:8001",
            changeOrigin: true,
        })

    );
};