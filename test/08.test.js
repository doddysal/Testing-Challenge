const arrayMirroring = require('../src/08.js');
test('arrayMirroring', () => {
    expect(arrayMirroring([1, 2, 3])).toEqual([1, 2, 3, 3, 2, 1]);
    expect(arrayMirroring([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5, 5, 4, 3, 2, 1]);
    expect(arrayMirroring([1, 2, 3, 4, 5, 6])).toEqual([1, 2, 3, 4, 5, 6, 6, 5, 4, 3, 2, 1]);
}); 