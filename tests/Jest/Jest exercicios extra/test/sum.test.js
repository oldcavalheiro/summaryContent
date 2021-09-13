//const sum = require('./sum');
const { sum } = require('../src/sum');

test('sums two values', () => {
  expect(sum(2, 3)).toBe(5);
  // expect(sum(2, 3)).toEqual(5); // para array e objetos
});

// const { getGreeting, restartDb, hackTheDb } = require('../src/promises');