const http = require('http');
const BufferList = require('bl');

const httpclient = (url) => {
  http.get(url, (response) => {
    response.pipe(BufferList((error, data) => {
      if (error) { console.log(error); } else {
        console.log(data.toString().length);
        console.log(data.toString());
      }
    }));
  });
};
httpclient(process.argv[2]);
