const verify = require('./verify.js');

describe('function verify', () => {
  test('should return true for correct input', () => {
    expect(verify(['http://www.google.com', 'http://www.google.com', 'http://www.google.com'])).toBe(true);
  });
  test('should return false for incorrect input', () => {
    expect(verify(['www.google.com', 'http://www.google.com', 'http://www.google.com'])).toBe(false);
  });
  test('should return false for incorrect input', () => {
    expect(verify(['http://www.google.com', 'http://www.google.com'])).toBe(false);
  });
  test('should return false for empty array input', () => {
    expect(verify([])).toBe(false);
  });
  test('should return false for undefined input', () => {
    expect(verify()).toBe(false);
  });
});
