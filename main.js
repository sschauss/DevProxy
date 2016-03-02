#! /usr/bin/env node

var gulpfile = require('./gulpfile.js');

var argv = process.argv.slice(2);

if (argv.length == 1) {
    var proxies = argv[0];
    gulpfile.start(proxies);
} else {
    console.log('Usage: devproxy [filename]')
}

