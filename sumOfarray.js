let arr = [4, 1, 6, 2, 9, 4, 9, 2, 3, 7];
let sum = 0;


for (let i = 0; i < arr.length; i++) {
    sum = arr[i] + sum;
}

console.log(sum);