const time = require('./time.js');
const strftime = require('strftime');

describe('function time', () => {
  test('should return time', () => {
    expect(time()).toMatch(strftime('%Y-%m-%d %H:%M'));
  });
});
