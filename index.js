const divide = require('./divide');

try {
  const result = divide(10, 2);
  console.log('Result:', result);
} catch (error) {
  console.error('Error:', error.message);
}