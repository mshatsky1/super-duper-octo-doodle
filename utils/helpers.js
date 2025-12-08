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

module.exports = {
  formatMessage,
  validateInput,
  sanitizeInput,
  capitalizeFirst
};

