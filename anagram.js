let str1 = 'listen';
let str2 = 'silent';

let count = 0;

if(str1.length!==str2.length){
    return console.log("not")
}

for (let i = 0; i < str1.length; i++) {
    for (let j = 0; j < str2.length; j++) {
        if (str1[i] === str2[j]) {
            count++
        }
    }
}

if (count === str1.length) {
    console.log("anagram");
} else {
    console.log("not anagram");
}