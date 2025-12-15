/**
 * Adds two numbers together
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} Sum of a and b
 */
function add(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Both arguments must be numbers');
  }
  return a + b;
}

/**
 * Subtracts second number from first number
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} Difference of a and b
 */
function subtract(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Both arguments must be numbers');
  }
  return a - b;
}

/**
 * Multiplies two numbers together
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} Product of a and b
 */
function multiply(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Both arguments must be numbers');
  }
  return a * b;
}

/**
 * Divides first number by second number
 * @param {number} a - Dividend
 * @param {number} b - Divisor
 * @returns {number} Quotient of a and b
 * @throws {Error} If divisor is zero
 */
function divide(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Both arguments must be numbers');
  }
  if (b === 0) {
    throw new Error('Division by zero is not allowed');
  }
  return a / b;
}

/**
 * Raises a number to a power
 * @param {number} base - Base number
 * @param {number} exponent - Exponent
 * @returns {number} Result of base raised to exponent
 */
function power(base, exponent) {
  if (typeof base !== 'number' || typeof exponent !== 'number') {
    throw new Error('Both arguments must be numbers');
  }
  return Math.pow(base, exponent);
}

/**
 * Calculates the remainder of division
 * @param {number} a - Dividend
 * @param {number} b - Divisor
 * @returns {number} Remainder of a divided by b
 * @throws {Error} If divisor is zero or arguments are not numbers
 */
function modulo(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Both arguments must be numbers');
  }
  if (b === 0) {
    throw new Error('Modulo by zero is not allowed');
  }
  return a % b;
}

/**
 * Calculates the square root of a number
 * @param {number} value - The number
 * @returns {number} Square root of the number
 * @throws {Error} If argument is negative or not a number
 */
function sqrt(value) {
  if (typeof value !== 'number') {
    throw new Error('Argument must be a number');
  }
  if (value < 0) {
    throw new Error('Cannot calculate square root of negative number');
  }
  return Math.sqrt(value);
}

/**
 * Calculates the factorial of a number
 * @param {number} n - The number
 * @returns {number} Factorial of n
 * @throws {Error} If argument is negative or not an integer
 */
function factorial(n) {
  if (typeof n !== 'number' || !Number.isInteger(n)) {
    throw new Error('Argument must be an integer');
  }
  if (n < 0) {
    throw new Error('Cannot calculate factorial of negative number');
  }
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

/**
 * Calculates the greatest common divisor of two numbers
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} GCD of a and b
 * @throws {Error} If arguments are not integers
 */
function gcd(a, b) {
  if (!Number.isInteger(a) || !Number.isInteger(b)) {
    throw new Error('Both arguments must be integers');
  }
  a = Math.abs(a);
  b = Math.abs(b);
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

/**
 * Calculates percentage of a value
 * @param {number} value - The base value
 * @param {number} percent - Percentage to calculate
 * @returns {number} Calculated percentage
 * @throws {Error} If arguments are not numbers
 */
function percentage(value, percent) {
  if (typeof value !== 'number' || typeof percent !== 'number') {
    throw new Error('Both arguments must be numbers');
  }
  return (value * percent) / 100;
}

module.exports = {
  add,
  subtract,
  multiply,
  divide,
  power,
  modulo,
  sqrt,
  factorial,
  gcd,
  percentage
};
