# mock-data-server
Small NodeJS server for mocked data. When run, it uses data from 
json or js files for response. It resolves data based on url path. If 
path does not exist throws 404.

## Usage
```
let server = require('@kpajtasev/mock-data-server');
server.run(`mocksLocation`);
```
Runs mocking server in default port 9000.

## Setting custom port
```
let server = require('@kpajtasev/mock-data-server');
server.setPort(3000);
server.run(`mocksLocation`);
```

## Cross origin
To fix cross origin errors, setAccessOrigin method can be used. 
Following code allows requests from local port 9090.
```
let server = require('@kpajtasev/mock-data-server');
server.setAccessOrigin('http://127.0.0.1:9090');
server.run(`mocksLocation`);
```

## Mocks namespace
Namespace of mock files can be set using setNamespace method. Bellow 
example means that before resolving file, /api will be removed from 
path.
```
let server = require('@kpajtasev/mock-data-server');
server.setNamespace('/api');
server.run(`mocksLocation`);
```

## Filtering
If your mock is array, you can use filtering by sending query parameters.
### Example
```
// test.json
[
  { "test": 2, "name": "J"},
  { "test": 1, "name": "A"},
  { "test": 2, "name": "W"},
  { "test": 3, "name": "E"}
]
```
When /test is returned full test.json content is returned.

If /test?test=1 is requested, response is:
```
// test.json
[
  { "test": 1, "name": "A"}
]
```

## Function
Mock also can be defined as function where result of function will 
be sent as response.

### Example
```
// test.js
module.exports = () => [
  { "test": 2, "name": "J"}
]
```

When /test is requested response is:
```
[
  { "test": 2, "name": "J"}
]
```

## Mock Example
```
let server = require('@kpajtasev/mock-data-server');
server.run(`mocksLocation`);
```
When http://127.0.0.1:9000/test is request, response will 
match content of mocksLocation/test file.

