function func(){
    c=[]
    for (var i=0;i<a.length-1;i++){
        d=a[i+1]-a[i]
        c.push(d)
    }
    console.log(c);
}
func(a=[1,2,3,4,15])