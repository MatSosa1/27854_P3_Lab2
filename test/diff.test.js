const diff = require('../src/diff');

test('Resta 2 - 1 debe ser 1', () => {
  expect(diff(2, 1)).toBe(1);
});
