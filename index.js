function score(args) {
  if (args === null || args === undefined) {
    console.log(`Err1: ${args} value supplied`);
    return args;
  }
  return true;
}

module.exports = score;
