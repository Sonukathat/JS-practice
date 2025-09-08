let str = 'helloworld';
let freq = {};

for (let char of str) {
    if (freq[char]) {
        freq[char]++;
    } else {
        freq[char] = 1;
    }
}

console.log(freq);