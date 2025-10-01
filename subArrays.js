// let arr = [1, 2, 3, 4];

// let result = 0;
// let subArr;

// let start=0,end=0;

// let j;

// for (let i = 0; i < arr.length; i++) {
//     let subArrsum = 0;
//     for (j = i; j < arr.length; j++) {
//         subArr = arr.slice(i, j + 1);
//         subArrsum += arr[j]
//         // console.log(subArr);
//         // console.log(subArrsum);
//     }
//     if (subArrsum > result) {
//         result = subArrsum;
//         start=i;
//         end=j;
//     }
// }

// console.log(result);
// console.log(arr.slice(start,end));

let arr = [1, 2, 3, 4, 5];


for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
        let subAr = arr.slice(i, j + 1);
        console.log(subAr);
    }
}