let a = 0;
let b = 1;
let n =10;
let sum=0

if (n == 0) {
    console.log("enter valid number");
} else if (n == 1) {
    console.log(a);
} else {
    for (let i = 0; n > i; i++) {
        console.log(a);
        sum = sum+a;
        let c = a + b;
        b = a;
        a = c;
    }
}

console.log("This is the Sum of fibonaci series ",sum);