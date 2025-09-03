let str = 'helloworld';
let c = 1;



for (i = 0; i < str.length; i++) {
    let allreadyCount = false;
    for (j = i + 1; j < str.length; j++) {
        if (allreadyCount==false) {
            if (str[i] === str[j]) {
                c++;
            }
        }
    }
    allreadyCount = true;
    
    console.log(str[i], c);
}

// this question is not completed