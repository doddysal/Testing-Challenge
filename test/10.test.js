const { TestWatcher } = require('jest');
const censor = require('../src/10.js');
test('censor', () => {
    expect(censor('This house is nice.', ['house'])).toBe('This # is nice.');
    expect(censor('This house is nice.', ['house', 'nice'])).toBe('This # is #.');
    expect(censor('This house is nice.', ['house', 'nice'], '*')).toBe('This * is *.');
});
