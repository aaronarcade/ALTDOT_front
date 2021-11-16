const {createProxyMiddleware} = require("http-proxy-middleware");

module.exports = function (app) {
    app.use(
        createProxyMiddleware("/api", {
            target: "http://3.19.184.59:8001",
            changeOrigin: true,
        })

    );
};
//http://3.19.184.59/
//"start": "export PORT=8080 && react-scripts start"