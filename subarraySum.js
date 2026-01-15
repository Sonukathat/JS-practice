const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n").map(Number);
const n = input[0];
const arr = input.slice(1, n + 1);
const s = input[n + 1];

let found = false;

for (let i = 0; i < n; i++) {
  let sum = 0;
  for (let j = i; j < n; j++) {
    sum += arr[j];
    if (sum === s) {
      for (let k = i; k <= j; k++) {
        console.log(arr[k]);
      }
      found = true;
      break;
    }
  }
  if (found) break;
}
