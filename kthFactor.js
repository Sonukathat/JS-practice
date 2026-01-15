const fs = require("fs");

const input = fs.readFileSync(0, "utf8").trim().split("\n").map(Number);
const [n, k] = input;

const factors = [];

for (let i = 1; i <= n; i++) {
  if (n % i === 0) {
    factors.push(i);
  }
}

factors.sort((a, b) => b - a);

if (k <= factors.length) {
  console.log(factors[k - 1]);
} else {
  console.log(-1);
}
