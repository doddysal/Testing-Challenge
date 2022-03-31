const { TestWatcher } = require('jest');
const isLeapYear = require ('../src/04.js');
test ('isLeapYear', () => {
    expect(isLeapYear(2020)).toBe(true);
}); 