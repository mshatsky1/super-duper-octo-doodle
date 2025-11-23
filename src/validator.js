function isNumber(value) {
  return typeof value === 'number' && !isNaN(value);
}

function isPositive(value) {
  return isNumber(value) && value > 0;
}

function isInteger(value) {
  return isNumber(value) && Number.isInteger(value);
}

module.exports = {
  isNumber,
  isPositive,
  isInteger
};

