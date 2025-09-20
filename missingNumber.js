let arr = [20];

let arr2 = arr.sort((a,b)=>a-b);

for(let i=1; i <= Math.max(...arr); i++){
    if(!arr2.includes(i)){
        console.log(i);
    }
}
