const express = require('express');
const proxy = require('http-proxy-middleware');

const app = express();
const registerProxy = (table) => {
    const middleware = proxy(table.source, {target: table.target, changeOrigin: true, ws: table.ws || false});
    app.use(middleware);
    app.on('upgrade', middleware.upgrade);
};

exports.run = (tables, port) => {
    tables.forEach(registerProxy);
    app.listen(port);
};
