const { TestWatcher } = require('jest');
const repeatString = require('../src/06.js');
test('repeatString', () => {
    expect(repeatString('abc', 3)).toBe('abcabcabc');
});