n=require("readline-sync")
function fun(){
    x=0
    y=1
    z=0
    list=[]
    while (z<=a){
        x=y
        y=z
        z=x+y
        list.push(z)
    }

}
fun(a=n.questionInt("Enter the number:"))
console.log(list);