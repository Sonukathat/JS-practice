let arr = [0, 2, 3, 4]
let arr2 = []

for (let i = 0; i < arr.length; i++) {
    let mul = 1;
    for (let j = 0; j < arr.length; j++) {
        if(arr[i]===arr[j]){
            continue;
        }else{
            mul *= arr[j]
        }
    }

    arr2.push(mul);

}

console.log(arr2)