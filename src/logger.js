function log(level, message) {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] [${level.toUpperCase()}] ${message}`);
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

module.exports = {
  info,
  error,
  warn
};

