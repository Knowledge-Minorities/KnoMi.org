const http = require('http');
const path = require('path');

const connect = require('connect');
const serveStatic = require('serve-static');

const hostname = process.argv[2];
const httpServerPort = Number(process.argv[3]);

let httpServer = connect();
httpServer.use(serveStatic(__dirname + "/public"));
httpServer.use(serveStatic(__dirname + "/scripts"));
httpServer.listen(httpServerPort, hostname, () => {
    console.log(`Server running at http://${hostname}:${httpServerPort}/index.html`);
});
