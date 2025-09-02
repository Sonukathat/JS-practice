let arr = [1, 2, 3, 4, 8, 5, 6, 3, 2];


for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
        let subArr = arr.slice(i, j + 1);
        console.log(subArr);
    }
}

