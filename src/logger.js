const LOG_LEVELS = {
  debug: 0,
  info: 1,
  warn: 2,
  error: 3
};

const LOG_COLORS = {
  debug: '\x1b[36m', // Cyan
  info: '\x1b[32m',  // Green
  warn: '\x1b[33m',  // Yellow
  error: '\x1b[31m', // Red
  reset: '\x1b[0m'   // Reset
};

let currentLogLevel = LOG_LEVELS.info;

function setLogLevel(level) {
  if (LOG_LEVELS[level] !== undefined) {
    currentLogLevel = LOG_LEVELS[level];
  }
}

function getLogLevel() {
  return Object.keys(LOG_LEVELS).find(key => LOG_LEVELS[key] === currentLogLevel);
}

function log(level, message) {
  if (LOG_LEVELS[level] >= currentLogLevel) {
    const timestamp = new Date().toISOString();
    const color = LOG_COLORS[level] || LOG_COLORS.reset;
    const formattedMessage = `${color}[${timestamp}] [${level.toUpperCase()}] ${message}${LOG_COLORS.reset}`;
    console.log(formattedMessage);
  }
}

function info(message) {
  log('info', message);
}

function error(message) {
  log('error', message);
}

function warn(message) {
  log('warn', message);
}

function debug(message) {
  log('debug', message);
}

/**
 * Creates a logger with a predefined message prefix
 * @param {string} prefix - Prefix to prepend to messages
 * @returns {Object} Prefixed logger methods
 */
function withPrefix(prefix) {
  const format = msg => `${prefix} ${msg}`;
  return {
    info: msg => info(format(msg)),
    warn: msg => warn(format(msg)),
    error: msg => error(format(msg)),
    debug: msg => debug(format(msg))
  };
}

function logError(err) {
  if (err instanceof Error) {
    error(`${err.name}: ${err.message}`);
    if (err.stack) {
      debug(err.stack);
    }
  } else {
    error(String(err));
  }
}

module.exports = {
  info,
  error,
  warn,
  debug,
  setLogLevel,
  getLogLevel,
  logError,
  withPrefix
};

