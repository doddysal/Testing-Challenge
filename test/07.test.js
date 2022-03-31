const repeatLetter = require('../src/07.js');
test('repeatLetter', () => {
    expect(repeatLetter('abc', 3)).toBe('abcabcabc');
});
