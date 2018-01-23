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

let rollArray;
let computedScore;

describe('Array score arguments: ', () => {
  rollArray = [3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6];
  computedScore = 90;
  test(`Should work for [${rollArray}]: `, () => {
    expect(score(rollArray)).toBe(computedScore);
  });

  rollArray = [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10];
  computedScore = 300;
  test(`Should work for [${rollArray}]: `, () => {
    expect(score(rollArray)).toBe(computedScore);
  });
});
