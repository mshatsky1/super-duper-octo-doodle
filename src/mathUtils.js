function roundToDecimal(value, decimals) {
  if (typeof value !== 'number' || typeof decimals !== 'number') {
    throw new Error('Both arguments must be numbers');
  }
  const factor = Math.pow(10, decimals);
  return Math.round(value * factor) / factor;
}

function clamp(value, min, max) {
  if (typeof value !== 'number' || typeof min !== 'number' || typeof max !== 'number') {
    throw new Error('All arguments must be numbers');
  }
  return Math.min(Math.max(value, min), max);
}

module.exports = {
  roundToDecimal,
  clamp
};

