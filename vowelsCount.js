let str = 'helloworld'
let vowel=0;

for (let i = 0; i < str.length; i++) {
    if (str[i].toString == 'A' || 'E' || 'I' || 'O' || 'U' || 'a' || 'e' || 'i' || 'o' || 'u'){
        vowel++;
    }
}

console.log(vowel);