let arr = [
    { id: 1, name: "Shivam" },
    { id: 2, name: "sonu" },
    { id: 3, name: "Shivam" },
    { id: 4, name: "neeraj" },
    { id: 5, name: "Shivam" },
    { id: 6, name: "Shivam" },
]


//let arr2 = [...new Set(arr)]

// for (let i = 0; i < arr.length; i++) {

//     let count = 0;

//     for (j = 0; j < arr.length; j++) {
//         if (arr[i].name === arr[j].name) {
//             count++;
//         }
//     }

//     if(count===1 || count===2){
//         arr2.push(arr[i])
//     }
// }


// for(let i=0;i<arr.length;i++){
//     for(let j=i+1;j<arr.length;j++){
//         if(arr[i].name===arr[j].name){
//             arr.splice(j,1);
//             // console.log(arr)
//             j--;
//         }
//     }
// }

let set = new Set()

let newArr = arr.filter((item)=>{
    if(set.has(item.name)){
        return false;
    }else{
        set.add(item.name)
        return true;
    }
})
console.log(newArr)
