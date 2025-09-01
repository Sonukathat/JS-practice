let arr1=[1,2,3];
let arr2=[2,3,4];
let arr3=[];

for(let i=0;i<arr1.length;i++){
    for(let j=0;j<arr2.length;j++){
        if(arr1[i]===arr2[j]){
            arr3.push(arr1[i]);
            break;
        }
    }
}

console.log(arr3);

// let i=0;
// let j=0;

// while(i<arr1.length){
//     while(j<arr2.length){
//         if(arr1[i]===arr2[j]){
//             console.log(arr1[i]);
//             i++;
//         }else{
//             j++;
//         }
//     }
// }