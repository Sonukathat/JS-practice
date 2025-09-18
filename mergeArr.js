// let a1 = [0,3,5,7,9]
// let a2 = [1,2,4,6,8]
// let a3 =[...a1,...a2]

// for(let i=0;i<a1.length;i++){
//     a3.push(a1[i])
// }

// for(let i=0;i<a2.length;i++){
//     a3.push(a2[i])
// }

let a1 = [0,3,5,7,9];
let a2 = [1,2,4,6,8];
let a3 = [...a1,...a2];

console.log(a3)

for(let i=0; i<a3.length; i++){
    for(let j=i+1; j<a3.length; j++){
        if(a3[i] > a3[j]){
            let temp = a3[i];
            a3[i] = a3[j];
            a3[j] = temp;
        }
    }
}

console.log(a3)