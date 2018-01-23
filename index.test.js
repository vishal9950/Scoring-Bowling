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

const rollArray = [3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6];
const scoreArray = 90;
describe('Array score arguments: ', () => {
  test(`Should work for [${rollArray}]: `, () => {
    expect(score(rollArray)).toBe(scoreArray);
  });
});
