const http = require('http');
const fs = require('fs');
const bufferList = require('bl');

module.exports = (file) => {
  const server = http.createServer((req, res) => {
    const readFileStream = fs.createReadStream(process.argv[3]);
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    readFileStream.pipe(res);
    readFileStream.pipe(bufferList((error, data) => {
      if (error) return error;
      console.log(data);
      mock();
    }));
  });
  server.listen(Number(process.argv[2]));
};
