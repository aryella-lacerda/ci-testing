const add = (a, b) => {
  if (a + b < 0) return 0;
  if (a + b > 20) return 20;

  return a + b;
};

module.exports = {
  add,
};
