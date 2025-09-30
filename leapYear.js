let year = 1900;

if (year % 400 === 0) {
    console.log("leap");
} else {
    if (year % 100 === 0) {
        console.log("not");
    } else {
        if (year % 4 === 0) {
            console.log("leap");
        } else {
            console.log("not");
        }
    }
}
