function checkBracket(str) {
    let bracket = {
        '(': ')',
        '{': '}',
        '[': ']'
    }

    let store = [];

    for (let char of str) {
        if (char === '(' || char === '{' || char === '[') {
            store.push(char);
        } else if (char === ')' || char === '}' || char === ']') {
            if (store.pop() == bracket[char]) {
                return false
            }
        }
    }

    return store.length === 0;
}

console.log(checkBracket("{}"))