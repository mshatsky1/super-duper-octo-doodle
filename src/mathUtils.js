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

module.exports = {
  roundToDecimal,
  clamp,
  abs
};



