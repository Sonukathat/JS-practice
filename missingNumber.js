let arr = [9,2,5,3,8,4,6,1];

let arr2 = arr.sort((a,b)=>a-b);

for(let i=1; i <= Math.max(...arr); i++){
    if(!arr2.includes(i)){
        console.log("missing number",i);
    }
}

// for(let i=1;i<arr2.length+1;i++){
//     if(!arr2.includes(i)){
//         console.log("Missing Number",i);
//     }
// }