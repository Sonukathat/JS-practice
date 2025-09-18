// let a1 = [0,3,5,7,9]
// let a2 = [1,2,4,6,8]
// let a3 =[...a1,...a2]

// for(let i=0;i<a1.length;i++){
//     a3.push(a1[i])
// }

// for(let i=0;i<a2.length;i++){
//     a3.push(a2[i])
// }

let a1 = [0,3,5,7,9]
let a2 = [1,2,4,6,8]
let a3 =[...a1,...a2]

let a4 = a3.sort((a,b)=>a-b)

console.log(a4)