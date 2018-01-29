const http = require('http');
const url = require('url');
const getDate = require('./date.js');

const server = http.createServer((req, res) => {
  const parse = url.parse(req.url, true);
  if (parse.pathname === '/api/parsetime') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    const data = getDate(parse.query.iso);
    res.write(JSON.stringify(data));
    res.end();
  } else if (parse.pathname === '/api/unixtime') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    const data = { unixtime: null };
    const date = new Date(parse.query.iso);
    data.unixtime = date.getTime();
    res.write(JSON.stringify(data));
    res.end();
  }
});
server.listen(Number(process.argv[2]));
