const isPrime = require('../src/05.js');
test('adalah bilangan prima (1,3,5,7,9)', () => {
    expect(isPrime(3)).toBe(true);
});