let n = 24542;
let m=n;
let pali=0;
let res=0;

for (let i = 0; n > 0; i++) {
    pali  = n%10;
    res = res*10+pali;
    n=Math.floor(n/10);
}

if(m==res){
    console.log("palindrome")
}else{
    console.log("not palindrome");
}