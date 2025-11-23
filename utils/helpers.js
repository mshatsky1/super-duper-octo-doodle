function formatMessage(message) {
  if (!message) {
    return '[INFO] (empty message)';
  }
  return `[INFO] ${message}`;
}

function validateInput(input) {
  return input && typeof input === 'string' && input.trim().length > 0;
}

module.exports = {
  formatMessage,
  validateInput
};

