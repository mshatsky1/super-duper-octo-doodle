const { add, subtract, multiply, divide } = require('../src/calculator');

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

console.log('All tests completed');

