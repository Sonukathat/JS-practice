

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

console.log(longestStr("my name sonuk sonua"))

// let nstr = str.split(' ');


// let a1=[];
// a1=nstr[0];

// let a2=[]
// a2=nstr[1];

// let a3=[];
// a3=nstr[2]

// let a4=[]
// a4=nstr[3]

// let a=0;
// let b=0;
// let c=0;
// let d=0;
// // console.log(a1.split());
// for(let i=0;i<a1.length;i++){
//     a++;
// }
// console.log(a);

// for(let i=0;i<a2.length;i++){
//     b++;
// }
// console.log(b);

// for(let i=0;i<a3.length;i++){
//     c++;
// }
// console.log(c);

// for(let i=0;i<a4.length;i++){
//     d++;
// }
// console.log(d);

// if(a>b || a>c || a>d){
//     console.log(a);
// }else if(b>c || b>d){
//     console.log(b);
// }else if(c>d || c>a){
//     console.log(c);
// }else{
//     console.log(d);
    
// }