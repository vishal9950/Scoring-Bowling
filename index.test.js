const score = require('./index');

describe('Arguments test: ', () => {
  test('Null argument: ', () => {
    expect(score(null)).toBe(null);
  });

  test('Undefined argument: ', () => {
    expect(score(undefined)).toBe(undefined);
  });

  test('Insufficient args 1: ', () => {
    expect(score([])).toBe(false);
  });
});
