const add = (a, b) => {
  if (a + b < 0) return 0;

  return a + b;
};

module.exports = {
  add,
};
