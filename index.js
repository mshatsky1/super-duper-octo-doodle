#!/usr/bin/env node

const config = require('./src/config');
const { formatMessage } = require('./utils/helpers');
const logger = require('./src/logger');

logger.info(`Starting ${config.appName} v${config.version}`);
console.log(formatMessage(`Welcome to ${config.appName} v${config.version}`));

