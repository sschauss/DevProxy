#! /usr/bin/env node

var app = require('./app.js');

var argv = process.argv.slice(2);

if (argv.length == 1) {
    var proxies = require(`${__dirname}/${argv[0]}`);
    app.run(proxies);
} else {
    console.log('Usage: devproxy [filename]')
}

