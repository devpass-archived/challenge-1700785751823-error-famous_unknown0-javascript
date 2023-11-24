const divide = require('./divide');

test('Divide two numbers', () => {
  expect(divide(10, 2)).toBe(5);
});

test('Divide by zero should throw an error', () => {
  expect(() => divide(10, 0)).toThrowError('Division by zero is not allowed');
});