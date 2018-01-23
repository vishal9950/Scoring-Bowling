function verifyLength(input) {
  return !(input.length < 13);
}

function score(args) {
  if (args === null || args === undefined) {
    console.log(`Err1: ${args} value supplied`);
    return args;
  }
  const check1 = verifyLength(args);
  if (!check1) {
    console.log('Err2: Insufficient args provided');
    return false;
  }
  let computeScore = 0;
  let i;
  for (i = 0; i < args.length - 2; i += 1) {
    if (args[i] + args[i + 1] < 10) {
      computeScore += args[i] + args[i + 1];
      // console.log(computeScore, i, args[i]);
      i += 1;
    } else if (args[i] === 10) {
      computeScore += args[i] + args[i + 1] + args[i + 2];
      // console.log(computeScore, i, args[i]);
    } else if (args[i] + args[i + 1] === 10) {
      computeScore += args[i] + args[i + 1] + args[i + 2];
      // console.log(computeScore, i, args[i]);
      // console.log(computeScore, i, args[i]);
      i += 1;
    }
  }
  // console.log(args[i], i);
  if (args[i] + args[i + 1] < 10) {
    computeScore += args[i] + args[i + 1];
  } else if (args[i] + args[i + 1] === 10) {
    computeScore += args[i] + args[i + 1] + args[i + 2];
  }
  if (computeScore > 300) { return 300; }
  return computeScore;
}

module.exports = score;
