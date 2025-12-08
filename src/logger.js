const LOG_LEVELS = {
  debug: 0,
  info: 1,
  warn: 2,
  error: 3
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
    const formattedMessage = `[${timestamp}] [${level.toUpperCase()}] ${message}`;
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

module.exports = {
  info,
  error,
  warn,
  debug,
  setLogLevel,
  getLogLevel
};

