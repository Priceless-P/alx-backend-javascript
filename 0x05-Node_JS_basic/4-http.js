const http = require('http');
const app = http.createServer();

app.on('request', (req, res) => {
    const response = 'Hello Holberton School!';

    res.setHeader('Content-Type', 'text/plain');
    res.setHeader('Content-Length', response.length);
    res.statusCode = 200;
    res.write(Buffer.from(response));
});

app.listen(1245, 'localhost', () => {
    process.stdout.write(`Server listening at -> http://localhost:1245\n`);
});

