const fs = require('fs')

const input = fs.readFileSync(0, "utf8").trim().split("\n").map(Number);

console.log(input[0]);