let n = 89;
let c=0;

if(n>1){
    for (let i = 1; n >= i; i++){
    if(n%i==0){
        c++;
    }
}
}

if(c==2){
    console.log("prime number")
}else{
    console.log("not prime")
}