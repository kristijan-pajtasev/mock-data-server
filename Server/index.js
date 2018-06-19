let express = require('express');
let app = express();
let location, port;

const registerRoute = (location, namespace) => {
    app.all('*', (req, res) => {
        console.log(`ROUTE REQUESTED: ${req.path}.js`);
        try {
            let path = req.path !== '/' ? req.path : 'index';
            if(namespace) path = path.replace(namespace, '');
            let data = require(`${location}/${path}`);
            res.json(data);
        } catch(e) {
            res.status(404).send('Not found');
        }
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

    setNamespace(namespace) {
        this.namespace = namespace;
    }

    setAccessOrigin(origin) {
        this.origin = origin;
    }

    run (l, p, callback) {
        if(!!l) location = l;
        if(!!p) this.port = p;

        if(this.origin) {
            let origin = this.origin;
            app.use(function(req, res, next) {
                res.header("Access-Control-Allow-Origin", origin);
                res.header("Access-Control-Allow-Credentials", "true");
                res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
                next();
            });
        }

        registerRoute(location, this.namespace);

        app.listen(this.port, () => {
            console.log(`Running server in ${this.port}`);
            console.log(`Serving files from ${location}`);
            if(callback) callback();
        });
    }
}

module.exports = new Server();