const fs = require("fs");
const year = fs.readFileSync(0,"utf8").trim().split("\n").map(Number);

if (year % 400 === 0) {
  console.log("yes");
} else if (year % 100 === 0) {
  console.log("no");
} else if (year % 4 === 0) {
  console.log("yes");
} else {
  console.log("no");
}