const calculator = require('../src/calculator');
const logger = require('../src/logger');
const { capitalize, reverse } = require('../src/stringUtils');

logger.info('Running basic usage examples');

// Calculator examples
const sum = calculator.add(5, 3);
logger.info(`5 + 3 = ${sum}`);

const product = calculator.multiply(4, 7);
logger.info(`4 * 7 = ${product}`);

// String utility examples
const text = 'hello world';
logger.info(`Original: ${text}`);
logger.info(`Capitalized: ${capitalize(text)}`);
logger.info(`Reversed: ${reverse(text)}`);

logger.info('Examples completed');

