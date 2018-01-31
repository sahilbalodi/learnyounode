const time = require('./date.js');

describe('function time', () => {
  test('should return time', () => {
    expect(JSON.stringify(time('2013-08-10T12:10:15.474'))).toMatch('{"hour":12,"minute":10,"second":15}');
  });
  test('should return time', () => {
    expect(JSON.stringify(time('2013-08-10T14:11:15.474'))).toMatch('{"hour":14,"minute":11,"second":15}');
  });
});
