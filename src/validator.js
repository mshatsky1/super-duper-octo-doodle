function isNumber(value) {
  return typeof value === 'number' && !isNaN(value);
}

function isPositive(value) {
  return isNumber(value) && value > 0;
}

function isInteger(value) {
  return isNumber(value) && Number.isInteger(value);
}

function isNegative(value) {
  return isNumber(value) && value < 0;
}

module.exports = {
  isNumber,
  isPositive,
  isInteger,
  isNegative
};




