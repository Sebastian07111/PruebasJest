const toUpperCase = require('./uppercase');

test('converts "hello" to "HELLO"', () => {
  expect(toUpperCase('hello')).toBe('HELLO');
});