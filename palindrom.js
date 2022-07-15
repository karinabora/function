n=require("readline-sync")
function fun(){

    i=0
    c=""
    b=a
    while (i<a.length){
        c=a[i]+c
        i+=1
    }
    if(b==c){
        console.log("palindrom");
    }
    else{
        console.log("no_palindrom");
    }
    console.log(c);
}

fun(a=n.question("enter any name:"))