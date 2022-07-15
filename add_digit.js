// Add digits 

function func(){
    i=0
    list=[]
    while (i<a.length){
        j=0
        c=""
        sum=0
        b=String(a[i])
        while (j<b.length){
            sum+=Number(b[j])
            j+=1
        }
        console.log(sum);
        list.push(sum)
        i+=1
    }
    console.log(list)
}
func(a=[11,22,1212,3443])
