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

## Mock Example
```
let server = require('@kpajtasev/mock-data-server');
server.run(`mocksLocation`);
```
When http://127.0.0.1:9000/test is request, response will 
match content of mocksLocation/test file.

