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

  const rollArray3 = [1, 2, 10, 3, 7, 4, 2, 8, 2, 10, 1, 1, 2, 4, 10, 6, 2];
  const computedScore3 = 109;
  test(`Should work for [${rollArray3}]: `, () => {
    expect(score(rollArray3)).toBe(computedScore3);
  });

  const rollArray4 = [10, 10, 5, 3, 2, 8, 6, 4, 3, 3, 2, 8, 9, 1, 1, 1, 1, 1];
  const computedScore4 = 120;
  test(`Should work for [${rollArray4}]: `, () => {
    expect(score(rollArray4)).toBe(computedScore4);
  });

  const rollArray5 = [10, 10, 5, 3, 2, 8, 6, 4, 3, 3, 2, 8, 9, 1, 1, 1, 1, 1];
  const computedScore5 = 120;
  test(`Should work for [${rollArray5}]: `, () => {
    expect(score(rollArray5)).toBe(computedScore5);
  });
});
