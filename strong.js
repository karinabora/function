// Strong number

n=require("readline-sync")
function func(){
    sum=0;
    b=a
    while (0<a){
        c=a%10
        fac=1
        while (0<c){
            fac*=c
            c-=1
        }
        sum+=fac
        a=parseInt(a/10)
    }
    if (b==sum){
        console.log(sum,"strong_number");
    }
    else{
        console.log(sum,"no_strong_number");
    }
}
func(a=n.questionInt("Enter the number:"))