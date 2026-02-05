const mult = require('../src/mult');

test('Multiplicación 3 * 2 debe ser 6', () => {
  expect(mult(3, 2)).toBe(6);
});

test('División 4 / 2 debe ser 2', () => {
  expect(div(4, 2)).toBe(2);
});
