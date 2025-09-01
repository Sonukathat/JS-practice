let n = 4;
let fact=1;
let sum=0;

for (let i = 1; i <= n; i++) {
    fact = fact * i;
    sum=fact+sum;
}

console.log(sum);