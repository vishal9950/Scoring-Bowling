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
    return false;
  }
  return true;
}

module.exports = score;
