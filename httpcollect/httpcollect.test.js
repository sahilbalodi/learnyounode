const httpclient = require('./httpcollect.js');
const verify = require('./httpcollect.verify.js');

describe('function httpclient', () => {
  test('should print get content ', (done) => {
    console.log = jest.fn(console.log);
    const mock = jest.fn(() => {
      expect(console.log.mock.calls.length).toBe(2);
      done();
    });
    httpclient('http://www.google.com', mock);
  });
});
describe('function verify', () => {
  test('should return true for valid http request', () => {
    expect(verify('http://www.google.com')).toBe(true);
  });
  test('should return false for invalid request', () => {
    expect(verify('www.google.com')).toBe(false);
  });
});
