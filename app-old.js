const http = require('http');

http.createServer((req, res) => {

        res.writeHead(200, { 'Content-Type': 'application/json' });

        let out = {
            name: 'jose',
            age: 24,
            url: req.url
        }

        res.write(JSON.stringify(out));
        //res.write('hello world');
        res.end();
    })
    .listen(8080);


console.log("listen port 8080");