const {createProxyMiddleware} = require("http-proxy-middleware");

module.exports = function (app) {
    app.use(
        createProxyMiddleware("/api", {
            target: "http://localhost:8001",
            changeOrigin: true,
        })

    );
};
//"start": "export PORT=8080 && react-scripts start"