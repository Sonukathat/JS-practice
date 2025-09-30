// function checkBracket(str) {
//     let bracket = {
//         '(': ')',
//         '{': '}',
//         '[': ']'
//     }

//     let store = [];

//     for (let char of str) {
//         if (char === '(' || char === '{' || char === '[') {
//             store.push(char);
//         } else if (char === ')' || char === '}' || char === ']') {
//             if (store.pop() === bracket[char]) {
//                 return false
//             }
//         }
//     }

//     return store.length === 0;
// }

// console.log(checkBracket("{}"))

function isBalanced(str) {
    const stack = [];
    const brackets = {
        '(': ')',
        '[': ']',
        '{': '}'
    };

    for (let char of str) {
        if (brackets[char]) {
            stack.push(brackets[char]);
        } else {
            if (stack.pop() !== char) {
                return false;
            }
        }
    }
    return stack.length === 0;
}


console.log(isBalanced("()][]]"));
console.log(isBalanced("({[]})"));
console.log(isBalanced("([)]"));
console.log(isBalanced("{[}")); 
