let str = "SonuKaThat"
let upper = 0
let lower = 0

for(let i=0;i<str.length;i++){
    if(str[i] === str[i].toUpperCase()){
        upper++
    }else{
        lower++
    }
}

let obj = {first:upper,second:lower}

console.log(obj)