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
  return true;
}

module.exports = score;
