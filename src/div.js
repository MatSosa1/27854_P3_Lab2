function div(a, b) {
  if (b == 0) throw Error('División por 0');

  return a / b;
}

module.exports = div
