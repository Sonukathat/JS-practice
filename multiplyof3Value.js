let arr = [-10,10,3,4,5];

let newArr = arr.map((item)=>Math.abs(item))

let sorted = newArr.sort((a,b)=>a-b);

let sum = 1;

for(let i=sorted.length-1;i>sorted.length-4;i--){
    sum=sum*sorted[i]

}

console.log(sum)