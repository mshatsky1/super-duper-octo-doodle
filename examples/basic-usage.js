// Example usage of project modules
const calculator = require('../src/calculator');
const logger = require('../src/logger');
const { capitalize, reverse, toKebabCase, countWords } = require('../src/stringUtils');

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
logger.info(`Kebab case: ${toKebabCase(text)}`);
logger.info(`Word count: ${countWords(text)}`);

// Math utility examples
const mathUtils = require('../src/mathUtils');
const rounded = mathUtils.roundToDecimal(3.14159, 2);
logger.info(`Rounded 3.14159 to 2 decimals: ${rounded}`);

const clamped = mathUtils.clamp(150, 0, 100);
logger.info(`Clamped 150 to range [0, 100]: ${clamped}`);

const avg = mathUtils.average([1, 2, 3, 4, 5]);
logger.info(`Average of [1, 2, 3, 4, 5]: ${avg}`);

const median = mathUtils.median([5, 3, 1, 4, 2]);
logger.info(`Median of [5,3,1,4,2]: ${median}`);

// Calculator examples with new functions
const mod = calculator.modulo(10, 3);
logger.info(`10 % 3 = ${mod}`);

const sqrtResult = calculator.sqrt(16);
logger.info(`sqrt(16) = ${sqrtResult}`);

logger.info('Examples completed');



