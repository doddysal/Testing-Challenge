const { TestWatcher } = require('jest');
const sum = require ('../src/02.js');
test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });