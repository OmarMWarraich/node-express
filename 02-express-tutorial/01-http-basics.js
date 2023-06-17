const http = require('http');

const server = http.createServer((req, res) => {
    // console.log(req.method);
    const url = req.url;
    // home page
    if (url === '/') {
        res.writeHead(200, { 'content-type': 'text/html' });
        res.write('<h1>Home Page</h1>');
        res.end();
    }
    // about page
    else if (url === '/about') {
        res.writeHead(200, { 'content-type': 'text/html' });
        res.write('<h1>About Page</h1>');
        res.end();
    }
    // contact page
    else if (url === '/contact') {
        res.writeHead(200, { 'content-type': 'text/html' });
        res.write('<h1>Contact Page</h1>');
        res.end();
    }
    // 404
    else {
        res.writeHead(404, { 'content-type': 'text/html' });
        res.write('<h1>Page Not Found</h1>');
        res.end();
    }
});

server.listen(5000, () => {
    console.log('Server is listening on port 5000...');
});