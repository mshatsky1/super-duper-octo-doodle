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

module.exports = {
  formatMessage,
  validateInput,
  sanitizeInput
};

