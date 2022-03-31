const mebToKibi = require('../src/03.js');
test('mebi ke kebi', () => {
    expect(mebToKibi(1)).toBe(1024);
}); 