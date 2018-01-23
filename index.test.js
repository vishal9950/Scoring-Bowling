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

  test('Insufficient args 2: ', () => {
    expect(score([1, 2, 3])).toBe(false);
  });
});

describe('Array score arguments: ', () => {
  const rollArray = [3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6];
  const computedScore = 90;
  test(`Should work for [${rollArray}]: `, () => {
    expect(score(rollArray)).toBe(computedScore);
  });

  const rollArray1 = [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10];
  const computedScore1 = 300;
  test(`Should work for [${rollArray1}]: `, () => {
    expect(score(rollArray1)).toBe(computedScore1);
  });

  const rollArray2 = [6, 4, 6, 4, 6, 4, 6, 4, 6, 4, 6, 4, 6, 4, 6, 4, 6, 4, 6, 4, 2];
  const computedScore2 = 156;
  test(`Should work for [${rollArray2}]: `, () => {
    expect(score(rollArray2)).toBe(computedScore2);
  });
});
