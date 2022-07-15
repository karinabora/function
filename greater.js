// Greater number

n=require("readline-sync")
function fun(){
    if ((a>b)&&(a<c)||(a>c)&&(a<b)){
        console.log(a);
    }
    else if ((b>a)&&(b<c)||(b<a)&&(b>c)){
        console.log(b);
    }
    else{
        console.log(c);
    }
}
fun(a=n.question("Enter the number1:"),
b=n.question("Enter the number2:"),
c=n.question("Enter the number3:"))
