let express = require('express');
let app = express();
let location, port;

const registerRoute = (location) => {
    app.get('*', (req, res) => {
        console.log(`ROUTE REQUESTED: ${req.path}.js`);
        res.json(require(`${location}/${req.path}.js`))
    })
}

let Server = {
    setLocation: (l) => {
        location = l;
    },
    setPort: (p) => {
        port = p;
    },
    run: (l, p, callback) => {
        if(!!l) location = l;
        if(!!p) port = p;

        registerRoute(location);

        app.listen(9000, () => {
            console.log(`Running server in ${port}`);
            console.log(`Serving files from ${location}`);
            if(callback) callback();
        });
    }
};

module.exports = Server;