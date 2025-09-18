let arr = [9,1,7,4,2,1,9,11,56,34,94,37,0,1,0,0,56,23,65,675,23,987,234,987,234,98,234,98,34,876,34,87,345,64,234,8,754,6,532,]
let arr2=[];

for(let i=0;i<arr.length;i++){
    
    let count= 0;

    for(let j=0;j<arr.length;j++){
        if(arr[i]===arr[j]){
            count++;
        }
    }
    if(count===1){
        arr2.push(arr[i])
    }
}

console.log(arr2)