// console.log(arguments);
// console.log(require("module").wrapper);

// Module.exports
const Calculator = require("./test-module-1");

const cal1 = new Calculator();
console.log(cal1.subtract(4, 5));

// exports
const { add, multiply, subtract, divide } = require("./test-module-2");
console.log(add(2, 5));

// Caching
require("./test-module-3")();
require("./test-module-3")();
require("./test-module-3")();
require("./test-module-3")();
