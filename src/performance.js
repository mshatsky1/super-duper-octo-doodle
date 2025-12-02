/**
 * Measures execution time of a function
 * @param {Function} fn - Function to measure
 * @returns {Object} Object with result and duration in milliseconds
 */
function measureTime(fn) {
  const start = performance.now();
  const result = fn();
  const end = performance.now();
  return {
    result,
    duration: end - start
  };
}

function debounce(fn, delay) {
  let timeoutId;
  return function(...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn.apply(this, args), delay);
  };
}

function throttle(fn, limit) {
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      fn.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

module.exports = {
  measureTime,
  debounce,
  throttle
};



