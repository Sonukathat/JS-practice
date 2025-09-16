let arr = [9,54,2,11,1,3]

let max = -0;
let index = -0;
for(i=0;i<arr.length;i++){
    if(arr[i]>max){
        max=arr[i]
        index=i
    }
}

arr.splice(index,1)
console.log(arr)