#! /usr/bin/env node

const app = require('./app.js');

const argv = process.argv.slice(2);

if (argv.length == 1) {
    const proxies = require(`${__dirname}/${argv[0]}`);
    app.run(proxies);
} else {
    console.log('Usage: yadp [filename]')
}

