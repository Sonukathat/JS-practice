let arr = [9,2,6,3,7,1,5,4]

arr.sort((a,b)=>a-b);

for(let i=1;i<arr.length+1;i++){
    if(!arr.includes(i)){
        console.log("missing",i);
    }
}