

function longestStr(str) {
    let count = 0;
    let result = ""
    let newStr = str.trim().split(" ");
    for(let i=0; i<newStr.length; i++){
        if(newStr[i].length> count){
            count = newStr[i].length;
            result = newStr[i];
        }
    }
    return result
}

console.log(longestStr("my name sonu kathat"))

