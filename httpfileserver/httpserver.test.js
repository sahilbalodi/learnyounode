const httpserver = require('./httpserver.js');

describe('function httpclient', () => {
  test('should print get content ', (done) => {
    console.log = jest.fn(console.log);
    const mock = jest.fn(() => {
      expect(console.log.mock.calls.length).toBe(1);
      done();
    });
    httpserver('http://www.google.com', mock);
  });
});
