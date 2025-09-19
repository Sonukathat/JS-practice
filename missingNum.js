let arr = [1,2,3,4,5,6,7,9]

for(let i=1;i<arr.length+1;i++){
    if(!arr.includes(i)){
        console.log("missing",i);
    }
}