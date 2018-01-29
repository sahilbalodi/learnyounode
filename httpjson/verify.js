const time = require('./date.js');

describe('function time', () => {
  test('should return time', () => {
    expect(JSON.stringify(time('2013-08-10T12:10:15.474'))).toMatch('{"hour":12,"minute":10,"second":15}');
  });
});
