#! /usr/bin/env node

const app = require('./app.js');

const argv = process.argv.slice(2);
const port = process.env.PORT || 3000;
const cwd = process.cwd();
let proxies;

switch (argv.length) {
    case 1:
        proxies = require(`${cwd}/${argv[0]}`);
        app.run(proxies, port);
        break;
    case 2:
        proxies = [{
            source: "/",
            target: `http://localhost:${argv[1]}`
        }]
        app.run(proxies, argv[0]);
        break;
    default:
        console.log('Usage: yadp [filename]')
}
