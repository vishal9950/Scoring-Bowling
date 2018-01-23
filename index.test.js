const score = require('./index');

describe('Arguments test: ', () => {
  test('Null argument: ', () => {
    expect(score(null)).toBe(null);
  });
});
