let arr = [10, "hello", 35, "a", "ajmer", 23, 43, "c"]

let num = [];
let str = [];
let ch = [];

for (let val of arr) {
    if (typeof val === "number") num.push(val);
    else if (typeof val === "string"){
        if(val.length===1){
            ch.push(val);
        }else{
            str.push(val);
        }
    };
}

console.log(num);
console.log(str);
console.log(ch);