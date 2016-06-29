const express = require('express');
const proxy = require('http-proxy-middleware');

var app = express();
var port = process.env.PORT || 3000
var registerProxy = (table) => {
    const context = table.context;
    const options = {
        target: table.target,
        changeOrigin: true,
        ws: true,
        pathRewrite: {

        },
        proxyTable: {
            [table.source]: table.target
        }
    };
    const middleware = proxy(context, options);
    app.use(middleware);
};


exports.run = (tables) => {
    tables.forEach(registerProxy);
    app.listen(port);
};