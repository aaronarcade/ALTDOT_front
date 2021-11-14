const {createProxyMiddleware} = require("http-proxy-middleware");

module.exports = function (app) {
    app.use(
        createProxyMiddleware("/api", {
            target: "http://3.141.41.167:8001",
            changeOrigin: true,
        })

    );
};