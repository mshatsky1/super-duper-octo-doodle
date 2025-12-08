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
console.log(formatMessage(`Welcome to ${config.appName} v${config.version}`));

