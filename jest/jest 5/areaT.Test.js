const areaT = require('./areaT');

test('si la base es 4 y la altura es 6 es 12', () => {
  expect(areaT(4, 6)).toBe(12);
});