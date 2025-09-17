let arr = [-10,1,2,-10,5,3];

let newArr = arr.map((item)=>Math.abs(item))

let sorted = newArr.sort((a,b)=>a-b);

let sum = 1;

for(let i=sorted.length-1;i>sorted.length-4;i--){
    sum=sum*sorted[i]

}

console.log(sum)