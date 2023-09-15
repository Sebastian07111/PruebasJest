const maxNumber = require('./maxNumber');

test('returns the largest number from [1, 2, 5, 10]', () => {
  expect(maxNumber([1, 2, 5, 10])).toBe(10);
});