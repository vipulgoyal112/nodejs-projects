var http = require('http');
var main = require('./main');

var server = http.createServer(main);

server.listen(3001);

console.log("Server started !!");