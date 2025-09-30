let arr = [1, 2, 3, 5, 6, 7, 8, 9, 10];
let odd=0, even=0;


for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
        odd++;
    } else {
        even++
    }
}

console.log('odd numbers -',odd);
console.log('even numbers -',even)