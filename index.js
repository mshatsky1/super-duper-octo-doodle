#!/usr/bin/env node

const config = require('./src/config');
const { formatMessage } = require('./utils/helpers');

console.log(formatMessage(`Welcome to ${config.appName} v${config.version}`));

