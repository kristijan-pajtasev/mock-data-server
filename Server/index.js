let express = require('express');
let app = express();
let location, port;

const registerRoute = (location) => {
    app.get('*', (req, res) => {
        console.log(`ROUTE REQUESTED: ${req.path}.js`);
        res.json(require(`${location}/${req.path !== '/' ? req.path : 'index'}`))
    })
};

class Server {
    constructor() {
        this.port = 9000;
    }

    setLocation(l) {
        location = l;
    };

    setPort(p) {
        this.port = p;
    };

    run (l, p, callback) {
        if(!!l) location = l;
        if(!!p) this.port = p;

        registerRoute(location);

        app.listen(this.port, () => {
            console.log(`Running server in ${this.port}`);
            console.log(`Serving files from ${location}`);
            if(callback) callback();
        });
    }
}

module.exports = new Server();