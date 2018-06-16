let server = require('../Server');
server.setAccessOrigin('http://127.0.0.1:9090');
server.run(`${__dirname}/mocks`);
console.log(server)
var k = require('./mocks/t');
console.log(k)