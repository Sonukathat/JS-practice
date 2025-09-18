let arr = [
    { id: 1, name: "Shivam" },
    { id: 2, name: "Priya" },
    { id: 3, name: "Shivam" },
    { id: 4, name: "Aman" },
    { id: 4, name: "sonu" },
    { id: 4, name: "Ahil" },
    { id: 4, name: "summer" },
    { id: 4, name: "sonu" }
]

let arr2 = []

for (let i = 0; i < arr.length; i++) {

    let count = 0;

    for (j = 0; j < arr.length; j++) {
        if (arr[i].name === arr[j].name) {
            count++;
        }
    }

    if(count===1){
        arr2.push(arr[i])
    }
}

console.log(arr2)