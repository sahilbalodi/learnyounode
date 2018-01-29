const net = require('net');
const time = require('./time.js');

const server = net.createServer((socket) => {
  const data = time();
  socket.write(data);
  socket.end();
});
server.listen(Number(process.argv[2]));
