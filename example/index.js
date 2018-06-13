let server = require('../Server');
server.run(`${__dirname}/mocks`);
console.log(server)
var k = require('./mocks/t');
console.log(k)