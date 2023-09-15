const multiplicar = require('./multiplicar');

test(' 3 x 5 es igual a 15', () => {
expect(multiplicar(3, 5)).toBe(15);
});