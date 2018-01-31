const http = require('http');
const BufferList = require('bl');

const httpclient = (url, mock) => {
  http.get(url, (response) => {
    response.pipe(BufferList((error, data) => {
      if (error) { console.log(error); } else {
        console.log(data.toString().length);
        console.log(data.toString());
        mock();
      }
    }));
  });
};
// httpclient(process.argv[2]);
module.exports = httpclient;
