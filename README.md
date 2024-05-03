## README.md
### Calculator Module
This module provides basic arithmetic operations such as addition, subtraction, multiplication, and division.
#### Functions:
- **add(a, b):** Adds two numbers `a` and `b` and returns the result.
- **subtract(a, b):** Subtracts `b` from `a` and returns the result.
- **multiply(a, b):** Multiplies `a` by `b` and returns the result.
- **divide(a, b):** Divides `a` by `b` and returns the result.
#### Usage:
```javascript
const calculator = require('./calculator');
console.log(calculator.add(5, 3)); // Output: 8
console.log(calculator.subtract(10, 4)); // Output: 6
console.log(calculator.multiply(2, 6)); // Output: 12
console.log(calculator.divide(10, 2)); // Output: 5