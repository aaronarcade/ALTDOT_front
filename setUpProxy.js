const {createProxyMiddleware} = require("http-proxy-middleware");

module.exports = function (app) {
    app.use(
        createProxyMiddleware("/api", {
            target: "ec2-3-141-41-167.us-east-2.compute.amazonaws.com:8001",
            changeOrigin: true,
        })

    );
};