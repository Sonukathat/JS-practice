const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a number: ", (num) => {
    let n = parseInt(num);
    let c = 0;

    if (n > 1) {
        for (let i = 1; i <= n; i++) {
            if (n % i === 0) {
                c++;
            }
        }
    }

    if (c === 2) {
        console.log("prime number");
    } else {
        console.log("not prime");
    }

    rl.close();
});
