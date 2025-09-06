// const readline = require("readline");

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// rl.question("Enter a number: ", (num) => {
//     let n = parseInt(num);
//     let c = 0;

//     if (n > 1) {
//         for (let i = 1; i <= n; i++) {
//             if (n % i === 0) {
//                 c++;
//             }
//         }
//     }

//     if (c === 2) {
//         console.log("prime number");
//     } else {
//         console.log("not prime");
//     }

//     rl.close();
// });


let n = 20;


if (n <= 1) {
  console.log("Enter valid number");
} else {
  for (let i = 2; i <= n; i++) {
    let count = 0;

    for (let j = 1; j <= i; j++) {
      if (i % j === 0) {
        count++;
      }
    }

    if (count === 2) {
      console.log(i);
    }
  }
}


