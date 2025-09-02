let arr = [3, 200, 300, 34, 345, 385, 345, 454, 543, 6543, 2345, 7654, 234, 76, 4, 234, 54, 1, 4, 7]

max = -Infinity;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i];
    }
}

console.log(max);