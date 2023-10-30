// utils.js
const Utils = {
  calculateNumber: (type, a, b) => {
    // Round the input values for consistency
    a = Math.round(a);
    b = Math.round(b);

    switch (type) {
      case 'SUM':
        return a + b;
      case 'SUBTRACT':
        return a - b;
      case 'MULTIPLY':
        return a * b;
      case 'DIVIDE':
        if (b === 0) {
          return 'error';
        }
        return a / b;
      default:
        return 'Invalid operation type';
    }
  },
};

module.exports = Utils;

