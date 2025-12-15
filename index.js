#!/usr/bin/env node

// Main entry point for the application
const config = require('./src/config');
const { formatMessage } = require('./utils/helpers');
const logger = require('./src/logger');

// Initialize logger level based on config
if (config.debug) {
  logger.setLogLevel('debug');
}

logger.info(`Starting ${config.appName} v${config.version}`);
logger.debug(`Environment: ${config.environment}`);
logger.debug(`Listening on port ${config.port} with API version ${config.apiVersion}`);
console.log(formatMessage(`Welcome to ${config.appName} v${config.version}`));

