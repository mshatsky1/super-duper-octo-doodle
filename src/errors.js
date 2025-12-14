/**
 * Custom error for validation failures
 */
class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = 'ValidationError';
  }
}

/**
 * Custom error for calculation failures
 */
class CalculationError extends Error {
  constructor(message) {
    super(message);
    this.name = 'CalculationError';
  }
}

/**
 * Custom error for configuration failures
 */
class ConfigError extends Error {
  constructor(message) {
    super(message);
    this.name = 'ConfigError';
  }
}

module.exports = {
  ValidationError,
  CalculationError,
  ConfigError
};