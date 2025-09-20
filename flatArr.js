// let arr=[4,1,9,[10,94],98,[46,23],34]

// let arr2 = arr.flat()

// let arr3 = arr2.sort((a,b)=>a-b)

// console.log(arr3)

function flat(arr){
let res =[];
for(let i=0; i<arr.length; i++){
    if(Array.isArray(arr[i])){
        res.push(...flat(arr[i]))
    }
    else{
        res.push(arr[i])
    }
}
return res
}

console.log(flat([1,2,[3,4]]))
