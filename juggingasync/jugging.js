const http = require('http');
const BufferList = require('bl');

const contents = [];
let count = 0;
const print = () => {
  for (let i = 0; i < 3; i += 1) {
    console.log(contents[i]);
  }
};
const httpclient = (number) => {
  http.get(process.argv[number + 2], (response) => {
    response.pipe(BufferList((error, data) => {
      if (error) { console.log(error); } else {
        contents[number] = data.toString();
        count += 1;
        if (count === 3) {
          print();
        }
      }
    }));
  });
};
httpclient(0);
httpclient(1);
httpclient(2);
