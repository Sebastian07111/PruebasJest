const isEven = require('./isEven');

test('checks if 4 is even', () => {
  expect(isEven(4)).toBe(true);
});

test('checks if 5 is not even', () => {
  expect(isEven(5)).toBe(false);
});