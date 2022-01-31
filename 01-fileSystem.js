const { writeFileSync, readFileSync } = require('fs') ;

// Blocking  Synchronous way
const putText = writeFileSync('./txt/input.txt', "My name is clara");

const textOut = readFileSync('./txt/input.txt', 'utf-8');
console.log(textOut);

// Blocking  Synchronous way