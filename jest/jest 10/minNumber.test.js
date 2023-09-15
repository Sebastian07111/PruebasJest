
const minNumber = require('./minNunber');

test('returns the smallest number from [5, 3, 10, 2]', () => {
  expect(minNumber([5, 3, 10, 2])).toBe(2);
});