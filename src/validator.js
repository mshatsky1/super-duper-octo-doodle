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

function isEven(value) {
  return isInteger(value) && value % 2 === 0;
}

function isOdd(value) {
  return isInteger(value) && value % 2 !== 0;
}

function isNonEmptyString(value) {
  return typeof value === 'string' && value.trim().length > 0;
}

module.exports = {
  isNumber,
  isPositive,
  isInteger,
  isNegative,
  isEven,
  isOdd,
  isNonEmptyString
};
