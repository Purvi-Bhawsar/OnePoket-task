const http = require('http');
const port = 3000;

const server = http.createServer((req, res) => {
  res.writeHead(100, { 'Content-Type': 'text/plain' });
  res.end('Hello, World!');
});

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
