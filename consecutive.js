let arr = [1,1,0,1,3,1,1,1,1];

let max = -Infinity;

for(let i=0;i<arr.length;i++){

    let count=0;

    if(arr[i]===1){
        count++;
    }

    if(count>max){
        max=count
    }
}

console.log(max);