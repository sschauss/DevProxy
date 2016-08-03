const express = require('express');
const proxy = require('http-proxy-middleware');

var app = express();
var port = process.env.PORT || 3000
var registerProxy = (table) => {
    var middleware = proxy({target: table.target, changeOrigin: true});
    app.use(table.source, middleware);
};

exports.run = (tables) => {
    tables.forEach(registerProxy);
    app.listen(port);
};
