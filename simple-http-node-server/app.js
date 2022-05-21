const http = require("http");
const url = require("url");
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.statusCode = 200;
  res.write(JSON.stringify({date: new Date()}));
  res.end();
});

server.listen(port, () => {
  console.log(`Server listening on the port ${port}`);
});