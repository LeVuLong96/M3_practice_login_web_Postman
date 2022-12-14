const http = require('http');

const server = http.createServer(
    (req, res) => {
        let text = '';
        if (res.url === '/login') {
            text = 'login success';
        } else {
            text = 'login failed';
        }
        res.end('a');
    }
)

server.listen(8000, 'localhost', function() {
    console.log('running server http://localhost:8000');
})