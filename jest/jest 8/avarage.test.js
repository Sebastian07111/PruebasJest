const average = require('./average');

test('calculates the average of [2, 4, 6]', () => {
  expect(average([2, 4, 6])).toBe(4);
});