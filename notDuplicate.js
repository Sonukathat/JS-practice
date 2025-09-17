let arr = [10, 3, 23, 46, 67, 23, 77, 67, 46]

for (let i = 0; i < arr.length; i++) {

    let count = 0;

    for (let j = 0; j < arr.length; j++) {
        if (arr[i] === arr[j]) {
            count++;
        }
    }

    if (count === 1) {
        console.log(arr[i]);
    }

}