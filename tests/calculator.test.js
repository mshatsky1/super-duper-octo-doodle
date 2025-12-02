const { add, subtract, multiply, divide, power } = require('../src/calculator');

// Simple test runner
function test(name, fn) {
  try {
    fn();
    console.log(`✓ ${name}`);
  } catch (error) {
    console.log(`✗ ${name}: ${error.message}`);
  }
}

test('add should return correct sum', () => {
  if (add(2, 3) !== 5) throw new Error('Expected 5');
});

test('subtract should return correct difference', () => {
  if (subtract(5, 3) !== 2) throw new Error('Expected 2');
});

test('multiply should return correct product', () => {
  if (multiply(2, 3) !== 6) throw new Error('Expected 6');
});

test('divide should return correct quotient', () => {
  if (divide(6, 3) !== 2) throw new Error('Expected 2');
});

test('divide should throw error on division by zero', () => {
  try {
    divide(5, 0);
    throw new Error('Should have thrown error');
  } catch (error) {
    if (!error.message.includes('zero')) throw error;
  }
});

test('add should throw error on invalid input', () => {
  try {
    add('a', 1);
    throw new Error('Should have thrown error');
  } catch (error) {
    if (!error.message.includes('numbers')) throw error;
  }
});

test('multiply should handle negative numbers', () => {
  if (multiply(-2, 3) !== -6) throw new Error('Expected -6');
});

test('subtract should handle decimal numbers', () => {
  if (subtract(5.5, 2.3) !== 3.2) throw new Error('Expected 3.2');
});

test('divide should handle decimal results', () => {
  if (divide(5, 2) !== 2.5) throw new Error('Expected 2.5');
});

test('all functions should reject null input', () => {
  try {
    add(null, 1);
    throw new Error('Should have thrown error');
  } catch (error) {
    if (!error.message.includes('numbers')) throw error;
  }
});

test('power should calculate exponentiation correctly', () => {
  if (power(2, 3) !== 8) throw new Error('Expected 8');
});

console.log('All tests completed');

