// let str = 'helloworld';
// let vowel = 0;

// for (let i = 0; i < str.length; i++) {
//     if (
//         str[i] === 'A' || str[i] === 'E' || str[i] === 'I' || str[i] === 'O' || str[i] === 'U' ||
//         str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u'
//     ) {
//         vowel++;
//     }
// }

// console.log(vowel); 

let str = 'helloworldA';
let vowel = 0;
let vowels = 'AEIOUaeiou';

for (let i=0;i<str.length;i++){
    if(vowels.includes(str[i])){
        vowel++;
    }
}

console.log(vowel);