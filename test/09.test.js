const TestWatcher = require('jest');
const isLeapYear = require('../src/04.js');
const symmetrical = require('../src/09.js');
test('isLeapYear', () => {
    expect(isLeapYear(2020)).toBe(true);
});