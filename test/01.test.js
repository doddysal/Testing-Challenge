const TestWatcher = require('jest');
const charLength = require('../src/01.js');
test('hitung yuk kata : abcd, Totalnya ada 4 huruf', () => {
    expect(charLength('abcd')).toBe(4);
});

