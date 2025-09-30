let n = 45678;
let count = 0;

if (n === 0) {
    count = 1;  
} else {
    while (n > 0) {
        count++;
        n = Math.floor(n / 10);
    }
}

console.log(count);
