const http = require("http");

const server = http.createServer(function (req, res) {
  res.writeHead(200);
  res.write("Hello World, welcome to WeJapa Internships");
  res.end();
});
server.listen(5000);
