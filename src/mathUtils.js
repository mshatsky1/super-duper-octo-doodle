/**
 * Rounds a number to a specified number of decimal places
 * @param {number} value - The number to round
 * @param {number} decimals - Number of decimal places
 * @returns {number} Rounded number
 * @throws {Error} If arguments are not numbers
 */
function roundToDecimal(value, decimals) {
  if (typeof value !== 'number' || typeof decimals !== 'number') {
    throw new Error('Both arguments must be numbers');
  }
  const factor = Math.pow(10, decimals);
  return Math.round(value * factor) / factor;
}

/**
 * Clamps a value between a minimum and maximum
 * @param {number} value - The value to clamp
 * @param {number} min - Minimum value
 * @param {number} max - Maximum value
 * @returns {number} Clamped value
 * @throws {Error} If arguments are not numbers
 */
function clamp(value, min, max) {
  if (typeof value !== 'number' || typeof min !== 'number' || typeof max !== 'number') {
    throw new Error('All arguments must be numbers');
  }
  return Math.min(Math.max(value, min), max);
}

/**
 * Calculates the absolute value of a number
 * @param {number} value - The number
 * @returns {number} Absolute value
 * @throws {Error} If argument is not a number
 */
function abs(value) {
  if (typeof value !== 'number') {
    throw new Error('Argument must be a number');
  }
  return Math.abs(value);
}

/**
 * Calculates the average of an array of numbers
 * @param {number[]} numbers - Array of numbers
 * @returns {number} Average value
 * @throws {Error} If argument is not an array or contains non-numbers
 */
function average(numbers) {
  if (!Array.isArray(numbers)) {
    throw new Error('Argument must be an array');
  }
  if (numbers.length === 0) {
    throw new Error('Array cannot be empty');
  }
  const sum = numbers.reduce((acc, num) => {
    if (typeof num !== 'number') {
      throw new Error('Array must contain only numbers');
    }
    return acc + num;
  }, 0);
  return sum / numbers.length;
}

/**
 * Calculates the maximum value in an array
 * @param {number[]} numbers - Array of numbers
 * @returns {number} Maximum value
 * @throws {Error} If argument is not an array or is empty
 */
function max(numbers) {
  if (!Array.isArray(numbers)) {
    throw new Error('Argument must be an array');
  }
  if (numbers.length === 0) {
    throw new Error('Array cannot be empty');
  }
  return Math.max(...numbers);
}

/**
 * Calculates the minimum value in an array
 * @param {number[]} numbers - Array of numbers
 * @returns {number} Minimum value
 * @throws {Error} If argument is not an array or is empty
 */
function min(numbers) {
  if (!Array.isArray(numbers)) {
    throw new Error('Argument must be an array');
  }
  if (numbers.length === 0) {
    throw new Error('Array cannot be empty');
  }
  return Math.min(...numbers);
}

/**
 * Calculates the median of an array of numbers
 * @param {number[]} numbers - Array of numbers
 * @returns {number} Median value
 * @throws {Error} If argument is not an array or is empty
 */
function median(numbers) {
  if (!Array.isArray(numbers)) {
    throw new Error('Argument must be an array');
  }
  if (numbers.length === 0) {
    throw new Error('Array cannot be empty');
  }
  const sorted = [...numbers].sort((a, b) => a - b);
  const middle = Math.floor(sorted.length / 2);
  if (sorted.length % 2 === 0) {
    return (sorted[middle - 1] + sorted[middle]) / 2;
  }
  return sorted[middle];
}

/**
 * Calculates the sum of an array of numbers
 * @param {number[]} numbers - Array of numbers
 * @returns {number} Sum of values
 * @throws {Error} If argument is not an array or contains non-numbers
 */
function sum(numbers) {
  if (!Array.isArray(numbers)) {
    throw new Error('Argument must be an array');
  }
  return numbers.reduce((acc, num) => {
    if (typeof num !== 'number') {
      throw new Error('Array must contain only numbers');
    }
    return acc + num;
  }, 0);
}

/**
 * Calculates the product of an array of numbers
 * @param {number[]} numbers - Array of numbers
 * @returns {number} Product of values
 * @throws {Error} If argument is not an array or contains non-numbers
 */
function product(numbers) {
  if (!Array.isArray(numbers)) {
    throw new Error('Argument must be an array');
  }
  return numbers.reduce((acc, num) => {
    if (typeof num !== 'number') {
      throw new Error('Array must contain only numbers');
    }
    return acc * num;
  }, 1);
}

/**
 * Calculates variance of an array of numbers
 * @param {number[]} numbers - Array of numbers
 * @returns {number} Variance value
 * @throws {Error} If argument is not an array or is empty
 */
function variance(numbers) {
  if (!Array.isArray(numbers)) {
    throw new Error('Argument must be an array');
  }
  if (numbers.length === 0) {
    throw new Error('Array cannot be empty');
  }
  const avg = average(numbers);
  const squaredDiffs = numbers.map(num => {
    if (typeof num !== 'number') {
      throw new Error('Array must contain only numbers');
    }
    return Math.pow(num - avg, 2);
  });
  return sum(squaredDiffs) / numbers.length;
}

/**
 * Calculates standard deviation of an array of numbers
 * @param {number[]} numbers - Array of numbers
 * @returns {number} Standard deviation
 * @throws {Error} If argument is not an array or is empty
 */
function standardDeviation(numbers) {
  return Math.sqrt(variance(numbers));
}

module.exports = {
  roundToDecimal,
  clamp,
  abs,
  average,
  max,
  min,
  median,
  sum,
  product,
  variance,
  standardDeviation
};



