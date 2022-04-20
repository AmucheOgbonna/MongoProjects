const fs = require("fs");
const crypto = require("crypto");

process.env.UV_THREADPOOL_SIZE = 1;

const start = Date.now();
setTimeout(() => console.log("Timer 1 finished"), 0);
setImmediate(() => console.log("Immediate 1 finished "));

fs.readFile(`${__dirname}/txt/input.txt`, () => {
  console.log("File read");
  console.log("---------------------");

  setTimeout(() => console.log("Timer 2 finished"), 0);
  setTimeout(() => console.log("Timer 3 finished"), 5000);
  setImmediate(() => console.log("Immediate 3 finished "));

  console.log("---------------------222222");
  process.nextTick(() => console.log("process.nextClick"));

  crypto.pbkdf2Sync("password", "salt", 100000, 1024, "sha512");
  console.log(Date.now() - start, "password encrypted");

  crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
    console.log(Date.now() - start, "password encrypted");
  });
  crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
    console.log(Date.now() - start, "password encrypted");
  });
  crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
    console.log(Date.now() - start, "password encrypted");
  });
});

console.log("Top level code from top-to-bottom");
