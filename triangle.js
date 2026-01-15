const fs = require("fs");

const input = fs.readFileSync(0, "utf8").trim().split("\n").map(Number);
const [a, b, c] = input;

if (a <= 0 || b <= 0 || c <= 0) {
  console.log("Invalid");
} else if (a + b > c && b + c > a && a + c > b) {
  if (a === b && b === c) {
    console.log("Equilateral");
  } else if (a === b || b === c || a === c) {
    console.log("Isosceles");
  } else {
    console.log("Scalene");
  }
} else {
  console.log("Invalid");
}
