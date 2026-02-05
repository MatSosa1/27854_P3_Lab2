const mult = require('../src/mult');

test('Multiplicación 3 * 2 debe ser 6', () => {
  expect(mult(3, 2)).toBe(6);
});
