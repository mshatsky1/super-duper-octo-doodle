function formatMessage(message) {
  if (!message) {
    return '[INFO] (empty message)';
  }
  return `[INFO] ${message}`;
}

function validateInput(input) {
  return input && typeof input === 'string' && input.trim().length > 0;
}

function sanitizeInput(input) {
  if (!input || typeof input !== 'string') {
    return '';
  }
  return input.trim();
}

function capitalizeFirst(str) {
  if (!str || typeof str !== 'string') {
    return '';
  }
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

function isEmpty(value) {
  if (value === null || value === undefined) {
    return true;
  }
  if (typeof value === 'string') {
    return value.trim().length === 0;
  }
  if (Array.isArray(value)) {
    return value.length === 0;
  }
  if (typeof value === 'object') {
    return Object.keys(value).length === 0;
  }
  return false;
}

module.exports = {
  formatMessage,
  validateInput,
  sanitizeInput,
  capitalizeFirst,
  isEmpty
};

